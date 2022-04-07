# What is Program Analysis?
- Process of **automatically** discovering useful facts about program.
- Example useful fact: programming error, security vulnerabilities, overflow etc.
- Analysis classified broadly into 3 kinds:
	- Dynamic: runtime analysis, runs the program, observes its behavior.
	- Static: compile-time analysis, inspects source/binary code.
	- Hybrid: combines both dynamic and static, use runtime and compile-time in interesting ways.

## Dynamic Program Analysis
- Monitors program runs and collects facts of the program.
- Examples:
	- `Purify`: checks memory accesses, array bounds in C/C++.
	- `Valgrind`: detects memory leaks in x86 binaries. **Memory leak** is when program fails to `free` allocated memories.
	- `Eraser`: detects data races in concurrent programs. **Data race** happens when two threads access the same memory location and at least one thread is doing a write. Data race indicates programming error as order of accesses can produce different results between runs.
	- `Daikon`: finds likely invariants. **Invariants** are program facts that is true in every run of the program.

## Static Analysis
- Inspects source/binary code and collects facts of the program
- Examples:
	- `Lint`, `FindBugs`, `Coverity`: inspects C++/Java for suspicious error patterns.
	- `Microsoft SLAM`: checks C programs conforms to API usage rules. Windows developers use this to check whether device drivers use windows kernel API correctly.
	- `Facebook Infer`: detects memory leaks in Android apps.
	- `ESC/Java`: specifies and verifies invariants in java programs.

