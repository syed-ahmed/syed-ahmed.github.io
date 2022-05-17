# Code Coverage 
## With g++ and lcov
- Compile with no optimization: `-O0 --coverage`. Will output `*.gcno`.
- Run the binary. Will output `*.gcda`.
- Generate lcov trace from the directory with `*.gcda`s:
    ```
    lcov --rc lcov_branch_coverage=1 --capture --directory . --output-file coverage.info
    ```
- Generate htmls:
    ```
    genhtml --rc genhtml_branch_coverage=1 coverage.info --output-directory out
    ```
- Note: you need the `rc` flags to show branch coverage.

## With clang and llvm-cov
- Follow the instructions in: https://clang.llvm.org/docs/SourceBasedCodeCoverage.html