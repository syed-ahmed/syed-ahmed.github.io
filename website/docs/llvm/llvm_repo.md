---
sidebar_position: 2
---

# Tour of the llvm-project repo

## Core Libraries
- llc: compiler for LLVM IR.
- llvm-objdump, llvm-dwarfdump: inspect object files.
- llvm-ar: create archive file from object files.
- bugpoint: find minimal test case for a bug.
- llvm-mc: assemble/disassemble machine code.
- polly: polyhedral optimizations.
- mlir: multi-level IR.

## Compilers
- clang: compile C/C++.
- clang-format: format C/C++ source files.
- clang-tidy: linter.
- lld: linker.
- lldb: debugger.

## Runtime
- compiler-rt: sanitizers, fuzzing, profiling.
- libunwind: exception handling.
- libcxxabi: exception handling.
- libcxx: C++ stl.
- pst: parallel stl.
- libclc: OpenCL runtime.
- libc: C library.
- openmp: OpenMP API.