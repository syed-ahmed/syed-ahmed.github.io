# C++ Crash Course
## Importing
- `#include` replaced by `import` in C++20. New concept called modules.
  e.g. `import <iostream>` instead of `#include <iostream>`.

## Preprocessor Directives
- Directives starting with `#` uses the preprocessor.
- Function declaration: signature  for the function, inputs, output, types.
- Function definition: actual code of the function.
- With C++20 modules, no need to separate declaration from definition.
  Can do it if wanted to.
- Old C standard library do not use namespace. Standard C library
  prefixed with `c` use the `std` namespace. C standard library
  are not guaranteed to be importable with `import` in C++20.
- Common preprocessor directive:
  - `#include`: header files.
  - `#define`: macro.
  - `#ifdef...#endif`/`#ifndef...#endif`: prevents circular includes
    Example:
    ```cpp
    #ifndef TEST_FILE_H
    #define TEST_FILE_H
    // ...
    #endif
    ```
  - `#pragma`: compiler specific directive. Can replace the above with
    `#pragma once`.

## Main function
- `main()`: start of the program. 
  - Return type is `int`.
  - zero returned automatically if not explicit.
  - can take no params or two params: `int argc, char* argv[]`
  - `argc`: number of args passed to program.
  - `argv`: actual args starting at index 1. Index 0 can be the program
      name.

## I/O Streams
- `std::cout`: outputs to user console.
- `std::cerr`: outputs to error console.
- `<<`: outputs down the stream.
- `std::endl`: end of line sequence. Output everything and move to next
  line. Alternatively use `\n` escape sequence, i.e. a new line char.
- Use `std::format` with C++20, from `<format>`.
- Common escape sequences to be used with quotes:
  - `\n`: new line, moves cursor to beginning of next line and advance.
  - `\r`: carriage return, moves cursor to beginning of next line
      but doesn't advance.
  - `\t`: tab.
  - `\\`: backslash.
  - `\"`: quotation.
- `std::endl` flushes the buffer, so it will have a performance impact.
  `\n` doesn't flush the buffer.
- `std::cin`: accept input from user with the `>>` operator.
- Use iostream and format instead of `printf` and `scanf`, since they
  provide type safety.

## Namespaces
- `namespace` avoids naming conflict, defines a context for the names.
  Example:
  ```cpp
  namespace my_lib {
    void foo() {
      std::cout << "Hi!" << std::endl;
    }
  }
  ```
- Call using scope resolution operator`::`. Example: `my_lib::foo();`.
- Code in the same namespace can call each other without usiing scope
  resolution. Makes code readable.
- `using` directive: signals the compiler that subsequent code is from
  the specified namespace.
- Don't overuse `using`, will create name conflicts.
- Can use `using` for a particular item. Example: `using std::cout`
  and then just referring `cout`. That way everything else still
  needs to use `std::`.
- Never put `using` in a header file or global scope. Use it in
  namespace or class scope. OK to use `using` in a module interface
  file as long as not exporting.
- Nested namespace: namespace inside another one.
  Example:
  ```cpp
  // before c++17
  namespace foo {
    namespace bar {

    }
  }
  // after c++17
  namespace foo::bar {

  }
  ```
- Namespace alias: give new/shorter name to a namespace.
  Example: `namespace baz = foo::bar;

## Literals
- Literals: used to write numbers or strings.
  - decimal, 123
  - octal, 0173
  - hex, 0x7B
  - binary, 0b1111011
  - float, 3.14f
  - double, 3.14
  - hex float, 0x3.ABCp-10
  - single char, 'a'
  - zero terminated char array
- Can define custom literal.
- Digit separator can be used in numeric literals, i.e. single
  quote char. Example: 23'456'789.

## Variables