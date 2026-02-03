import{j as e}from"./iframe-D57dxwVS.js";import{H as k}from"./Header-DcgyHfY2.js";import"./preload-helper-PPVm8Dsz.js";const j="_contentBox_rcdk0_5",C="_link_rcdk0_14",S="_secondary_rcdk0_27",w="_warning_rcdk0_30",q="_error_rcdk0_33",N="_info_rcdk0_36",V="_success_rcdk0_39",D="_tight_rcdk0_42",E="_spacious_rcdk0_45",I="_content_rcdk0_5",W="_title_rcdk0_49",n={contentBox:j,link:C,secondary:S,warning:w,error:q,info:N,success:V,tight:D,spacious:E,content:I,title:W},d=({title:r="",content:p="",children:_,variant:x="secondary",spacing:v="tight",href:u=null})=>{const f=n[x]||"",y=n[v]||"",B=u?n.link:"",m=`${n.contentBox} ${f} ${y} ${B}`.trim(),h=p?.length?p:_,g=e.jsxs(e.Fragment,{children:[r?typeof r=="string"?e.jsx(k,{size:2,content:r}):r:null,e.jsx("div",{className:n.content,children:h})]});return u?e.jsx("a",{href:u,className:m,children:g}):e.jsx("div",{className:m,children:g})};try{d.displayName="ContentBox",d.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"success"'}]}},spacing:{defaultValue:{value:"tight"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"tight"'},{value:'"spacious"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Primitives/ContentBox",component:d,argTypes:{},tags:["autodocs"]},t=r=>e.jsx(d,{...r,children:e.jsx("p",{children:"Box with content"})}),a={args:{variant:"secondary"},render:t},s={args:{variant:"secondary",title:"Box title"},render:t},o={args:{variant:"warning",title:"Box title"},render:t},c={args:{variant:"error",title:"Box title"},render:t},i={args:{variant:"info",title:"Box title"},render:t},l={args:{variant:"success",title:"Box title"},render:t};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  },
  render
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "Box title"
  },
  render
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Box title"
  },
  render
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Box title"
  },
  render
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Box title"
  },
  render
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Box title"
  },
  render
}`,...l.parameters?.docs?.source}}};const b=["DefaultWithoutTitle","Default","Warning","ErrorBox","Info","Success"];export{s as Default,a as DefaultWithoutTitle,c as ErrorBox,i as Info,l as Success,o as Warning,b as __namedExportsOrder,R as default};
