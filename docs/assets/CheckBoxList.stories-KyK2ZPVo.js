import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as L}from"./ThemeProvider-CIwViPQe.js";import{C as t}from"./CheckBoxList-3gLcAOCl.js";import{C as n}from"./CheckBoxListItem-DtvfygNS.js";import"./iframe-CEv5T24E.js";import"./asterisk-1FdKgIIn.js";import"./Header-DXwBsvha.js";import"./CheckBoxInput-B48v1EJs.js";import"./CheckBoxIcon-4bM50IVo.js";const T={title:"Example/CheckBoxList",component:t,argTypes:{},tags:["autodocs"],decorators:[(r,k)=>{const{theme:b,...C}=k.args;return e.jsx(L,{theme:b,children:e.jsx(r,{args:C})})}]},a=e.jsxs(e.Fragment,{children:[e.jsx(n,{onChange:()=>console.log("onchange"),checked:!0,name:"checkboxlist",id:"checkboxList-listItem-1",children:"Label for checked checkbox"}),e.jsx(n,{onChange:()=>console.log("onchange"),name:"checkboxlist",id:"checkboxList-listItem-2",children:"Label for unchecked checkbox"})]}),s={args:{legend:"Default checkbox list"},render:r=>e.jsx(t,{...r,children:a})},c={args:{legend:"Required checkbox list",required:!0},render:r=>e.jsx(t,{...r,children:a})},o={args:{legend:"Compact checkbox list",compact:!0},render:r=>e.jsx(t,{...r,children:a})};var i,d,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    legend: 'Default checkbox list'
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,l,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    legend: 'Required checkbox list',
    required: true
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...(x=(l=c.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    legend: 'Compact checkbox list',
    compact: true
  },
  render: args => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const _=["Default","Required","Compact"];export{o as Compact,s as Default,c as Required,_ as __namedExportsOrder,T as default};
