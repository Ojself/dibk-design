import{b as r,j as m}from"./iframe-jc3mSUDW.js";import{N as c}from"./NavigationBar-Dvb6NP_B.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Example/NavigationBar",component:c,argTypes:{compact:{control:"boolean",defaultValue:!1},primaryListItems:{control:"object",defaultValue:[]},secondaryListItems:{control:"object",defaultValue:[]},theme:{control:"select",options:["dibk","arbeidstilsynet"],mapping:r,defaultValue:"dibk"}},tags:["autodocs"]},s=[{name:"Primary item 1",listItems:[{name:"Sub item 1",href:"#"},{name:"Sub item 2",href:"#"}],href:"#"},{name:"Primary item 2",href:"#"},{name:"Primary item 3",href:"#"}],i=[{name:"Secondary item 1",href:"#"},{name:"Secondary item 2",href:"#"}],e={args:{theme:r.dibk}},t={args:{logoLink:"https://dibk.no/",logoLinkTitle:"Gå til forside",openLogoLinkInNewTab:!0,mainContentId:"main-content"}},n={args:{primaryListItems:s,secondaryListItems:i,mainContentId:"main-content"}},o={args:{children:m.jsx("span",{children:"Content here"}),mainContentId:"main-content"}},a={args:{primaryListItems:s,secondaryListItems:i,color:"secondary",mainContentId:"main-content"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    theme: customThemes.dibk
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    logoLink: "https://dibk.no/",
    logoLinkTitle: "Gå til forside",
    openLogoLinkInNewTab: true,
    mainContentId: "main-content"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    primaryListItems,
    secondaryListItems,
    mainContentId: "main-content"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>Content here</span>,
    mainContentId: "main-content"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    primaryListItems,
    secondaryListItems,
    color: "secondary",
    mainContentId: "main-content"
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","WithLogoLink","WithListItems","WithChildElements","WithSecondaryColor"];export{e as Default,o as WithChildElements,n as WithListItems,t as WithLogoLink,a as WithSecondaryColor,h as __namedExportsOrder,u as default};
