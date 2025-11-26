import{j as e,r as d}from"./iframe-BWm-Rgin.js";import{R as n}from"./RadioButtonList-D1m480Kp.js";import{R as i}from"./RadioButtonListItem-BRmh9g_u.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./Header-Bll3-g5Y.js";import"./RadioButtonInput-B0Yrr2oZ.js";import"./RadioButtonIcon-Com5UKJE.js";const x={title:"Example/RadioButtonList",component:n,tags:["autodocs"]},s=()=>{const t=d.useId();return e.jsxs(e.Fragment,{children:[e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 1",name:"radio-button-list-list-item",id:t,checked:!0,children:"Checked radio button"}),e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 2",name:"radio-button-list-list-item",id:t,children:"Unchecked radio button"})]})},r={args:{legend:"Default radio button list"},render:t=>e.jsx(n,{...t,children:e.jsx(s,{})})},o={args:{legend:"Required radio button list",required:!0},render:t=>e.jsx(n,{...t,children:e.jsx(s,{})})},a={args:{legend:"Compact radio button list",compact:!0},render:t=>e.jsx(n,{...t,children:e.jsx(s,{})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
