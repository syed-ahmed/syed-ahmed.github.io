"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4608],{1579:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(7294),l=a(8790),o=a(2600),c=a(1548),r=a(6010),i=a(5537),s=a(7462);function d(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=a(5999);const u={collapseSidebarButton:"collapseSidebarButton_FykI",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_DTRl"};function b(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",u.collapseSidebarButton),onClick:t},n.createElement(d,{className:u.collapseSidebarButtonIcon}))}var p=a(9960),h=a(3919),E=a(541);const f={menuHtmlItem:"menuHtmlItem_fVIQ",menuExternalLink:"menuExternalLink_tcZa"};var g=a(2389);function k(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(_,(0,s.Z)({item:t},a));case"html":return n.createElement(v,(0,s.Z)({item:t},a));default:return n.createElement(S,(0,s.Z)({item:t},a))}}function _(e){let{item:t,onItemClick:a,activePath:l,level:o,index:i,...d}=e;const{items:u,label:b,collapsible:h,className:E,href:f}=t,k=function(e){const t=(0,g.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),_=(0,c._F)(t,l),v=(0,c.Mg)(f,l),{collapsed:S,setCollapsed:C}=(0,c.uR)({initialState:()=>!!h&&(!_&&t.collapsed)});!function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,c.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:_,collapsed:S,setCollapsed:C});const{expandedItem:T,setExpandedItem:N}=(0,c.fP)();function Z(e){void 0===e&&(e=!S),N(e?null:i),C(e)}const{autoCollapseSidebarCategories:M}=(0,c.LU)();return(0,n.useEffect)((()=>{h&&T&&T!==i&&M&&C(!0)}),[h,T,i,C,M]),n.createElement("li",{className:(0,r.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":S},E)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},n.createElement(p.Z,(0,s.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!f,"menu__link--active":_}),onClick:h?e=>{a?.(t),f?Z(!1):(e.preventDefault(),Z())}:()=>{a?.(t)},"aria-current":v?"page":void 0,"aria-expanded":h?!S:void 0,href:h?k??"#":k},d),b),f&&h&&n.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),Z()}})),n.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},n.createElement(I,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:l,level:o+1})))}function v(e){let{item:t,level:a,index:l}=e;const{value:o,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,r.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(a),i&&`${f.menuHtmlItem} menu__list-item`,s),key:l,dangerouslySetInnerHTML:{__html:o}})}function S(e){let{item:t,onItemClick:a,activePath:l,level:o,index:i,...d}=e;const{href:m,label:u,className:b}=t,g=(0,c._F)(t,l),k=(0,h.Z)(m);return n.createElement("li",{className:(0,r.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),key:u},n.createElement(p.Z,(0,s.Z)({className:(0,r.Z)("menu__link",!k&&f.menuExternalLink,{"menu__link--active":g}),"aria-current":g?"page":void 0,to:m},k&&{onClick:a?()=>a(t):void 0},d),u,!k&&n.createElement(E.Z,null)))}function C(e){let{items:t,...a}=e;return n.createElement(c.D_,null,t.map(((e,t)=>n.createElement(k,(0,s.Z)({key:t,item:e,index:t},a)))))}const I=(0,n.memo)(C),T={menu:"menu_izAj",menuWithAnnouncementBar:"menuWithAnnouncementBar_l2a_"};function N(e){let{path:t,sidebar:a,className:l}=e;const o=function(){const{isActive:e}=(0,c.nT)(),[t,a]=(0,n.useState)(e);return(0,c.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",T.menu,o&&T.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,r.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(I,{items:a,activePath:t,level:1})))}const Z={sidebar:"sidebar_RiAD",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_d0QC",sidebarHidden:"sidebarHidden_Lg_2",sidebarLogo:"sidebarLogo_YUvz"};function M(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const{navbar:{hideOnScroll:s},hideableSidebar:d}=(0,c.LU)();return n.createElement("div",{className:(0,r.Z)(Z.sidebar,s&&Z.sidebarWithHideableNavbar,o&&Z.sidebarHidden)},s&&n.createElement(i.Z,{tabIndex:-1,className:Z.sidebarLogo}),n.createElement(N,{path:t,sidebar:a}),d&&n.createElement(b,{onClick:l}))}const L=n.memo(M),y=e=>{let{sidebar:t,path:a}=e;const l=(0,c.el)();return n.createElement("ul",{className:(0,r.Z)(c.kM.docs.docSidebarMenu,"menu__list")},n.createElement(I,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function B(e){return n.createElement(c.Zo,{component:y,props:e})}const A=n.memo(B);function x(e){const t=(0,c.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(L,e),l&&n.createElement(A,e))}var w=a(4608);const H={backToTopButton:"backToTopButton_RiI4",backToTopButtonShow:"backToTopButtonShow_ssHd"},F=300,P=!1;function D(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=P?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}function R(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:o}=D();return(0,c.RF)(((e,n)=>{let{scrollY:l}=e;const c=n?.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=l<c;if(r||o(),l<F)t(!1);else if(r){const e=document.documentElement.scrollHeight;l+window.innerHeight<e&&t(!0)}else t(!1)})),(0,c.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",c.kM.common.backToTopButton,H.backToTopButton,e&&H.backToTopButtonShow),type:"button",onClick:()=>l()})}var W=a(6550);const z={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};var Y=a(4739);function q(e){let{currentDocRoute:t,versionMetadata:a,children:l,sidebarName:i}=e;const s=(0,c.Vq)(),{pluginId:u,version:b}=a,[p,h]=(0,n.useState)(!1),[E,f]=(0,n.useState)(!1),g=(0,n.useCallback)((()=>{E&&f(!1),h((e=>!e))}),[E]);return n.createElement(n.Fragment,null,n.createElement(Y.Z,{version:b,tag:(0,c.os)(u,b)}),n.createElement(o.Z,null,n.createElement("div",{className:z.docPage},n.createElement(R,null),s&&n.createElement("aside",{className:(0,r.Z)(c.kM.docs.docSidebarContainer,z.docSidebarContainer,p&&z.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(z.docSidebarContainer)&&p&&f(!0)}},n.createElement(x,{key:i,sidebar:s,path:t.path,onCollapse:g,isHidden:E}),E&&n.createElement("div",{className:z.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:g,onClick:g},n.createElement(d,{className:z.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(z.docMainContainer,(p||!s)&&z.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",z.docItemWrapper,p&&z.docItemWrapperEnhanced)},l)))))}function U(e){const{route:{routes:t},versionMetadata:a,location:o}=e,i=t.find((e=>(0,W.LX)(o.pathname,e)));if(!i)return n.createElement(w.default,null);const s=i.sidebar,d=s?a.docsSidebars[s]:null;return n.createElement(c.FG,{className:(0,r.Z)(c.kM.wrapper.docsPages,c.kM.page.docsDocPage,a.className)},n.createElement(c.qu,{version:a},n.createElement(c.bT,{sidebar:d??null},n.createElement(q,{currentDocRoute:i,versionMetadata:a,sidebarName:s},(0,l.H)(t,{versionMetadata:a})))))}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294),l=a(2600),o=a(5999),c=a(1548);function r(){return n.createElement(n.Fragment,null,n.createElement(c.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(l.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);