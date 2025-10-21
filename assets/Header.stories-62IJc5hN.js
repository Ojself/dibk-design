import{j as e}from"./iframe-C-jjyl2S.js";import{H as l}from"./Header-tEczLNJJ.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Example/Header",component:l,argTypes:{size:{control:"select",options:[1,2,3,4,5]},htmlTag:{control:"select",options:["h1","h2","h3","h4","h5"]}},tags:["autodocs"]},r=h=>e.jsx(l,{...h}),s={args:{children:e.jsx(e.Fragment,{children:"Title with size 1"})},render:r},a={args:{children:e.jsx(e.Fragment,{children:"Title with size 1"}),label:"Veiviser"},render:r},n={args:{children:e.jsx(e.Fragment,{children:"Title with size 2"}),size:2},render:r},i={args:{children:e.jsx(e.Fragment,{children:"Title with size 3"}),size:3},render:r},t={args:{children:e.jsx(e.Fragment,{children:"Title with size 4"}),size:4},render:r},c={args:{children:e.jsx(e.Fragment,{children:"Title with size 5"}),size:5},render:r},o={args:{children:e.jsx(e.Fragment,{children:"Big header"}),big:!0},render:r},d={args:{children:e.jsx(e.Fragment,{children:"Title with size 2 and htmlTag h1"}),size:2,htmlTag:"h1"},render:r};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 1</>
  },
  render
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 1</>,
    label: 'Veiviser'
  },
  render
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 2</>,
    size: 2
  },
  render
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 3</>,
    size: 3
  },
  render
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 4</>,
    size: 4
  },
  render
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 5</>,
    size: 5
  },
  render
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Big header</>,
    big: true
  },
  render
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>Title with size 2 and htmlTag h1</>,
    size: 2,
    htmlTag: 'h1'
  },
  render
}`,...d.parameters?.docs?.source}}};const z=["Header1","Header1WithLabel","Header2","Header3","Header4","Header5","BigHeader","Header2WithH1Tag"];export{o as BigHeader,s as Header1,a as Header1WithLabel,n as Header2,d as Header2WithH1Tag,i as Header3,t as Header4,c as Header5,z as __namedExportsOrder,u as default};
