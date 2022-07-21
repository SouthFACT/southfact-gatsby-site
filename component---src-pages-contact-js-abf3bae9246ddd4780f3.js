"use strict";(self.webpackChunksouthfact=self.webpackChunksouthfact||[]).push([[501],{4320:function(n,t,r){r.d(t,{ZP:function(){return W}});var e=r(3433),i=r(4942),a=r(3366),c=r(7462),o=r(7294),s=r(5505),u=r(2692),g=r(8297),m=r(9408),p=r(8348),l=r(2371);var d=o.createContext(),f=r(8416);function x(n){return(0,f.Z)("MuiGrid",n)}var v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=(0,r(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,e.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,e.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,e.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,e.Z)(v.map((function(n){return"grid-xs-".concat(n)}))),(0,e.Z)(v.map((function(n){return"grid-sm-".concat(n)}))),(0,e.Z)(v.map((function(n){return"grid-md-".concat(n)}))),(0,e.Z)(v.map((function(n){return"grid-lg-".concat(n)}))),(0,e.Z)(v.map((function(n){return"grid-xl-".concat(n)}))))),h=r(5893),w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function Z(n){var t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function b(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!n||n<=0)return[];if("string"==typeof n&&!Number.isNaN(Number(n))||"number"==typeof n)return[r["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))];var e=n.xs,i=n.sm,a=n.md,c=n.lg,o=n.xl;return[Number(e)>0&&(r["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))),Number(i)>0&&(r["spacing-sm-".concat(String(i))]||"spacing-sm-".concat(String(i))),Number(a)>0&&(r["spacing-md-".concat(String(a))]||"spacing-md-".concat(String(a))),Number(c)>0&&(r["spacing-lg-".concat(String(c))]||"spacing-lg-".concat(String(c))),Number(o)>0&&(r["spacing-xl-".concat(String(o))]||"spacing-xl-".concat(String(o)))]}var k=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState,i=r.container,a=r.direction,c=r.item,o=r.lg,s=r.md,u=r.sm,g=r.spacing,m=r.wrap,p=r.xl,l=r.xs,d=r.zeroMinWidth;return[t.root,i&&t.container,c&&t.item,d&&t.zeroMinWidth].concat((0,e.Z)(b(g,i,t)),["row"!==a&&t["direction-xs-".concat(String(a))],"wrap"!==m&&t["wrap-xs-".concat(String(m))],!1!==l&&t["grid-xs-".concat(String(l))],!1!==u&&t["grid-sm-".concat(String(u))],!1!==s&&t["grid-md-".concat(String(s))],!1!==o&&t["grid-lg-".concat(String(o))],!1!==p&&t["grid-xl-".concat(String(p))]])}})((function(n){var t=n.ownerState;return(0,c.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){var t=n.theme,r=n.ownerState,e=(0,u.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,u.k9)({theme:t},e,(function(n){var t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(S.item)]={maxWidth:"none"}),t}))}),(function(n){var t=n.theme,r=n.ownerState,e=r.container,a=r.rowSpacing,c={};if(e&&0!==a){var o=(0,u.P$)({values:a,breakpoints:t.breakpoints.values});c=(0,u.k9)({theme:t},o,(function(n){var r=t.spacing(n);return"0px"!==r?(0,i.Z)({marginTop:"-".concat(Z(r))},"& > .".concat(S.item),{paddingTop:Z(r)}):{}}))}return c}),(function(n){var t=n.theme,r=n.ownerState,e=r.container,a=r.columnSpacing,c={};if(e&&0!==a){var o=(0,u.P$)({values:a,breakpoints:t.breakpoints.values});c=(0,u.k9)({theme:t},o,(function(n){var r=t.spacing(n);return"0px"!==r?(0,i.Z)({width:"calc(100% + ".concat(Z(r),")"),marginLeft:"-".concat(Z(r))},"& > .".concat(S.item),{paddingLeft:Z(r)}):{}}))}return c}),(function(n){var t,r=n.theme,e=n.ownerState;return r.breakpoints.keys.reduce((function(n,i){var a={};if(e[i]&&(t=e[i]),!t)return n;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,u.P$)({values:e.columns,breakpoints:r.breakpoints.values}),s="object"==typeof o?o[i]:o;if(null==s)return n;var g="".concat(Math.round(t/s*1e8)/1e6,"%"),m={};if(e.container&&e.item&&0!==e.columnSpacing){var p=r.spacing(e.columnSpacing);if("0px"!==p){var l="calc(".concat(g," + ").concat(Z(p),")");m={flexBasis:l,maxWidth:l}}}a=(0,c.Z)({flexBasis:g,flexGrow:0,maxWidth:g},m)}return 0===r.breakpoints.values[i]?Object.assign(n,a):n[r.breakpoints.up(i)]=a,n}),{})})),W=o.forwardRef((function(n,t){var r=(0,l.Z)({props:n,name:"MuiGrid"}),i=(0,g.Z)(r),u=i.className,p=i.columns,f=i.columnSpacing,v=i.component,S=void 0===v?"div":v,Z=i.container,W=void 0!==Z&&Z,N=i.direction,M=void 0===N?"row":N,y=i.item,z=void 0!==y&&y,P=i.lg,E=void 0!==P&&P,C=i.md,G=void 0!==C&&C,j=i.rowSpacing,B=i.sm,R=void 0!==B&&B,T=i.spacing,$=void 0===T?0:T,L=i.wrap,O=void 0===L?"wrap":L,q=i.xl,D=void 0!==q&&q,F=i.xs,H=void 0!==F&&F,I=i.zeroMinWidth,A=void 0!==I&&I,J=(0,a.Z)(i,w),K=j||$,Q=f||$,U=o.useContext(d),V=W?p||12:U,X=(0,c.Z)({},i,{columns:V,container:W,direction:M,item:z,lg:E,md:G,sm:R,rowSpacing:K,columnSpacing:Q,wrap:O,xl:D,xs:H,zeroMinWidth:A}),Y=function(n){var t=n.classes,r=n.container,i=n.direction,a=n.item,c=n.lg,o=n.md,s=n.sm,u=n.spacing,g=n.wrap,p=n.xl,l=n.xs,d={root:["root",r&&"container",a&&"item",n.zeroMinWidth&&"zeroMinWidth"].concat((0,e.Z)(b(u,r)),["row"!==i&&"direction-xs-".concat(String(i)),"wrap"!==g&&"wrap-xs-".concat(String(g)),!1!==l&&"grid-xs-".concat(String(l)),!1!==s&&"grid-sm-".concat(String(s)),!1!==o&&"grid-md-".concat(String(o)),!1!==c&&"grid-lg-".concat(String(c)),!1!==p&&"grid-xl-".concat(String(p))])};return(0,m.Z)(d,x,t)}(X);return(0,h.jsx)(d.Provider,{value:V,children:(0,h.jsx)(k,(0,c.Z)({ownerState:X,className:(0,s.Z)(Y.root,u),as:S,ref:t},J))})}))},5791:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e=r(7294),i=r(8504),a=r(9308),c=r(9685),o=r(9211),s=r(4320),u=(0,c.Z)((function(n){return{container:{paddingLeft:n.spacing(4),paddingRight:n.spacing(4)},content:{fontSize:"1rem",fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em",paddingTop:n.spacing(1)},title:{justifyContent:"center",paddingTop:n.spacing(2),paddingBottom:n.spacing(0)}}}));function g(){var n=u({});return e.createElement(i.Z,null,e.createElement(s.ZP,{container:!0,className:n.container},e.createElement(s.ZP,{item:!0,xs:12,className:n.title},e.createElement(o.Z,{fontWeight:"fontWeightBold",py:0,display:"flex",justifyContent:"flex-start"},e.createElement(a.Z,{variant:"h3"},"Contact"))),e.createElement(s.ZP,{item:!0,xs:12,className:n.content},e.createElement(o.Z,null,"If you have any questions, comments, or concerns please send an email to ",e.createElement("a",{href:"mailto:info@southfact.com"},"info@southfact.com")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-abf3bae9246ddd4780f3.js.map