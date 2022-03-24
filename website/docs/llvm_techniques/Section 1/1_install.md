# Installing LLVM

## Host Machine
- Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz
- 40 GB RAM
- 1 TB SSD

## Dependencies
- git 2.25.1
- cmake 3.16.3
- ninja 1.10.0
- clang++ 10.0.0
- python 3.8.10

## Build
- Use ninja instead of make.
- Use lld or gold for the linker.
- Build with `RelWithDebInfo` to save on memory
  but have some debug info.
- Specify the target to save time on compilation.
- Build shared library instead of static.
- Build optimized tblgen to save compilation time.
- Use clang++ to build using the new PassManager and
  save on compile time.
- Example commands:
```bash
git clone --branch llvmorg-12.0.0 https://github.com/llvm/llvm-project
cd llvm-project
mkdir build
cd build
cmake -G Ninja \
	  -DCMAKE_C_COMPILER=clang \
	  -DCMAKE_CXX_COMPILER=clang++ \
	  -DLLVM_ENABLE_PROJECTS=clang \
	  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
	  -DLLVM_USE_LINKER=lld \
	  -DLLVM_TARGETS_TO_BUILD="X86" \
	  -DBUILD_SHARED_LIBS=ON \
	  -DLLVM_OPTIMIZED_TABLEGEN=ON \
	  -DLLVM_USE_NEWPM=ON \
	  ../llvm
ninja -j8
ninja check-all
```

## Useful LLVM/CMake Variables
- CMAKE_INSTALL_PREFIX
- CMAKE_BUILD_TYPE
- CMAKE_C_FLAGS
- CMAKE_CXX_FLAGS
- CMAKE_MODULE_PATH
- PYTHON_EXECUTABLE
- LLVM_TARGETS_TO_BUILD
- LLVM_ENABLE_PROJECTS
- LLVM_ENABLE_ASSERTIONS
- LLVM_ENABLE_EXPENSIVE_CHECKS
- LLVM_APPEND_VC_REV
- LLVM_ENABLE_THREADS
- LLVM_ENABLE_EH
- LLVM_ENABLE_RTTI
- LLVM_ENABLE_WARNINGS
- LLVM_ENABLE_PEDANTIC
- LLVM_ENABLE_WERROR
- LLVM_OPTIMIZED_TABLEGEN
- LLVM_USE_SPLIT_DWARF