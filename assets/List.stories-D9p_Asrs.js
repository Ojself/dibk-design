import{j as e}from"./iframe-BC02K8Tv.js";import{L as i,a as r}from"./ListItem-DD08RjBz.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Primitives/List",component:i,argTypes:{},tags:["autodocs"]},o=e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"item 1"}),e.jsx(r,{children:"item 2"}),e.jsx(r,{children:"item 3"})]}),c=e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"item 1"}),e.jsxs(r,{children:["item 2",e.jsxs(i,{children:[e.jsx(r,{children:"subitem 1"}),e.jsx(r,{children:"subitem 2"})]})]}),e.jsx(r,{children:"item 3"})]}),s={args:{children:o,ordered:!0}},t={args:{children:o}},n={args:{children:o,listStyle:"square"}},a={args:{children:o,listStyle:"none"}},d={args:{children:c}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: listItems,
    ordered: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: listItems
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: listItems,
    listStyle: "square"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: listItems,
    listStyle: "none"
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: listItemsWithSubItems
  }
}`,...d.parameters?.docs?.source}}};const h=["Ordered","Unordered","UnorderedSquareStyled","UnorderedUnstyled","UnorderedListWithSubItems"];export{s as Ordered,t as Unordered,d as UnorderedListWithSubItems,n as UnorderedSquareStyled,a as UnorderedUnstyled,h as __namedExportsOrder,p as default};
