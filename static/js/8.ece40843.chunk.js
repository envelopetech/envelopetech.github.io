(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[8],{1056:function(e,a,t){"use strict";var n=t(45);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(52)).default)(r.default.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");a.default=o},1057:function(e,a,t){"use strict";var n=t(45);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(52)).default)(r.default.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");a.default=o},1083:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(16),r=t(0),o=t.n(r),l=t(515),c=t(949),i=t(874),s=t(884),d=t(990),m=t(994),p=t(993),u=t(989),g=t(991),f=t(992),b=t(116),v=t(165),h=t(1057),y=t.n(h),E=t(1056),O=t.n(E),j=Object(l.a)({root:{"& > *":{borderBottom:"unset"}}}),w=Object(l.a)((function(e){return{tablewrapper:{marginLeft:20,marginRight:20,marginTop:20,marginBottom:20}}}));function x(e,a,t){return{name:e,asset:a,size:t,assets:[{filename:"Company Profile",type:"PDF",link:"Download"},{filename:"Product Brochure",type:"PDF",link:"Download"}]}}function k(e){var a=e.row,t=o.a.useState(!1),r=Object(n.a)(t,2),l=r[0],u=r[1],v=j();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{className:v.root},o.a.createElement(p.a,null,o.a.createElement(s.a,{"aria-label":"expand row",size:"small",onClick:function(){return u(!l)}},l?o.a.createElement(O.a,null):o.a.createElement(y.a,null))),o.a.createElement(p.a,{component:"th",scope:"row"},a.name),o.a.createElement(p.a,{align:"right"},a.asset),o.a.createElement(p.a,{align:"right"},a.size)),o.a.createElement(f.a,null,o.a.createElement(p.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},o.a.createElement(i.a,{in:l,timeout:"auto",unmountOnExit:!0},o.a.createElement(c.a,{margin:1},o.a.createElement(b.a,{variant:"h6",gutterBottom:!0,component:"div"},"Collection"),o.a.createElement(d.a,{size:"small","aria-label":"purchases"},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(p.a,null,"File Name"),o.a.createElement(p.a,null,"Type"),o.a.createElement(p.a,{align:"right"},"Link"))),o.a.createElement(m.a,null,a.assets.map((function(e){return o.a.createElement(f.a,{key:e.date},o.a.createElement(p.a,{component:"th",scope:"row"},e.filename),o.a.createElement(p.a,null,e.type),o.a.createElement(p.a,{align:"right"},e.link))})))))))))}var C=[x("Company A",15,6.09),x("Company B",23,9.09),x("Company C",26,16.09),x("Company D",30,3.7),x("Company E",35,16)];function N(){var e=w();return o.a.createElement("div",{className:e.tablewrapper},o.a.createElement(u.a,{component:v.a},o.a.createElement(d.a,{"aria-label":"collapsible table"},o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(p.a,null),o.a.createElement(p.a,null,"Company Name"),o.a.createElement(p.a,{align:"right"},"Assets"),o.a.createElement(p.a,{align:"right"},"Size (mb)"))),o.a.createElement(m.a,null,C.map((function(e){return o.a.createElement(k,{key:e.name,row:e})}))))))}},959:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},961:function(e,a,t){"use strict";var n=t(0),r=n.createContext();a.a=r},989:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),l=(t(2),t(4)),c=t(6),i=o.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:a,className:Object(l.a)(t.root,c)},d))}));a.a=Object(c.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(i)},990:function(e,a,t){"use strict";var n=t(3),r=t(1),o=t(0),l=(t(2),t(4)),c=t(6),i=t(961),s=o.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,p=void 0===m?"default":m,u=e.size,g=void 0===u?"medium":u,f=e.stickyHeader,b=void 0!==f&&f,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=o.useMemo((function(){return{padding:p,size:g,stickyHeader:b}}),[p,g,b]);return o.createElement(i.a.Provider,{value:h},o.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:a,className:Object(l.a)(t.root,c,b&&t.stickyHeader)},v)))}));a.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},991:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),l=(t(2),t(4)),c=t(6),i=t(959),s={variant:"head"},d=o.forwardRef((function(e,a){var t=e.classes,c=e.className,d=e.component,m=void 0===d?"thead":d,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:s},o.createElement(m,Object(n.a)({className:Object(l.a)(t.root,c),ref:a,role:"thead"===m?null:"rowgroup"},p)))}));a.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},992:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),l=(t(2),t(4)),c=t(6),i=t(959),s=t(21),d=o.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,m=e.hover,p=void 0!==m&&m,u=e.selected,g=void 0!==u&&u,f=Object(r.a)(e,["classes","className","component","hover","selected"]),b=o.useContext(i.a);return o.createElement(d,Object(n.a)({ref:a,className:Object(l.a)(t.root,c,b&&{head:t.head,footer:t.footer}[b.variant],p&&t.hover,g&&t.selected),role:"tr"===d?null:"row"},f))}));a.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},993:function(e,a,t){"use strict";var n=t(3),r=t(1),o=t(0),l=(t(2),t(4)),c=t(6),i=t(7),s=t(21),d=t(961),m=t(959),p=o.forwardRef((function(e,a){var t,c,s=e.align,p=void 0===s?"inherit":s,u=e.classes,g=e.className,f=e.component,b=e.padding,v=e.scope,h=e.size,y=e.sortDirection,E=e.variant,O=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=o.useContext(d.a),w=o.useContext(m.a),x=w&&"head"===w.variant;f?(c=f,t=x?"columnheader":"cell"):c=x?"th":"td";var k=v;!k&&x&&(k="col");var C=b||(j&&j.padding?j.padding:"default"),N=h||(j&&j.size?j.size:"medium"),z=E||w&&w.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),o.createElement(c,Object(r.a)({ref:a,className:Object(l.a)(u.root,u[z],g,"inherit"!==p&&u["align".concat(Object(i.a)(p))],"default"!==C&&u["padding".concat(Object(i.a)(C))],"medium"!==N&&u["size".concat(Object(i.a)(N))],"head"===z&&j&&j.stickyHeader&&u.stickyHeader),"aria-sort":R,role:t,scope:k},O))}));a.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},994:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),l=(t(2),t(4)),c=t(6),i=t(959),s={variant:"body"},d=o.forwardRef((function(e,a){var t=e.classes,c=e.className,d=e.component,m=void 0===d?"tbody":d,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(i.a.Provider,{value:s},o.createElement(m,Object(n.a)({className:Object(l.a)(t.root,c),ref:a,role:"tbody"===m?null:"rowgroup"},p)))}));a.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)}}]);
//# sourceMappingURL=8.ece40843.chunk.js.map