"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1165],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3745:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={},s="Anatomy of a Static Analysis",c={unversionedId:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/static_analysis_anatomy",id:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/static_analysis_anatomy",title:"Anatomy of a Static Analysis",description:"Example Static Analysis Problem",source:"@site/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/5_static_analysis_anatomy.md",sourceDirName:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis",slug:"/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/static_analysis_anatomy",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/static_analysis_anatomy",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/5_static_analysis_anatomy.md?plain=1",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discovering Invariants by Dynamic and Static Analysis",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/discover_invariants"},next:{title:"Installing LLVM",permalink:"/docs/LLVM/llvm_techniques/Section 1/install"}},p={},u=[{value:"Example Static Analysis Problem",id:"example-static-analysis-problem",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Control-flow graph",id:"control-flow-graph",level:3},{value:"Abstract vs. concrete states",id:"abstract-vs-concrete-states",level:3},{value:"Termination",id:"termination",level:3},{value:"Completeness",id:"completeness",level:3},{value:"Soundness",id:"soundness",level:3},{value:"Example Abstract Domain",id:"example-abstract-domain",level:2},{value:"Recap: Parts of a Static Analysis",id:"recap-parts-of-a-static-analysis",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anatomy-of-a-static-analysis"},"Anatomy of a Static Analysis"),(0,r.kt)("h2",{id:"example-static-analysis-problem"},"Example Static Analysis Problem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Problem: find variables that have a constant value at a given program point."),(0,r.kt)("li",{parentName:"ul"},"Example code:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void main() {\n    z = 3;\n    while (true) {\n        if(x == 1)\n            y = 7;\n        else\n            y = z + 4;\n        assert(y == 7);\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},"Formulate question as static analysis problem."),(0,r.kt)("li",{parentName:"ul"},"Static analysis can discover y = 7, at the end of each iteration of the loop.")),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("h3",{id:"control-flow-graph"},"Control-flow graph"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static analysis operates on a intermediate representation."),(0,r.kt)("li",{parentName:"ul"},"CFG is a representation of the program.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A DAG summarizes the flow of control in all possible runs of the program."),(0,r.kt)("li",{parentName:"ul"},"Each node refers to a unique statement in the program."),(0,r.kt)("li",{parentName:"ul"},"Each edge from a node is a successor of that node.")))),(0,r.kt)("h3",{id:"abstract-vs-concrete-states"},"Abstract vs. concrete states"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract state: static analysis tracking the variables at each program point."),(0,r.kt)("li",{parentName:"ul"},"Concrete state: actual values of the variables in a run."),(0,r.kt)("li",{parentName:"ul"},"Static analysis does not run the program -> so does not operate over concrete states. Operates over abstract states."),(0,r.kt)("li",{parentName:"ul"},"Abstract state -> set of concrete states -> known as abstract semantics -> vs concrete semantics."),(0,r.kt)("li",{parentName:"ul"},"Static analysis may fail to find variable value in abstract state -> represent it by ",(0,r.kt)("inlineCode",{parentName:"li"},"?"),".")),(0,r.kt)("h3",{id:"termination"},"Termination"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract semantics ensures termination of static analysis."),(0,r.kt)("li",{parentName:"ul"},"Can miss value of variable that are constant.")),(0,r.kt)("h3",{id:"completeness"},"Completeness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static analysis sacrifices completeness because it can miss values.")),(0,r.kt)("h3",{id:"soundness"},"Soundness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When analysis concludes the value of a variable, this is\ncorrect for all runs -> therefore static analysis is sound.")),(0,r.kt)("h2",{id:"example-abstract-domain"},"Example Abstract Domain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Designing static analysis is an art."),(0,r.kt)("li",{parentName:"ul"},"No best choice of abstract semantics. Concrete semantics dictated by program."),(0,r.kt)("li",{parentName:"ul"},"Different abstract semantic choice lead different results."),(0,r.kt)("li",{parentName:"ul"},"Right choice depends on the consumer of the analysis."),(0,r.kt)("li",{parentName:"ul"},"Designing an abstract semantic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Step 1: Design an abstract domain.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"shows possible abstract values each ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," variable can take."),(0,r.kt)("li",{parentName:"ul"},"also include two special values."),(0,r.kt)("li",{parentName:"ul"},"top -> ? -> unknown to the analysis."),(0,r.kt)("li",{parentName:"ul"},"bottom -> ","_","|","_"," -> underfined to the analysis."),(0,r.kt)("li",{parentName:"ul"},"arranged in a lattice structure -> showing possible order in which how values might changed as it goes through the analysis."),(0,r.kt)("li",{parentName:"ul"},"Example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Iterative Approximation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Initial state:    ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"abstract value top at the entry of the progam."),(0,r.kt)("li",{parentName:"ul"},"abstract value bottom at all other program points."),(0,r.kt)("li",{parentName:"ul"},"Implying nothing is visited except entry point, and that variables uninitialized at entry -> take arbitrary values."),(0,r.kt)("li",{parentName:"ul"},"Program point can be before, after or during for the node."),(0,r.kt)("li",{parentName:"ul"},"Assume program point as the edge for now."),(0,r.kt)("li",{parentName:"ul"},"Analysis updates the values at each program point."),(0,r.kt)("li",{parentName:"ul"},"Update is done based on the predecessor of the program point."),(0,r.kt)("li",{parentName:"ul"},"E.g. after ",(0,r.kt)("inlineCode",{parentName:"li"},"z = 3"),", analysis updates z's abstract value to 3. True branch is always taken. False branch is infeasible -> program will never take that path. Should analysis interpret conditional? If not interpret conditional, assume false state is feasible.\nChecking value of ",(0,r.kt)("inlineCode",{parentName:"li"},"x==1"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"x!=1")," cannot be represented by our domain. x is some value other than 1. represent as unknown in the false branch and 1 in the true branch.\n",(0,r.kt)("inlineCode",{parentName:"li"},"y=7"),", analysis knows ",(0,r.kt)("inlineCode",{parentName:"li"},"y=7"),". Analysis concludes ",(0,r.kt)("inlineCode",{parentName:"li"},"x=1, y=7, z=3 "),". For ",(0,r.kt)("inlineCode",{parentName:"li"},"y = z + 4"),",\nanalysis has seen ",(0,r.kt)("inlineCode",{parentName:"li"},"z=3")," befor this path, so\nit include ",(0,r.kt)("inlineCode",{parentName:"li"},"y=7"),", and concludes assertion is valid."),(0,r.kt)("li",{parentName:"ul"},"Iterative approximation -> analysis can visit same program point multiple times -> due to presence of loops -> to update facts."))))))),(0,r.kt)("li",{parentName:"ul"},"Another Example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Iterative Approximation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"abstract value top at the entry and bottom everywhere else."),(0,r.kt)("li",{parentName:"ul"},"Program points: loop header, entry of loop body, exit of loop body."),(0,r.kt)("li",{parentName:"ul"},"Take looping into consideration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"b=1")," at the entry, at the exit it's 2."),(0,r.kt)("li",{parentName:"ul"},"Analysis revisits loop again to show soundness."),(0,r.kt)("li",{parentName:"ul"},"At the next entry, b can be 1 or 2, b updated to unknown."),(0,r.kt)("li",{parentName:"ul"},"At the exit, updated to unknown as well."),(0,r.kt)("li",{parentName:"ul"},"Analyse loop again, concludes b has saturated at entry and exit. Correct value of b is unknown."),(0,r.kt)("li",{parentName:"ul"},"Combining multiple abstract state is called merging."),(0,r.kt)("li",{parentName:"ul"},"Combination operator -> form of conjuction ->\nfor ",(0,r.kt)("inlineCode",{parentName:"li"},"b=1"),", it must be ",(0,r.kt)("inlineCode",{parentName:"li"},"=1")," in all paths. When merge states from 1st and 2nd iteration, ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," is unknown. If trying to prove, ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," may be ",(0,r.kt)("inlineCode",{parentName:"li"},"= 1"),", define combination op\nas a disjunction. If ",(0,r.kt)("inlineCode",{parentName:"li"},"b=1")," on atleast 1 program path, it should ",(0,r.kt)("inlineCode",{parentName:"li"},"=1")," in abstract state."),(0,r.kt)("li",{parentName:"ul"},"This choice made by analysis designer based on consumer and tradeoffs.")))))))))),(0,r.kt)("h2",{id:"recap-parts-of-a-static-analysis"},"Recap: Parts of a Static Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specify program representation precisely: CFG, AST, bytecode."),(0,r.kt)("li",{parentName:"ul"},"Specify abstract domain -> how to approximate program values."),(0,r.kt)("li",{parentName:"ul"},"Specify transfer functions -> how to calculate abstract state given program statement -> also specific how to combine information at control point -> assignments, conditionals, merge points."),(0,r.kt)("li",{parentName:"ul"},"Specify fixed-point computation algorithm -> invokes transfer functions of program statements -> fixed point means abstract states are no longer changing, so analysis should terminate."),(0,r.kt)("li",{parentName:"ul"},"At each step, many choices -> choice dependent on the application and tradeoff -> there is no one-size-fits-all static analysis.")))}d.isMDXComponent=!0}}]);