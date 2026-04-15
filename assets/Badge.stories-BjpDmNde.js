import{j as a,c as p}from"./iframe-CrP-vlFo.js";import"./preload-helper-PPVm8Dsz.js";const g="_badge_c1f4p_5",u="_success_c1f4p_17",m="_warning_c1f4p_22",v="_error_c1f4p_27",_="_secondary_c1f4p_32",f="_neutral_c1f4p_37",d={badge:g,success:u,warning:m,error:v,secondary:_,neutral:f},r=({children:i,variant:l="neutral"})=>a.jsx("span",{className:p([d.badge,d[l]]),children:i});try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"neutral"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"neutral"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}}}}}catch{}const x={title:"Primitives/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","secondary","neutral"]}}},e={args:{children:"Normal drift",variant:"neutral"}},n={args:{children:"Normal drift",variant:"success"}},s={args:{children:"Ute av drift",variant:"warning"}},t={args:{children:"Stengt",variant:"error"}},c={args:{children:"Revet",variant:"secondary"}},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(r,{variant:"success",children:"Normal drift"}),a.jsx(r,{variant:"warning",children:"Ute av drift"}),a.jsx(r,{variant:"error",children:"Stengt"}),a.jsx(r,{variant:"secondary",children:"Revet"}),a.jsx(r,{variant:"neutral",children:"Ukjent"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const S=["Default","Success","Warning","Error","Secondary","AllVariants"];export{o as AllVariants,e as Default,t as Error,c as Secondary,n as Success,s as Warning,S as __namedExportsOrder,x as default};
