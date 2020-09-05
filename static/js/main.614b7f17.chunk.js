(this["webpackJsonparmenta-calculator"]=this["webpackJsonparmenta-calculator"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l);a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);var o=a(136),c=a(60),u=a.n(c),m=a(61),s=a.n(m),d=u()(s()({palette:{primary:{main:"#09142c"},secondary:{main:"#00A1CB"},background:{}},typography:{},overrides:{MuiPaper:{root:{}},MuiTypography:{colorPrimary:{}},MuiLink:{root:{}}}})),p=Object(o.a)((function(e){return{page:{height:"100%",width:"fit-content",maxWidth:"100%",boxSizing:"border-box",paddingBottom:"2em"}}})),f=r.a.memo((function(e){var t=p(),a=e.children;return r.a.createElement("div",{className:t.page},a)})),b=a(67),h=Object(o.a)((function(e){return{contentFitter:{height:"100%",width:"fit-content",maxWidth:"100%"}}})),g=r.a.memo((function(e){var t=h(),a=e.children,n=Object(b.a)(e,["children"]);return r.a.createElement("div",Object.assign({className:t.contentFitter},n),a)})),E=a(15),v=a(66),y=a(144),x=a(139),I=a(146),j=a(109),C=a(49),S=a(48),k=Object(o.a)((function(e){return{textField:{"& label.Mui-focused":{}},actionButton:{transition:"background-color 0.2s linear, color 0.2s linear","&:hover":{backgroundColor:e.palette.secondary.light,color:e.palette.getContrastText(e.palette.secondary.light)}}}})),w=r.a.memo((function(e){var t=k(),a=Object(v.a)(),l=a.register,i=a.handleSubmit,o=(a.errors,Object(n.useState)(!1)),c=Object(E.a)(o,2),u=c[0],m=c[1],s=Object(n.useState)(0),d=Object(E.a)(s,2),p=d[0],f=d[1],b=Object(n.useCallback)((function(e){var t=parseInt(e.cullinRate),a=parseInt(e.herdSize),n=parseInt(e.mastitisPrevalenceValue),r=parseInt(e.rawMilkPrice),l=Math.round(n/100*a),i=8e3*Math.round(t/100*a)+3.4*l*150*r;return i-(i-.7*i+(9e3*Math.round(l/60)+5e4))}),[]),h=Object(n.useCallback)((function(e){var t=b(e);m(!0),f(t)}),[b]),g=p>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:i((function(e){return h(e)})),style:{maxWidth:"100%",width:"60ch"}},r.a.createElement(y.a,{autoComplete:"off",InputLabelProps:{style:{pointerEvents:"auto"}},name:"herdSize",label:"Size of herd",title:"Cattle heads in your herd",variant:"outlined",type:"number",required:!0,inputRef:l,fullWidth:!0,className:t.textField}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{autoComplete:"off",InputLabelProps:{style:{pointerEvents:"auto"}},name:"mastitisPrevalenceValue",label:"Mastitis prevalence value",title:"Mastitis prevalence value",variant:"outlined",type:"number",defaultValue:51.7,required:!0,inputRef:l,fullWidth:!0,className:t.textField,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"%")}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{autoComplete:"off",InputLabelProps:{style:{pointerEvents:"auto"}},name:"cullinRate",label:"Culling rate",title:"Culling rate",variant:"outlined",type:"number",defaultValue:5,required:!0,inputRef:l,fullWidth:!0,className:t.textField,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"%")}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{autoComplete:"off",InputLabelProps:{style:{pointerEvents:"auto"}},name:"rawMilkPrice",label:"NIS/liter Milk ratio",title:"NIS/liter Milk ratio",variant:"outlined",type:"number",defaultValue:2,required:!0,inputRef:l,fullWidth:!0,className:t.textField,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"\u20aa")}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I.a,{className:t.actionButton,variant:"outlined",fullWidth:!0,type:"submit"},"Calculate Savings"),u&&r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"h4",color:"secondary"},"Estimated savings :"),r.a.createElement(j.a,{variant:"h4",style:{color:g?C.a[400]:S.a[400]}},"\u20aa ",p.toLocaleString()))))})),M=r.a.memo((function(e){return r.a.createElement(f,null,r.a.createElement(g,{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(j.a,{variant:"h4",color:"secondary",style:{fontWeight:"bold"}},"Calculate your savings"),r.a.createElement("br",null),r.a.createElement(w,null)))})),N=a(140),W=a(141),O=a(47),B=a(65),P=a.n(B),F=Object(o.a)((function(e){return{appBar:{backgroundColor:"#fff",height:"".concat(6,"rem"),paddingTop:"0.5rem",paddingBottom:"0.5rem",boxSizing:"border-box",zIndex:e.zIndex.drawer+1,padding:e.spacing(1)},toolbar:{paddingRight:0,paddingLeft:0,margin:"auto",width:"90%",maxWidth:"90%",display:"flex",justifyContent:"center",justifyItems:"center"},logo:{width:"calc(min(15rem, 80%))"},link:{color:"#2B2B2B",marginLeft:30,transition:"color 0.4s ease-in-out","&:hover":{color:"#00A1CB"}}}})),z=r.a.memo((function(e){var t=F();return r.a.createElement(N.a,{position:"fixed","data-testid":"header",className:t.appBar},r.a.createElement(W.a,{className:t.toolbar},r.a.createElement(O.b,{to:"/",style:{display:"flex",justifyContent:"center"}},r.a.createElement("img",{className:t.logo,src:P.a,alt:"Armenta"}))))})),L=Object(o.a)((function(e){return{mainWrapper:{minHeight:"calc(100% - ".concat(6,"rem)"),display:"flex",flexDirection:"column",alignItems:"center"},appMain:{height:"100%",maxWidth:"90%",boxSizing:"border-box",padding:e.spacing(2)},headerSeparator:{height:"".concat(6,"rem")}}})),R=r.a.memo((function(){var e=L();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("div",{className:e.headerSeparator}),r.a.createElement("div",{className:e.mainWrapper},r.a.createElement("main",{className:e.appMain},r.a.createElement(M,null))))})),A=a(143),V=a(145),q=a(142),D=r.a.memo((function(e){return r.a.createElement(O.a,null,r.a.createElement(V.b,{injectFirst:!0},r.a.createElement(q.a,{theme:d},r.a.createElement(R,null)," ",r.a.createElement(A.a,null))))}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/armenta_logo.2465901b.jpeg"},73:function(e,t,a){e.exports=a(106)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.614b7f17.chunk.js.map