"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{6370:function(e,t,r){var o=r(4836);t.Z=void 0;var n=o(r(4938)),i=r(5893),a=(0,n.default)((0,i.jsx)("path",{d:"M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-2v2h-2V7h-2V5h2V3h2v2h2v2z"}),"BookmarkAddOutlined");t.Z=a},6540:function(e,t,r){r.d(t,{C:function(){return i},T:function(){return n}});var o=r(9473);let n=()=>(0,o.I0)(),i=o.v9},9229:function(e,t,r){r.d(t,{Z:function(){return A}});var o=r(5893),n=r(7357),i=r(7462),a=r(3366),s=r(7294),l=r(512),c=r(4780),d=r(948),h=r(1657),p=r(629),x=r(1588),u=r(4867);function f(e){return(0,u.Z)("MuiCard",e)}(0,x.Z)("MuiCard",["root"]);let g=["className","raised"],m=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},f,t)},v=(0,d.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=s.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=r,c=(0,a.Z)(r,g),d=(0,i.Z)({},r,{raised:s}),p=m(d);return(0,o.jsx)(v,(0,i.Z)({className:(0,l.Z)(p.root,n),elevation:s?8:void 0,ref:t,ownerState:d},c))});var j=r(1233),y=r(5861),b=r(1664),w=r.n(b),z=r(6370),C=r(1796),k=r(7739),S=r(8216);function I(e){return(0,u.Z)("MuiIconButton",e)}let R=(0,x.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),H=["edge","children","className","color","disabled","disableFocusRipple","size"],$=e=>{let{classes:t,disabled:r,color:o,edge:n,size:i}=e,a={root:["root",r&&"disabled","default"!==o&&`color${(0,S.Z)(o)}`,n&&`edge${(0,S.Z)(n)}`,`size${(0,S.Z)(i)}`]};return(0,c.Z)(a,I,t)},M=(0,d.ZP)(k.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,S.Z)(r.color)}`],r.edge&&t[`edge${(0,S.Z)(r.edge)}`],t[`size${(0,S.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,C.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var r;let o=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,i.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,i.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,i.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,C.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${R.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),W=s.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:s,className:c,color:d="default",disabled:p=!1,disableFocusRipple:x=!1,size:u="medium"}=r,f=(0,a.Z)(r,H),g=(0,i.Z)({},r,{edge:n,color:d,disabled:p,disableFocusRipple:x,size:u}),m=$(g);return(0,o.jsx)(M,(0,i.Z)({className:(0,l.Z)(m.root,c),centerRipple:!0,focusRipple:!x,disabled:p,ref:t,ownerState:g},f,{children:s}))});var V=r(6540),F=r(8948),N=r(8624);let T=e=>{let{product:t}=e,r=(0,V.T)(),n=(0,N.g)(),i=(0,V.C)(F.jq),a=void 0!==i.products.find(e=>e.id===t.id);return(0,o.jsxs)(W,{size:"small",onClick:()=>{a?r((0,F.$f)(t)):r((0,F.Mp)(t))},children:[a&&(0,o.jsx)(z.Z,{sx:{color:n.palette.secondary.main}}),!a&&(0,o.jsx)(z.Z,{sx:{color:n.palette.grey[500]}})]})};var L=r(3321);function A(e){var t,r,i,a;let{product:s}=e;return(0,o.jsxs)(Z,{variant:"outlined",sx:{padding:2},children:[(0,o.jsxs)(j.Z,{direction:"row",alignItems:"flex-start",justifyContent:"space-between",children:[(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(y.Z,{variant:"h6",fontWeight:600,children:null===(t=s.attributes)||void 0===t?void 0:t.title}),(0,o.jsx)(y.Z,{variant:"body2",fontWeight:400,children:"April 24 to May 02, 2021"})]}),(0,o.jsx)(T,{product:s})]}),(0,o.jsx)(j.Z,{minHeight:"120px",maxHeight:"200px",py:1,children:(0,o.jsx)("img",{src:"https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",srcSet:"https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x",loading:"lazy",alt:""})}),(0,o.jsxs)(j.Z,{direction:"row",pt:1,children:[(0,o.jsxs)(j.Z,{spacing:.25,children:[(0,o.jsx)(y.Z,{variant:"caption",children:"Price:"}),(0,o.jsxs)(y.Z,{variant:"h6",children:["$",null===(r=s.attributes)||void 0===r?void 0:r.price.toFixed(2)]})]}),(0,o.jsx)(w(),{style:{marginLeft:"auto",alignSelf:"center",fontWeight:600},passHref:!0,href:"/products/".concat(null===(i=s.attributes)||void 0===i?void 0:i.slug),children:(0,o.jsx)(L.Z,{size:"large",color:"primary",variant:"contained","aria-label":"View ".concat(null===(a=s.attributes)||void 0===a?void 0:a.title," product"),children:"View"})})]})]})}},9317:function(e,t,r){r.d(t,{Z:function(){return C}});var o=r(5893),n=r(1233),i=r(9008),a=r.n(i),s=r(1163),l=r(7294),c=r(7357),d=r(5582),h=r(5861),p=r(1664),x=r.n(p),u=r(8624),f=r(6200);function g(){let e=(0,u.g)();return(0,o.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column",paddingTop:10},children:(0,o.jsx)(c.Z,{component:"footer",sx:{height:100,py:4.5,px:2,mt:"auto",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]},children:(0,o.jsx)(d.Z,{maxWidth:"lg",children:(0,o.jsxs)(x(),{passHref:!0,href:"/",style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(f.Z,{fontSize:"large",sx:{color:e.palette.grey[400],mr:.5}}),(0,o.jsx)(h.Z,{variant:"h6",sx:{fontWeight:500,color:e.palette.grey[400]},children:"localShop"})]})})})})}var m=r(5573),v=r(432),Z=r(5500),j=r(9661),y=r(6540),b=r(7502),w=r(3321);function z(e){let{isLoggedIn:t}=e,r=(0,u.g)(),i=(0,s.useRouter)(),a=(0,y.T)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{maxWidth:!1,sx:{zIndex:99,position:"fixed",top:0,alignItems:"center",width:"100%",backgroundColor:r.palette.background.default},children:(0,o.jsxs)(n.Z,{direction:"row",p:2,sx:{px:{lg:4,md:0,sm:1,xs:0},maxWidth:"lg",mx:"auto",alignItems:"center",width:"100%",justifyContent:"space-between"},children:[(0,o.jsxs)(x(),{passHref:!0,href:"/",style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(j.Z,{sx:{bgcolor:"#fff",mr:1},children:(0,o.jsx)(f.Z,{fontSize:"large",sx:{color:r.palette.secondary.main}})}),(0,o.jsx)(h.Z,{variant:"h6",sx:{fontWeight:500,color:r.palette.grey[400]},children:"localShop"})]}),(0,o.jsxs)(n.Z,{direction:"row",spacing:4,alignItems:"center",children:[(0,o.jsx)(x(),{passHref:!0,href:"/products",children:(0,o.jsx)(h.Z,{color:r.palette.grey[400],children:"Products"})}),(0,o.jsx)(x(),{passHref:!0,href:"/contacts",children:(0,o.jsx)(h.Z,{color:r.palette.grey[400],children:"Contacts"})}),(0,o.jsxs)(n.Z,{direction:"row",spacing:1,children:[(0,o.jsx)(x(),{passHref:!0,href:"/wishlist",children:(0,o.jsx)(j.Z,{sx:{bgcolor:"#fff"},children:(0,o.jsx)(v.Z,{sx:{color:r.palette.secondary.main}})})}),(0,o.jsx)(x(),{passHref:!0,href:"/checkout",children:(0,o.jsx)(j.Z,{sx:{bgcolor:"#fff"},children:(0,o.jsx)(Z.Z,{sx:{color:r.palette.secondary.main}})})}),t&&(0,o.jsx)(x(),{passHref:!0,href:"/account",children:(0,o.jsx)(j.Z,{sx:{bgcolor:"#fff"},children:(0,o.jsx)(m.Z,{sx:{color:r.palette.secondary.main}})})})]}),!t&&(0,o.jsx)(x(),{passHref:!0,href:"/login",children:(0,o.jsx)(w.Z,{variant:"contained",children:"Login"})}),t&&(0,o.jsx)(w.Z,{variant:"contained",onClick:()=>{a(b.kS),i.push("/login"),sessionStorage.removeItem("jwt"),i.push("/login")},children:"Log out"})]})]})}),(0,o.jsx)(c.Z,{sx:{height:85}})]})}var C=e=>{let{children:t}=e,r=(0,s.useRouter)(),[i,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=sessionStorage.getItem("jwt");e&&c(!0),e||(c(!1),"/account"===r.pathname&&r.push("/login"))},[r]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)(n.Z,{sx:{height:"100%",position:"relative"},children:[(0,o.jsx)(z,{isLoggedIn:i}),(0,o.jsx)(n.Z,{minHeight:"calc(100vh - 265px)",sx:{pt:"60px",maxWidth:"100vw",overflow:"hidden"},children:t}),(0,o.jsx)(g,{})]})]})}},9757:function(e,t,r){r.d(t,{V:function(){return l}});var o=r(5893),n=r(6200),i=r(1233),a=r(5861),s=r(8624);let l=e=>{let{title:t,main:r}=e,l=(0,s.g)();return(0,o.jsxs)(o.Fragment,{children:[!r&&(0,o.jsxs)(i.Z,{direction:"row",alignItems:"center",spacing:1.5,children:[(0,o.jsx)(n.Z,{fontSize:"small",sx:{color:l.palette.secondary.main}}),(0,o.jsx)(a.Z,{component:"h1",variant:"h4",fontWeight:500,children:t})]}),r&&(0,o.jsx)(i.Z,{direction:"row",children:(0,o.jsx)(a.Z,{component:"h1",variant:"h1",fontWeight:500,textAlign:"center",pb:4,children:t})})]})}}}]);