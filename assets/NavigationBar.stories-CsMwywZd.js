import{N as a}from"./NavigationBar-CjzxKOxm.js";import{b as t}from"./iframe-D-wun3FS.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Example/NavigationBar",component:a,argTypes:{compact:{control:"boolean",defaultValue:!1},theme:{control:"select",options:["dibk","arbeidstilsynet"],mapping:t,defaultValue:"dibk"}},tags:["autodocs"]},e={args:{theme:t.dibk}},o={args:{theme:t.dibk,logoLink:"https://dibk.no/",logoLinkTitle:"Gå til forside",openLogoLinkInNewTab:!0}},r={args:{theme:t.dibk,color:"secondary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    theme: customThemes.dibk
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: customThemes.dibk,
    logoLink: "https://dibk.no/",
    logoLinkTitle: "Gå til forside",
    openLogoLinkInNewTab: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    theme: customThemes.dibk,
    color: "secondary"
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","WithLogoLink","WithSecondaryColor"];export{e as Default,o as WithLogoLink,r as WithSecondaryColor,m as __namedExportsOrder,c as default};
