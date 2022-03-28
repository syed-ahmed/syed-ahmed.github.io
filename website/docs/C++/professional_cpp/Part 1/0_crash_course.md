# Chapter 1
## C++ Crash Course
### Hello World
#### Importing
- `#include` replaced by `import` in C++20. New concept called modules.
  e.g. `import <iostream>` instead of `#include <iostream>`.

#### Preprocessor Directives
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

#### Main function
- `main()`: start of the program. 
  - Return type is `int`.
  - zero returned automatically if not explicit.
  - can take no params or two params: `int argc, char* argv[]`
  - `argc`: number of args passed to program.
  - `argv`: actual args starting at index 1. Index 0 can be the program
      name.

#### I/O Streams
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

### Namespaces
- avoids naming conflict, defines a context for the names.
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
#### Nested namespace
- namespace inside another one.
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
#### Namespace alias
- give new/shorter name to a namespace.
  Example: `namespace baz = foo::bar;

### Literals
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

### Variables
- Uninitialized variables: potential source of bugs.
- Uniform initialization syntax:
  Example:
  ```cpp
  int my_int = 8;
  // vs from C++11
  int my_int {8};
  ```
- Use uniform initialization.
- Variables are strongly typed.
- `char` is different than `signed char` or `unsigned char`. Only use `char` to represent characters.
- From C++17 `std::byte` in `<cstddef>`. Before `char` or `unsigned char` used for byte.
- No string type in C++. STL has `std::string`.

#### Numerical Limits
- Use `std::numeric_limits` from `<limits>` instead of C `#defines`.
- `std::numeric_limits<int>::min() == std::numeric_limits<int>::lowest()`, but
`std::numeric_limits<double>::min() != std::numeric_limits<double>::lowest()`,
- Minimum for float is the smallest possible value. Lowest for float is the most negative value representable.

#### Zero Initialization
- Empty curly brackets `{}`
- Initialzes primitive types to 0, pointer to `nullptr`
- Calls default constructor for objects.

#### Casting
- Use `static_cast<>`.
- Variables can be auto casted, e.g. short to long.
- Can lose data with casting.
- OK to cast if types are compatible.

#### Floating-Point Numbers
- FP math with order of magnitude differences can error.
- Difference between two close FP can lose precision.
- Many decimals can't be represented.
- Special floats:
  - +/- infinity: e.g. 1/0.
  - NaN: not a number, e.g 0/0.
- Use `std::isnan()` 

### Operators
- Binary operator: operates on two expressions.
- Unary operator: operates on single expression.
- Ternary operator: operates on three expressions.
- What is the output of this program?
  ```cpp
  int someInteger { 256 };
  short someShort;
  long someLong;
  float someFloat;
  double someDouble;
  someInteger++;
  someInteger *= 2;
  someShort = static_cast<short>(someInteger);
  someLong = someShort * 10000;
  someFloat = someLong + 0.785f;
  someDouble = static_cast<double>(someFloat) / 100000;
  cout << someDouble << endl;
  ```
- Output:
  - increment by 1 -> 257.
  - times 2 -> 514.
  - static cast to short -> short is 2 bytes, so can hold 514.
  - times 10,000 -> 5,140,000 -> implicit cast to long -> long is 4 bytes -> in range, so can hold.
  - float in range, long gets implicit casted to float -> big float added with small float -> loss of precision -> 5,140,001.0
  - Cast to double and divide -> 51.40001 (with `cout.precision(7);`)
- Order of execution: /,*,% first from left to right, then +,- and the bitwise.
- Make order explicit with paranthesis.
- Evaluation order decided by precedence.
- Ops with higher precedance evaluated before lower ones.

### Enumerated Types
- Defines a sequence, can declare variables with that sequence.
- Strongly typed enumeration types: `enum class MyEnum {Foo, Bar, Baz};`
- Tightly defines the range of values for a variable.
- Enums are just integers.
- If integers are not specified, compiler assigns automatically.
  - Starts with 0.
  - Can define some and leave some out.
  - Undefined types are assigned a value of the previous enum member incremented by 1.
- Cannot automatically convert to integers.
- By default, enum value is an integer. Can change it, e.g. `enum class MyEnum: unsigned long {...}`
- Enum values not automatically exported to enclosing scope, useful for giving short names to enum values.
- Have to fully qualify enum values or use a `using enum` or `using`.
- C++20, can use `using enum MyEnum`. Minimize the scope when using this, so that name clashes are avoiided.

#### Old-style Enumerated Types
- `enum` instead of `enum class`.
- Use strongly typed enum instead of old style.
- Values exported to enclosing scope, so can use
  in the parent scope without fully qualifying,
  can result in name clashes. Need to make enum values unique to avoid this.
- Not strongly typed, so not type safe.
- Interpreted as ints, so can compare different enums or pass wrong enum types.

### Structs
- Encapsulate one or more types
- Module interface file (.cppm)
  - First line is module declaration, states that file is defining a module.
  - explicitly export.
  - Example:
    ```cpp
    export module employee;
    export struct Employee {
      ...
    };
    ```
  - Angle brackets must not be used when importing modules.

### Conditional Statements
Two types on conditional statements in C++.

#### if/else Statements

#### switch Statements

### The Conditional Operator
### Logical Evaluation Operators
### Three-Way Comparisons
### Functions
#### Function Return Type Deduction
#### Current Function’s Name
#### Function Overloading
### Attributes
#### `[[nodiscard]]`
#### `[[maybe_unused]]`
#### `[[noreturn]]`
#### `[[deprecated]]`
#### `[[likely]]`
#### `[[unlikely]]`
### C-Style Arrays
### `std::array`
### `std::vector`
### `std::pair`
### `std::optional`
### Structured Bindings
### Loops
#### The while Loop
#### The do/while Loop
#### The for Loop
#### The Range-Based for Loop
### Initializer Lists
### Strings in C++
### C++ as an Object-Oriented Language
#### Defining Classes
#### Using Classes
### Scope Resolution
### Uniform Initialization
#### Designated Initializers
### Pointers and Dynamic Memory
#### The Stack and the Free Store
#### Working with Pointers
#### Dynamically Allocated Arrays
#### Null Pointer Constant
### The Use of const
#### `const` as a Qualifier for a Type
#### `const` Methods
### The `constexpr` Keyword
### The `consteval` Keyword
### References
#### Reference Variables
#### Reference Data Members
#### Reference Parameters
#### Reference Return Values
#### Deciding Between References and Pointers
### `const_cast()`
### Exceptions
### Type Aliases
### `typedefs`
### Type Inference
#### The `auto` Keyword
#### The `decltype` Keyword
### The Standard Library
## Your First Bigger C++ Program
### An Employee Records System
### The Employee Class
#### `Employee.cppm`
#### `Employee.cpp`
#### `EmployeeTest.cpp`
### The Database Class
#### `Database.cppm`
#### `Database.cpp`
#### `DatabaseTest.cpp`
### The User Interface
### Evaluating the Program
## Summary
## Exercises