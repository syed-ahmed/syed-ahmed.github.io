# Testing with LLVM LIT
- LIT: testing infra for LLVM regression tests.

## Technical Requirements
- Build supporting utilities like `FileCheck` using: `ninja check-llvm-support`.
- Make sure `compiler-rt` was an enabled project when compiling llvm.
- Make sure llvm `build/bin` is in the `PATH`.
- Install `llvm-test-suite` using:
	```bash
	git clone https://github.com/llvm/llvm-test-suite
	cd llvm-test-suite
	mkdir .O3_build
	cd .O3_build
	cmake -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -C ../cmake/caches/O3.cmake ../
	ninja all
	```
