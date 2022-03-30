# From Software Bugs to Security Vulnerabilities

- Software bugs cause damages:
	- Therac-25 radiation overdose.
	- Ariane-5 rocket disaster.
	- Northeastern blackout in 2003.
	- Security vulnerablilities.
- Program analysis can prevent bugs.
- Common Vulnerabilities and Exposures (CVE)
	- Catalog security vulnerablilities.
	- CVE ID number.
	- Description.
	- References.

## Case Study 1: OpenSSL Heatbleed Bug CVE-2014-0160
- OpenSSL used to secure communication over computer networks.
- Heartbleed eavesdropped on SSL/TLS encryption protocol.
- Bug in TLS "heartbeat extension", a protocol to check if server is alive.
- Server sends back positive acknowledgement by returning copy of received data.
- Code for processing incoming message:
	```cpp
	hbtype = *p++;
	n2s(p, payload);        // write two bytes from ‘p’ into ‘payload’
	pl = p;  // ‘pl’ now points to contents of payload
	```
- Code for constructing reply:
	```cpp
	*bp++ = TLS1_HB_RESPONSE;
	n2s(payload, bp);       // write two bytes from ‘payload’ into ‘bp’ 
	memcpy(bp, pl, payload) // copy ‘payload’ bytes from ‘pl’ to ‘bp’
	```
- Send a message with small payload data but specify different longer length, `memcpy` will
read more data.
- Needs bounds-checking to prevent this:
	```cpp
	hbtype = *p++;
	n2s(p, payload);
	if (1 + 2 + payload + 16 > ...) // “...” is received message’s length
	return 0;  // silently discard per RFC 6520 sec. 4
	pl = p;
	```
- Automatically discover using dynamic/static analysis.
- Dynamic approach: use LibFuzzer, Address Sanitizer. Fuzzer constructs abnormal inputs.
Sanitizer errors out memcpy.
- Static approach: use Coverity, information-flow/taint-tracking analysis.

## Case Study 2: Apple's "Goto Fail" Bug CVE-2014-1266
- Capture and modify data in sessions secured by SSL/TLS.
- Bug in function that verifies SSL key exchange.
	```cpp
	static OSStatus SSLVerifySignedServerKeyExchange( ... ) {
	...
	if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
		goto fail;
		// highlight-next-line
		goto fail;
	...
	err = sslRawVerify( ... );
	...
	fail:
		SSLFreeBuffer(&signedHashes);
		SSLFreeBuffer(&hashCtx);
		return err;
	}
	```
- Second `goto fail` is not unconditional.
- `sslRawVerify` is bypassed.
- Overall function returns successful even when it's not.
- Attacker can do man-in-the-middle attack.
- Automatically detect bug using static analysis.
- Unreachable code analysis: reveal portion of code unreachable after the second goto statement.

## Case Study 3: VLC Media Player Dependency Bug CVE-2019-13615
- Heap-based buffer over-read in EBML component that parses media types.
- Enabled remote code execution and access user's machine if user opened a malicious file.
- Bug in:
	```cpp
	EbmlElement* EbmlElement::FindNextElement( ... ) {
	...
	do {
		...
		if (DataStream.read(&PossibleIdNSize[ReadIndex++], 1) == 0) {
		return NULL;
		}
		ReadSize++;
		...
	while (...);
	...
	}
	```
- Bound-check missing before reading, attacker can read beyond bounds. Fix:
	```cpp
	EbmlElement * EbmlElement::FindNextElement(...) {
		...
		// highlight-start
		if (MaxDataSize <= ReadSize)
		break;
		// highlight-end
		if (DataStream.read(&PossibleIdNSize[ReadIndex++], 1) == 0) {
		return NULL;
		}
		ReadSize++;
		...
	}
	```
- Use fuzzing to automatically detect this.
