"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2858],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),p=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?l.createElement(k,r(r({ref:t},m),{},{components:n})):l.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={},d="Exploring LLVM's Build System Features",p={unversionedId:"LLVM/llvm_techniques/Section 1/llvm_repo",id:"LLVM/llvm_techniques/Section 1/llvm_repo",title:"Exploring LLVM's Build System Features",description:"- build directives",source:"@site/docs/LLVM/llvm_techniques/Section 1/2_llvm_repo.md",sourceDirName:"LLVM/llvm_techniques/Section 1",slug:"/LLVM/llvm_techniques/Section 1/llvm_repo",permalink:"/docs/LLVM/llvm_techniques/Section 1/llvm_repo",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/LLVM/llvm_techniques/Section 1/2_llvm_repo.md?plain=1",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing LLVM",permalink:"/docs/LLVM/llvm_techniques/Section 1/install"},next:{title:"Testing with LLVM LIT",permalink:"/docs/LLVM/llvm_techniques/Section 1/testing_llvm_lit"}},m={},u=[{value:"LLVM&#39;s CMake directives",id:"llvms-cmake-directives",level:2},{value:"Adding New Libraries",id:"adding-new-libraries",level:3},{value:"Add one build target per folder",id:"add-one-build-target-per-folder",level:4},{value:"Adding executables and tools",id:"adding-executables-and-tools",level:3},{value:"Adding Pass plugins",id:"adding-pass-plugins",level:3},{value:"CMake integration for OOT project",id:"cmake-integration-for-oot-project",level:2}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exploring-llvms-build-system-features"},"Exploring LLVM's Build System Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"build directives"),(0,i.kt)("li",{parentName:"ul"},"in tree/out of tree development",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in tree: contribute code directly to llvm project."),(0,i.kt)("li",{parentName:"ul"},"out of tree: creating llvm extensions.")))),(0,i.kt)("h2",{id:"llvms-cmake-directives"},"LLVM's CMake directives"),(0,i.kt)("h3",{id:"adding-new-libraries"},"Adding New Libraries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't use normal ",(0,i.kt)("inlineCode",{parentName:"li"},"add_library"),"."),(0,i.kt)("li",{parentName:"ul"},"Hard to control shared/static build of libraries using built in ",(0,i.kt)("inlineCode",{parentName:"li"},"add_library"),"."),(0,i.kt)("li",{parentName:"ul"},"Better control over RTTI and exception handling if not using built in directives."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_component_library"),"."),(0,i.kt)("li",{parentName:"ul"},"Example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"add_llvm_component_library(<library name>\n    <source file>)\n"))),(0,i.kt)("li",{parentName:"ul"},"Instead of using ",(0,i.kt)("inlineCode",{parentName:"li"},"target_link_libraries")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"add_dependencies"),", use ",(0,i.kt)("inlineCode",{parentName:"li"},"LINK_COMPONENTS")," argument\nin ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_component_library"),"."),(0,i.kt)("li",{parentName:"ul"},"Example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"add_llvm_component_library(<library name>\n    <source file>\n    LINK_COMPONENTS\n    <library 1> <library 2>)\n"))),(0,i.kt)("li",{parentName:"ul"},"Can use ",(0,i.kt)("inlineCode",{parentName:"li"},"LLVM_LINK_COMPONENTS")," variable as well."),(0,i.kt)("li",{parentName:"ul"},"Example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"set(LLVM_LINK_COMPONENTS\n    <library 1> <library 2>)\nadd_llvm_component_library(...)\n"))),(0,i.kt)("li",{parentName:"ul"},"Component libraries are llvm building blocks. Different than real library names."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"llvm_map_components_to_libnames")," to create mapping from component library name to real one."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"LINK_LIBS")," argument of ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_component_library")," to link against normal lib."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"DEPENDS")," argument to assign dependencies (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"add_dependencies"),").")),(0,i.kt)("h4",{id:"add-one-build-target-per-folder"},"Add one build target per folder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Source file detection problem with LLVM Cmake functions."),(0,i.kt)("li",{parentName:"ul"},"LLVM build enforces all C/C++ source files in the same folder are added to the same lib, executable or plugin."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"add_subdirectory")," to add sub-folders and separate out different libs with separate ",(0,i.kt)("inlineCode",{parentName:"li"},"CMakeLists.txt"),".")),(0,i.kt)("h3",{id:"adding-executables-and-tools"},"Adding executables and tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_executable")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_tool"),"."),(0,i.kt)("li",{parentName:"ul"},"Targets with ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_tool")," will be added in installations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LLVM_BUILD_TOOLS")," enables/disables LLVM tool targets."),(0,i.kt)("li",{parentName:"ul"},"Can use ",(0,i.kt)("inlineCode",{parentName:"li"},"DEPENDS"),".")),(0,i.kt)("h3",{id:"adding-pass-plugins"},"Adding Pass plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"add_llvm_pass_plugin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LINK_COMPONENTS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"LINK_LIBS"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"DEPENDS")," available.")),(0,i.kt)("h2",{id:"cmake-integration-for-oot-project"},"CMake integration for OOT project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two ways to create OOT project:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"llvm-config tool"),(0,i.kt)("li",{parentName:"ul"},"LLVM CMake modules"))),(0,i.kt)("li",{parentName:"ul"},"Standard CMake package interface."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"find_package(LLVM REQUIRED CONFIG)")," to import configs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"${LLVM_INCLUDE_DIRS}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"${LLVM_LIBRARY_DIRS}")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"include_directories")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"link_directories"),",\nresolves include and library path."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"-DLLVM_DIR=<llvm install path>/lib/cmake/llvm")," to find package."),(0,i.kt)("li",{parentName:"ul"},"Import ",(0,i.kt)("inlineCode",{parentName:"li"},"AddLLVM")," to get LLVM CMake functions."),(0,i.kt)("li",{parentName:"ul"},"Snippet:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmake"},"list(APPEND CMAKE_MODULE_PATH ${LLVM_CMAKE_DIR})\ninclude(AddLLVM)\n"))),(0,i.kt)("li",{parentName:"ul"},"Need to take LLVM definitions into account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_definitions(${LLVM_DEFINITIONS})"),"."),(0,i.kt)("li",{parentName:"ul"},"LLVM not built with RTTI, but non-llvm applications are. Make sure no RTTI mismatch.")))}c.isMDXComponent=!0}}]);