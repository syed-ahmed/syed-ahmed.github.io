"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=o,v=m["".concat(c,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(v,l(l({ref:t},u),{},{components:r})):n.createElement(v,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Code Coverage",i={unversionedId:"MISC/code_cov",id:"MISC/code_cov",title:"Code Coverage",description:"With g++ and lcov",source:"@site/docs/MISC/code_cov.md",sourceDirName:"MISC",slug:"/MISC/code_cov",permalink:"/docs/MISC/code_cov",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/MISC/code_cov.md?plain=1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vectors",permalink:"/docs/Linear Algebra/lin_alg_1/Chapter 1/vectors"},next:{title:"Colorize Terminal",permalink:"/docs/MISC/colorize_terminal"}},c={},p=[{value:"With g++ and lcov",id:"with-g-and-lcov",level:2},{value:"With clang and llvm-cov",id:"with-clang-and-llvm-cov",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-coverage"},"Code Coverage"),(0,o.kt)("h2",{id:"with-g-and-lcov"},"With g++ and lcov"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compile with no optimization: ",(0,o.kt)("inlineCode",{parentName:"li"},"-O0 --coverage"),". Will output ",(0,o.kt)("inlineCode",{parentName:"li"},"*.gcno"),"."),(0,o.kt)("li",{parentName:"ul"},"Run the binary. Will output ",(0,o.kt)("inlineCode",{parentName:"li"},"*.gcda"),"."),(0,o.kt)("li",{parentName:"ul"},"Generate lcov trace from the directory with ",(0,o.kt)("inlineCode",{parentName:"li"},"*.gcda"),"s:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"lcov --rc lcov_branch_coverage=1 --capture --directory . --output-file coverage.info\n"))),(0,o.kt)("li",{parentName:"ul"},"Generate htmls:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"genhtml --rc genhtml_branch_coverage=1 coverage.info --output-directory out\n"))),(0,o.kt)("li",{parentName:"ul"},"Note: you need the ",(0,o.kt)("inlineCode",{parentName:"li"},"rc")," flags to show branch coverage.")),(0,o.kt)("h2",{id:"with-clang-and-llvm-cov"},"With clang and llvm-cov"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow the instructions in: ",(0,o.kt)("a",{parentName:"li",href:"https://clang.llvm.org/docs/SourceBasedCodeCoverage.html"},"https://clang.llvm.org/docs/SourceBasedCodeCoverage.html"))))}d.isMDXComponent=!0}}]);