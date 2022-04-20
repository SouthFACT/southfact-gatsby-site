"use strict";(self.webpackChunksouthfact=self.webpackChunksouthfact||[]).push([[295],{7970:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(2174)),i=n(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"}),"UnfoldMore");t.Z=a},1396:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(7294),o=n(8406),i=n(3645),a=n(9308),s=n(3878),d=n(9199),c=n(181),u=n(5267);var l=n(9439),p=n(4942),m=n(3366),f=n(7462),h=(n(4162),n(5505)),g=n(9408),v=n(8348),Z=n(2371),x=n(1423),b=n(4584),y=n(615),w=n(6449),R=n(5973),E=n(8416),C=n(2194);function S(e){return(0,E.Z)("MuiCollapse",e)}(0,C.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var M=n(5893),N=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],k=(0,v.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,f.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),A=(0,v.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,f.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),I=(0,v.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,f.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),P=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiCollapse"}),o=n.addEndListener,i=n.children,a=n.className,s=n.collapsedSize,d=void 0===s?"0px":s,c=n.component,u=n.easing,l=n.in,v=n.onEnter,E=n.onEntered,C=n.onEntering,P=n.onExit,W=n.onExited,q=n.onExiting,z=n.orientation,G=void 0===z?"vertical":z,T=n.style,j=n.timeout,L=void 0===j?b.x9.standard:j,B=n.TransitionComponent,D=void 0===B?x.ZP:B,V=(0,m.Z)(n,N),H=(0,f.Z)({},n,{orientation:G,collapsedSize:d}),F=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,g.Z)(r,S,n)}(H),Q=(0,w.Z)(),O=r.useRef(),U=r.useRef(null),J=r.useRef(),K="number"==typeof d?"".concat(d,"px"):d,X="horizontal"===G,Y=X?"width":"height";r.useEffect((function(){return function(){clearTimeout(O.current)}}),[]);var $=r.useRef(null),_=(0,R.Z)(t,$),ee=function(e){return function(t){if(e){var n=$.current;void 0===t?e(n):e(n,t)}}},te=function(){return U.current?U.current[X?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){U.current&&X&&(U.current.style.position="absolute"),e.style[Y]=K,v&&v(e,t)})),re=ee((function(e,t){var n=te();U.current&&X&&(U.current.style.position="");var r=(0,y.C)({style:T,timeout:L,easing:u},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===L){var a=Q.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),J.current=a}else e.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");e.style[Y]="".concat(n,"px"),e.style.transitionTimingFunction=i,C&&C(e,t)})),oe=ee((function(e,t){e.style[Y]="auto",E&&E(e,t)})),ie=ee((function(e){e.style[Y]="".concat(te(),"px"),P&&P(e)})),ae=ee(W),se=ee((function(e){var t=te(),n=(0,y.C)({style:T,timeout:L,easing:u},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===L){var i=Q.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");e.style[Y]=K,e.style.transitionTimingFunction=o,q&&q(e)}));return(0,M.jsx)(D,(0,f.Z)({in:l,onEnter:ne,onEntered:oe,onEntering:re,onExit:ie,onExited:ae,onExiting:se,addEndListener:function(e){"auto"===L&&(O.current=setTimeout(e,J.current||0)),o&&o($.current,e)},nodeRef:$,timeout:"auto"===L?null:L},V,{children:function(e,t){return(0,M.jsx)(k,(0,f.Z)({as:c,className:(0,h.Z)(F.root,a,{entered:F.entered,exited:!l&&"0px"===K&&F.hidden}[e]),style:(0,f.Z)((0,p.Z)({},X?"minWidth":"minHeight",K),T),ownerState:(0,f.Z)({},H,{state:e}),ref:_},t,{children:(0,M.jsx)(A,{ownerState:(0,f.Z)({},H,{state:e}),className:F.wrapper,ref:U,children:(0,M.jsx)(I,{ownerState:(0,f.Z)({},H,{state:e}),className:F.wrapperInner,children:i})})}))}}))}));P.muiSupportAuto=!0;var W=P,q=n(8953);var z=r.createContext({}),G=n(6127);function T(e){return(0,E.Z)("MuiAccordion",e)}var j=(0,C.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),L=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],B=(0,v.ZP)(q.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,p.Z)({},"& .".concat(j.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:n.palette.divider,transition:n.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},(0,p.Z)(t,"&.".concat(j.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,p.Z)(t,"&.".concat(j.disabled),{backgroundColor:n.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&(0,p.Z)({},"&.".concat(j.expanded),{margin:"16px 0"}))})),D=r.forwardRef((function(e,t){var n,o=(0,Z.Z)({props:e,name:"MuiAccordion"}),i=o.children,a=o.className,p=o.defaultExpanded,v=void 0!==p&&p,x=o.disabled,b=void 0!==x&&x,y=o.disableGutters,w=void 0!==y&&y,R=o.expanded,E=o.onChange,C=o.square,S=void 0!==C&&C,N=o.TransitionComponent,k=void 0===N?W:N,A=o.TransitionProps,I=(0,m.Z)(o,L),P=(0,G.Z)({controlled:R,default:v,name:"Accordion",state:"expanded"}),q=(0,l.Z)(P,2),j=q[0],D=q[1],V=r.useCallback((function(e){D(!j),E&&E(e,!j)}),[j,E,D]),H=r.Children.toArray(i),F=(n=H,(0,s.Z)(n)||(0,d.Z)(n)||(0,c.Z)(n)||(0,u.Z)()),Q=F[0],O=F.slice(1),U=r.useMemo((function(){return{expanded:j,disabled:b,disableGutters:w,toggle:V}}),[j,b,w,V]),J=(0,f.Z)({},o,{square:S,disabled:b,disableGutters:w,expanded:j}),K=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,g.Z)(n,T,t)}(J);return(0,M.jsxs)(B,(0,f.Z)({className:(0,h.Z)(K.root,a),ref:t,ownerState:J,square:S},I,{children:[(0,M.jsx)(z.Provider,{value:U,children:Q}),(0,M.jsx)(k,(0,f.Z)({in:j,timeout:"auto"},A,{children:(0,M.jsx)("div",{"aria-labelledby":Q.props.id,id:Q.props["aria-controls"],role:"region",className:K.region,children:O})}))]}))})),V=n(3679);function H(e){return(0,E.Z)("MuiAccordionSummary",e)}var F=(0,C.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Q=["children","className","expandIcon","focusVisibleClassName","onClick"],O=(0,v.ZP)(V.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,r=e.ownerState,o={duration:n.transitions.duration.shortest};return(0,f.Z)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],o)},(0,p.Z)(t,"&.".concat(F.focusVisible),{backgroundColor:n.palette.action.focus}),(0,p.Z)(t,"&.".concat(F.disabled),{opacity:n.palette.action.disabledOpacity}),(0,p.Z)(t,"&:hover:not(.".concat(F.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&(0,p.Z)({},"&.".concat(F.expanded),{minHeight:64}))})),U=(0,v.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,f.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,p.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(F.expanded),{margin:"20px 0"}))})),J=(0,v.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,p.Z)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(F.expanded),{transform:"rotate(180deg)"})})),K=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiAccordionSummary"}),o=n.children,i=n.className,a=n.expandIcon,s=n.focusVisibleClassName,d=n.onClick,c=(0,m.Z)(n,Q),u=r.useContext(z),l=u.disabled,p=void 0!==l&&l,v=u.disableGutters,x=u.expanded,b=u.toggle,y=(0,f.Z)({},n,{expanded:x,disabled:p,disableGutters:v}),w=function(e){var t=e.classes,n=e.expanded,r=e.disabled,o=e.disableGutters,i={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,g.Z)(i,H,t)}(y);return(0,M.jsxs)(O,(0,f.Z)({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":x,className:(0,h.Z)(w.root,i),focusVisibleClassName:(0,h.Z)(w.focusVisible,s),onClick:function(e){b&&b(e),d&&d(e)},ref:t,ownerState:y},c,{children:[(0,M.jsx)(U,{className:w.content,ownerState:y,children:o}),a&&(0,M.jsx)(J,{className:w.expandIconWrapper,ownerState:y,children:a})]}))}));function X(e){return(0,E.Z)("MuiAccordionDetails",e)}(0,C.Z)("MuiAccordionDetails",["root"]);var Y=["className"],$=(0,v.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),_=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiAccordionDetails"}),r=n.className,o=(0,m.Z)(n,Y),i=n,a=function(e){var t=e.classes;return(0,g.Z)({root:["root"]},X,t)}(i);return(0,M.jsx)($,(0,f.Z)({className:(0,h.Z)(a.root,r),ref:t,ownerState:i},o))})),ee=n(7970),te=n(9211),ne=n(4320),re=(0,o.Z)((function(e){var t;return{root:(t={width:"50%",minHeight:"350px",backgroundColor:"#101012",border:"2px solid #101012"},t[e.breakpoints.down("sm")]={width:"100%",marginLeft:"0"},t.marginBottom=e.spacing(6),t),media:{width:"100%",height:"250px",border:"0px solid transparent"},container:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)},question:{fontSize:e.typography.pxToRem(20),fontWeight:e.typography.fontWeightBold},answer:{fontSize:e.typography.pxToRem(18),fontWeight:e.typography.fontWeightRegular},questionandanswer:{marginBottom:e.spacing(3)}}}));function oe(e){var t=e.data.allMarkdownRemark,n=re();t.edges.map((function(e,t){var o=e.node.frontmatter.question.toLowerCase().replace(/ /g,"-").replace("?","");return r.createElement(D,{key:t,className:n.questionandanswer},r.createElement(K,{expandIcon:r.createElement(ee.Z,null),"aria-controls":o,id:o},r.createElement(a.Z,{className:n.question},t+1,". ",e.node.frontmatter.question)),r.createElement(_,null,r.createElement(a.Z,{className:n.answer},e.node.frontmatter.answer)))}));return r.createElement(i.Z,null,r.createElement(ne.ZP,{container:!0,className:n.container},r.createElement(ne.ZP,{item:!0,xs:12},r.createElement(te.Z,{fontWeight:"fontWeightBold",py:0},r.createElement(a.Z,{variant:"h3"},"Frequently Asked Questions (FAQS)"))),r.createElement(ne.ZP,{item:!0,xs:12},r.createElement(te.Z,{width:"100%",mt:4},"Information about Freqently Asked Questions will be coming soon. Please check back another time."))))}}}]);
//# sourceMappingURL=component---src-pages-faqs-js-4ad033e3caa9e6b13dbb.js.map