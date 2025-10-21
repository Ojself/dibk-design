import{j as e}from"./iframe-C-jjyl2S.js";import{C as t}from"./CheckBoxList-BYYmBqYu.js";import{C as n}from"./CheckBoxListItem-BeceO6Vb.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./Header-tEczLNJJ.js";import"./CheckBoxInput-C3gFO46A.js";import"./CheckBoxIcon-Cq85S3Cv.js";const k={title:"Example/CheckBoxList",component:t,argTypes:{},tags:["autodocs"]},a=e.jsxs(e.Fragment,{children:[e.jsx(n,{onChange:()=>console.log("onchange"),checked:!0,name:"checkboxlist",id:"checkboxList-listItem-1",children:"Label for checked checkbox"}),e.jsx(n,{onChange:()=>console.log("onchange"),name:"checkboxlist",id:"checkboxList-listItem-2",children:"Label for unchecked checkbox"})]}),c={args:{legend:"Default checkbox list"},render:r=>e.jsx(t,{...r,children:a})},s={args:{legend:"Required checkbox list",required:!0},render:r=>e.jsx(t,{...r,children:a})},o={args:{legend:"Compact checkbox list",compact:!0},render:r=>e.jsx(t,{...r,children:a})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Default checkbox list'
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Required checkbox list',
    required: true
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Compact checkbox list',
    compact: true
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...o.parameters?.docs?.source}}};const u=["Default","Required","Compact"];export{o as Compact,c as Default,s as Required,u as __namedExportsOrder,k as default};
