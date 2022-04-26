"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||c;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4811:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={},u="Docker Cheatsheet",l={unversionedId:"MISC/docker",id:"MISC/docker",title:"Docker Cheatsheet",description:"- Pull an image:",source:"@site/docs/MISC/docker.md",sourceDirName:"MISC",slug:"/MISC/docker",permalink:"/docs/MISC/docker",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/MISC/docker.md?plain=1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conda commands",permalink:"/docs/MISC/conda"},next:{title:"Set repository specific user name and email",permalink:"/docs/MISC/git_local_user"}},p={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"docker-cheatsheet"},"Docker Cheatsheet"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Pull an image:",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull pytorch/pytorch # no cuda toolkit\n# or\ndocker pull pytorch/pytorch:1.11.0-cuda11.3-cudnn8-devel # with cuda toolkit\n# or\ndocker pull nvcr.io/nvidia/pytorch:22.03-py3 # nvidia optimized, has nsight\n"))),(0,c.kt)("li",{parentName:"ul"},"Run docker image:",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"docker run --gpus all -it --rm --ipc=host --security-opt seccomp=unconfined --network=host -v <mount_host_folder>:<mount_folder_inside_container> nvcr.io/nvidia/pytorch:22.03-py3\n")))))}m.isMDXComponent=!0}}]);