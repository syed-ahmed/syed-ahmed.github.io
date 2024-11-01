"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2500],{5129:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var c=o(4848),t=o(8453);const r={},l="Code Coverage",i={id:"MISC/code_cov",title:"Code Coverage",description:"With g++ and lcov",source:"@site/docs/MISC/code_cov.md",sourceDirName:"MISC",slug:"/MISC/code_cov",permalink:"/docs/MISC/code_cov",draft:!1,unlisted:!1,editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/MISC/code_cov.md?plain=1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vectors",permalink:"/docs/Linear Algebra/lin_alg_1/Chapter 1/vectors"},next:{title:"Colorize Terminal",permalink:"/docs/MISC/colorize_terminal"}},d={},s=[{value:"With g++ and lcov",id:"with-g-and-lcov",level:2},{value:"With clang and llvm-cov",id:"with-clang-and-llvm-cov",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,c.jsx)(n.h2,{id:"with-g-and-lcov",children:"With g++ and lcov"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Compile with no optimization: ",(0,c.jsx)(n.code,{children:"-O0 --coverage"}),". Will output ",(0,c.jsx)(n.code,{children:"*.gcno"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["Run the binary. Will output ",(0,c.jsx)(n.code,{children:"*.gcda"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["Generate lcov trace from the directory with ",(0,c.jsx)(n.code,{children:"*.gcda"}),"s:","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"lcov --rc lcov_branch_coverage=1 --capture --directory . --output-file coverage.info\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["Generate htmls:","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"genhtml --rc genhtml_branch_coverage=1 coverage.info --output-directory out\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["Note: you need the ",(0,c.jsx)(n.code,{children:"rc"})," flags to show branch coverage."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"with-clang-and-llvm-cov",children:"With clang and llvm-cov"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Follow the instructions in: ",(0,c.jsx)(n.a,{href:"https://clang.llvm.org/docs/SourceBasedCodeCoverage.html",children:"https://clang.llvm.org/docs/SourceBasedCodeCoverage.html"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var c=o(6540);const t={},r=c.createContext(t);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);