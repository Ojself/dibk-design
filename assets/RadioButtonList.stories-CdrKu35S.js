import{j as e}from"./iframe-C-jjyl2S.js";import{R as s}from"./RadioButtonList-BrutdJvk.js";import{R as i}from"./RadioButtonListItem-BBXs-R_a.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./Header-tEczLNJJ.js";import"./RadioButtonInput-Di2P7LkG.js";import"./RadioButtonIcon-0JLS9yVP.js";const R={title:"Example/RadioButtonList",component:s,tags:["autodocs"]},n=e.jsxs(e.Fragment,{children:[e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 1",name:"radio-button-list-list-item",id:"radioButtonList-listItem-1",checked:!0,children:"Checked radio button"}),e.jsx(i,{onChange:()=>console.log("onchange"),inputValue:"value 2",name:"radio-button-list-list-item",id:"radioButtonList-listItem-2",children:"Unchecked radio button"})]}),r={args:{legend:"Default radio button list"},render:t=>e.jsx(s,{...t,children:n})},o={args:{legend:"Required radio button list",required:!0},render:t=>e.jsx(s,{...t,children:n})},a={args:{legend:"Compact radio button list",compact:!0},render:t=>e.jsx(s,{...t,children:n})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Default radio button list'
  },
  render: args => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Required radio button list',
    required: true
  },
  render: args => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Compact radio button list',
    compact: true
  },
  render: args => <RadioButtonList {...args}>{sharedChildren}</RadioButtonList>
}`,...a.parameters?.docs?.source}}};const x=["Default","Required","Compact"];export{a as Compact,r as Default,o as Required,x as __namedExportsOrder,R as default};
