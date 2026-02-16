import{j as e,r as d}from"./iframe-BC02K8Tv.js";import{R as s}from"./RadioButtonList-FKBqpesA.js";import{R as i}from"./RadioButtonListItem-DRLtjEhS.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-icon-Dj6UDs0Y.js";import"./Header-CFKO6Gmp.js";import"./RadioButtonInput-BIBcpY8w.js";import"./RadioButtonIcon-COMSNV8i.js";const x={title:"Primitives/RadioButtonList",component:s,tags:["autodocs"]},n=()=>{const t=d.useId();return e.jsxs(e.Fragment,{children:[e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 1",name:"radio-button-list-list-item",id:t,checked:!0,children:"Checked radio button"}),e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 2",name:"radio-button-list-list-item",id:t,children:"Unchecked radio button"})]})},r={args:{legend:"Default radio button list"},render:t=>e.jsx(s,{...t,children:e.jsx(n,{})})},o={args:{legend:"Required radio button list",required:!0},render:t=>e.jsx(s,{...t,children:e.jsx(n,{})})},a={args:{legend:"Compact radio button list",compact:!0},render:t=>e.jsx(s,{...t,children:e.jsx(n,{})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Default radio button list"
  },
  render: args => <RadioButtonList {...args}>{<SharedChildren />}</RadioButtonList>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Required radio button list",
    required: true
  },
  render: args => <RadioButtonList {...args}>{<SharedChildren />}</RadioButtonList>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Compact radio button list",
    compact: true
  },
  render: args => <RadioButtonList {...args}>{<SharedChildren />}</RadioButtonList>
}`,...a.parameters?.docs?.source}}};const j=["Default","Required","Compact"];export{a as Compact,r as Default,o as Required,j as __namedExportsOrder,x as default};
