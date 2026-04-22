import{j as a,c as p}from"./iframe-DKsr8upr.js";import"./preload-helper-PPVm8Dsz.js";const g="_badge_1s514_5",m="_success_1s514_18",v="_warning_1s514_21",_="_error_1s514_24",y="_secondary_1s514_27",f="_neutral_1s514_30",h="_purple_1s514_33",d={badge:g,success:m,warning:v,error:_,secondary:y,neutral:f,purple:h},r=({children:i,variant:l="neutral",className:u})=>a.jsx("span",{className:p([d.badge,d[l],u??null]),children:i});try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"neutral"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"neutral"'},{value:'"purple"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Primitives/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","secondary","neutral"]}}},e={args:{children:"Normal drift",variant:"neutral"}},s={args:{children:"Normal drift",variant:"success"}},n={args:{children:"Ute av drift",variant:"warning"}},t={args:{children:"Stengt",variant:"error"}},c={args:{children:"Revet",variant:"secondary"}},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(r,{variant:"success",children:"Normal drift"}),a.jsx(r,{variant:"warning",children:"Ute av drift"}),a.jsx(r,{variant:"error",children:"Stengt"}),a.jsx(r,{variant:"secondary",children:"Revet"}),a.jsx(r,{variant:"neutral",children:"Ukjent"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Normal drift",
    variant: "neutral"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Normal drift",
    variant: "success"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ute av drift",
    variant: "warning"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Stengt",
    variant: "error"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Revet",
    variant: "secondary"
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Badge variant="success">Normal drift</Badge>
      <Badge variant="warning">Ute av drift</Badge>
      <Badge variant="error">Stengt</Badge>
      <Badge variant="secondary">Revet</Badge>
      <Badge variant="neutral">Ukjent</Badge>
    </div>
}`,...o.parameters?.docs?.source}}};const N=["Default","Success","Warning","Error","Secondary","AllVariants"];export{o as AllVariants,e as Default,t as Error,c as Secondary,s as Success,n as Warning,N as __namedExportsOrder,B as default};
