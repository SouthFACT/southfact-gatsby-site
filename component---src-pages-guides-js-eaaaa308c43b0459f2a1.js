(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"30+C":function(e,t,n){"use strict";var a=n("k1TG"),r=n("aXB2"),i=n("q1tI"),o=n("iuhU"),c=n("kKAo"),s=n("H2TA"),l=i.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(c.a,Object(a.a)({className:Object(o.a)(n.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"P+Eh":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"pageQuery",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("tRbT"),c=n("ofer");n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=function(e){var t=e.videoSrcURL,n=e.videoTitle;!function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n])}(e,["videoSrcURL","videoTitle"]);return r.a.createElement("div",{className:"video"},r.a.createElement("iframe",{src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))},l=n("30+C"),d=n("oa/T");function u(e){var t=e.data.allMarkdownRemark.edges.map((function(e){return r.a.createElement(o.a,{item:!0,sm:4,xs:12},r.a.createElement(l.a,null,r.a.createElement(d.a,null,r.a.createElement(c.a,{variant:"h5",align:"center"},e.node.frontmatter.description,r.a.createElement(s,{videoSrcURL:e.node.frontmatter.videoSourceURL,videoTitle:e.node.frontmatter.videoTitle})))))}));return r.a.createElement(i.a,null,r.a.createElement(c.a,{variant:"h3"},"Guides"),r.a.createElement(o.a,{container:!0,justify:"center",spacing:3,style:{padding:10}},t))}var f="2053766240"},"oa/T":function(e,t,n){"use strict";var a=n("k1TG"),r=n("aXB2"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=i.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(l,Object(a.a)({className:Object(o.a)(n.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},tRbT:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("DNiP"),n("pIFo"),n("8+KV");var a=n("aXB2"),r=n("k1TG"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,m=void 0===f?"div":f,x=e.container,g=void 0!==x&&x,v=e.direction,p=void 0===v?"row":v,w=e.item,b=void 0!==w&&w,j=e.justify,h=void 0===j?"flex-start":j,y=e.lg,S=void 0!==y&&y,O=e.md,C=void 0!==O&&O,E=e.sm,T=void 0!==E&&E,k=e.spacing,W=void 0===k?0:k,B=e.wrap,I=void 0===B?"wrap":B,N=e.xl,R=void 0!==N&&N,G=e.xs,M=void 0!==G&&G,z=e.zeroMinWidth,U=void 0!==z&&z,q=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(o.a)(d.root,u,g&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],b&&d.item,U&&d.zeroMinWidth,"row"!==p&&d["direction-xs-".concat(String(p))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==h&&d["justify-xs-".concat(String(h))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==T&&d["grid-sm-".concat(String(T))],!1!==C&&d["grid-md-".concat(String(C))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==R&&d["grid-xl-".concat(String(R))]);return i.createElement(m,Object(r.a)({className:A,ref:t},q))})),f=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f}}]);
//# sourceMappingURL=component---src-pages-guides-js-eaaaa308c43b0459f2a1.js.map