"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6298],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4422:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={},s="Chapter 1",d={unversionedId:"C++/professional_cpp/Part 1/crash_course",id:"C++/professional_cpp/Part 1/crash_course",title:"Chapter 1",description:"C++ Crash Course",source:"@site/docs/C++/professional_cpp/Part 1/0_crash_course.md",sourceDirName:"C++/professional_cpp/Part 1",slug:"/C++/professional_cpp/Part 1/crash_course",permalink:"/docs/C++/professional_cpp/Part 1/crash_course",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/C++/professional_cpp/Part 1/0_crash_course.md?plain=1",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notes",permalink:"/docs/intro"},next:{title:"Introduction to CUDA C++",permalink:"/docs/CUDA/cuda_training/intro"}},p={},u=[{value:"C++ Crash Course",id:"c-crash-course",level:2},{value:"Hello World",id:"hello-world",level:3},{value:"Importing",id:"importing",level:4},{value:"Preprocessor Directives",id:"preprocessor-directives",level:4},{value:"Main function",id:"main-function",level:4},{value:"I/O Streams",id:"io-streams",level:4},{value:"Namespaces",id:"namespaces",level:3},{value:"Nested namespace",id:"nested-namespace",level:4},{value:"Namespace alias",id:"namespace-alias",level:4},{value:"Literals",id:"literals",level:3},{value:"Variables",id:"variables",level:3},{value:"Numerical Limits",id:"numerical-limits",level:4},{value:"Zero Initialization",id:"zero-initialization",level:4},{value:"Casting",id:"casting",level:4},{value:"Floating-Point Numbers",id:"floating-point-numbers",level:4},{value:"Operators",id:"operators",level:3},{value:"Enumerated Types",id:"enumerated-types",level:3},{value:"Old-style Enumerated Types",id:"old-style-enumerated-types",level:4},{value:"Structs",id:"structs",level:3},{value:"Conditional Statements",id:"conditional-statements",level:3},{value:"if/else Statements",id:"ifelse-statements",level:4},{value:"switch Statements",id:"switch-statements",level:4},{value:"The Conditional Operator",id:"the-conditional-operator",level:3},{value:"Logical Evaluation Operators",id:"logical-evaluation-operators",level:3},{value:"Three-Way Comparisons",id:"three-way-comparisons",level:3},{value:"Functions",id:"functions",level:3},{value:"Function Return Type Deduction",id:"function-return-type-deduction",level:4},{value:"Current Function\u2019s Name",id:"current-functions-name",level:4},{value:"Function Overloading",id:"function-overloading",level:4},{value:"Attributes",id:"attributes",level:3},{value:"<code>[[nodiscard]]</code>",id:"nodiscard",level:4},{value:"<code>[[maybe_unused]]</code>",id:"maybe_unused",level:4},{value:"<code>[[noreturn]]</code>",id:"noreturn",level:4},{value:"<code>[[deprecated]]</code>",id:"deprecated",level:4},{value:"<code>[[likely]]</code>",id:"likely",level:4},{value:"<code>[[unlikely]]</code>",id:"unlikely",level:4},{value:"C-Style Arrays",id:"c-style-arrays",level:3},{value:"<code>std::array</code>",id:"stdarray",level:3},{value:"<code>std::vector</code>",id:"stdvector",level:3},{value:"<code>std::pair</code>",id:"stdpair",level:3},{value:"<code>std::optional</code>",id:"stdoptional",level:3},{value:"Structured Bindings",id:"structured-bindings",level:3},{value:"Loops",id:"loops",level:3},{value:"The while Loop",id:"the-while-loop",level:4},{value:"The do/while Loop",id:"the-dowhile-loop",level:4},{value:"The for Loop",id:"the-for-loop",level:4},{value:"The Range-Based for Loop",id:"the-range-based-for-loop",level:4},{value:"Initializer Lists",id:"initializer-lists",level:3},{value:"Strings in C++",id:"strings-in-c",level:3},{value:"C++ as an Object-Oriented Language",id:"c-as-an-object-oriented-language",level:3},{value:"Defining Classes",id:"defining-classes",level:4},{value:"Using Classes",id:"using-classes",level:4},{value:"Scope Resolution",id:"scope-resolution",level:3},{value:"Uniform Initialization",id:"uniform-initialization",level:3},{value:"Designated Initializers",id:"designated-initializers",level:4},{value:"Pointers and Dynamic Memory",id:"pointers-and-dynamic-memory",level:3},{value:"The Stack and the Free Store",id:"the-stack-and-the-free-store",level:4},{value:"Working with Pointers",id:"working-with-pointers",level:4},{value:"Dynamically Allocated Arrays",id:"dynamically-allocated-arrays",level:4},{value:"Null Pointer Constant",id:"null-pointer-constant",level:4},{value:"The Use of const",id:"the-use-of-const",level:3},{value:"<code>const</code> as a Qualifier for a Type",id:"const-as-a-qualifier-for-a-type",level:4},{value:"<code>const</code> Methods",id:"const-methods",level:4},{value:"The <code>constexpr</code> Keyword",id:"the-constexpr-keyword",level:3},{value:"The <code>consteval</code> Keyword",id:"the-consteval-keyword",level:3},{value:"References",id:"references",level:3},{value:"Reference Variables",id:"reference-variables",level:4},{value:"Reference Data Members",id:"reference-data-members",level:4},{value:"Reference Parameters",id:"reference-parameters",level:4},{value:"Reference Return Values",id:"reference-return-values",level:4},{value:"Deciding Between References and Pointers",id:"deciding-between-references-and-pointers",level:4},{value:"<code>const_cast()</code>",id:"const_cast",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"<code>typedefs</code>",id:"typedefs",level:3},{value:"Type Inference",id:"type-inference",level:3},{value:"The <code>auto</code> Keyword",id:"the-auto-keyword",level:4},{value:"The <code>decltype</code> Keyword",id:"the-decltype-keyword",level:4},{value:"The Standard Library",id:"the-standard-library",level:3},{value:"Your First Bigger C++ Program",id:"your-first-bigger-c-program",level:2},{value:"An Employee Records System",id:"an-employee-records-system",level:3},{value:"The Employee Class",id:"the-employee-class",level:3},{value:"<code>Employee.cppm</code>",id:"employeecppm",level:4},{value:"<code>Employee.cpp</code>",id:"employeecpp",level:4},{value:"<code>EmployeeTest.cpp</code>",id:"employeetestcpp",level:4},{value:"The Database Class",id:"the-database-class",level:3},{value:"<code>Database.cppm</code>",id:"databasecppm",level:4},{value:"<code>Database.cpp</code>",id:"databasecpp",level:4},{value:"<code>DatabaseTest.cpp</code>",id:"databasetestcpp",level:4},{value:"The User Interface",id:"the-user-interface",level:3},{value:"Evaluating the Program",id:"evaluating-the-program",level:3},{value:"Summary",id:"summary",level:2},{value:"Exercises",id:"exercises",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chapter-1"},"Chapter 1"),(0,l.kt)("h2",{id:"c-crash-course"},"C++ Crash Course"),(0,l.kt)("h3",{id:"hello-world"},"Hello World"),(0,l.kt)("h4",{id:"importing"},"Importing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#include")," replaced by ",(0,l.kt)("inlineCode",{parentName:"li"},"import")," in C++20. New concept called modules.\ne.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"import <iostream>")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"#include <iostream>"),".")),(0,l.kt)("h4",{id:"preprocessor-directives"},"Preprocessor Directives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Directives starting with ",(0,l.kt)("inlineCode",{parentName:"li"},"#")," uses the preprocessor."),(0,l.kt)("li",{parentName:"ul"},"Function declaration: signature  for the function, inputs, output, types."),(0,l.kt)("li",{parentName:"ul"},"Function definition: actual code of the function."),(0,l.kt)("li",{parentName:"ul"},"With C++20 modules, no need to separate declaration from definition.\nCan do it if wanted to."),(0,l.kt)("li",{parentName:"ul"},"Old C standard library do not use namespace. Standard C library\nprefixed with ",(0,l.kt)("inlineCode",{parentName:"li"},"c")," use the ",(0,l.kt)("inlineCode",{parentName:"li"},"std")," namespace. C standard library\nare not guaranteed to be importable with ",(0,l.kt)("inlineCode",{parentName:"li"},"import")," in C++20."),(0,l.kt)("li",{parentName:"ul"},"Common preprocessor directive:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#include"),": header files."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#define"),": macro."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#ifdef...#endif"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"#ifndef...#endif"),": prevents circular includes\nExample:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#ifndef TEST_FILE_H\n#define TEST_FILE_H\n// ...\n#endif\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#pragma"),": compiler specific directive. Can replace the above with\n",(0,l.kt)("inlineCode",{parentName:"li"},"#pragma once"),".")))),(0,l.kt)("h4",{id:"main-function"},"Main function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"main()"),": start of the program. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Return type is ",(0,l.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,l.kt)("li",{parentName:"ul"},"zero returned automatically if not explicit."),(0,l.kt)("li",{parentName:"ul"},"can take no params or two params: ",(0,l.kt)("inlineCode",{parentName:"li"},"int argc, char* argv[]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"argc"),": number of args passed to program."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"argv"),": actual args starting at index 1. Index 0 can be the program\nname.")))),(0,l.kt)("h4",{id:"io-streams"},"I/O Streams"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::cout"),": outputs to user console."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::cerr"),": outputs to error console."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<<"),": outputs down the stream."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::endl"),": end of line sequence. Output everything and move to next\nline. Alternatively use ",(0,l.kt)("inlineCode",{parentName:"li"},"\\n")," escape sequence, i.e. a new line char."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"std::format")," with C++20, from ",(0,l.kt)("inlineCode",{parentName:"li"},"<format>"),"."),(0,l.kt)("li",{parentName:"ul"},"Common escape sequences to be used with quotes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\n"),": new line, moves cursor to beginning of next line and advance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\r"),": carriage return, moves cursor to beginning of next line\nbut doesn't advance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\t"),": tab."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\\\"),": backslash."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'\\"'),": quotation."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::endl")," flushes the buffer, so it will have a performance impact.\n",(0,l.kt)("inlineCode",{parentName:"li"},"\\n")," doesn't flush the buffer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::cin"),": accept input from user with the ",(0,l.kt)("inlineCode",{parentName:"li"},">>")," operator."),(0,l.kt)("li",{parentName:"ul"},"Use iostream and format instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"printf")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"scanf"),", since they\nprovide type safety.")),(0,l.kt)("h3",{id:"namespaces"},"Namespaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"avoids naming conflict, defines a context for the names.\nExample:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'namespace my_lib {\n  void foo() {\n    std::cout << "Hi!" << std::endl;\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},"Call using scope resolution operator",(0,l.kt)("inlineCode",{parentName:"li"},"::"),". Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"my_lib::foo();"),"."),(0,l.kt)("li",{parentName:"ul"},"Code in the same namespace can call each other without usiing scope\nresolution. Makes code readable."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"using")," directive: signals the compiler that subsequent code is from\nthe specified namespace."),(0,l.kt)("li",{parentName:"ul"},"Don't overuse ",(0,l.kt)("inlineCode",{parentName:"li"},"using"),", will create name conflicts."),(0,l.kt)("li",{parentName:"ul"},"Can use ",(0,l.kt)("inlineCode",{parentName:"li"},"using")," for a particular item. Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"using std::cout"),"\nand then just referring ",(0,l.kt)("inlineCode",{parentName:"li"},"cout"),". That way everything else still\nneeds to use ",(0,l.kt)("inlineCode",{parentName:"li"},"std::"),"."),(0,l.kt)("li",{parentName:"ul"},"Never put ",(0,l.kt)("inlineCode",{parentName:"li"},"using")," in a header file or global scope. Use it in\nnamespace or class scope. OK to use ",(0,l.kt)("inlineCode",{parentName:"li"},"using")," in a module interface\nfile as long as not exporting.")),(0,l.kt)("h4",{id:"nested-namespace"},"Nested namespace"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"namespace inside another one.\nExample:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// before c++17\nnamespace foo {\n  namespace bar {\n\n  }\n}\n// after c++17\nnamespace foo::bar {\n\n}\n")))),(0,l.kt)("h4",{id:"namespace-alias"},"Namespace alias"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"give new/shorter name to a namespace.\nExample: `namespace baz = foo::bar;")),(0,l.kt)("h3",{id:"literals"},"Literals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Literals: used to write numbers or strings.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"decimal, 123"),(0,l.kt)("li",{parentName:"ul"},"octal, 0173"),(0,l.kt)("li",{parentName:"ul"},"hex, 0x7B"),(0,l.kt)("li",{parentName:"ul"},"binary, 0b1111011"),(0,l.kt)("li",{parentName:"ul"},"float, 3.14f"),(0,l.kt)("li",{parentName:"ul"},"double, 3.14"),(0,l.kt)("li",{parentName:"ul"},"hex float, 0x3.ABCp-10"),(0,l.kt)("li",{parentName:"ul"},"single char, 'a'"),(0,l.kt)("li",{parentName:"ul"},"zero terminated char array"))),(0,l.kt)("li",{parentName:"ul"},"Can define custom literal."),(0,l.kt)("li",{parentName:"ul"},"Digit separator can be used in numeric literals, i.e. single\nquote char. Example: 23'456'789.")),(0,l.kt)("h3",{id:"variables"},"Variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Uninitialized variables: potential source of bugs."),(0,l.kt)("li",{parentName:"ul"},"Uniform initialization syntax:\nExample:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int my_int = 8;\n// vs from C++11\nint my_int {8};\n"))),(0,l.kt)("li",{parentName:"ul"},"Use uniform initialization."),(0,l.kt)("li",{parentName:"ul"},"Variables are strongly typed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"char")," is different than ",(0,l.kt)("inlineCode",{parentName:"li"},"signed char")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"unsigned char"),". Only use ",(0,l.kt)("inlineCode",{parentName:"li"},"char")," to represent characters."),(0,l.kt)("li",{parentName:"ul"},"From C++17 ",(0,l.kt)("inlineCode",{parentName:"li"},"std::byte")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"<cstddef>"),". Before ",(0,l.kt)("inlineCode",{parentName:"li"},"char")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"unsigned char")," used for byte."),(0,l.kt)("li",{parentName:"ul"},"No string type in C++. STL has ",(0,l.kt)("inlineCode",{parentName:"li"},"std::string"),".")),(0,l.kt)("h4",{id:"numerical-limits"},"Numerical Limits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"std::numeric_limits")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"<limits>")," instead of C ",(0,l.kt)("inlineCode",{parentName:"li"},"#defines"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"std::numeric_limits<int>::min() == std::numeric_limits<int>::lowest()"),", but\n",(0,l.kt)("inlineCode",{parentName:"li"},"std::numeric_limits<double>::min() != std::numeric_limits<double>::lowest()"),","),(0,l.kt)("li",{parentName:"ul"},"Minimum for float is the smallest possible value. Lowest for float is the most negative value representable.")),(0,l.kt)("h4",{id:"zero-initialization"},"Zero Initialization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Empty curly brackets ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")),(0,l.kt)("li",{parentName:"ul"},"Initialzes primitive types to 0, pointer to ",(0,l.kt)("inlineCode",{parentName:"li"},"nullptr")),(0,l.kt)("li",{parentName:"ul"},"Calls default constructor for objects.")),(0,l.kt)("h4",{id:"casting"},"Casting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"static_cast<>"),"."),(0,l.kt)("li",{parentName:"ul"},"Variables can be auto casted, e.g. short to long."),(0,l.kt)("li",{parentName:"ul"},"Can lose data with casting."),(0,l.kt)("li",{parentName:"ul"},"OK to cast if types are compatible.")),(0,l.kt)("h4",{id:"floating-point-numbers"},"Floating-Point Numbers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FP math with order of magnitude differences can error."),(0,l.kt)("li",{parentName:"ul"},"Difference between two close FP can lose precision."),(0,l.kt)("li",{parentName:"ul"},"Many decimals can't be represented."),(0,l.kt)("li",{parentName:"ul"},"Special floats:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"+/- infinity: e.g. 1/0."),(0,l.kt)("li",{parentName:"ul"},"NaN: not a number, e.g 0/0."))),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"std::isnan()")," ")),(0,l.kt)("h3",{id:"operators"},"Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Binary operator: operates on two expressions."),(0,l.kt)("li",{parentName:"ul"},"Unary operator: operates on single expression."),(0,l.kt)("li",{parentName:"ul"},"Ternary operator: operates on three expressions."),(0,l.kt)("li",{parentName:"ul"},"What is the output of this program?",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int someInteger { 256 };\nshort someShort;\nlong someLong;\nfloat someFloat;\ndouble someDouble;\nsomeInteger++;\nsomeInteger *= 2;\nsomeShort = static_cast<short>(someInteger);\nsomeLong = someShort * 10000;\nsomeFloat = someLong + 0.785f;\nsomeDouble = static_cast<double>(someFloat) / 100000;\ncout << someDouble << endl;\n"))),(0,l.kt)("li",{parentName:"ul"},"Output:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"increment by 1 -> 257."),(0,l.kt)("li",{parentName:"ul"},"times 2 -> 514."),(0,l.kt)("li",{parentName:"ul"},"static cast to short -> short is 2 bytes, so can hold 514."),(0,l.kt)("li",{parentName:"ul"},"times 10,000 -> 5,140,000 -> implicit cast to long -> long is 4 bytes -> in range, so can hold."),(0,l.kt)("li",{parentName:"ul"},"float in range, long gets implicit casted to float -> big float added with small float -> loss of precision -> 5,140,001.0"),(0,l.kt)("li",{parentName:"ul"},"Cast to double and divide -> 51.40001 (with ",(0,l.kt)("inlineCode",{parentName:"li"},"cout.precision(7);"),")"))),(0,l.kt)("li",{parentName:"ul"},"Order of execution: /,*,% first from left to right, then +,- and the bitwise."),(0,l.kt)("li",{parentName:"ul"},"Make order explicit with paranthesis."),(0,l.kt)("li",{parentName:"ul"},"Evaluation order decided by precedence."),(0,l.kt)("li",{parentName:"ul"},"Ops with higher precedance evaluated before lower ones.")),(0,l.kt)("h3",{id:"enumerated-types"},"Enumerated Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Defines a sequence, can declare variables with that sequence."),(0,l.kt)("li",{parentName:"ul"},"Strongly typed enumeration types: ",(0,l.kt)("inlineCode",{parentName:"li"},"enum class MyEnum {Foo, Bar, Baz};")),(0,l.kt)("li",{parentName:"ul"},"Tightly defines the range of values for a variable."),(0,l.kt)("li",{parentName:"ul"},"Enums are just integers."),(0,l.kt)("li",{parentName:"ul"},"If integers are not specified, compiler assigns automatically.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starts with 0."),(0,l.kt)("li",{parentName:"ul"},"Can define some and leave some out."),(0,l.kt)("li",{parentName:"ul"},"Undefined types are assigned a value of the previous enum member incremented by 1."))),(0,l.kt)("li",{parentName:"ul"},"Cannot automatically convert to integers."),(0,l.kt)("li",{parentName:"ul"},"By default, enum value is an integer. Can change it, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"enum class MyEnum: unsigned long {...}")),(0,l.kt)("li",{parentName:"ul"},"Enum values not automatically exported to enclosing scope, useful for giving short names to enum values."),(0,l.kt)("li",{parentName:"ul"},"Have to fully qualify enum values or use a ",(0,l.kt)("inlineCode",{parentName:"li"},"using enum")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"using"),"."),(0,l.kt)("li",{parentName:"ul"},"C++20, can use ",(0,l.kt)("inlineCode",{parentName:"li"},"using enum MyEnum"),". Minimize the scope when using this, so that name clashes are avoiided.")),(0,l.kt)("h4",{id:"old-style-enumerated-types"},"Old-style Enumerated Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enum")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"enum class"),"."),(0,l.kt)("li",{parentName:"ul"},"Use strongly typed enum instead of old style."),(0,l.kt)("li",{parentName:"ul"},"Values exported to enclosing scope, so can use\nin the parent scope without fully qualifying,\ncan result in name clashes. Need to make enum values unique to avoid this."),(0,l.kt)("li",{parentName:"ul"},"Not strongly typed, so not type safe."),(0,l.kt)("li",{parentName:"ul"},"Interpreted as ints, so can compare different enums or pass wrong enum types.")),(0,l.kt)("h3",{id:"structs"},"Structs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Encapsulate one or more types"),(0,l.kt)("li",{parentName:"ul"},"Module interface file (.cppm)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"First line is module declaration, states that file is defining a module."),(0,l.kt)("li",{parentName:"ul"},"explicitly export."),(0,l.kt)("li",{parentName:"ul"},"Example:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"export module employee;\nexport struct Employee {\n  ...\n};\n"))),(0,l.kt)("li",{parentName:"ul"},"Angle brackets must not be used when importing modules.")))),(0,l.kt)("h3",{id:"conditional-statements"},"Conditional Statements"),(0,l.kt)("p",null,"Two types on conditional statments in C++."),(0,l.kt)("h4",{id:"ifelse-statements"},"if/else Statements"),(0,l.kt)("h4",{id:"switch-statements"},"switch Statements"),(0,l.kt)("h3",{id:"the-conditional-operator"},"The Conditional Operator"),(0,l.kt)("h3",{id:"logical-evaluation-operators"},"Logical Evaluation Operators"),(0,l.kt)("h3",{id:"three-way-comparisons"},"Three-Way Comparisons"),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("h4",{id:"function-return-type-deduction"},"Function Return Type Deduction"),(0,l.kt)("h4",{id:"current-functions-name"},"Current Function\u2019s Name"),(0,l.kt)("h4",{id:"function-overloading"},"Function Overloading"),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("h4",{id:"nodiscard"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[nodiscard]]")),(0,l.kt)("h4",{id:"maybe_unused"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[maybe_unused]]")),(0,l.kt)("h4",{id:"noreturn"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[noreturn]]")),(0,l.kt)("h4",{id:"deprecated"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[deprecated]]")),(0,l.kt)("h4",{id:"likely"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[likely]]")),(0,l.kt)("h4",{id:"unlikely"},(0,l.kt)("inlineCode",{parentName:"h4"},"[[unlikely]]")),(0,l.kt)("h3",{id:"c-style-arrays"},"C-Style Arrays"),(0,l.kt)("h3",{id:"stdarray"},(0,l.kt)("inlineCode",{parentName:"h3"},"std::array")),(0,l.kt)("h3",{id:"stdvector"},(0,l.kt)("inlineCode",{parentName:"h3"},"std::vector")),(0,l.kt)("h3",{id:"stdpair"},(0,l.kt)("inlineCode",{parentName:"h3"},"std::pair")),(0,l.kt)("h3",{id:"stdoptional"},(0,l.kt)("inlineCode",{parentName:"h3"},"std::optional")),(0,l.kt)("h3",{id:"structured-bindings"},"Structured Bindings"),(0,l.kt)("h3",{id:"loops"},"Loops"),(0,l.kt)("h4",{id:"the-while-loop"},"The while Loop"),(0,l.kt)("h4",{id:"the-dowhile-loop"},"The do/while Loop"),(0,l.kt)("h4",{id:"the-for-loop"},"The for Loop"),(0,l.kt)("h4",{id:"the-range-based-for-loop"},"The Range-Based for Loop"),(0,l.kt)("h3",{id:"initializer-lists"},"Initializer Lists"),(0,l.kt)("h3",{id:"strings-in-c"},"Strings in C++"),(0,l.kt)("h3",{id:"c-as-an-object-oriented-language"},"C++ as an Object-Oriented Language"),(0,l.kt)("h4",{id:"defining-classes"},"Defining Classes"),(0,l.kt)("h4",{id:"using-classes"},"Using Classes"),(0,l.kt)("h3",{id:"scope-resolution"},"Scope Resolution"),(0,l.kt)("h3",{id:"uniform-initialization"},"Uniform Initialization"),(0,l.kt)("h4",{id:"designated-initializers"},"Designated Initializers"),(0,l.kt)("h3",{id:"pointers-and-dynamic-memory"},"Pointers and Dynamic Memory"),(0,l.kt)("h4",{id:"the-stack-and-the-free-store"},"The Stack and the Free Store"),(0,l.kt)("h4",{id:"working-with-pointers"},"Working with Pointers"),(0,l.kt)("h4",{id:"dynamically-allocated-arrays"},"Dynamically Allocated Arrays"),(0,l.kt)("h4",{id:"null-pointer-constant"},"Null Pointer Constant"),(0,l.kt)("h3",{id:"the-use-of-const"},"The Use of const"),(0,l.kt)("h4",{id:"const-as-a-qualifier-for-a-type"},(0,l.kt)("inlineCode",{parentName:"h4"},"const")," as a Qualifier for a Type"),(0,l.kt)("h4",{id:"const-methods"},(0,l.kt)("inlineCode",{parentName:"h4"},"const")," Methods"),(0,l.kt)("h3",{id:"the-constexpr-keyword"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"constexpr")," Keyword"),(0,l.kt)("h3",{id:"the-consteval-keyword"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"consteval")," Keyword"),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("h4",{id:"reference-variables"},"Reference Variables"),(0,l.kt)("h4",{id:"reference-data-members"},"Reference Data Members"),(0,l.kt)("h4",{id:"reference-parameters"},"Reference Parameters"),(0,l.kt)("h4",{id:"reference-return-values"},"Reference Return Values"),(0,l.kt)("h4",{id:"deciding-between-references-and-pointers"},"Deciding Between References and Pointers"),(0,l.kt)("h3",{id:"const_cast"},(0,l.kt)("inlineCode",{parentName:"h3"},"const_cast()")),(0,l.kt)("h3",{id:"exceptions"},"Exceptions"),(0,l.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,l.kt)("h3",{id:"typedefs"},(0,l.kt)("inlineCode",{parentName:"h3"},"typedefs")),(0,l.kt)("h3",{id:"type-inference"},"Type Inference"),(0,l.kt)("h4",{id:"the-auto-keyword"},"The ",(0,l.kt)("inlineCode",{parentName:"h4"},"auto")," Keyword"),(0,l.kt)("h4",{id:"the-decltype-keyword"},"The ",(0,l.kt)("inlineCode",{parentName:"h4"},"decltype")," Keyword"),(0,l.kt)("h3",{id:"the-standard-library"},"The Standard Library"),(0,l.kt)("h2",{id:"your-first-bigger-c-program"},"Your First Bigger C++ Program"),(0,l.kt)("h3",{id:"an-employee-records-system"},"An Employee Records System"),(0,l.kt)("h3",{id:"the-employee-class"},"The Employee Class"),(0,l.kt)("h4",{id:"employeecppm"},(0,l.kt)("inlineCode",{parentName:"h4"},"Employee.cppm")),(0,l.kt)("h4",{id:"employeecpp"},(0,l.kt)("inlineCode",{parentName:"h4"},"Employee.cpp")),(0,l.kt)("h4",{id:"employeetestcpp"},(0,l.kt)("inlineCode",{parentName:"h4"},"EmployeeTest.cpp")),(0,l.kt)("h3",{id:"the-database-class"},"The Database Class"),(0,l.kt)("h4",{id:"databasecppm"},(0,l.kt)("inlineCode",{parentName:"h4"},"Database.cppm")),(0,l.kt)("h4",{id:"databasecpp"},(0,l.kt)("inlineCode",{parentName:"h4"},"Database.cpp")),(0,l.kt)("h4",{id:"databasetestcpp"},(0,l.kt)("inlineCode",{parentName:"h4"},"DatabaseTest.cpp")),(0,l.kt)("h3",{id:"the-user-interface"},"The User Interface"),(0,l.kt)("h3",{id:"evaluating-the-program"},"Evaluating the Program"),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("h2",{id:"exercises"},"Exercises"))}m.isMDXComponent=!0}}]);