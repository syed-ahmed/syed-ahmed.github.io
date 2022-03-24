# Exploring LLVM's Build System Features
- build directives
- in tree/out of tree development
	- in tree: contribute code directly to llvm project.
	- out of tree: creating llvm extensions.

## LLVM's CMake directives
### Adding New Libraries
- Don't use normal `add_library`.
- Hard to control shared/static build of libraries using built in `add_library`.
- Better control over RTTI and exception handling if not using built in directives.
- Use `add_llvm_component_library`.
- Example:
	```cmake
	add_llvm_component_library(<library name>
		<source file>)
	```
- Instead of using `target_link_libraries` and `add_dependencies`, use `LINK_COMPONENTS` argument
in `add_llvm_component_library`.
- Example:
	```cmake
	add_llvm_component_library(<library name>
		<source file>
		LINK_COMPONENTS
		<library 1> <library 2>)
	```
- Can use `LLVM_LINK_COMPONENTS` variable as well.
- Example:
	```cmake
	set(LLVM_LINK_COMPONENTS
		<library 1> <library 2>)
	add_llvm_component_library(...)
	```
- Component libraries are llvm building blocks. Different than real library names.
- Use `llvm_map_components_to_libnames` to create mapping from component library name to real one.
- Use `LINK_LIBS` argument of `add_llvm_component_library` to link against normal lib.
- Use `DEPENDS` argument to assign dependencies (instead of `add_dependencies`).

#### Add one build target per folder
- Source file detection problem with LLVM Cmake functions.
- LLVM build enforces all C/C++ source files in the same folder are added to the same lib, executable or plugin.
- Use `add_subdirectory` to add sub-folders and separate out different libs with separate `CMakeLists.txt`.

### Adding executables and tools
- Use `add_llvm_executable` or `add_llvm_tool`.
- Targets with `add_llvm_tool` will be added in installations.
- `LLVM_BUILD_TOOLS` enables/disables LLVM tool targets.
- Can use `DEPENDS`.

### Adding Pass plugins
- Use `add_llvm_pass_plugin`.
- `LINK_COMPONENTS`, `LINK_LIBS`, and `DEPENDS` available.


## CMake integration for OOT project
- Two ways to create OOT project:
	- llvm-config tool
	- LLVM CMake modules
- Standard CMake package interface.
- Use `find_package(LLVM REQUIRED CONFIG)` to import configs.
- `${LLVM_INCLUDE_DIRS}` and `${LLVM_LIBRARY_DIRS}` for `include_directories` and `link_directories`,
resolves include and library path.
- Use `-DLLVM_DIR=<llvm install path>/lib/cmake/llvm` to find package.
- Import `AddLLVM` to get LLVM CMake functions.
- Snippet:
	```cmake
	list(APPEND CMAKE_MODULE_PATH ${LLVM_CMAKE_DIR})
	include(AddLLVM)
	```
- Need to take LLVM definitions into account.
- `add_definitions(${LLVM_DEFINITIONS})`.
- LLVM not built with RTTI, but non-llvm applications are. Make sure no RTTI mismatch.
