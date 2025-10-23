import{j as o}from"./iframe-BHtDog0D.js";import{N as s}from"./NavigationBar-Now5fJMP.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Example/NavigationBar",component:s,argTypes:{compact:{control:"boolean",defaultValue:!1},primaryListItems:{control:"object",defaultValue:[]},secondaryListItems:{control:"object",defaultValue:[]}},tags:["autodocs"]},i=[{name:"Primary item 1",listItems:[{name:"Sub item 1",href:"#"},{name:"Sub item 2",href:"#"}],href:"#"},{name:"Primary item 2",href:"#"},{name:"Primary item 3",href:"#"}],m=[{name:"Secondary item 1",href:"#"},{name:"Secondary item 2",href:"#"}],e={args:{}},n={args:{logoLink:"https://dibk.no/",logoLinkTitle:"Gå til forside",openLogoLinkInNewTab:!0,mainContentId:"main-content"}},t={args:{primaryListItems:i,secondaryListItems:m,mainContentId:"main-content"}},r={args:{children:o.jsx("span",{children:"Content here"}),mainContentId:"main-content"}},a={args:{preventChildElementStacking:!0,children:o.jsx("span",{children:"Content here"}),mainContentId:"main-content"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    logoLink: 'https://dibk.no/',
    logoLinkTitle: 'Gå til forside',
    openLogoLinkInNewTab: true,
    mainContentId: 'main-content'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    primaryListItems,
    secondaryListItems,
    mainContentId: 'main-content'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>Content here</span>,
    mainContentId: 'main-content'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    preventChildElementStacking: true,
    children: <span>Content here</span>,
    mainContentId: 'main-content'
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","WithLogoLink","WithListItems","WithChildElements","PreventChildElementStacking"];export{e as Default,a as PreventChildElementStacking,r as WithChildElements,t as WithListItems,n as WithLogoLink,u as __namedExportsOrder,p as default};
