import{j as e}from"./iframe-jc3mSUDW.js";import{H as c}from"./Header-CVO35Kly.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Example/Header",component:c,argTypes:{size:{control:"select",options:[1,2,3,4,5]},htmlTag:{control:"select",options:["h1","h2","h3","h4","h5"]}},tags:["autodocs"]},r=d=>e.jsx(c,{...d}),s={args:{children:e.jsx(e.Fragment,{children:"Title with size 1"})},render:r},a={args:{children:e.jsx(e.Fragment,{children:"Title with size 2"}),size:2},render:r},n={args:{children:e.jsx(e.Fragment,{children:"Title with size 3"}),size:3},render:r},t={args:{children:e.jsx(e.Fragment,{children:"Title with size 4"}),size:4},render:r},i={args:{children:e.jsx(e.Fragment,{children:"Title with size 5"}),size:5},render:r},o={args:{children:e.jsx(e.Fragment,{children:"Title with size 2 and htmlTag h1"}),size:2,htmlTag:"h1"},render:r};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 1</>
  },
  render
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 2</>,
    size: 2
  },
  render
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 3</>,
    size: 3
  },
  render
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 4</>,
    size: 4
  },
  render
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 5</>,
    size: 5
  },
  render
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 2 and htmlTag h1</>,
    size: 2,
    htmlTag: "h1"
  },
  render
}`,...o.parameters?.docs?.source}}};const g=["Header1","Header2","Header3","Header4","Header5","Header2WithH1Tag"];export{s as Header1,a as Header2,o as Header2WithH1Tag,n as Header3,t as Header4,i as Header5,g as __namedExportsOrder,p as default};
