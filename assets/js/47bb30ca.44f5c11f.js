"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7817],{570:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var r=n(4848),i=n(8453);const a={},o="What is Program Analysis?",t={id:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/program_analysis",title:"What is Program Analysis?",description:"- Process of automatically discovering useful facts about program.",source:"@site/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/3_program_analysis.md",sourceDirName:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis",slug:"/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/program_analysis",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/program_analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/3_program_analysis.md?plain=1",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Course VM and Lab Instructions",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/course_vm_lab"},next:{title:"Discovering Invariants by Dynamic and Static Analysis",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/discover_invariants"}},l={},c=[{value:"Dynamic Program Analysis",id:"dynamic-program-analysis",level:2},{value:"Static Analysis",id:"static-analysis",level:2}];function d(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"what-is-program-analysis",children:"What is Program Analysis?"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Process of ",(0,r.jsx)(e.strong,{children:"automatically"})," discovering useful facts about program."]}),"\n",(0,r.jsx)(e.li,{children:"Example useful fact: programming error, security vulnerabilities, overflow etc."}),"\n",(0,r.jsxs)(e.li,{children:["Analysis classified broadly into 3 kinds:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Dynamic: runtime analysis, runs the program, observes its behavior."}),"\n",(0,r.jsx)(e.li,{children:"Static: compile-time analysis, inspects source/binary code."}),"\n",(0,r.jsx)(e.li,{children:"Hybrid: combines both dynamic and static, use runtime and compile-time in interesting ways."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"dynamic-program-analysis",children:"Dynamic Program Analysis"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Monitors program runs and collects facts of the program."}),"\n",(0,r.jsxs)(e.li,{children:["Examples:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Purify"}),": checks memory accesses, array bounds in C/C++."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Valgrind"}),": detects memory leaks in x86 binaries. ",(0,r.jsx)(e.strong,{children:"Memory leak"})," is when program fails to ",(0,r.jsx)(e.code,{children:"free"})," allocated memories."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Eraser"}),": detects data races in concurrent programs. ",(0,r.jsx)(e.strong,{children:"Data race"})," happens when two threads access the same memory location and at least one thread is doing a write. Data race indicates programming error as order of accesses can produce different results between runs."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Daikon"}),": finds likely invariants. ",(0,r.jsx)(e.strong,{children:"Invariants"})," are program facts that is true in every run of the program."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"static-analysis",children:"Static Analysis"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Inspects source/binary code and collects facts of the program"}),"\n",(0,r.jsxs)(e.li,{children:["Examples:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Lint"}),", ",(0,r.jsx)(e.code,{children:"FindBugs"}),", ",(0,r.jsx)(e.code,{children:"Coverity"}),": inspects C++/Java for suspicious error patterns."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Microsoft SLAM"}),": checks C programs conforms to API usage rules. Windows developers use this to check whether device drivers use windows kernel API correctly."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Facebook Infer"}),": detects memory leaks in Android apps."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ESC/Java"}),": specifies and verifies invariants in java programs."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(d,{...s})}):d(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>o,x:()=>t});var r=n(6540);const i={},a=r.createContext(i);function o(s){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:o(s.components),r.createElement(a.Provider,{value:e},s.children)}}}]);