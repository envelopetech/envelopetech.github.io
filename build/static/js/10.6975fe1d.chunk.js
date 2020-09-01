(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[10],{1088:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(0),n=a.n(r),o=a(6),i=a(515),c=a(990),l=a(994),s=a(993),d=a(989),p=a(991),m=a(992),u=a(165),g=Object(o.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(s.a),b=Object(o.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(m.a);function h(e,t,a,r){return{name:e,calories:t,fat:a,carbs:r}}var f=[h(1,"Nisarg Mehta","ABC Pvt Ltd",14678),h(2,"Virat Kothari","BBC Enterprise",13278),h(3,"Aatish Motipara","XYZ Services Pvt Ltd",12984),h(4,"Vaibhav Palan","Sample Company Inc",11746),h(5,"Bhavesh Gandhi","Envelope Technologies",10536)],v=Object(i.a)({table:{minWidth:700},tablewrapper:{marginLeft:20,marginRight:20,marginTop:20,marginBottom:20}});function y(){var e=v();return n.a.createElement("div",{className:e.tablewrapper},n.a.createElement(d.a,{component:u.a},n.a.createElement(c.a,{className:e.table,"aria-label":"customized table"},n.a.createElement(p.a,null,n.a.createElement(m.a,null,n.a.createElement(g,null,"Rank"),n.a.createElement(g,{align:"right"},"Visitor Name"),n.a.createElement(g,{align:"right"},"Company"),n.a.createElement(g,{align:"right"},"Points"))),n.a.createElement(l.a,null,f.map((function(e){return n.a.createElement(b,{key:e.name},n.a.createElement(g,{component:"th",scope:"row"},e.name),n.a.createElement(g,{align:"right"},e.calories),n.a.createElement(g,{align:"right"},e.fat),n.a.createElement(g,{align:"right"},e.carbs))}))))))}},959:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},961:function(e,t,a){"use strict";var r=a(0),n=r.createContext();t.a=n},989:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(2),a(4)),c=a(6),l=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({ref:t,className:Object(i.a)(a.root,c)},d))}));t.a=Object(c.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},990:function(e,t,a){"use strict";var r=a(3),n=a(1),o=a(0),i=(a(2),a(4)),c=a(6),l=a(961),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,p=e.padding,m=void 0===p?"default":p,u=e.size,g=void 0===u?"medium":u,b=e.stickyHeader,h=void 0!==b&&b,f=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:g,stickyHeader:h}}),[m,g,h]);return o.createElement(l.a.Provider,{value:v},o.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:t,className:Object(i.a)(a.root,c,h&&a.stickyHeader)},f)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},991:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(2),a(4)),c=a(6),l=a(959),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,p=void 0===d?"thead":d,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(p,Object(r.a)({className:Object(i.a)(a.root,c),ref:t,role:"thead"===p?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},992:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(2),a(4)),c=a(6),l=a(959),s=a(21),d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,p=e.hover,m=void 0!==p&&p,u=e.selected,g=void 0!==u&&u,b=Object(n.a)(e,["classes","className","component","hover","selected"]),h=o.useContext(l.a);return o.createElement(d,Object(r.a)({ref:t,className:Object(i.a)(a.root,c,h&&{head:a.head,footer:a.footer}[h.variant],m&&a.hover,g&&a.selected),role:"tr"===d?null:"row"},b))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},993:function(e,t,a){"use strict";var r=a(3),n=a(1),o=a(0),i=(a(2),a(4)),c=a(6),l=a(7),s=a(21),d=a(961),p=a(959),m=o.forwardRef((function(e,t){var a,c,s=e.align,m=void 0===s?"inherit":s,u=e.classes,g=e.className,b=e.component,h=e.padding,f=e.scope,v=e.size,y=e.sortDirection,j=e.variant,O=Object(r.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.useContext(d.a),E=o.useContext(p.a),k=E&&"head"===E.variant;b?(c=b,a=k?"columnheader":"cell"):c=k?"th":"td";var w=f;!w&&k&&(w="col");var N=h||(x&&x.padding?x.padding:"default"),C=v||(x&&x.size?x.size:"medium"),R=j||E&&E.variant,z=null;return y&&(z="asc"===y?"ascending":"descending"),o.createElement(c,Object(n.a)({ref:t,className:Object(i.a)(u.root,u[R],g,"inherit"!==m&&u["align".concat(Object(l.a)(m))],"default"!==N&&u["padding".concat(Object(l.a)(N))],"medium"!==C&&u["size".concat(Object(l.a)(C))],"head"===R&&x&&x.stickyHeader&&u.stickyHeader),"aria-sort":z,role:a,scope:w},O))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(m)},994:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(2),a(4)),c=a(6),l=a(959),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,p=void 0===d?"tbody":d,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(p,Object(r.a)({className:Object(i.a)(a.root,c),ref:t,role:"tbody"===p?null:"rowgroup"},m)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)}}]);
//# sourceMappingURL=10.6975fe1d.chunk.js.map