import{j as e}from"./iframe-Fsjwcdwa.js";import{H as k}from"./Header-D5OJyFvn.js";import"./preload-helper-PPVm8Dsz.js";const q="_contentBox_1klq8_5",j="_link_1klq8_14",C="_secondary_1klq8_27",S="_warning_1klq8_30",w="_error_1klq8_33",N="_info_1klq8_36",V="_success_1klq8_39",D="_tight_1klq8_42",E="_spacious_1klq8_45",I="_content_1klq8_5",W="_title_1klq8_49",r={contentBox:q,link:j,secondary:C,warning:S,error:w,info:N,success:V,tight:D,spacious:E,content:I,title:W},u=({title:t="",content:p="",children:_,variant:x="secondary",spacing:v="tight",href:d=null})=>{const f=r[x]||"",y=r[v]||"",B=d?r.link:"",m=`${r.contentBox} ${f} ${y} ${B}`.trim(),h=p?.length?p:_,g=e.jsxs(e.Fragment,{children:[t?typeof t=="string"?e.jsx(k,{size:3,content:t}):t:null,e.jsx("div",{className:r.content,children:h})]});return d?e.jsx("a",{href:d,className:m,children:g}):e.jsx("div",{className:m,children:g})};try{u.displayName="ContentBox",u.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},spacing:{defaultValue:{value:"tight"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"tight"'},{value:'"spacious"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Primitives/ContentBox",component:u,argTypes:{},tags:["autodocs"]},n=t=>e.jsx(u,{...t,children:e.jsx("p",{children:"Box with content"})}),a={args:{variant:"secondary"},render:n},s={args:{variant:"secondary",title:"Box title"},render:n},o={args:{variant:"warning",title:"Box title"},render:n},c={args:{variant:"error",title:"Box title"},render:n},i={args:{variant:"info",title:"Box title"},render:n},l={args:{variant:"success",title:"Box title"},render:n};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
