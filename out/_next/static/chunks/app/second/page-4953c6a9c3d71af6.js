(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{6121:function(e,t,r){"use strict";r.r(t);var n,o=r(952);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:35,height:35,fill:"none",className:"loading_svg__hds-flight-icon--animation-loading",viewBox:"0 0 16 16"},e),n||(n=o.createElement("g",{fill:"#4662D8",fillRule:"evenodd",clipRule:"evenodd"},o.createElement("path",{d:"M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8",opacity:.2}),o.createElement("path",{d:"M7.25.75A.75.75 0 0 1 8 0a8 8 0 0 1 8 8 .75.75 0 0 1-1.5 0A6.5 6.5 0 0 0 8 1.5a.75.75 0 0 1-.75-.75"}))))}},6462:function(e,t,r){Promise.resolve().then(r.bind(r,4335))},4817:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7437),o=r(562),a=r(2265),i=r(6121);function s(){return(0,n.jsx)("div",{className:"fixed left-0 top-0 z-50 h-full w-full bg-white opacity-75",children:(0,n.jsx)("div",{className:"mt-[50vh] flex items-center justify-center",children:(0,n.jsx)(i.default,{className:"animate-spin"})})})}function l(e){let{children:t}=e,[r,i]=(0,a.useState)("");return(0,a.useEffect)(function(){var e,t,r;i(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"blue"),null===(e=document.querySelector("html"))||void 0===e||e.setAttribute("data-theme",null!==(r=localStorage.getItem("theme"))&&void 0!==r?r:"blue")},[]),(0,a.useEffect)(function(){var e;r&&(localStorage.setItem("theme",r),null===(e=document.querySelector("html"))||void 0===e||e.setAttribute("data-theme",r))},[r]),(0,n.jsxs)(o.N.Provider,{value:{theme:r,setTheme:i},children:[""===r?(0,n.jsx)(s,{}):t,";"]})}},4335:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(7437),o=r(4817);function a(){return(0,n.jsx)("div",{className:"divide-y divide-gray-300/50",children:(0,n.jsxs)("div",{className:"space-y-6 py-4 text-base leading-7 text-gray-600",children:[(0,n.jsx)("h2",{className:"text-3xl text-primary",children:"두번째 페이지"}),(0,n.jsx)("p",{children:"provider를 사용하여 선택한 테마를 여러 페이지에 적용할 수 있습니다."}),(0,n.jsx)("div",{className:"pt-8 text-base font-semibold leading-7 border-t border-[#e9e9e9e9]",children:(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"/",className:"text-primary",children:"메인 페이지로 돌아가기 →"})})})]})})}function i(){return(0,n.jsx)(o.Z,{children:(0,n.jsxs)("div",{className:"relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"}),(0,n.jsx)("div",{className:"relative bg-white px-6 pt-10 pb-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10",children:(0,n.jsx)("div",{className:"mx-auto max-w-md",children:(0,n.jsx)(a,{})})})]})})}},562:function(e,t,r){"use strict";r.d(t,{N:function(){return n}});let n=(0,r(2265).createContext)(null)},622:function(e,t,r){"use strict";var n=r(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},7673:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,a={};function i(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}function s(){}function l(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var c=l.prototype=new s;c.constructor=l,o(c,i.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)u.call(t,o)&&!f.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:null}}},952:function(e,t,r){"use strict";e.exports=r(7673)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=6462)}),_N_E=e.O()}]);