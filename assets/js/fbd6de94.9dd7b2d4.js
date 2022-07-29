"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},c="Getting code coverage info in PyTorch",i={unversionedId:"PyTorch/code_coverage",id:"PyTorch/code_coverage",title:"Getting code coverage info in PyTorch",description:"- Build pytorch from source with the necessary flags for coverage - -DUSECPPCODECOVERAGE=ON -DBUILDTEST=ON -DCMAKEBUILDTYPE=Debug:",source:"@site/docs/PyTorch/code_coverage.md",sourceDirName:"PyTorch",slug:"/PyTorch/code_coverage",permalink:"/docs/PyTorch/code_coverage",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/PyTorch/code_coverage.md?plain=1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSH into server without domain name",permalink:"/docs/MISC/ssh_host_name"},next:{title:"Exercise 1",permalink:"/docs/PyTorch/nvfuser_exercises/exercise_1"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-code-coverage-info-in-pytorch"},"Getting code coverage info in PyTorch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build pytorch from source with the necessary flags for coverage - ",(0,o.kt)("inlineCode",{parentName:"li"},"-DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If using GCC:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py build --cmake-only\ncd build && \\\n    cmake .. -DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug && \\\n    cd ../\nMAX_JOBS=8 python setup.py develop\n"))),(0,o.kt)("li",{parentName:"ul"},"If using clang:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install clang-12 libomp-12-dev --install-suggests\nsudo ln -s /usr/bin/clang++-12 /usr/bin/clang++\nsudo ln -s /usr/bin/clang-12 /usr/bin/clang\nCC=clang CXX=clang++ python setup.py build --cmake-only\ncd build && \\\n    cmake .. -DUSE_CPP_CODE_COVERAGE=ON -DBUILD_TEST=ON -DCMAKE_BUILD_TYPE=Debug && \\\n    cd ../\nMAX_JOBS=8 python setup.py develop\n"))))),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"pytorch/tools/code_coverage/oss_coverage.py"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If using GCC:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python oss_coverage.py --export --summary\n"))),(0,o.kt)("li",{parentName:"ul"},"If using clang:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CXX=clang++ LLVM_TOOL_PATH=/usr/lib/llvm-12/bin/ python oss_coverage.py\n/usr/lib/llvm-12/bin/llvm-cov show -output-dir=out/report -format=html -instr-profile=/home/syeahmed/workspace/pytorch/tools/code_coverage/package/util/../../profile/merged/test_jit.merged -object /home/syeahmed/workspace/pytorch/build/bin/test_jit\n"))),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"--run-only")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--interest-only")," options to create focused reports (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pytorch/pytorch/blob/master/tools/code_coverage/README.md"},"README"),")")))))}u.isMDXComponent=!0}}]);