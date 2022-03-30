"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1473],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4589:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"vivado-internal-params",title:"Use All Tunable Vivado Internal Params",authors:"syed",tags:["vivado","fpga","tcl"]},p=void 0,s={permalink:"/blog/vivado-internal-params",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/blog/2020-03-31-use-all-tunable-vivado-internal-params/index.md?plain=1",source:"@site/blog/2020-03-31-use-all-tunable-vivado-internal-params/index.md",title:"Use All Tunable Vivado Internal Params",description:"So I learned about this parameter that can be set in vivado, called place.debugShape, for my overlay generation work. It was referred in one of the tcl scripts in RapidWright with the command setparam place.debugShape $shapesFileName. Studying the tcl commands guide, I found out, you can list the description of this property using reportparam -nondefault, which suggests place.debugShape is an internal knob. A caveat of the reportparam command is that, it only lists these internal params when it is changed from its default value (you can know its default value by getparam). That is, reportparam -non_default won't show you all the internal knobs that are in vivado.",date:"2020-03-31T00:00:00.000Z",formattedDate:"March 31, 2020",tags:[{label:"vivado",permalink:"/blog/tags/vivado"},{label:"fpga",permalink:"/blog/tags/fpga"},{label:"tcl",permalink:"/blog/tags/tcl"}],readingTime:1.865,truncated:!0,authors:[{name:"Syed Tousif Ahmed",title:"Software Engineer",url:"https://syed.sh",imageURL:"https://github.com/syed-ahmed/syed-ahmed.github.io/raw/main/website/static/img/profile-pic1.jpg",key:"syed"}],frontMatter:{slug:"vivado-internal-params",title:"Use All Tunable Vivado Internal Params",authors:"syed",tags:["vivado","fpga","tcl"]},prevItem:{title:"Creating Vivado Hardware Platform using YAML",permalink:"/blog/yaml-based-vivado-hardware-project"}},c={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So I learned about this parameter that can be set in vivado, called ",(0,o.kt)("inlineCode",{parentName:"p"},"place.debugShape"),", for my overlay generation work. It was referred in one of the tcl scripts in RapidWright with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"set_param place.debugShape $shapesFileName"),". Studying the tcl commands guide, I found out, you can list the description of this property using ",(0,o.kt)("inlineCode",{parentName:"p"},"report_param -non_default"),", which suggests ",(0,o.kt)("inlineCode",{parentName:"p"},"place.debugShape")," is an internal knob. A caveat of the report_param command is that, it only lists these internal params when it is changed from its default value (you can know its default value by ",(0,o.kt)("inlineCode",{parentName:"p"},"get_param"),"). That is, ",(0,o.kt)("inlineCode",{parentName:"p"},"report_param -non_default")," won't show you all the internal knobs that are in vivado. "),(0,o.kt)("p",null,"Now that you have some context, it got me thinking are there other useful params which we should know about? Looks like somebody asked the same ",(0,o.kt)("a",{parentName:"p",href:"https://forums.xilinx.com/t5/Vivado-TCL-Community/lt-list-param-gt-not-listing-a-lot/td-p/998194"},"question")," in Xilinx's forum, but received a reply from Xilinx saying those are internal and thou shall not use it.\nWhen using the ",(0,o.kt)("inlineCode",{parentName:"p"},"place.debugShape")," in my scripts, I saw some outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Shape builder is called from:\nStack:\n/opt/Xilinx/Vivado/2018.3/lib/lnx64.o/librdi_place.so(HAPLPlacerShapeBuilder::buildShapes(HDPLNewShapeDB&, HSTPtrHashSet&, HDPLTask&, HAPLPlaceApi*, HDPLControlSetDB const*,\n/opt/Xilinx/Vivado/2018.3/lib/lnx64.o/librdi_implflow.so(HAPLFFastFlow3::place(HAPLFFastFlowParam const&, HAPLFMigPblockInfo const*)+0x12cf) [0x7f51a8e7bb3f]\n/opt/Xilinx/Vivado/2018.3/lib/lnx64.o/libtcl8.5.so(+0x334af) [0x7f51ccef74af]\n")),(0,o.kt)("p",null,"which looked like a familiar pattern - a frontend (tcl) binding to a C++ backend. So I was like, ok, may be if I grep the object dump of one of these ",(0,o.kt)("inlineCode",{parentName:"p"},".so"),", I could get the params? That didn't work. But what did work was, when I treated the ",(0,o.kt)("inlineCode",{parentName:"p"},".so"),' in grep as a text file and searched for a "something-dot-camelCase" pattern, and voila, everything was in plain sight:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"place.debugCongestion\nplace.debugCrash\nplace.debugFFGroup\nplace.debugLightTimer\nplace.debugMacroInterleavingOptimization\nplace.debugShape\nplace.debugShapeAppend\nplace.debugWireLen\n...\n")),(0,o.kt)("p",null,"And many more such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"logicopt.allowEmptyHierCellNets\nlogicopt.allowEmptyHierCells\nlogicopt.allowInverterPushing\nlogicopt.annotateModifiedPrims\nlogicopt.applyFinishingTouch\nlogicopt.applyLogicProp\nlogicopt.applyPostPwroptCleanup\nlogicopt.applyRestruct\n...\n")),(0,o.kt)("p",null,"Similarly, there are tuneable params that look like ",(0,o.kt)("inlineCode",{parentName:"p"},"synth.*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"route.*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"power.*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"timing.*"),". in their respective ",(0,o.kt)("inlineCode",{parentName:"p"},"librdi_*.so"),". That's all for this post. May be if you have a use-case, where you wanted vivado to do something, but it's not visible, one of these parameters might come into use! Of course I get Xilinx's point about these being internal knobs ;)."),(0,o.kt)("p",null,"FYI following is the command with regex I used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grep -a -o -E '[a-zA-Z0-9]{3,}.[a-z]([a-z0-9][A-Z][A-Z0-9][a-z]|[A-Z0-9][a-z][a-z0-9][A-Z])[a-ZA-Z0-9]{3,}' /opt/Xilinx/Vivado/2018.3/lib/lnx64.o/librdi_place.so\n")),(0,o.kt)("p",null,"You can find about 5000 of the params I scraped, in this repository: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/syed-ahmed/vivado-hacks"},"https://github.com/syed-ahmed/vivado-hacks")))}m.isMDXComponent=!0}}]);