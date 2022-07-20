"use strict";(self.webpackChunksouthfact=self.webpackChunksouthfact||[]).push([[435],{3306:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ne}});var n=a(7294),r=a(3645),o=a(9308),i=a(8406),l=a(9211),s=a(4320),c=a(7462),d=a(3366),p=a(5706),u=a.n(p);function g(e){var t=e.theme,a=e.name,n=e.props;if(!(t&&t.components&&t.components[a]&&t.components[a].defaultProps))return n;var r,o=(0,c.Z)({},n),i=t.components[a].defaultProps;for(r in i)void 0===o[r]&&(o[r]=i[r]);return o}var h=a(1758),f=a(5893),m=["defaultTheme","withTheme","name"],v=["classes"],y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){var r=t.defaultTheme,o=t.withTheme,l=void 0!==o&&o,s=t.name,p=(0,d.Z)(t,m);var y=s,S=(0,i.Z)(e,(0,c.Z)({defaultTheme:r,Component:a,name:s||a.displayName,classNamePrefix:y},p)),Z=n.forwardRef((function(e,t){var n,o=(0,d.Z)(e,v),i=S((0,c.Z)({},a.defaultProps,e)),p=o;return("string"==typeof s||l)&&(n=(0,h.Z)()||r,s&&(p=g({theme:n,name:s,props:o})),l&&!p.theme&&(p.theme=n)),(0,f.jsx)(a,(0,c.Z)({ref:t,classes:i},p))}));return u()(Z,a),Z}},S=a(5505),Z=a(9408);var C=n.createContext(),I=a(2371),N=a(8348),R=a(8416),k=a(2194);function b(e){return(0,R.Z)("MuiTable",e)}(0,k.Z)("MuiTable",["root","stickyHeader"]);var x=["className","component","padding","size","stickyHeader"],w=(0,N.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,c.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,c.Z)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),L="table",D=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTable"}),r=a.className,o=a.component,i=void 0===o?L:o,l=a.padding,s=void 0===l?"normal":l,p=a.size,u=void 0===p?"medium":p,g=a.stickyHeader,h=void 0!==g&&g,m=(0,d.Z)(a,x),v=(0,c.Z)({},a,{component:i,padding:s,size:u,stickyHeader:h}),y=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,Z.Z)(a,b,t)}(v),N=n.useMemo((function(){return{padding:s,size:u,stickyHeader:h}}),[s,u,h]);return(0,f.jsx)(C.Provider,{value:N,children:(0,f.jsx)(w,(0,c.Z)({as:i,role:i===L?null:"table",ref:t,className:(0,S.Z)(y.root,r),ownerState:v},m))})}));var M=n.createContext();function z(e){return(0,R.Z)("MuiTableBody",e)}(0,k.Z)("MuiTableBody",["root"]);var P=["className","component"],T=(0,N.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),V={variant:"body"},W="tbody",B=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTableBody"}),n=a.className,r=a.component,o=void 0===r?W:r,i=(0,d.Z)(a,P),l=(0,c.Z)({},a,{component:o}),s=function(e){var t=e.classes;return(0,Z.Z)({root:["root"]},z,t)}(l);return(0,f.jsx)(M.Provider,{value:V,children:(0,f.jsx)(T,(0,c.Z)({className:(0,S.Z)(s.root,n),as:o,ref:t,role:o===W?null:"rowgroup",ownerState:l},i))})})),H=a(4942),E=a(7663),U=a(9240);function j(e){return(0,R.Z)("MuiTableCell",e)}var O=(0,k.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Y=["align","className","component","padding","scope","size","sortDirection","variant"],A=(0,N.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,U.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,U.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,U.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,c.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?(0,E.$n)((0,E.Fq)(t.palette.divider,1),.88):(0,E._j)((0,E.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,H.Z)({padding:"6px 16px"},"&.".concat(O.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),F=n.forwardRef((function(e,t){var a,r=(0,I.Z)({props:e,name:"MuiTableCell"}),o=r.align,i=void 0===o?"inherit":o,l=r.className,s=r.component,p=r.padding,u=r.scope,g=r.size,h=r.sortDirection,m=r.variant,v=(0,d.Z)(r,Y),y=n.useContext(C),N=n.useContext(M),R=N&&"head"===N.variant;a=s||(R?"th":"td");var k=u;!k&&R&&(k="col");var b=m||N&&N.variant,x=(0,c.Z)({},r,{align:i,component:a,padding:p||(y&&y.padding?y.padding:"normal"),size:g||(y&&y.size?y.size:"medium"),sortDirection:h,stickyHeader:"head"===b&&y&&y.stickyHeader,variant:b}),w=function(e){var t=e.classes,a=e.variant,n=e.align,r=e.padding,o=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,U.Z)(n)),"normal"!==r&&"padding".concat((0,U.Z)(r)),"size".concat((0,U.Z)(o))]};return(0,Z.Z)(i,j,t)}(x),L=null;return h&&(L="asc"===h?"ascending":"descending"),(0,f.jsx)(A,(0,c.Z)({as:a,ref:t,className:(0,S.Z)(w.root,l),"aria-sort":L,scope:k,ownerState:x},v))})),G=F;function q(e){return(0,R.Z)("MuiTableContainer",e)}(0,k.Z)("MuiTableContainer",["root"]);var J=["className","component"],X=(0,N.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),$=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTableContainer"}),n=a.className,r=a.component,o=void 0===r?"div":r,i=(0,d.Z)(a,J),l=(0,c.Z)({},a,{component:o}),s=function(e){var t=e.classes;return(0,Z.Z)({root:["root"]},q,t)}(l);return(0,f.jsx)(X,(0,c.Z)({ref:t,as:o,className:(0,S.Z)(s.root,n),ownerState:l},i))})),_=a(3679),K=(0,a(2067).Z)((0,f.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Q(e){return(0,R.Z)("MuiTableSortLabel",e)}var ee=(0,k.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),te=["active","children","className","direction","hideSortIcon","IconComponent"],ae=(0,N.ZP)(_.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.active&&t.active]}})((function(e){var t=e.theme;return(0,H.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":(0,H.Z)({color:t.palette.text.secondary},"& .".concat(ee.icon),{opacity:.5})},"&.".concat(ee.active),(0,H.Z)({color:t.palette.text.primary},"& .".concat(ee.icon),{opacity:1,color:t.palette.text.secondary}))})),ne=(0,N.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var a=e.ownerState;return[t.icon,t["iconDirection".concat((0,U.Z)(a.direction))]]}})((function(e){var t=e.theme,a=e.ownerState;return(0,c.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===a.direction&&{transform:"rotate(0deg)"},"asc"===a.direction&&{transform:"rotate(180deg)"})})),re=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTableSortLabel"}),n=a.active,r=void 0!==n&&n,o=a.children,i=a.className,l=a.direction,s=void 0===l?"asc":l,p=a.hideSortIcon,u=void 0!==p&&p,g=a.IconComponent,h=void 0===g?K:g,m=(0,d.Z)(a,te),v=(0,c.Z)({},a,{active:r,direction:s,hideSortIcon:u,IconComponent:h}),y=function(e){var t=e.classes,a=e.direction,n={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,U.Z)(a))]};return(0,Z.Z)(n,Q,t)}(v);return(0,f.jsxs)(ae,(0,c.Z)({className:(0,S.Z)(y.root,i),component:"span",disableRipple:!0,ownerState:v,ref:t},m,{children:[o,u&&!r?null:(0,f.jsx)(ne,{as:h,className:(0,S.Z)(y.icon),ownerState:v})]}))}));function oe(e){return(0,R.Z)("MuiTableHead",e)}(0,k.Z)("MuiTableHead",["root"]);var ie=["className","component"],le=(0,N.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),se={variant:"head"},ce="thead",de=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTableHead"}),n=a.className,r=a.component,o=void 0===r?ce:r,i=(0,d.Z)(a,ie),l=(0,c.Z)({},a,{component:o}),s=function(e){var t=e.classes;return(0,Z.Z)({root:["root"]},oe,t)}(l);return(0,f.jsx)(M.Provider,{value:se,children:(0,f.jsx)(le,(0,c.Z)({as:o,className:(0,S.Z)(s.root,n),ref:t,role:o===ce?null:"rowgroup",ownerState:l},i))})}));function pe(e){return(0,R.Z)("MuiTableRow",e)}var ue=(0,k.Z)("MuiTableRow",["root","selected","hover","head","footer"]),ge=["className","component","hover","selected"],he=(0,N.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,H.Z)(t,"&.".concat(ue.hover,":hover"),{backgroundColor:a.palette.action.hover}),(0,H.Z)(t,"&.".concat(ue.selected),{backgroundColor:(0,E.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,E.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),fe=n.forwardRef((function(e,t){var a=(0,I.Z)({props:e,name:"MuiTableRow"}),r=a.className,o=a.component,i=void 0===o?"tr":o,l=a.hover,s=void 0!==l&&l,p=a.selected,u=void 0!==p&&p,g=(0,d.Z)(a,ge),h=n.useContext(M),m=(0,c.Z)({},a,{component:i,hover:s,selected:u,head:h&&"head"===h.variant,footer:h&&"footer"===h.variant}),v=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,Z.Z)(a,pe,t)}(m);return(0,f.jsx)(he,(0,c.Z)({as:i,ref:t,className:(0,S.Z)(v.root,r),role:"tr"===i?null:"row",ownerState:m},g))})),me=fe,ve=a(8953),ye=(0,i.Z)((function(e){return{header:{borderBottomColor:"#FFFFFF",borderBottomStyle:"solid",borderBottomWidth:"2px"},headertext:{fontSize:"1rem"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),Se=y((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(me);function Ze(e){var t=ye({}),a=e.data,r=e.sortByProperty,o=e.order,i=e.orderBy,l=function(e){return function(t){r(e)}};return n.createElement($,{component:ve.Z},n.createElement(D,{"aria-label":"Download Data Table"},n.createElement(de,{className:t.header},n.createElement(me,null,n.createElement(G,{onClick:l("geographylevel"),className:t.headertext},n.createElement(re,{active:"geographylevel"===i,direction:o,onClick:l("geographylevel")},"Region","geographylevel"===i?n.createElement("span",{className:t.visuallyHidden},"desc"===o?"sorted descending":"sorted ascending"):null)),n.createElement(G,{align:"left",className:t.headertext},n.createElement(re,{active:"datatype"===i,direction:o,onClick:l("datatype")},"Data Type","datatype"===i?n.createElement("span",{className:t.visuallyHidden},"desc"===o?"sorted descending":"sorted ascending"):null)),n.createElement(G,{align:"left",className:t.headertext},n.createElement(re,{active:"link"===i,direction:o,onClick:l("link")},"Download Link","link"===i?n.createElement("span",{className:t.visuallyHidden},"desc"===o?"sorted descending":"sorted ascending"):null)))),n.createElement(B,null,a.map((function(e){return n.createElement(Se,{key:e.geographylevel},n.createElement(G,{component:"th",scope:"row",align:"left"},e.geographylevel),n.createElement(G,{align:"left"},e.datatype),n.createElement(G,{align:"left"},n.createElement("a",{href:e.link},e.linktitle),"  (",e.size,")"))})))))}var Ce=[{geographylevel:"Continental US",datatype:"Normalized Difference Moisture Index (NDMI)",size:"~4GB",link:"https://data.southfact.com/current-year-to-date/ndmiLatestChangeL8CONUS.tif",linktitle:"NDMI Latest Change Landsat 8 CONUS",method:"NDMI",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Normalized Difference Moisture Index (NDMI)",size:"~20MB",link:"https://data.southfact.com/current-year-to-date/ndmiLatestChangeL8PRVI.tif",linktitle:"NDMI Latest Change Landsat 8 Puerto Rico and Virgin Islands",method:"NDMI",year:"2022"},{geographylevel:"Continental US",datatype:"Normalized Difference Vegetation Index (NDVI)",size:"~3GB",link:"https://data.southfact.com/current-year-to-date/ndviLatestChangeL8CONUS.tif",linktitle:"NDVI Latest Change Landsat 8 CONUS",method:"NDVI",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Normalized Difference Vegetation Index (NDVI)",size:"~10MB",link:"https://data.southfact.com/current-year-to-date/ndviLatestChangeL8PRVI.tif",linktitle:"NDVI Latest Change Landsat 8 Puerto Rico and Virgin Islands",method:"NDVI",year:"2022"},{geographylevel:"Continental US",datatype:"Short-wave infrared Differencing (SWIR)",size:"~3GB",link:"https://data.southfact.com/current-year-to-date/swirLatestChangeL8CONUS.tif",linktitle:"SWIR Latest Change Landsat 8 CONUS",method:"SWIR",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Short-wave infrared Differencing (SWIR)",size:"~20MB",link:"https://data.southfact.com/current-year-to-date/swirLatestChangeL8PRVI.tif",linktitle:"SWIR Latest Change Landsat 8 Puerto Rico and Virgin Islands",method:"SWIR",year:"2022"},{geographylevel:"Continental US",datatype:"Normalized Difference Moisture Index (NDMI)",size:"~4GB",link:"https://data.southfact.com/current-year-to-date/ndmiLatestChangeS2CONUS.tif",linktitle:"NDMI Latest Change Sentinel 2 CONUS",method:"NDMI",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Normalized Difference Moisture Index (NDMI)",size:"~15MB",link:"https://data.southfact.com/current-year-to-date/ndmiLatestChangeS2PRVI.tif",linktitle:"NDMI Latest Change Sentinel 2 Puerto Rico and Virgin Islands",method:"NDMI",year:"2022"},{geographylevel:"Continental US",datatype:"Normalized Difference Vegetation Index (NDVI)",size:"~4GB",link:"https://data.southfact.com/current-year-to-date/ndviLatestChangeS2CONUS.tif",linktitle:"NDVI Latest Change Sentinel 2 CONUS",method:"NDVI",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Normalized Difference Vegetation Index (NDVI)",size:"~15MB",link:"https://data.southfact.com/current-year-to-date/ndviLatestChangeS2PRVI.tif",linktitle:"NDVI Latest Change Sentinel 2 Puerto Rico and Virgin Islands",method:"NDVI",year:"2022"},{geographylevel:"Continental US",datatype:"Short-wave infrared Differencing (SWIR)",size:"~4GB",link:"https://data.southfact.com/current-year-to-date/swirLatestChangeS2CONUS.tif",linktitle:"SWIR Latest Change Sentinel 2 CONUS",method:"SWIR",year:"2022"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Short-wave infrared Differencing (SWIR)",size:"~15MB",link:"https://data.southfact.com/current-year-to-date/swirLatestChangeS2PRVI.tif",linktitle:"SWIR Latest Change Sentinel 2 Puerto Rico and Virgin Islands",method:"SWIR",year:"2022"},{geographylevel:"Continental US",datatype:"Short-wave infrared Differencing (SWIR)",size:"~4GB",link:"https://data.southfact.com/LastYear/swirYearlyChange2021L8CONUS.tif",linktitle:"SWIR Last Years Yearly Change Landsat 8 CONUS (2021)",method:"SWIR",year:"2021"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Short-wave infrared Differencing (SWIR)",size:"<1MB",link:"https://data.southfact.com/LastYear/swirYearlyChange2021L8PRVI.tif",linktitle:"SWIR Last Years Yearly Change Landsat 8 Puerto Rico and Virgin Islands (2021)",method:"SWIR",year:"2021"},{geographylevel:"Continental US",datatype:"Short-wave infrared Differencing (SWIR)",size:"~2.5GB",link:"https://data.southfact.com/LastYear/swirYearlyChange2021S2YearlyChange2021S2CONUS.tif",linktitle:"SWIR Last Years Yearly Change Sentinel 2 CONUS (2021)",method:"SWIR",year:"2021"},{geographylevel:"Puerto Rico and Virgin Islands",datatype:"Short-wave infrared Differencing (SWIR)",size:"<1MB",link:"https://data.southfact.com/LastYear/swirYearlyChange2021S2PRVI.tif",linktitle:"SWIR Last Years Yearly Change Sentinel 2 Puerto Rico and Virgin Islands (2021)",method:"SWIR",year:"2021"}],Ie=(0,i.Z)((function(e){return{container:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)},content:{fontSize:"1rem",fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em",paddingTop:e.spacing(1)},title:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(0)}}}));function Ne(){var e=Ie({}),t=Ce,a=n.useState(t),i=a[0],c=a[1],d=n.useState("desc"),p=d[0],u=d[1],g=n.useState(""),h=g[0],f=g[1];return n.createElement(r.Z,null,n.createElement(s.ZP,{container:!0,className:e.container},n.createElement(s.ZP,{item:!0,xs:12,className:e.title},n.createElement(l.Z,{fontWeight:"fontWeightBold",py:0,display:"flex",justifyContent:"flex-start"},n.createElement(o.Z,{variant:"h3"},"Data Downloads"))),n.createElement(s.ZP,{item:!0,xs:12,className:e.content},n.createElement(l.Z,{fontWeight:"fontWeightNormal",py:0,display:"flex",justifyContent:"flex-start"},n.createElement(Ze,{data:i,order:p,orderBy:h,sortByProperty:function(e){var t;!function(e){u(h===e&&"asc"===p?"desc":"asc"),f(e)}(e),"asc"===p&&c(i.sort((t=e,function(e,a){return e[t]<a[t]?1:e[t]>a[t]?-1:0}))),"desc"===p&&c(i.sort(function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}(e)))}})))))}}}]);
//# sourceMappingURL=component---src-pages-downloads-js-4ab5289e13887fa5de8f.js.map