(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"30+C":function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),c=a("kKAo"),s=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,m=void 0!==l&&l,d=Object(i.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:m?8:1,ref:t},d))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},Ie8z:function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),c=a("H2TA"),s=["video","audio","picture","iframe","img"],l=r.forwardRef((function(e,t){var a=e.children,c=e.classes,l=e.className,m=e.component,d=void 0===m?"div":m,g=e.image,p=e.src,f=e.style,u=Object(i.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==s.indexOf(d),h=!b&&g?Object(n.a)({backgroundImage:'url("'.concat(g,'")')},f):f;return r.createElement(d,Object(n.a)({className:Object(o.a)(c.root,l,b&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:t,style:h,src:b?g||p:void 0},u),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},LWCf:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a("q1tI"),i=a.n(n),r=a("R/WZ"),o=a("Xj0o"),c=a("ofer"),s=a("30+C"),l=a("o4QW"),m=a("oa/T"),d=a("Ie8z"),g=a("Z3vd"),p=a("JB2W"),f=a("hlFM"),u=a("tRbT"),b=Object(r.a)((function(e){var t,a;return{root:(t={marginTop:e.spacing(2),minHeight:"300px",backgroundColor:"#101012",marginBottom:e.spacing(6),marginLeft:e.spacing(2),marginRight:e.spacing(2)},t[e.breakpoints.down("xs")]={marginBottom:e.spacing(4),marginLeft:e.spacing(0),marginRight:e.spacing(0)},t),media:{height:0,paddingTop:"56.25%"},container:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)},content:{fontSize:"1rem",fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em",paddingTop:e.spacing(1),flexDirection:"column"},cardButton:{justifyContent:"flex-start"},cardDescription:(a={minHeight:"125px"},a[e.breakpoints.down("xs")]={minHeight:"25px"},a[e.breakpoints.down("sm")]={minHeight:"25px"},a[e.breakpoints.down("md")]={minHeight:"125px"},a[e.breakpoints.down("lg")]={minHeight:"125px"},a[e.breakpoints.down("xl")]={minHeight:"125px"},a),GatsbyLink:{width:"100%",height:"100%"}}}));function h(e){var t=e.data.allMarkdownRemark,a=b(),n=t.edges.map((function(e,t){return i.a.createElement(u.a,{item:!0,xs:12,sm:12,md:6,lg:4,xl:3,key:e.node.frontmatter.title},i.a.createElement(s.a,{className:a.root,key:t},i.a.createElement(d.a,{className:a.media,alt:e.node.frontmatter.title,title:e.node.frontmatter.title,image:e.node.frontmatter.linkImage.publicURL}),i.a.createElement(m.a,null,i.a.createElement(c.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.node.frontmatter.title),i.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p",className:a.cardDescription},e.node.frontmatter.description)),i.a.createElement(l.a,null,i.a.createElement(g.a,{variant:"outlined",className:a.cardButton},i.a.createElement(p.a,{className:a.GatsbyLink,to:e.node.fields.slug},"Learn more")))))}));return i.a.createElement(o.a,null,i.a.createElement(u.a,{container:!0,className:a.container},i.a.createElement(u.a,{item:!0,xs:12,className:a.title},i.a.createElement(f.a,{fontWeight:"fontWeightBold",py:0,display:"flex",justifyContent:"flex-start"},i.a.createElement(c.a,{variant:"h3"},"Case Studies"))),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(f.a,{width:"100%",display:"flex",justifyContent:"center",directon:"column",className:a.content},i.a.createElement(u.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start"},n)))))}},o4QW:function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),c=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,s=e.classes,l=e.className,m=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(o.a)(s.root,l,!c&&s.spacing),ref:t},m))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),c=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,m=Object(i.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(o.a)(a.root,c),ref:t},m))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)}}]);
//# sourceMappingURL=component---src-pages-case-studies-js-d8104157a20371d42bec.js.map