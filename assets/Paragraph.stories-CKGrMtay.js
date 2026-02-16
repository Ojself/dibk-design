import{j as t}from"./iframe-WYyUpwoz.js";import{P as o}from"./Paragraph-CH-TqjIu.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Primitives/Paragraph",component:o,argTypes:{variant:{control:"select",options:["lead","large","small"]},htmlTag:{control:"select",options:["p","div","span","blockquote"]}},args:{htmlTag:"p"},tags:["autodocs"]},s=n=>t.jsx(o,{...n}),r={args:{variant:"lead",children:"Lead text"},render:s},a={args:{variant:"large",children:"Body Large"},render:s},e={args:{variant:"small",children:"Body Small"},render:s};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "lead",
    children: "Lead text"
  },
  render
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "large",
    children: "Body Large"
  },
  render
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: "Body Small"
  },
  render
}`,...e.parameters?.docs?.source}}};const i=["Lead","BodyLarge","BodySmall"];export{a as BodyLarge,e as BodySmall,r as Lead,i as __namedExportsOrder,m as default};
