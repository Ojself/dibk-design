import{j as e,r as i}from"./iframe-6gEaIcz2.js";import{C as t}from"./CheckBoxList-PJCGKBNI.js";import{C as n}from"./CheckBoxListItem-BkbXZ5Y4.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-icon-Dj6UDs0Y.js";import"./Header-BVB6MirX.js";import"./CheckBoxInput-BlY97DFA.js";import"./checkmark-symbol-icon-DTJIUxYm.js";import"./CheckBoxIcon-CoUHFUgs.js";const C={title:"Primitives/CheckBoxList",component:t,argTypes:{},tags:["autodocs"]},a=()=>{const r=i.useId();return e.jsxs(e.Fragment,{children:[e.jsx(n,{onChange:()=>console.log("onchange"),checked:!0,name:"checkboxlist",id:r,children:"Label for checked checkbox"}),e.jsx(n,{onChange:()=>console.log("onchange"),name:"checkboxlist",id:r,children:"Label for unchecked checkbox"})]})},s={args:{legend:"Default checkbox list"},render:r=>e.jsx(t,{...r,children:e.jsx(a,{})})},o={args:{legend:"Required checkbox list",required:!0},render:r=>e.jsx(t,{...r,children:e.jsx(a,{})})},c={args:{legend:"Compact checkbox list",compact:!0},render:r=>e.jsx(t,{...r,children:e.jsx(a,{})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Default checkbox list"
  },
  render: args => <CheckBoxList {...args}>{<Checkboxes />}</CheckBoxList>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Required checkbox list",
    required: true
  },
  render: args => <CheckBoxList {...args}>{<Checkboxes />}</CheckBoxList>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Compact checkbox list",
    compact: true
  },
  render: args => <CheckBoxList {...args}>{<Checkboxes />}</CheckBoxList>
}`,...c.parameters?.docs?.source}}};const b=["Default","Required","Compact"];export{c as Compact,s as Default,o as Required,b as __namedExportsOrder,C as default};
