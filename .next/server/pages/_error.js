(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},6968:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>m});var a=r(7093),i=r(5244),s=r(1323),o=r(1070),l=r(3893),d=r(6971),c=e([l]);l=(c.then?(await c)():c)[0];let u=(0,s.l)(d,"default"),p=(0,s.l)(d,"getStaticProps"),f=(0,s.l)(d,"getStaticPaths"),h=(0,s.l)(d,"getServerSideProps"),g=(0,s.l)(d,"config"),y=(0,s.l)(d,"reportWebVitals"),m=(0,s.l)(d,"unstable_getStaticProps"),x=(0,s.l)(d,"unstable_getStaticPaths"),b=(0,s.l)(d,"unstable_getStaticParams"),v=(0,s.l)(d,"unstable_getServerProps"),P=(0,s.l)(d,"unstable_getServerSideProps"),j=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:d});n()}catch(e){n(e)}})},6971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(167),a=r(997),i=n._(r(6689)),s=n._(r(7828)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:d.error,children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:d.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,a.jsx)("div",{style:d.wrap,children:(0,a.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return u}});let n=r(167),a=r(8760),i=r(997),s=a._(r(6689)),o=n._(r(7215)),l=r(8039),d=r(1988),c=r(5495);function u(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let i=!0,s=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){s=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return(0,i.jsx)(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6689),a=()=>{},i=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},600:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(997);r(6689);let a=({children:e})=>n.jsx("div",{id:"app-layout",children:e})},3893:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(997),i=r(600);r(108);var s=r(968),o=r.n(s);r(6689);var l=r(4091),d=r(3291),c=e([l,d]);[l,d]=c.then?(await c)():c;let u=function({Component:e,pageProps:t}){let r=e.getLayout??(e=>e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[a.jsx("title",{children:"Create Next App"}),a.jsx("meta",{name:"description",content:"Generated by create next app"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",rel:"stylesheet"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap",rel:"stylesheet"})]}),a.jsx(d.Provider,{store:l.h,children:a.jsx(i.Z,{children:r(a.jsx(e,{...t}))})})]})};n()}catch(e){n(e)}})},1070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(997),a=r(6859);function i(){return(0,n.jsxs)(a.Html,{lang:"en",children:[n.jsx(a.Head,{}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},6746:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Vr:()=>l,ZP:()=>c,Zz:()=>o});var a=r(3258),i=r(9648),s=e([a,i]);[a,i]=s.then?(await s)():s;let o=(0,a.createAsyncThunk)("article/getArticles",async()=>(await i.default.get("http://localhost:3002/api/article")).data.data),l=(0,a.createAsyncThunk)("article/getArticleById",async e=>(await i.default.get(`http://localhost:3002/api/article/${e}`)).data.data),d=(0,a.createSlice)({name:"article",initialState:{list:[],item:void 0},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,(e,t)=>{e.list=t.payload}),e.addCase(l.fulfilled,(e,t)=>{e.item=t.payload})}}),{}=d.actions,c=d.reducer;n()}catch(e){n(e)}})},4091:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{h:()=>o});var a=r(6746),i=r(3258),s=e([a,i]);[a,i]=s.then?(await s)():s;let o=(0,i.configureStore)({reducer:{article:a.ZP}});n()}catch(e){n(e)}})},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3258:e=>{"use strict";e.exports=import("@reduxjs/toolkit")},9648:e=>{"use strict";e.exports=import("axios")},3291:e=>{"use strict";e.exports=import("react-redux")},1017:e=>{"use strict";e.exports=require("path")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]}return a.default=e,n&&n.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[859],()=>r(6968));module.exports=n})();