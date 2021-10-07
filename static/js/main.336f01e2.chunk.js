(this.webpackJsonpsample_site=this.webpackJsonpsample_site||[]).push([[0],{29:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(17),n=t.n(i),r=(t(29),t(11)),l=t(3),j=t(20),o=t(13),d=t(9),b=Object(j.b)({name:"dog",initialState:{breedsData:{},imagesData:[]},reducers:{setBreedsData:function(e,c){return Object(d.a)(Object(d.a)({},e),{},{breedsData:Object(d.a)({},c.payload)})},setImagesData:function(e,c){return Object(d.a)(Object(d.a)({},e),{},{imagesData:Object(o.a)(c.payload)})}}}),O=b.actions,h=O.setBreedsData,m=O.setImagesData,u=b.reducer,x=Object(j.a)({reducer:{dog:u}}),g=t(10),f=t(0),v=function(e){var c=e.children;return Object(f.jsx)("div",{className:"row",children:c})},p=t.p+"static/media/githubQR.f183eb98.svg",N=t.p+"static/media/phoneIcon.b466cc45.svg",k=t.p+"static/media/envelopeIcon.6bd90d55.svg",w=function(){return Object(f.jsx)("footer",{id:"Footer",children:Object(f.jsxs)("div",{className:"footerContent",children:[Object(f.jsx)("img",{className:"githubQR",src:p,alt:"github QR Code"}),Object(f.jsxs)("div",{className:"infoBox",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Site created by Kamil Kazor"}),Object(f.jsx)("p",{children:"To see more of my works checkout my github:"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://github.com/kamilkazor",children:"https://github.com/kamilkazor"})})]}),Object(f.jsxs)("div",{className:"contact",children:[Object(f.jsx)("h3",{children:"Contact:"}),Object(f.jsxs)(v,{children:[Object(f.jsx)("img",{className:"contactIcon",src:N,alt:"tel"}),Object(f.jsx)("p",{children:"+48 664 909 231"})]}),Object(f.jsxs)(v,{children:[Object(f.jsx)("img",{className:"contactIcon",src:k,alt:"email"}),Object(f.jsx)("p",{children:"kkrk1994@gmail.com"})]})]})]})]})})},C=function(e){var c=e.headerRef;return Object(f.jsx)("header",{id:"Header",ref:c,children:Object(f.jsx)("h1",{children:"Sample Site"})})},y=t(4),S=t.p+"static/media/logoIcon.ee503aa1.svg",B=function(e){var c=e.headerRef,t=Object(s.useRef)(!0),a=Object(s.useState)(""),i=Object(y.a)(a,2),n=i[0],l=i[1],j=Object(s.useState)(!1),o=Object(y.a)(j,2),d=o[0],b=o[1],O=Object(s.useState)(!1),h=Object(y.a)(O,2),m=h[0],u=h[1],x=Object(s.useRef)(),g=function(){b(!d),t.current=!t.current,t.current?l("hide"):l("show")};return Object(s.useEffect)((function(){var e=function(){var e=c.current.offsetTop+c.current.clientHeight-x.current.clientHeight;window.pageYOffset>=e?u(!0):u(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(f.jsx)("nav",{id:"Navbar",className:m?"sticky":"",ref:x,children:Object(f.jsxs)("div",{className:"navContainer",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("img",{src:S,alt:"logo"}),Object(f.jsx)("span",{children:"Sample Site"})]}),Object(f.jsx)("div",{onClick:g,className:d?"menu open":"menu",children:Object(f.jsx)("div",{className:"burger"})}),Object(f.jsxs)("ul",{className:n,children:[Object(f.jsx)(r.b,{to:"/",children:Object(f.jsx)("li",{onClick:g,children:"Home"})}),Object(f.jsx)(r.b,{to:"/Link1",children:Object(f.jsx)("li",{onClick:g,children:"link1"})}),Object(f.jsx)(r.b,{to:"/Link2",children:Object(f.jsx)("li",{onClick:g,children:"link2"})}),Object(f.jsx)(r.b,{to:"/Link3",children:Object(f.jsx)("li",{onClick:g,children:"link3"})})]})]})})},R=t.p+"static/media/sampleSiteQR.7db54cd3.svg",I=t.p+"static/media/html.11531028.svg",G=t.p+"static/media/css.dbd31fe1.svg",L=t.p+"static/media/js.43e744a2.svg",E=t.p+"static/media/react.4ee8d000.svg",D=function(){return Object(f.jsx)("div",{className:"mainContainer",children:Object(f.jsxs)("main",{className:"main",children:[Object(f.jsxs)("article",{id:"aboutArticle",className:"row veryLightGreenBG",children:[Object(f.jsx)("img",{id:"aboutLogoImg",src:S,alt:"logo"}),Object(f.jsxs)("div",{className:"textBox",children:[Object(f.jsx)("h2",{children:"About:"}),Object(f.jsx)("p",{children:"Sample Site is my web-dev training project."}),Object(f.jsx)("p",{children:"Please feel free to explore the site and see what it has to offer."})]})]}),Object(f.jsxs)("article",{id:"responsiveArticle",className:"row veryLightGreenBG",children:[Object(f.jsxs)("div",{className:"textBox",children:[Object(f.jsx)("h2",{children:"Responsive design:"}),Object(f.jsx)("p",{children:"Flexible layout, sticky navigation bar and animated mobile menu..."}),Object(f.jsx)("p",{children:"The site was written in a way to provide a nice experience on all devices. Please resize the window or scan the QR Code with your phone to see all the features."})]}),Object(f.jsx)("img",{id:"responsiveQR",src:R,alt:"sample site QR code"})]}),Object(f.jsxs)("article",{id:"madeWithArticle",children:[Object(f.jsx)("span",{id:"BG",className:"veryLightGreenBG"}),Object(f.jsxs)("div",{className:"textBox",children:[Object(f.jsx)("h2",{children:"MADE WITH:"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"iconCard",children:Object(f.jsx)("img",{className:"iconImg",src:I,alt:"html5 icon"})}),Object(f.jsx)("div",{className:"iconCard",children:Object(f.jsx)("img",{className:"iconImg",src:G,alt:"css3 icon"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"iconCard",children:Object(f.jsx)("img",{className:"iconImg",src:L,alt:"javascript icon"})}),Object(f.jsx)("div",{className:"iconCard",children:Object(f.jsx)("img",{className:"iconImg",src:E,alt:"react-js icon"})})]})]})]})]})]})})},A=function(){var e=Object(g.c)((function(e){return e.dog.breedsData})),c=Object(g.b)(),t=Object(s.useState)([]),a=Object(y.a)(t,2),i=a[0],n=a[1],r=Object(s.useState)("random 50"),l=Object(y.a)(r,2),j=l[0],b=l[1],O=Object(s.useState)([]),u=Object(y.a)(O,2),x=u[0],v=u[1],p=Object(s.useState)("all"),N=Object(y.a)(p,2),k=N[0],w=N[1],C=Object(s.useState)(!0),S=Object(y.a)(C,2),B=S[0],R=S[1];Object(s.useEffect)((function(){n(["random 50"].concat(Object(o.a)(Object.keys(e))))}),[e]),Object(s.useEffect)((function(){w("all"),v("random 50"===j?["all"]:["all"].concat(Object(o.a)(e[j])))}),[j]),Object(s.useEffect)((function(){x.length>1?R(!1):R(!0)}),[x]);var I=function(){var e="";e="random 50"===j?"https://dog.ceo/api/breeds/image/random/50":"all"===k?"https://dog.ceo/api/breed/".concat(j,"/images"):"https://dog.ceo/api/breed/".concat(j,"/").concat(k,"/images"),fetch(e).then((function(e){if(e.ok)return e.json();throw Error})).then((function(e){c(m(Object(o.a)(e.message)))})).catch((function(e){console.log(e)}))};Object(s.useEffect)((function(){I(),fetch("https://dog.ceo/api/breeds/list/all").then((function(e){if(e.ok)return e.json();throw Error})).then((function(e){c(h(Object(d.a)({},e.message)))})).catch((function(e){console.log(e)}))}),[]);return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I()},children:[Object(f.jsx)("label",{htmlFor:"breed",children:"breed: "}),Object(f.jsx)("select",{id:"breed",name:"breed",value:j,onChange:function(e){b(e.target.value)},children:i.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))}),Object(f.jsx)("label",{htmlFor:"subBreed",children:"sub-breed: "}),Object(f.jsx)("select",{id:"subBreed",name:"subBreed",value:k,onChange:function(e){w(e.target.value)},disabled:B,children:x.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))}),Object(f.jsx)("input",{type:"submit",value:"search"})]})})},Q=t(16),_=function(){var e=Object(g.c)((function(e){return e.dog.imagesData})),c=Object(s.useRef)(0),t=Object(s.useState)(null),a=Object(y.a)(t,2),i=a[0],n=a[1],r=Object(s.useState)(0),l=Object(y.a)(r,2),j=l[0],o=l[1],d=Object(s.useState)(!1),b=Object(y.a)(d,2),O=b[0],h=b[1],m=Object(s.useState)(!1),u=Object(y.a)(m,2),x=u[0],v=u[1],p=60,N=function(){window.scrollTo(0,0),j+p<c.current&&o(j+p)},k=function(){window.scrollTo(0,0),o(j>60?j-p:0)},w=function(e){var c=0,t=[[],[],[],[]];for(var s in e)c>t.length-1&&(c=0),t[c].push(e[s]),c+=1;var a=Object(f.jsxs)("div",{className:"imgRow",children:[Object(f.jsxs)("div",{className:"imgRow",children:[Object(f.jsx)("div",{className:"imgCol",children:t[0].map((function(e){return Object(f.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{className:"dogImg",src:e,alt:""})},e)}))},"col1"),Object(f.jsx)("div",{className:"imgCol",children:t[1].map((function(e){return Object(f.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{className:"dogImg",src:e,alt:""})},e)}))},"col2")]}),Object(f.jsxs)("div",{className:"imgRow",children:[Object(f.jsx)("div",{className:"imgCol",children:t[2].map((function(e){return Object(f.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{className:"dogImg",src:e,alt:""})},e)}))},"col3"),Object(f.jsx)("div",{className:"imgCol",children:t[3].map((function(e){return Object(f.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{className:"dogImg",src:e,alt:""})},e)}))},"col4")]})]});n(a)};return Object(s.useEffect)((function(){c.current=e.length,o(0),w(e.slice(j,p))}),[e]),Object(s.useEffect)((function(){w(e.slice(j,j+p))}),[j]),Object(s.useEffect)((function(){v(0!==j),j+p>=c.current?h(!1):h(!0)}),[i]),Object(f.jsxs)("div",{id:"dogGallery",children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("button",{className:"pageButton",disabled:!x,onClick:k,children:Object(f.jsx)(Q.b,{})}),Object(f.jsx)("button",{className:"pageButton",disabled:!O,onClick:N,children:Object(f.jsx)(Q.a,{})})]}),i,Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("button",{className:"pageButton",disabled:!x,onClick:k,children:Object(f.jsx)(Q.b,{})}),Object(f.jsx)("button",{className:"pageButton",disabled:!O,onClick:N,children:Object(f.jsx)(Q.a,{})})]})]})},T=function(){return Object(f.jsx)("div",{className:"mainContainer",children:Object(f.jsxs)("main",{className:"main",children:[Object(f.jsx)("article",{id:"dogFormArticle",className:"row veryLightGreenBG",children:Object(f.jsx)(A,{})}),Object(f.jsx)("article",{id:"dogGalleryArticle",className:"row veryLightGreenBG",children:Object(f.jsx)(_,{})})]})})},F=function(){return Object(f.jsx)("div",{className:"mainContainer",children:Object(f.jsx)("main",{className:"main",children:Object(f.jsx)("article",{id:"aboutArticle",className:"row veryLightGreenBG",children:"link2"})})})},H=function(){return Object(f.jsx)("div",{className:"mainContainer",children:Object(f.jsx)("main",{className:"main",children:Object(f.jsx)("article",{id:"aboutArticle",className:"row veryLightGreenBG",children:"link3"})})})},z=function(){var e=Object(s.useRef)();return Object(f.jsx)(g.a,{store:x,children:Object(f.jsx)(r.a,{basename:"/sample_site",children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(C,{headerRef:e}),Object(f.jsx)(B,{headerRef:e}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(D,{})}),Object(f.jsx)(l.a,{path:"/Link1",children:Object(f.jsx)(T,{})}),Object(f.jsx)(l.a,{path:"/Link2",children:Object(f.jsx)(F,{})}),Object(f.jsx)(l.a,{path:"/Link3",children:Object(f.jsx)(H,{})})]}),Object(f.jsx)(w,{})]})})})};n.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.336f01e2.chunk.js.map