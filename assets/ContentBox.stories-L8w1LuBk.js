import{j as e}from"./iframe-ClX18UEH.js";import{H as B}from"./Header-C9dne7eG.js";import{S as z}from"./arrow-right-icon-BL1YFpnr.js";import"./preload-helper-PPVm8Dsz.js";const j="_contentBox_hzpwm_5",S="_link_hzpwm_15",I="_secondary_hzpwm_28",C="_warning_hzpwm_31",N="_error_hzpwm_34",b="_info_hzpwm_37",k="_success_hzpwm_40",q="_tight_hzpwm_43",V="_spacious_hzpwm_46",D="_body_hzpwm_49",E="_content_hzpwm_5",W="_title_hzpwm_53",$="_arrowIcon_hzpwm_56",n={contentBox:j,link:S,secondary:I,warning:C,error:N,info:b,success:k,tight:q,spacious:V,body:D,content:E,title:W,arrowIcon:$},u=({title:r="",content:p="",children:g,variant:x="secondary",spacing:v="tight",href:a=null})=>{const h=n[x]||"",f=n[v]||"",y=a?n.link:"",m=`${n.contentBox} ${h} ${f} ${y}`.trim(),w=p?.length?p:g,_=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.body,children:[r?typeof r=="string"?e.jsx(B,{size:3,content:r}):r:null,e.jsx("div",{className:n.content,children:w})]}),a?e.jsx(z,{className:n.arrowIcon,"aria-hidden":"true"}):null]});return a?e.jsx("a",{href:a,className:m,children:_}):e.jsx("div",{className:m,children:_})};try{u.displayName="ContentBox",u.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"success"'}]}},spacing:{defaultValue:{value:"tight"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"tight"'},{value:'"spacious"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Primitives/ContentBox",component:u,argTypes:{},tags:["autodocs"]},t=r=>e.jsx(u,{...r,children:e.jsx("p",{children:"Box with content"})}),s={args:{variant:"secondary"},render:t},o={args:{variant:"secondary",title:"Box title"},render:t},c={args:{variant:"warning",title:"Box title"},render:t},i={args:{variant:"error",title:"Box title"},render:t},l={args:{variant:"info",title:"Box title"},render:t},d={args:{variant:"success",title:"Box title"},render:t};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  },
  render
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "Box title"
  },
  render
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Box title"
  },
  render
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Box title"
  },
  render
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Box title"
  },
  render
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Box title"
  },
  render
}`,...d.parameters?.docs?.source}}};const O=["DefaultWithoutTitle","Default","Warning","ErrorBox","Info","Success"];export{o as Default,s as DefaultWithoutTitle,i as ErrorBox,l as Info,d as Success,c as Warning,O as __namedExportsOrder,F as default};
