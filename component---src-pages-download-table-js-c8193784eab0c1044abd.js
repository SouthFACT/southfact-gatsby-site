(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3P7i":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var o=a("q1tI"),n=a.n(o),r=a("R/WZ"),i=a("H2TA"),c=a("aXB2"),l=a("k1TG"),d=a("iuhU");var s=o.createContext(),p=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"table":r,p=e.padding,m=void 0===p?"default":p,g=e.size,u=void 0===g?"medium":g,b=e.stickyHeader,f=void 0!==b&&b,h=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:u,stickyHeader:f}}),[m,u,f]);return o.createElement(s.Provider,{value:v},o.createElement(i,Object(l.a)({role:"table"===i?null:"table",ref:t,className:Object(d.a)(a.root,n,f&&a.stickyHeader)},h)))})),m=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(p);var g=o.createContext(),u={variant:"body"},b=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"tbody":r,s=Object(c.a)(e,["classes","className","component"]);return o.createElement(g.Provider,{value:u},o.createElement(i,Object(l.a)({className:Object(d.a)(a.root,n),ref:t,role:"tbody"===i?null:"rowgroup"},s)))})),f=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(b),h=a("NqtD"),v=a("ye/S"),y=o.forwardRef((function(e,t){var a,n,r=e.align,i=void 0===r?"inherit":r,p=e.classes,m=e.className,u=e.component,b=e.padding,f=e.scope,v=e.size,y=e.sortDirection,j=e.variant,O=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.useContext(s),w=o.useContext(g),k=w&&"head"===w.variant;u?(n=u,a=k?"columnheader":"cell"):n=k?"th":"td";var E=f;!E&&k&&(E="col");var N=b||(x&&x.padding?x.padding:"default"),C=v||(x&&x.size?x.size:"medium"),R=j||w&&w.variant,H=null;return y&&(H="asc"===y?"ascending":"descending"),o.createElement(n,Object(l.a)({ref:t,className:Object(d.a)(p.root,p[R],m,"inherit"!==i&&p["align".concat(Object(h.a)(i))],"default"!==N&&p["padding".concat(Object(h.a)(N))],"medium"!==C&&p["size".concat(Object(h.a)(C))],"head"===R&&x&&x.stickyHeader&&p.stickyHeader),"aria-sort":H,role:a,scope:E},O))})),j=Object(i.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(v.d)(Object(v.b)(e.palette.divider,1),.88):Object(v.a)(Object(v.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(y),O=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,s=Object(c.a)(e,["classes","className","component"]);return o.createElement(i,Object(l.a)({ref:t,className:Object(d.a)(a.root,n)},s))})),x=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(O),w=a("5AJ6"),k=Object(w.a)(o.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),E=a("VD++"),N=o.forwardRef((function(e,t){var a=e.active,n=void 0!==a&&a,r=e.children,i=e.classes,s=e.className,p=e.direction,m=void 0===p?"asc":p,g=e.hideSortIcon,u=void 0!==g&&g,b=e.IconComponent,f=void 0===b?k:b,v=Object(c.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return o.createElement(E.a,Object(l.a)({className:Object(d.a)(i.root,s,n&&i.active),component:"span",disableRipple:!0,ref:t},v),r,u&&!n?null:o.createElement(f,{className:Object(d.a)(i.icon,i["iconDirection".concat(Object(h.a)(m))])}))})),C=Object(i.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(N),R={variant:"head"},H=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"thead":r,s=Object(c.a)(e,["classes","className","component"]);return o.createElement(g.Provider,{value:R},o.createElement(i,Object(l.a)({className:Object(d.a)(a.root,n),ref:t,role:"thead"===i?null:"rowgroup"},s)))})),z=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(H),D=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"tr":r,s=e.hover,p=void 0!==s&&s,m=e.selected,u=void 0!==m&&m,b=Object(c.a)(e,["classes","className","component","hover","selected"]),f=o.useContext(g);return o.createElement(i,Object(l.a)({ref:t,className:Object(d.a)(a.root,n,f&&{head:a.head,footer:a.footer}[f.variant],p&&a.hover,u&&a.selected),role:"tr"===i?null:"row"},b))})),T=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(v.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(D),A=a("kKAo"),S=Object(r.a)((function(e){return{header:{borderBottomColor:"#FFFFFF",borderBottomStyle:"solid",borderBottomWidth:"2px"},headertext:{fontSize:"1rem"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),M=Object(i.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(T);function B(e){var t=S({}),a=e.data,o=e.sortByProperty,r=e.order,i=e.orderBy,c=function(e){return function(t){o(e)}};return n.a.createElement(x,{component:A.a},n.a.createElement(m,{"aria-label":"Download Data Table"},n.a.createElement(z,{className:t.header},n.a.createElement(T,null,n.a.createElement(j,{onClick:c("geographylevel"),className:t.headertext},n.a.createElement(C,{active:"geographylevel"===i,direction:r,onClick:c("geographylevel")},"State","geographylevel"===i?n.a.createElement("span",{className:t.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null)),n.a.createElement(j,{align:"left",className:t.headertext},n.a.createElement(C,{active:"datatype"===i,direction:r,onClick:c("datatype")},"Data Type","datatype"===i?n.a.createElement("span",{className:t.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null)),n.a.createElement(j,{align:"left",className:t.headertext},n.a.createElement(C,{active:"link"===i,direction:r,onClick:c("link")},"Download Link","link"===i?n.a.createElement("span",{className:t.visuallyHidden},"desc"===r?"sorted descending":"sorted ascending"):null)))),n.a.createElement(f,null,a.map((function(e){return n.a.createElement(M,{key:e.geographylevel},n.a.createElement(j,{component:"th",scope:"row",align:"left"},e.geographylevel),n.a.createElement(j,{align:"left"},e.datatype),n.a.createElement(j,{align:"left"},n.a.createElement("a",{href:e.link},e.link),"  (",e.size,")"))})))))}}}]);
//# sourceMappingURL=component---src-pages-download-table-js-c8193784eab0c1044abd.js.map