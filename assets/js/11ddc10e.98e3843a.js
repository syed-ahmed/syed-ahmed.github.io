"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Course VM and Lab Instructions",s={unversionedId:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/course_vm_lab",id:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/course_vm_lab",title:"Course VM and Lab Instructions",description:"- Labs in https://github.com/syed-ahmed/cis547vm",source:"@site/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/2_course_vm_lab.md",sourceDirName:"LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis",slug:"/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/course_vm_lab",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/course_vm_lab",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/2_course_vm_lab.md?plain=1",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"From Software Bugs to Security Vulnerabilities",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/reading_1"},next:{title:"What is Program Analysis?",permalink:"/docs/LLVM/CIS 547 Software Analysis/Module 1: Introduction to Software Analysis/program_analysis"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"course-vm-and-lab-instructions"},"Course VM and Lab Instructions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Labs in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/syed-ahmed/cis547vm"},"https://github.com/syed-ahmed/cis547vm")),(0,a.kt)("li",{parentName:"ul"},"Also available in a docker container:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull cis547/cis547vm\n"))),(0,a.kt)("li",{parentName:"ul"},"Run docker container:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name cis547 cis547/cis547vm\n# enable gdb in linux with the following command\ndocker run -it --cap-add=SYS_PTRACE --security-opt seccomp=unconfined --privileged --name cis547 cis547/cis547vm\n"))),(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"exit")," to exit the container. Changes will persist inside the container."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"attach")," to continue work:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker start cis547\ndocker attach cis547\n"))),(0,a.kt)("li",{parentName:"ul"},"Use docker volume to mount local code:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -v <my_local_repo_directory>:<a directory inside docker continer> cis547/cis547vm\n"))),(0,a.kt)("li",{parentName:"ul"},"Use docker copy to copy files from continer to host:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp cis547:[CONTAINER PATH] [HOST PATH]\n")))))}d.isMDXComponent=!0}}]);