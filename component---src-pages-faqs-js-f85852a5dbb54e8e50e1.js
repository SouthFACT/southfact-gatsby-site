(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1iKp":function(e,t,a){"use strict";var n=a("5NKs"),o=a("jGDn");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("q1tI")),i=(0,n(a("8/g6")).default)(r.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},g6o5:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a("q1tI"),o=a.n(n),r=a("R/WZ"),i=a("Xj0o"),d=a("ofer"),s=a("k1TG"),c=a("YjCJ"),l=a("+nib"),u=a("sXA6"),p=a("SCGU");var m=a("8j0Q"),b=a("aXB2"),f=(a("TOwV"),a("iuhU")),g=a("dRu9"),h=a("H2TA"),v=a("wpWl"),x=a("4Hym"),y=a("tr08"),E=a("bfFb"),j=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.collapsedHeight,d=void 0===i?"0px":i,c=e.component,l=void 0===c?"div":c,u=e.disableStrictModeCompat,p=void 0!==u&&u,h=e.in,j=e.onEnter,O=e.onEntered,R=e.onEntering,w=e.onExit,C=e.onExited,k=e.onExiting,N=e.style,T=e.timeout,S=void 0===T?v.b.standard:T,B=e.TransitionComponent,I=void 0===B?g.a:B,A=Object(b.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),M=Object(y.a)(),q=n.useRef(),H=n.useRef(null),$=n.useRef(),z="number"==typeof d?"".concat(d,"px"):d;n.useEffect((function(){return function(){clearTimeout(q.current)}}),[]);var D=M.unstable_strictMode&&!p,L=n.useRef(null),F=Object(E.a)(t,D?L:void 0),W=function(e){return function(t,a){if(e){var n=D?[L.current,t]:[t,a],o=Object(m.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},P=W((function(e,t){e.style.height=z,j&&j(e,t)})),V=W((function(e,t){var a=H.current?H.current.clientHeight:0,n=Object(x.a)({style:N,timeout:S},{mode:"enter"}).duration;if("auto"===S){var o=M.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),$.current=o}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),R&&R(e,t)})),G=W((function(e,t){e.style.height="auto",O&&O(e,t)})),K=W((function(e){var t=H.current?H.current.clientHeight:0;e.style.height="".concat(t,"px"),w&&w(e)})),J=W(C),Q=W((function(e){var t=H.current?H.current.clientHeight:0,a=Object(x.a)({style:N,timeout:S},{mode:"exit"}).duration;if("auto"===S){var n=M.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),$.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=z,k&&k(e)}));return n.createElement(I,Object(s.a)({in:h,onEnter:P,onEntered:G,onEntering:V,onExit:K,onExited:J,onExiting:Q,addEndListener:function(e,t){var a=D?e:t;"auto"===S&&(q.current=setTimeout(a,$.current||0))},nodeRef:D?L:void 0,timeout:"auto"===S?null:S},A),(function(e,t){return n.createElement(l,Object(s.a)({className:Object(f.a)(o.container,r,{entered:o.entered,exited:!h&&"0px"===z&&o.hidden}[e]),style:Object(s.a)({minHeight:z},N),ref:F},t),n.createElement("div",{className:o.wrapper,ref:H},n.createElement("div",{className:o.wrapperInner},a)))}))}));j.muiSupportAuto=!0;var O=Object(h.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(j),R=a("kKAo");var w=n.createContext({}),C=a("yCxk"),k=n.forwardRef((function(e,t){var a,o=e.children,r=e.classes,i=e.className,d=e.defaultExpanded,g=void 0!==d&&d,h=e.disabled,v=void 0!==h&&h,x=e.expanded,y=e.onChange,E=e.square,j=void 0!==E&&E,k=e.TransitionComponent,N=void 0===k?O:k,T=e.TransitionProps,S=Object(b.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),B=Object(C.a)({controlled:x,default:g,name:"Accordion",state:"expanded"}),I=Object(m.a)(B,2),A=I[0],M=I[1],q=n.useCallback((function(e){M(!A),y&&y(e,!A)}),[A,y,M]),H=n.Children.toArray(o),$=(a=H,Object(c.a)(a)||Object(l.a)(a)||Object(u.a)(a)||Object(p.a)()),z=$[0],D=$.slice(1),L=n.useMemo((function(){return{expanded:A,disabled:v,toggle:q}}),[A,v,q]);return n.createElement(R.a,Object(s.a)({className:Object(f.a)(r.root,i,A&&r.expanded,v&&r.disabled,!j&&r.rounded),ref:t,square:j},S),n.createElement(w.Provider,{value:L},z),n.createElement(N,Object(s.a)({in:A,timeout:"auto"},T),n.createElement("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region"},D)))})),N=Object(h.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(k),T=a("VD++"),S=a("ye/S"),B=a("NqtD"),I=n.forwardRef((function(e,t){var a=e.edge,o=void 0!==a&&a,r=e.children,i=e.classes,d=e.className,c=e.color,l=void 0===c?"default":c,u=e.disabled,p=void 0!==u&&u,m=e.disableFocusRipple,g=void 0!==m&&m,h=e.size,v=void 0===h?"medium":h,x=Object(b.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(T.a,Object(s.a)({className:Object(f.a)(i.root,d,"default"!==l&&i["color".concat(Object(B.a)(l))],p&&i.disabled,"small"===v&&i["size".concat(Object(B.a)(v))],{start:i.edgeStart,end:i.edgeEnd}[o]),centerRipple:!0,focusRipple:!g,disabled:p,ref:t},x),n.createElement("span",{className:i.label},r))})),A=Object(h.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(S.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(S.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(S.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(I),M=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.expandIcon,d=e.IconButtonProps,c=e.onBlur,l=e.onClick,u=e.onFocusVisible,p=Object(b.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),m=n.useState(!1),g=m[0],h=m[1],v=n.useContext(w),x=v.disabled,y=void 0!==x&&x,E=v.expanded,j=v.toggle;return n.createElement(T.a,Object(s.a)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":E,className:Object(f.a)(o.root,r,y&&o.disabled,E&&o.expanded,g&&o.focused),onFocusVisible:function(e){h(!0),u&&u(e)},onBlur:function(e){h(!1),c&&c(e)},onClick:function(e){j&&j(e),l&&l(e)},ref:t},p),n.createElement("div",{className:Object(f.a)(o.content,E&&o.expanded)},a),i&&n.createElement(A,Object(s.a)({className:Object(f.a)(o.expandIcon,E&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},d),i))})),q=Object(h.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(M),H=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=Object(b.a)(e,["classes","className"]);return n.createElement("div",Object(s.a)({className:Object(f.a)(a.root,o),ref:t},r))})),$=Object(h.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(H),z=a("1iKp"),D=a.n(z),L=a("hlFM"),F=a("tRbT"),W=Object(r.a)((function(e){var t;return{root:(t={width:"50%",minHeight:"350px",backgroundColor:"#101012",border:"2px solid #101012"},t[e.breakpoints.down("xs")]={width:"100%",marginLeft:"0"},t.marginBottom=e.spacing(6),t),media:{width:"100%",height:"250px",border:"0px solid transparent"},container:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)},question:{fontSize:e.typography.pxToRem(20),fontWeight:e.typography.fontWeightBold},answer:{fontSize:e.typography.pxToRem(18),fontWeight:e.typography.fontWeightRegular},questionandanswer:{marginBottom:e.spacing(3)}}}));function P(e){var t=e.data.allMarkdownRemark,a=W(),n=t.edges.map((function(e,t){var n=e.node.frontmatter.question.toLowerCase().replace(/ /g,"-").replace("?","");return o.a.createElement(N,{key:t,className:a.questionandanswer},o.a.createElement(q,{expandIcon:o.a.createElement(D.a,null),"aria-controls":n,id:n},o.a.createElement(d.a,{className:a.question},t+1,". ",e.node.frontmatter.question)),o.a.createElement($,null,o.a.createElement(d.a,{className:a.answer},e.node.frontmatter.answer)))}));return o.a.createElement(i.a,null,o.a.createElement(F.a,{container:!0,className:a.container},o.a.createElement(F.a,{item:!0,xs:12},o.a.createElement(L.a,{fontWeight:"fontWeightBold",py:0},o.a.createElement(d.a,{variant:"h3"},"Frequently Asked Questions (FAQS)"))),o.a.createElement(F.a,{item:!0,xs:12},o.a.createElement(L.a,{width:"100%",mt:4},n))))}}}]);
//# sourceMappingURL=component---src-pages-faqs-js-f85852a5dbb54e8e50e1.js.map