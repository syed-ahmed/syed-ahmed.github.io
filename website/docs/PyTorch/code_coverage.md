# Getting code coverage info in PyTorch
- Build pytorch from source with the necessary flags for coverage - `-DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug`:
    - If using GCC:
        ```bash
        python setup.py build --cmake-only
        cd build && \
            cmake .. -DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug
        MAX_JOBS=8 python setup.py develop
        ```
    - If using clang:
        ```bash
        sudo apt install clang-12 libomp-12-dev --install-suggests
        sudo ln -s /usr/bin/clang++-12 /usr/bin/clang++
        sudo ln -s /usr/bin/clang-12 /usr/bin/clang
        CC=clang CXX=clang++ python setup.py build --cmake-only
        cd build && \
            cmake .. -DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug
        MAX_JOBS=8 python setup.py develop
        ```
- Run `pytorch/tools/code_coverage/oss_coverage.py`:
    - If using GCC:
        ```bash
        python oss_coverage.py --run-only=test_jit --export --summary
        ```
    - If using clang:
        ```bash
        CXX=clang++ LLVM_TOOL_PATH=/usr/lib/llvm-12/bin/ python oss_coverage.py --run-only=test_jit
        /usr/lib/llvm-12/bin/llvm-cov show -output-dir=out/report -format=html -instr-profile=/home/syeahmed/workspace/pytorch/tools/code_coverage/package/util/../../profile/merged/test_jit.merged -object /home/syeahmed/workspace/pytorch/build/bin/test_jit
        ```