(this.webpackJsonphartaithan=this.webpackJsonphartaithan||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":1,"name":"A-Z","categ":"Mobile Game | Android","descr":"The first serious project. A small text puzzle game based on the alphabet. Written on Kotlin. The Volley library was used to make HTTP requests to the web leaderboard.","img":"./img/works/a-z.png","tags":["ANDROID","KOTLIN","VOLLEY"],"links":[{"svg":"playmarket","src":"https://play.google.com/store/apps/details?id=com.hartaithan.a_z"},{"svg":"link","src":"https://hartaithan.github.io/a-z/"}]},{"id":2,"name":"Camo Tracker","categ":"Web App | React","descr":"Camo Tracker for Call of Duty Black Ops Cold War. Built with MERN stack. Authentication is made using JWT tokens. User progress is managed by Redux and stored in MongoDB. Design is adapted for desktop and mobile devices. Hosted on Heroku","img":"./img/works/camo-tracker.png","tags":["NODE.JS","EXPRESS.JS","MONGODB","REACT","ROUTER DOM","REDUX","HEROKU"],"links":[{"svg":"github","src":"https://github.com/Hartaithan/camo-tracker-v2"},{"svg":"link","src":"https://camo-tracker.herokuapp.com/"}]},{"id":3,"name":"\xaf\u3035_(\u30c4)_/\xaf","categ":"More coming soon","descr":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima asperiores quia rem officia sequi non error aliquam quae, cupiditate fugit, deleniti id molestias, adipisci ipsum accusamus reprehenderit sapiente perferendis architecto!","img":"https://media1.tenor.com/images/5dd27507782940e1a2eb4a2cfdf5fad5/tenor.gif?itemid=18638749","tags":["MORE","COMING","SOON"],"links":[{"svg":"github","src":"https://github.com/hartaithan"},{"svg":"link","src":"https://hartaithan.github.io/"}]}]')},55:function(e){e.exports=JSON.parse('[{"id":"aboutme","title":"About Me","content":"I\'m a self-taught front-end developer, with little experience, but with a great desire to become a first-class specialist. I started my development journey by writing a small text-based game for Android. At the moment my preferred technology is React.","containsTags":false,"tags":[]},{"id":"frontend","title":"Front-End Skills","content":"Front-End Skills","containsTags":true,"tags":["HTML","CSS","SASS","BOOTSTRAP","RESP. DESIGN","JS ES6+","TS 4+","REACT","REDUX"]},{"id":"backend","title":"Backend Skills","content":"Backend Skills","containsTags":true,"tags":["NODE.JS","MONGO DB","EXPRESS.JS","NPM | YARN","AUTHENTICATION"]},{"id":"mobile","title":"Mobile Skills","content":"Mobile Skills","containsTags":true,"tags":["ANDROID","ANDROID SDK","KOTLIN","JAVA","VOLLEY"]}]')},59:function(e,t,a){},60:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(50),c=a.n(s),r=(a(59),a(11)),o=a(81),l=(a(60),a(23)),d=a(5),m=function(){var e=Object(r.f)();return Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(l.b,{className:"/"===e.pathname?"nav_links nav_active":"nav_links",id:"home",to:"/",children:"Home"}),Object(d.jsx)(l.b,{className:"/works"===e.pathname?"nav_links nav_active":"nav_links",id:"works",to:"/works",children:"Works"}),Object(d.jsx)(l.b,{className:"/about"===e.pathname?"nav_links nav_active":"nav_links",id:"about",to:"/about",children:"About Me"}),Object(d.jsx)(l.b,{className:"/contact"===e.pathname?"nav_links nav_active":"nav_links",id:"contact",to:"/contact",children:"Contact"})]})},h=(a(70),a(8)),j=a(44);var b=i.a.memo((function(){var e,t,a,n,s=Object(j.c)(h.FontLoader,"/fonts/roboto.json"),c=(e=0,t=110,Math.floor(Math.random()*(t-e+1)+e)),r=i.a.useRef(null),o=i.a.useMemo((function(){return{font:s,size:2,height:.3,curveSegments:2,bevelEnabled:!0,bevelThickness:0,bevelSize:.001,bevelOffset:0,bevelSegments:1}}),[s]),l=new h.MeshStandardMaterial({color:"white",wireframe:!0,transparent:!0,opacity:.3}),m=2;switch(!0){case c>=0&&c<=10:a=new h.BoxGeometry(1,1,1),m=2,n=.01;break;case c>=11&&c<=20:a=new h.IcosahedronGeometry(1,1),m=1.5,n=.006;break;case c>=21&&c<=30:a=new h.OctahedronGeometry(1,0),m=1.5,n=.01;break;case c>=31&&c<=40:a=new h.TorusKnotGeometry(1,.1,160,10,3,5),m=1,n=.01;break;case c>=41&&c<=50:a=new h.SphereGeometry(1,24,16),m=1.5,n=.006;break;case c>=51&&c<=60:a=new h.TetrahedronGeometry(1,0),m=1.8,n=.01;break;case c>=61&&c<=70:a=new h.TorusGeometry(25,10,4,4),m=.05,n=.01;break;case c>=71&&c<=80:a=new h.TextGeometry(":D",o).center(),m=1.2,n=.01;break;case c>=81&&c<=90:a=new h.TextGeometry("(\u2022_\u2022)",o).center(),m=.7,n=.01;break;case c>=91&&c<=100:a=new h.TextGeometry("D:",o).center(),m=1.2,n=.01;break;case c>=101&&c<=110:a=new h.TextGeometry("H",o).center(),m=1.5,n=.01}return Object(j.b)((function(){return r.current.rotation.y+=n})),Object(d.jsx)("mesh",{position:[0,0,0],ref:r,geometry:a,material:l,scale:m})})),u=function(){return Object(d.jsx)(i.a.Suspense,{fallback:null,children:Object(d.jsxs)(j.a,{className:"threejs",dpr:window.devicePixelRatio,children:[Object(d.jsx)("ambientLight",{}),Object(d.jsx)(b,{})]})})},x=(a(74),a(80)),v={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8}},exit:{opacity:0,transition:{duration:.8}}},g={sliderEnter:function(e){return{x:e>0?1e3:-1e3,opacity:0,transition:{duration:.2}}},sliderCenter:{zIndex:1,x:0,opacity:1},sliderExit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0,transition:{duration:.2}}}},O={initial:{x:0,y:-400,opacity:0},animate:{x:0,y:0,opacity:1}},p={initial:{x:400,y:0,opacity:0},animate:{x:0,y:0,opacity:1}},f=a(55),w=function(){return i.a.useEffect((function(){document.title="About | Hartaithan."})),Object(d.jsx)(x.a.div,{className:"about",variants:v,initial:"hidden",animate:"visible",exit:"exit",children:f.map((function(e){return e.containsTags?Object(d.jsxs)("div",{className:"about_element withTags",id:e.id,children:[Object(d.jsx)("div",{className:"about_element_title",children:e.title}),Object(d.jsx)("div",{className:"about_element_content",children:Object(d.jsx)("ul",{children:e.tags.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})})]},e.id):Object(d.jsxs)("div",{className:"about_element",id:e.id,children:[Object(d.jsx)("div",{className:"about_element_title",children:Object(d.jsx)("span",{children:e.title})}),Object(d.jsx)("div",{className:"about_element_content",children:e.content})]},e.id)}))})},k=(a(75),function(){return i.a.useEffect((function(){document.title="Contact | Hartaithan."})),Object(d.jsxs)(x.a.div,{className:"contact",variants:v,initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsx)("a",{href:"mailto:hartaithan@gmail.com",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"contact_icon",id:"email",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 455.862 455.862",children:Object(d.jsx)("path",{d:"M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.93v300.003c0 8.16 6.615 14.775 14.774 14.775h426.313c8.16 0 14.775-6.614 14.775-14.775V77.93c0-8.16-6.614-14.776-14.774-14.776zm-37.694 253.505c6.256 5.43 6.926 14.903 1.497 21.16-5.43 6.254-14.901 6.928-21.161 1.496-3.876-3.364-101.683-88.252-105.452-91.523l-40.515 35.164c-2.82 2.448-6.326 3.672-9.832 3.672s-7.012-1.224-9.832-3.672l-40.515-35.164c-3.77 3.272-101.576 88.159-105.452 91.523-6.257 5.43-15.731 4.761-21.161-1.496-5.43-6.257-4.76-15.73 1.497-21.16L154.7 227.93 52.468 139.203c-6.256-5.43-6.926-14.903-1.497-21.16 5.431-6.256 14.904-6.928 21.161-1.496 5.07 4.4 146.594 127.231 155.799 135.22 7.972-6.919 150.305-130.451 155.799-135.22 6.256-5.431 15.731-4.762 21.161 1.496 5.43 6.257 4.76 15.731-1.497 21.16L301.162 227.93l102.232 88.729z"})})})}),Object(d.jsx)("a",{href:"//github.com/Hartaithan",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"contact_icon",id:"github",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})})})}),Object(d.jsx)("a",{href:"//www.instagram.com/hartaithan",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"contact_icon",id:"instagram",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})}),Object(d.jsx)("a",{href:"//play.google.com/store/apps/dev?id=4716065440707220964",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("div",{className:"contact_icon",id:"playmarket",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011L15.948 7.21l-3.846 3.835L1.46.433z"})})})})]})}),_=(a(76),function(){return i.a.useEffect((function(){document.title="Home | Hartaithan."})),Object(d.jsxs)(x.a.div,{className:"home",variants:v,initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsxs)("div",{className:"home_text",children:[Object(d.jsx)(x.a.p,{variants:O,initial:"initial",animate:"animate",transition:{duration:.5,delay:.4},children:"Hello,"}),Object(d.jsx)(x.a.p,{variants:O,initial:"initial",animate:"animate",transition:{duration:.5,delay:.2},children:"I\u2019m Hartaithan."}),Object(d.jsx)(x.a.p,{variants:O,initial:"initial",animate:"animate",transition:{duration:.5,delay:0},children:"Frontend Developer"})]}),Object(d.jsxs)("div",{className:"home_buttons",children:[Object(d.jsx)(x.a.div,{className:"home_buttons_wrapper",variants:p,initial:"initial",animate:"animate",transition:{duration:.5,delay:.8},children:Object(d.jsx)(l.b,{to:"/works",children:Object(d.jsx)("button",{className:"home_buttons_button",id:"works",children:"My Works"})})}),Object(d.jsx)(x.a.div,{className:"home_buttons_wrapper",variants:p,initial:"initial",animate:"animate",transition:{duration:.5,delay:1},children:Object(d.jsx)("a",{href:"./data/resume.pdf",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{className:"home_buttons_button",id:"resume",children:"Get Resume"})})})]})]})}),y=(a(77),a(13)),N=a(22),S=function(e){switch(e.svg){case"playmarket":return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011L15.948 7.21l-3.846 3.835L1.46.433z"})});case"link":return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})});case"github":return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})});default:return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})}},M=function(){var e=i.a.useState([0,0]),t=Object(y.a)(e,2),a=Object(y.a)(t[0],2),n=a[0],s=a[1],c=t[1],r=i.a.useState(!0),l=Object(y.a)(r,2),m=l[0],h=l[1];function j(e){var t=N.length-1;switch(e){case-1:n>0?(c([n+e,e]),h(!m)):(c([t,e]),h(!m));break;case 1:n<t?(c([n+e,e]),h(!m)):(c([0,e]),h(!m));break;default:c([0,e]),h(!m)}}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{exitBeforeEnter:!0,initial:!1,custom:s,children:Object(d.jsxs)(x.a.div,{className:"works_main",custom:s,variants:g,initial:"sliderEnter",animate:"sliderCenter",exit:"sliderExit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.5}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var a=t.offset,n=t.velocity,i=function(e,t){return Math.abs(e)*t}(a.x,n.x);i<-1e4?j(1):i>1e4&&j(-1)},children:[Object(d.jsxs)("div",{className:"works_main_container",style:{alignSelf:!1===m?"flex-start":"flex-end"},children:[Object(d.jsxs)("div",{className:"works_main_container_title",style:{justifyContent:!1===m?"flex-start":"flex-end"},children:[N[n].id,". ",N[n].name]}),Object(d.jsx)("div",{className:"works_main_container_category",style:{justifyContent:!1===m?"flex-start":"flex-end"},children:N[n].categ}),Object(d.jsx)("div",{className:"works_main_container_descr",style:{textAlign:!1===m?"start":"end"},children:N[n].descr}),Object(d.jsx)("div",{className:"works_main_container_tags",children:Object(d.jsx)("ul",{style:{justifyContent:!1===m?"flex-start":"flex-end"},children:N[n].tags.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})}),Object(d.jsx)("div",{className:"works_main_container_links",style:{justifyContent:!1===m?"flex-start":"flex-end"},children:N[n].links.map((function(e){return Object(d.jsx)("a",{href:e.src,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(S,{svg:e.svg})},e.svg)}))})]}),Object(d.jsx)("div",{className:"works_main_img",style:{alignSelf:!1===m?"flex-end":"flex-start"},children:Object(d.jsx)("img",{src:N[n].img,draggable:"false",alt:"works_main_img"})})]},N[n].name)}),Object(d.jsxs)("div",{className:"works_arrows",children:[Object(d.jsx)("svg",{className:"works_arrows_left",onClick:function(){return j(-1)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})}),Object(d.jsx)("svg",{className:"works_arrows_right",onClick:function(){return j(1)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})})]}),Object(d.jsx)("div",{className:"works_pages",children:N.map((function(e,t){return Object(d.jsx)("div",{className:"works_pages_item",id:"page".concat(t),style:{background:n===t?"white":"#1b1b1b"},onClick:function(){return function(e){e!==n&&(e<n?(c([e,-1]),h(!m)):(c([e,1]),h(!m)))}(t)}},e.name)}))})]})},E=function(){return i.a.useEffect((function(){document.title="Works | Hartaithan."})),Object(d.jsx)(x.a.div,{className:"works",variants:v,initial:"hidden",animate:"visible",exit:"exit",children:Object(d.jsx)(M,{})})},T=function(){var e=Object(r.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(o.a,{exitBeforeEnter:!0,children:Object(d.jsxs)(r.c,{location:e,children:[Object(d.jsx)(r.a,{component:_,path:"/",exact:!0}),Object(d.jsx)(r.a,{component:w,path:"/about"}),Object(d.jsx)(r.a,{component:E,path:"/works"}),Object(d.jsx)(r.a,{component:k,path:"/contact"})]},e.key)}),Object(d.jsx)(u,{})]})};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(T,{})})}),document.getElementById("app"))}},[[78,1,2]]]);
//# sourceMappingURL=main.258442a2.chunk.js.map