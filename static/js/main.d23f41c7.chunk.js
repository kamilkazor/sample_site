(this.webpackJsonpsample_site=this.webpackJsonpsample_site||[]).push([[0],{31:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(18),i=t.n(n),r=(t(31),t(12)),j=t(4),l=t(21),o=t(14),d=t(10),b=Object(l.b)({name:"dog",initialState:{breedsData:{},imagesData:[],fetchError:!1},reducers:{setBreedsData:function(e,c){return Object(d.a)(Object(d.a)({},e),{},{breedsData:Object(d.a)({},c.payload)})},setImagesData:function(e,c){return Object(d.a)(Object(d.a)({},e),{},{imagesData:Object(o.a)(c.payload)})},setFetchError:function(e,c){return Object(d.a)(Object(d.a)({},e),{},{fetchError:c.payload})}}}),h=b.actions,O=h.setBreedsData,m=h.setImagesData,u=h.setFetchError,x=b.reducer,f=Object(l.a)({reducer:{dog:x}}),g=t(11),p=t(0),v=t(24),N=t.p+"static/media/githubQR.f183eb98.svg",w=t(1),C=function(){return Object(w.jsx)("footer",{id:"Footer",children:Object(w.jsxs)("div",{className:"footerContent",children:[Object(w.jsx)("img",{id:"githubQR",src:N,alt:"github QR Code"}),Object(w.jsxs)("div",{className:"infoBox",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Site created by Kamil Kazor"}),Object(w.jsx)("p",{children:"To see more of my works checkout my github:"}),Object(w.jsx)("p",{children:Object(w.jsx)("a",{href:"https://github.com/kamilkazor",children:"https://github.com/kamilkazor"})})]}),Object(w.jsxs)("div",{className:"contact",children:[Object(w.jsx)("h3",{children:"Contact:"}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(p.b.Provider,{value:{color:"white",size:"2rem"},children:Object(w.jsx)(v.a,{})}),Object(w.jsx)("p",{children:"+48 664 909 231"})]}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(p.b.Provider,{value:{color:"white",size:"2rem"},children:Object(w.jsx)(v.b,{})}),Object(w.jsx)("p",{children:"kkrk1994@gmail.com"})]})]})]})]})})},y=function(e){var c=e.headerRef;return Object(w.jsx)("header",{id:"Header",ref:c,children:Object(w.jsx)("h1",{children:"Sample Site"})})},k=t(5),S=t.p+"static/media/logoIcon.ee503aa1.svg",E=function(e){var c=e.headerRef,t=Object(s.useRef)(!0),a=Object(s.useState)(""),n=Object(k.a)(a,2),i=n[0],j=n[1],l=Object(s.useState)(!1),o=Object(k.a)(l,2),d=o[0],b=o[1],h=Object(s.useState)(!1),O=Object(k.a)(h,2),m=O[0],u=O[1],x=Object(s.useRef)(),f=function(){b(!d),t.current=!t.current,t.current?j("hide"):j("show")};return Object(s.useEffect)((function(){var e=function(){var e=c.current.offsetTop+c.current.clientHeight-x.current.clientHeight;window.pageYOffset>=e?u(!0):u(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(w.jsx)("nav",{id:"Navbar",className:m?"sticky":"",ref:x,children:Object(w.jsxs)("div",{id:"navContainer",children:[Object(w.jsx)(r.b,{to:"/",children:Object(w.jsxs)("div",{id:"logo",onClick:function(){window.scrollTo(0,0)},children:[Object(w.jsx)("img",{src:S,alt:"logo"}),Object(w.jsx)("span",{children:"SSite"})]})}),Object(w.jsx)("div",{onClick:f,className:d?"menu open":"menu",children:Object(w.jsx)("div",{className:"burger"})}),Object(w.jsx)("div",{id:"linksContainer",className:i,children:Object(w.jsxs)("ul",{className:i,children:[Object(w.jsx)(r.b,{to:"/",children:Object(w.jsx)("li",{onClick:f,children:"Home"})}),Object(w.jsx)(r.b,{to:"/hall-of-dogs",children:Object(w.jsx)("li",{onClick:f,children:"Hall of Dogs"})}),Object(w.jsx)(r.b,{to:"/empty-1",children:Object(w.jsx)("li",{onClick:f,children:"Empty 1"})}),Object(w.jsx)(r.b,{to:"/empty-2",children:Object(w.jsx)("li",{onClick:f,children:"Empty 2"})})]})})]})})},B=t.p+"static/media/sampleSiteQR.7db54cd3.svg",R=t.p+"static/media/html.11531028.svg",I=t.p+"static/media/css.dbd31fe1.svg",D=t.p+"static/media/js.43e744a2.svg",G=t.p+"static/media/react.4ee8d000.svg",A=function(){return Object(w.jsx)("div",{className:"mainContainer",children:Object(w.jsxs)("main",{className:"main",children:[Object(w.jsxs)("article",{id:"aboutArticle",className:"row veryLightGreenBG",children:[Object(w.jsx)("img",{id:"aboutLogoImg",src:S,alt:"logo"}),Object(w.jsxs)("div",{className:"textBox",children:[Object(w.jsx)("h2",{children:"About:"}),Object(w.jsx)("p",{children:"Sample Site is my web-dev training project."}),Object(w.jsx)("p",{children:"Please feel free to explore the site and see what it has to offer."})]})]}),Object(w.jsxs)("article",{id:"responsiveArticle",className:"row veryLightGreenBG",children:[Object(w.jsxs)("div",{className:"textBox",children:[Object(w.jsx)("h2",{children:"Responsive design:"}),Object(w.jsx)("p",{children:"Flexible layout, sticky navigation bar and animated mobile menu..."}),Object(w.jsx)("p",{children:"The site was written in a way to provide a nice experience on all devices. Please resize the window or scan the QR Code with your phone to see all the features."})]}),Object(w.jsx)("img",{id:"responsiveQR",src:B,alt:"sample site QR code"})]}),Object(w.jsxs)("article",{id:"madeWithArticle",children:[Object(w.jsx)("span",{id:"BG",className:"veryLightGreenBG"}),Object(w.jsxs)("div",{className:"textBox",children:[Object(w.jsx)("h2",{children:"MADE WITH:"}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"iconCard",children:[Object(w.jsx)("img",{className:"iconImg",src:R,alt:"html5 icon"}),Object(w.jsx)("span",{children:"HTML 5"})]}),Object(w.jsxs)("div",{className:"iconCard",children:[Object(w.jsx)("img",{className:"iconImg",src:I,alt:"css3 icon"}),Object(w.jsx)("span",{children:"CSS 3"})]})]}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"iconCard",children:[Object(w.jsx)("img",{className:"iconImg",src:D,alt:"javascript icon"}),Object(w.jsx)("span",{children:"JAVASCRIPT"})]}),Object(w.jsxs)("div",{className:"iconCard",children:[Object(w.jsx)("img",{className:"iconImg",src:G,alt:"react-js icon"}),Object(w.jsx)("span",{children:"REACT"})]})]})]})]})]})]})})},T=function(){var e=Object(g.c)((function(e){return e.dog.breedsData})),c=Object(g.b)(),t=Object(s.useState)([]),a=Object(k.a)(t,2),n=a[0],i=a[1],r=Object(s.useState)("random 50"),j=Object(k.a)(r,2),l=j[0],b=j[1],h=Object(s.useState)([]),x=Object(k.a)(h,2),f=x[0],p=x[1],v=Object(s.useState)("all"),N=Object(k.a)(v,2),C=N[0],y=N[1],S=Object(s.useState)(!0),E=Object(k.a)(S,2),B=E[0],R=E[1],I=Object(s.useState)(!1),D=Object(k.a)(I,2),G=D[0],A=D[1];Object(s.useEffect)((function(){i(["random 50"].concat(Object(o.a)(Object.keys(e))))}),[e]),Object(s.useEffect)((function(){y("all"),p("random 50"===l?["all"]:["all"].concat(Object(o.a)(e[l]))),A(!0)}),[l]),Object(s.useEffect)((function(){A(!0)}),[C]),Object(s.useEffect)((function(){f.length>1?R(!1):R(!0)}),[f]),Object(s.useEffect)((function(){G&&T(),A(!1)}),[G]);var T=function(){var e="";e="random 50"===l?"https://dog.ceo/api/breeds/image/random/50":"all"===C?"https://dog.ceo/api/breed/".concat(l,"/images"):"https://dog.ceo/api/breed/".concat(l,"/").concat(C,"/images"),fetch(e).then((function(e){if(e.ok)return c(u(!1)),e.json();throw Error})).then((function(e){c(m(Object(o.a)(e.message)))})).catch((function(e){c(u(!0))}))};return Object(s.useEffect)((function(){T(),fetch("https://dog.ceo/api/breeds/list/all").then((function(e){if(e.ok)return c(u(!1)),e.json();throw Error})).then((function(e){c(O(Object(d.a)({},e.message)))})).catch((function(e){c(u(!0))}))}),[]),Object(w.jsx)("div",{children:Object(w.jsxs)("form",{id:"dogForm",children:[Object(w.jsxs)("div",{className:"selectContainer",children:[Object(w.jsx)("label",{htmlFor:"breed",children:"breed: "}),Object(w.jsx)("select",{id:"breed",name:"breed",value:l,onChange:function(e){b(e.target.value)},children:n.map((function(e){return Object(w.jsx)("option",{value:e,children:e},e)}))})]}),Object(w.jsxs)("div",{className:"selectContainer",children:[Object(w.jsx)("label",{htmlFor:"subBreed",children:"sub-breed: "}),Object(w.jsx)("select",{id:"subBreed",name:"subBreed",value:C,onChange:function(e){y(e.target.value)},disabled:B,children:f.map((function(e){return Object(w.jsx)("option",{value:e,children:e},e)}))})]})]})})},L=t(17),F=function(){var e=Object(g.c)((function(e){return e.dog.imagesData})),c=Object(s.useRef)(0),t=Object(s.useState)(null),a=Object(k.a)(t,2),n=a[0],i=a[1],r=Object(s.useState)(0),j=Object(k.a)(r,2),l=j[0],o=j[1],d=Object(s.useState)(!1),b=Object(k.a)(d,2),h=b[0],O=b[1],m=Object(s.useState)(!1),u=Object(k.a)(m,2),x=u[0],f=u[1],p=60;Object(s.useEffect)((function(){c.current=e.length,o(0),y(e.slice(l,p))}),[e]),Object(s.useEffect)((function(){y(e.slice(l,l+p))}),[l]),Object(s.useEffect)((function(){f(0!==l),l+p>=c.current?O(!1):O(!0)}),[n]);var v=Object(s.useRef)(),N=function(e){e&&window.scrollTo(0,v.current.offsetTop),l+p<c.current&&o(l+p)},C=function(e){e&&window.scrollTo(0,v.current.offsetTop),o(l>60?l-p:0)},y=function(e){var c=0,t=[[],[],[],[]];for(var s in e)c>t.length-1&&(c=0),t[c].push(e[s]),c+=1;var a=Object(w.jsxs)("div",{className:"imgRow",children:[Object(w.jsxs)("div",{className:"imgRow",children:[Object(w.jsx)("div",{className:"imgCol",children:t[0].map((function(e,c){return Object(w.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(w.jsx)("img",{className:"dogImg",src:e,alt:""})},"".concat(Date.now(),"-",0,"-").concat(c,":").concat(e))}))},"col1"),Object(w.jsx)("div",{className:"imgCol",children:t[1].map((function(e,c){return Object(w.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(w.jsx)("img",{className:"dogImg",src:e,alt:""})},"".concat(Date.now(),"-",1,"-").concat(c,":").concat(e))}))},"col2")]}),Object(w.jsxs)("div",{className:"imgRow",children:[Object(w.jsx)("div",{className:"imgCol",children:t[2].map((function(e,c){return Object(w.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(w.jsx)("img",{className:"dogImg",src:e,alt:""})},"".concat(Date.now(),"-",2,"-").concat(c,":").concat(e))}))},"col3"),Object(w.jsx)("div",{className:"imgCol",children:t[3].map((function(e,c){return Object(w.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(w.jsx)("img",{className:"dogImg",src:e,alt:""})},"".concat(Date.now(),"-",3,"-").concat(c,":").concat(e))}))},"col4")]})]});i(a)};return Object(w.jsxs)("div",{id:"dogGallery",ref:v,children:[Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("button",{className:"pageButton",disabled:!x,onClick:function(){C(!1)},children:Object(w.jsx)(L.b,{})}),Object(w.jsx)("button",{className:"pageButton",disabled:!h,onClick:function(){N(!1)},children:Object(w.jsx)(L.a,{})})]}),n,Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("button",{className:"pageButton",disabled:!x,onClick:function(){C(!0)},children:Object(w.jsx)(L.b,{})}),Object(w.jsx)("button",{className:"pageButton",disabled:!h,onClick:function(){N(!0)},children:Object(w.jsx)(L.a,{})})]})]})},P=function(){var e=Object(g.c)((function(e){return e.dog.fetchError}));return Object(w.jsx)("div",{className:"mainContainer",children:Object(w.jsxs)("main",{className:"main",children:[Object(w.jsxs)("article",{id:"dogFormArticle",className:"column veryLightGreenBG",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("p",{children:["Simple gallery that uses ",Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://dog.ceo/dog-api/",children:"Dog API"})]})}),Object(w.jsx)(T,{}),e&&Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("p",{children:"The app was unable to fetch data from the API. Please try again later."})})]}),Object(w.jsx)("article",{id:"dogGalleryArticle",className:"row veryLightGreenBG",children:Object(w.jsx)(F,{})})]})})},_=t.p+"static/media/underConstruction.529b4054.svg",H=function(){return Object(w.jsx)("div",{className:"mainContainer",children:Object(w.jsx)("main",{className:"main",children:Object(w.jsxs)("article",{id:"emptyArticle",className:"column veryLightGreenBG",children:[Object(w.jsx)("img",{id:"underConstructionIcon",src:_,alt:"under construction icon"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("p",{children:"Nothing here yet."})})]})})})},Q=t.p+"static/media/underConstruction2.00071b1d.svg",z=function(){return Object(w.jsx)("div",{className:"mainContainer",children:Object(w.jsx)("main",{className:"main",children:Object(w.jsxs)("article",{id:"emptyArticle",className:"column veryLightGreenBG",children:[Object(w.jsx)("img",{id:"underConstructionIcon",src:Q,alt:"under construction icon"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("p",{children:"Nothing here yet."})})]})})})},J=function(){var e=Object(s.useRef)();return Object(w.jsx)(g.a,{store:f,children:Object(w.jsx)(r.a,{basename:"/sample_site",children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(y,{headerRef:e}),Object(w.jsx)(E,{headerRef:e}),Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{exact:!0,path:"/",children:Object(w.jsx)(A,{})}),Object(w.jsx)(j.a,{path:"/hall-of-dogs",children:Object(w.jsx)(P,{})}),Object(w.jsx)(j.a,{path:"/empty-1",children:Object(w.jsx)(H,{})}),Object(w.jsx)(j.a,{path:"/empty-2",children:Object(w.jsx)(z,{})})]}),Object(w.jsx)(C,{})]})})})};i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d23f41c7.chunk.js.map