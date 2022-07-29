"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6479],{3905:(i,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>p});var r=n(7294);function t(i,e,n){return e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function S(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.push.apply(n,r)}return n}function a(i){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){t(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}function o(i,e){if(null==i)return{};var n,r,t=function(i,e){if(null==i)return{};var n,r,t={},S=Object.keys(i);for(r=0;r<S.length;r++)n=S[r],e.indexOf(n)>=0||(t[n]=i[n]);return t}(i,e);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(i);for(r=0;r<S.length;r++)n=S[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}var l=r.createContext({}),s=function(i){var e=r.useContext(l),n=e;return i&&(n="function"==typeof i?i(e):a(a({},e),i)),n},c=function(i){var e=s(i.components);return r.createElement(l.Provider,{value:e},i.children)},d={inlineCode:"code",wrapper:function(i){var e=i.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(i,e){var n=i.components,t=i.mdxType,S=i.originalType,l=i.parentName,c=o(i,["components","mdxType","originalType","parentName"]),u=s(n),p=t,b=u["".concat(l,".").concat(p)]||u[p]||d[p]||S;return n?r.createElement(b,a(a({ref:e},c),{},{components:n})):r.createElement(b,a({ref:e},c))}));function p(i,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof i||t){var S=n.length,a=new Array(S);a[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=i,o.mdxType="string"==typeof i?i:t,a[1]=o;for(var s=2;s<S;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7588:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>S,metadata:()=>o,toc:()=>s});var r=n(7462),t=(n(7294),n(3905));const S={},a="Exercise 1",o={unversionedId:"PyTorch/nvfuser_exercises/exercise_1",id:"PyTorch/nvfuser_exercises/exercise_1",title:"Exercise 1",description:"In this exercise we will:",source:"@site/docs/PyTorch/nvfuser_exercises/exercise_1.md",sourceDirName:"PyTorch/nvfuser_exercises",slug:"/PyTorch/nvfuser_exercises/exercise_1",permalink:"/docs/PyTorch/nvfuser_exercises/exercise_1",editUrl:"https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/docs/PyTorch/nvfuser_exercises/exercise_1.md?plain=1",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting code coverage info in PyTorch",permalink:"/docs/PyTorch/code_coverage"}},l={},s=[{value:"Reading TorchScript IR",id:"reading-torchscript-ir",level:2},{value:"Lower to Fusion IR",id:"lower-to-fusion-ir",level:2},{value:"nvFuser Basics",id:"nvfuser-basics",level:2}],c={toc:s};function d(i){let{components:e,...n}=i;return(0,t.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"exercise-1"},"Exercise 1"),(0,t.kt)("p",null,"In this exercise we will:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Read a TorchScript IR using ",(0,t.kt)("inlineCode",{parentName:"li"},"torch::jit::parseIR"),"."),(0,t.kt)("li",{parentName:"ul"},"Lower TorchScript IR to nvFuser Fusion IR using ",(0,t.kt)("inlineCode",{parentName:"li"},"torch::jit::fuser::cuda::parseJitIR"),"."),(0,t.kt)("li",{parentName:"ul"},"Print the Fusion IR, understand ",(0,t.kt)("inlineCode",{parentName:"li"},"parseJitIR")," and nvFuser basics.")),(0,t.kt)("h1",{id:"solution"},"Solution"),(0,t.kt)("h2",{id:"reading-torchscript-ir"},"Reading TorchScript IR"),(0,t.kt)("p",null,"In these set of exercises, it doesn't really matter why we are using TorchScript as the input.\nWe want to focus on nvFuser Fusion IR and we can get to Fusion IR from TorchScript IR quickly."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Create a C++ source file and start adding the\nnecessary headers:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre"},"```cpp\n#include <torch/csrc/jit/ir/ir.h>\n#include <torch/csrc/jit/ir/irparser.h>\n\n#include <iostream>\n```\n"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Create a graph object:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"auto g = torch::jit::Graph();\n"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Parse a TorchScript IR into the graph object:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},'const auto graph_str = R"IR(\n    graph(%0 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0),\n        %1 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %2 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %3 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %4 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %5 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0),\n        %6 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %7 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %8 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %9 : Float(256, strides=[1], requires_grad=0, device=cuda:0),\n        %10 : int):\n    %11 : float = prim::Constant[value=1.0000000000000001e-05]()\n    %12 : float = prim::Constant[value=0.10000000000000001]()\n    %13 : bool = prim::Constant[value=0]()\n    %14 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0), %15 : Tensor, %16 : Tensor = aten::native_batch_norm(%5, %6, %7, %8, %9, %13, %12, %11)\n    %17 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0), %18 : Tensor, %19 : Tensor = aten::native_batch_norm(%0, %1, %2, %3, %4, %13, %12, %11)\n    %20 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0) = aten::add(%17, %14, %10)\n    %21 : Float(8, 256, 56, 56, strides=[802816, 3136, 56, 1], requires_grad=0, device=cuda:0) = aten::relu(%20)\n    return (%21))IR";\ntorch::jit::parseIR(graph_str, &g);\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Print the graph to convince yourself that the parser did its job:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"std::cout << g << std::endl;\n")))),(0,t.kt)("h2",{id:"lower-to-fusion-ir"},"Lower to Fusion IR"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"First, add the necessary header to use ",(0,t.kt)("inlineCode",{parentName:"li"},"parseJitIR")," and ",(0,t.kt)("inlineCode",{parentName:"li"},"FusionGuard"),":",(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <torch/csrc/jit/codegen/cuda/executor.h>\n#include <torch/csrc/jit/codegen/cuda/parser.h>\n"))),(0,t.kt)("li",{parentName:"ul"},"We'll need to make some changes to how we created the graph object. ",(0,t.kt)("inlineCode",{parentName:"li"},"parseJitIR")," expects a ",(0,t.kt)("inlineCode",{parentName:"li"},"shared_ptr")," object. So we'll change our graph creation accordingly:",(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"auto g = std::make_shared<torch::jit::Graph>();\n"))),(0,t.kt)("li",{parentName:"ul"},"Now we can lower TorchScript IR to Fusion IR and print:",(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"auto fusion = torch::jit::fuser::cuda::parseJitIR(g);\ntorch::jit::fuser::cuda::FusionGuard fg(fusion.get());\nfusion.get()->print();\n")))),(0,t.kt)("h2",{id:"nvfuser-basics"},"nvFuser Basics"),(0,t.kt)("p",null,"TODO"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-llvm"},"\n%kernel {\nT22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ]\n   = broadcast( T3_g[ iS6{i7} ] )\nT23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]\n   = T0_g[ iS0{i0}, iS1{i2}, iS2{i3}, iS3{i4} ]\n   - T22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ];\nT24_l[ iS60{i8} ]\n   = T4_g[ iS7{i8} ]\n   + double(9.9999997473787516e-06);\nT25_l[ iS61{i8} ]\n   = rsqrtf(T24_l[ iS60{i8} ]);\nT26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ]\n   = broadcast( T25_l[ iS61{i8} ] )\nT29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]\n   = T23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]\n   * T26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ];\nT30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ]\n   = broadcast( T1_g[ iS4{i5} ] )\nT31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]\n   = T29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]\n   * T30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ];\nT32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ]\n   = broadcast( T2_g[ iS5{i6} ] )\nT33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]\n   = T31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]\n   + T32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ];\nT10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ]\n   = broadcast( T8_g[ iS14{i15} ] )\nT11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]\n   = T5_g[ iS8{i9}, iS9{i10}, iS10{i11}, iS11{i12} ]\n   - T10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ];\nT12_l[ iS24{i16} ]\n   = T9_g[ iS15{i16} ]\n   + double(9.9999997473787516e-06);\nT13_l[ iS25{i16} ]\n   = rsqrtf(T12_l[ iS24{i16} ]);\nT14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ]\n   = broadcast( T13_l[ iS25{i16} ] )\nT17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]\n   = T11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]\n   * T14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ];\nT18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ]\n   = broadcast( T6_g[ iS12{i13} ] )\nT19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]\n   = T17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]\n   * T18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ];\nT20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ]\n   = broadcast( T7_g[ iS13{i14} ] )\nT21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]\n   = T19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]\n   + T20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ];\nd116 = (double)(i17);\nT34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ]\n   = T21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]\n   * d116;\nT35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]\n   = T33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]\n   + T34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ];\nT36_g[ iS96{i0}, iS97{i2}, iS98{i3}, iS99{i4} ]\n   = relu(T35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]);\n\nTransformPrinter : \nT0_g[ iS0{i0}, iS1{i2}, iS2{i3}, iS3{i4} ]\n root domain : (iS0{i0},iS1{i2},iS2{i3},iS3{i4})\nT3_g[ iS6{i7} ]\n root domain : (iS6{i7})\nT22_l[ bS52{1}, iS53{i7}, bS54{1}, bS55{1} ]\n root domain : (bS52{1},iS53{i7},bS54{1},bS55{1})\nT23_l[ iS56{i0}, iS57{i2}, iS58{i3}, iS59{i4} ]\n root domain : (iS56{i0},iS57{i2},iS58{i3},iS59{i4})\nT4_g[ iS7{i8} ]\n root domain : (iS7{i8})\nT24_l[ iS60{i8} ]\n root domain : (iS60{i8})\nT25_l[ iS61{i8} ]\n root domain : (iS61{i8})\nT26_l[ bS62{1}, iS63{i8}, bS64{1}, bS65{1} ]\n root domain : (bS62{1},iS63{i8},bS64{1},bS65{1})\nT29_l[ iS68{i0}, iS69{i2}, iS70{i3}, iS71{i4} ]\n root domain : (iS68{i0},iS69{i2},iS70{i3},iS71{i4})\nT1_g[ iS4{i5} ]\n root domain : (iS4{i5})\nT30_l[ bS72{1}, iS73{i5}, bS74{1}, bS75{1} ]\n root domain : (bS72{1},iS73{i5},bS74{1},bS75{1})\nT31_l[ iS76{i0}, iS77{i2}, iS78{i3}, iS79{i4} ]\n root domain : (iS76{i0},iS77{i2},iS78{i3},iS79{i4})\nT2_g[ iS5{i6} ]\n root domain : (iS5{i6})\nT32_l[ bS80{1}, iS81{i6}, bS82{1}, bS83{1} ]\n root domain : (bS80{1},iS81{i6},bS82{1},bS83{1})\nT33_l[ iS84{i0}, iS85{i2}, iS86{i3}, iS87{i4} ]\n root domain : (iS84{i0},iS85{i2},iS86{i3},iS87{i4})\nT5_g[ iS8{i9}, iS9{i10}, iS10{i11}, iS11{i12} ]\n root domain : (iS8{i9},iS9{i10},iS10{i11},iS11{i12})\nT8_g[ iS14{i15} ]\n root domain : (iS14{i15})\nT10_l[ bS16{1}, iS17{i15}, bS18{1}, bS19{1} ]\n root domain : (bS16{1},iS17{i15},bS18{1},bS19{1})\nT11_l[ iS20{i9}, iS21{i10}, iS22{i11}, iS23{i12} ]\n root domain : (iS20{i9},iS21{i10},iS22{i11},iS23{i12})\nT9_g[ iS15{i16} ]\n root domain : (iS15{i16})\nT12_l[ iS24{i16} ]\n root domain : (iS24{i16})\nT13_l[ iS25{i16} ]\n root domain : (iS25{i16})\nT14_l[ bS26{1}, iS27{i16}, bS28{1}, bS29{1} ]\n root domain : (bS26{1},iS27{i16},bS28{1},bS29{1})\nT17_l[ iS32{i9}, iS33{i10}, iS34{i11}, iS35{i12} ]\n root domain : (iS32{i9},iS33{i10},iS34{i11},iS35{i12})\nT6_g[ iS12{i13} ]\n root domain : (iS12{i13})\nT18_l[ bS36{1}, iS37{i13}, bS38{1}, bS39{1} ]\n root domain : (bS36{1},iS37{i13},bS38{1},bS39{1})\nT19_l[ iS40{i9}, iS41{i10}, iS42{i11}, iS43{i12} ]\n root domain : (iS40{i9},iS41{i10},iS42{i11},iS43{i12})\nT7_g[ iS13{i14} ]\n root domain : (iS13{i14})\nT20_l[ bS44{1}, iS45{i14}, bS46{1}, bS47{1} ]\n root domain : (bS44{1},iS45{i14},bS46{1},bS47{1})\nT21_l[ iS48{i9}, iS49{i10}, iS50{i11}, iS51{i12} ]\n root domain : (iS48{i9},iS49{i10},iS50{i11},iS51{i12})\nT34_l[ iS88{i9}, iS89{i10}, iS90{i11}, iS91{i12} ]\n root domain : (iS88{i9},iS89{i10},iS90{i11},iS91{i12})\nT35_l[ iS92{i0}, iS93{i2}, iS94{i3}, iS95{i4} ]\n root domain : (iS92{i0},iS93{i2},iS94{i3},iS95{i4})\nT36_g[ iS96{i0}, iS97{i2}, iS98{i3}, iS99{i4} ]\n root domain : (iS96{i0},iS97{i2},iS98{i3},iS99{i4})\n}\n\n")))}d.isMDXComponent=!0}}]);