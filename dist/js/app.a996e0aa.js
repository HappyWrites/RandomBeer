(function(){"use strict";var e={8130:function(e,t,r){var n=r(9242),o=r(3396);function a(e,t,r,n,a,i){const s=(0,o.up)("TheHeader"),c=(0,o.up)("router-view"),l=(0,o.up)("TheFooter");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s),(0,o.Wm)(c),(0,o.Wm)(l)])}const i=e=>((0,o.dD)("data-v-3db5c658"),e=e(),(0,o.Cn)(),e),s={class:"footer"},c=i((()=>(0,o._)("p",{class:"footer__author"},"© 2022 Anastasia Nazarova",-1))),l=[c];function u(e,t){return(0,o.wg)(),(0,o.iD)("footer",s,l)}var d=r(89);const f={},p=(0,d.Z)(f,[["render",u],["__scopeId","data-v-3db5c658"]]);var _=p,h=r.p+"img/header.ad875102.jpg";const b=e=>((0,o.dD)("data-v-b2bf9bfc"),e=e(),(0,o.Cn)(),e),m={class:"header"},v=b((()=>(0,o._)("a",{href:"#",target:"_blank"},[(0,o._)("img",{src:h,className:"header__logo",alt:"Логотип"})],-1))),g=[v];function w(e,t){return(0,o.wg)(),(0,o.iD)("header",m,g)}const k={},y=(0,d.Z)(k,[["render",w],["__scopeId","data-v-b2bf9bfc"]]);var D=y,j={name:"App",components:{TheHeader:D,TheFooter:_}};const B=(0,d.Z)(j,[["render",a],["__scopeId","data-v-4348f259"]]);var O=B,T=r(678);const z={class:"home"},C={class:"home__title"},I=(0,o.Uk)(" Welcome to RandomBeer! Please follow the link below to enter your account "),P=(0,o.Uk)("here");function Z(e,t){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("h1",C,[I,(0,o.Wm)(r,{class:"home__link",to:"/RandomBeer/main"},{default:(0,o.w5)((()=>[P])),_:1})])])}const R={},W=(0,d.Z)(R,[["render",Z],["__scopeId","data-v-7bdeaf61"]]);var $=W;const x=(0,o.Uk)("Home");function A(e,t,r,n,a,i){const s=(0,o.up)("router-link"),c=(0,o.up)("TheMain"),l=(0,o.up)("TheLoader");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s,{to:"/RandomBeer/",class:"link"},{default:(0,o.w5)((()=>[x])),_:1}),a.loadingSuccess?((0,o.wg)(),(0,o.j4)(c,{key:0,profile:a.profile,beer:a.beer,onChangeBeer:i.changeBeer},null,8,["profile","beer","onChangeBeer"])):((0,o.wg)(),(0,o.j4)(l,{key:1}))])}var F=r(7139),M=r.p+"img/avatarDefolt.db7a2058.png",N=r.p+"img/beer.d9972cc4.png";const U=e=>((0,o.dD)("data-v-0d21da48"),e=e(),(0,o.Cn)(),e),H={class:"content"},L={class:"profile"},S=U((()=>(0,o._)("img",{class:"profile__image",src:M,alt:"avatar"},null,-1))),E={class:"profile__data"},Y={class:"profile__info"},q={class:"profile__info"},G={class:"profile__info"},J={class:"beer"},K=U((()=>(0,o._)("h2",{class:"beer__title"},"Today we offer you to try:",-1))),Q={class:"beer__info"},V={class:"beer__info"},X={class:"beer__info"},ee={class:"beer__info"},te=U((()=>(0,o._)("img",{class:"beer__image",src:N},null,-1)));function re(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("main",H,[(0,o._)("section",L,[S,(0,o._)("div",E,[(0,o._)("h2",Y,(0,F.zw)(r.profile.name),1),(0,o._)("p",q,(0,F.zw)(r.profile.job),1),(0,o._)("p",G,(0,F.zw)(r.profile.age)+" years old",1)])]),(0,o._)("section",J,[K,(0,o._)("p",Q,"title: "+(0,F.zw)(r.beer.name),1),(0,o._)("p",V,"style: "+(0,F.zw)(r.beer.style),1),(0,o._)("p",X,"brand: "+(0,F.zw)(r.beer.brand),1),(0,o._)("p",ee,"alcohol: "+(0,F.zw)(r.beer.alcohol),1),(0,o._)("button",{class:"beer__button",onClick:t[0]||(t[0]=t=>e.$emit("change-beer")),type:"button"}," more options "),te])])}var ne={props:["profile","beer"]};const oe=(0,d.Z)(ne,[["render",re],["__scopeId","data-v-0d21da48"]]);var ae=oe;const ie=e=>((0,o.dD)("data-v-40d19c00"),e=e(),(0,o.Cn)(),e),se={class:"ring"},ce=(0,o.Uk)(" Loading "),le=ie((()=>(0,o._)("span",null,null,-1))),ue=[ce,le];function de(e,t){return(0,o.wg)(),(0,o.iD)("div",se,ue)}const fe={},pe=(0,d.Z)(fe,[["render",de],["__scopeId","data-v-40d19c00"]]);var _e=pe,he={data(){return{profile:{},beer:{},loadingSuccess:!1}},mounted(){this.getInitDataProfile(),this.getDataBeer()},methods:{getInitDataProfile(){fetch("https://random-data-api.com/api/users/random_user").then((e=>e.ok?e.json():Promise.reject(`Ошибка: ${e.status}`))).then((e=>{this.profile.name=`${e.first_name} ${e.last_name}`,this.profile.job=e.employment.title,this.profile.age=this.getAge(e.date_of_birth),this.profile.avatar=e.avatar}))},getDataBeer(){fetch("https://random-data-api.com/api/beer/random_beer").then((e=>e.ok?e.json():Promise.reject(`Ошибка: ${e.status}`))).then((e=>{this.beer.brand=e.brand,this.beer.name=e.name,this.beer.style=e.style,this.beer.alcohol=e.alcohol,this.loadingSuccess=!0}))},getAge(e){const t=new Date,r=t.getFullYear(),n=t.getMonth()+1;let o=r-Number(e.slice(0,4));return Number(e.slice(5,7))>n&&(o+=1),o},changeBeer(){this.getDataBeer()}},components:{TheMain:ae,TheLoader:_e}};const be=(0,d.Z)(he,[["render",A],["__scopeId","data-v-53e09dd3"]]);var me=be;const ve=[{path:"/RandomBeer/",component:$},{path:"/RandomBeer/main",component:me}],ge=(0,T.p7)({routes:ve,history:(0,T.PO)()});var we=ge;(0,n.ri)(O).use(we).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/RandomBeer/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunktest_task_nazarova"]=self["webpackChunktest_task_nazarova"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8130)}));n=r.O(n)})();
//# sourceMappingURL=app.a996e0aa.js.map