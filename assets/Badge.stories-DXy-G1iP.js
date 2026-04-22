import{j as a,c as g}from"./iframe-B48H92AK.js";import"./preload-helper-PPVm8Dsz.js";const p="_badge_u7ua7_5",m="_success_u7ua7_17",v="_warning_u7ua7_20",_="_error_u7ua7_23",y="_secondary_u7ua7_26",f="_neutral_u7ua7_29",d={badge:p,success:m,warning:v,error:_,secondary:y,neutral:f},r=({children:i,variant:l="neutral",className:u})=>a.jsx("span",{className:g([d.badge,d[l],u??null]),children:i});try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"neutral"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"neutral"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Primitives/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","secondary","neutral"]}}},e={args:{children:"Normal drift",variant:"neutral"}},n={args:{children:"Normal drift",variant:"success"}},s={args:{children:"Ute av drift",variant:"warning"}},t={args:{children:"Stengt",variant:"error"}},c={args:{children:"Revet",variant:"secondary"}},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(r,{variant:"success",children:"Normal drift"}),a.jsx(r,{variant:"warning",children:"Ute av drift"}),a.jsx(r,{variant:"error",children:"Stengt"}),a.jsx(r,{variant:"secondary",children:"Revet"}),a.jsx(r,{variant:"neutral",children:"Ukjent"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Normal drift",
    variant: "neutral"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Normal drift",
    variant: "success"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ute av drift",
    variant: "warning"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Default","Success","Warning","Error","Secondary","AllVariants"];export{o as AllVariants,e as Default,t as Error,c as Secondary,n as Success,s as Warning,B as __namedExportsOrder,S as default};
