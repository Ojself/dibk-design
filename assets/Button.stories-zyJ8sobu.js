import{j as d,L as p}from"./iframe-BHtDog0D.js";import{B as m}from"./Button-DkOXl9dS.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Example/Button",component:m,tags:["autodocs"]},t={args:{color:"primary",content:"Button",size:"regular",arrow:"none"}},n={args:{color:"secondary",content:"Button"}},e={args:{size:"small",content:"Button"}},r={args:{rounded:!0,content:"Button"}},o={args:{children:d.jsxs("span",{children:["Button with ",d.jsx("b",{children:"HTML"})," content"]})}},a={args:{content:"Button with link",href:"test"}},s={args:{children:d.jsx(p,{to:"/test",children:"Button with React Link"})}},c={args:{disabled:!0,children:d.jsx(p,{to:"/test",children:"Disabled button with React Link"})}},u={args:{content:"InputButton",inputType:"button"}},i={args:{content:"RadioButton",inputType:"radio",name:"radio-button",defaultChecked:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    content: 'Button',
    size: 'regular',
    arrow: 'none'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    content: 'Button'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    content: 'Button'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    content: 'Button'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>
        Button with <b>HTML</b> content
      </span>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Button with link',
    href: 'test'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <RouterLink to="/test">Button with React Link</RouterLink>
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <RouterLink to="/test">
        Disabled button with React Link
      </RouterLink>
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'InputButton',
    inputType: 'button'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'RadioButton',
    inputType: 'radio',
    name: 'radio-button',
    defaultChecked: false
  }
}`,...i.parameters?.docs?.source}}};const L=["Primary","Secondary","Small","Rounded","ButtonWithHTMLContent","ButtonWithLink","ButtonWithReactLink","DisabledButtonWithReactLink","InputButton","RadioButton"];export{o as ButtonWithHTMLContent,a as ButtonWithLink,s as ButtonWithReactLink,c as DisabledButtonWithReactLink,u as InputButton,t as Primary,i as RadioButton,r as Rounded,n as Secondary,e as Small,L as __namedExportsOrder,h as default};
