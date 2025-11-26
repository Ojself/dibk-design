import{j as p,L as m}from"./iframe-BWm-Rgin.js";import{B as l}from"./Button-D8gJCdNO.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"Example/Button",component:l,tags:["autodocs"]},t={args:{color:"primary",content:"Button",size:"regular",arrow:"none"}},e={args:{color:"secondary",content:"Button"}},n={args:{color:"ghost",content:"Button"}},r={args:{size:"small",content:"Button"}},o={args:{rounded:!0,content:"Button"}},a={args:{children:p.jsxs("span",{children:["Button with ",p.jsx("b",{children:"HTML"})," content"]})}},s={args:{content:"Button with link",href:"test"}},c={args:{children:p.jsx(m,{to:"/test",children:"Button with React Link"})}},u={args:{disabled:!0,children:p.jsx(m,{to:"/test",children:"Disabled button with React Link"})}},i={args:{content:"InputButton",inputType:"button"}},d={args:{content:"RadioButton",inputType:"radio",name:"radio-button",defaultChecked:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    content: "Button",
    size: "regular",
    arrow: "none"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    content: "Button"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "ghost",
    content: "Button"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    content: "Button"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    content: "Button"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>
        Button with <b>HTML</b> content
      </span>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Button with link",
    href: "test"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RouterLink to="/test">Button with React Link</RouterLink>
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <RouterLink to="/test">Disabled button with React Link</RouterLink>
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: "InputButton",
    inputType: "button"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: "RadioButton",
    inputType: "radio",
    name: "radio-button",
    defaultChecked: false
  }
}`,...d.parameters?.docs?.source}}};const k=["Primary","Secondary","Ghost","Small","Rounded","ButtonWithHTMLContent","ButtonWithLink","ButtonWithReactLink","DisabledButtonWithReactLink","InputButton","RadioButton"];export{a as ButtonWithHTMLContent,s as ButtonWithLink,c as ButtonWithReactLink,u as DisabledButtonWithReactLink,n as Ghost,i as InputButton,t as Primary,d as RadioButton,o as Rounded,e as Secondary,r as Small,k as __namedExportsOrder,L as default};
