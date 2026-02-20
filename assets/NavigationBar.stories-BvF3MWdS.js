import{N as a}from"./NavigationBar-BV_by2Fe.js";import"./iframe-Bgu-WHGL.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Primitives/NavigationBar",component:a,argTypes:{theme:{control:"select",options:["dibk","arbeidstilsynet"],defaultValue:"dibk"},color:{control:"radio",options:["secondary","neutral"],defaultValue:"neutral"}},tags:["autodocs"]},r={args:{theme:"dibk",color:"neutral"}},e={args:{theme:"dibk",color:"neutral",links:[{name:"Oversikt",href:"/oversikt"},{name:"Administrasjon",href:"/administrasjon"}]}},n={args:{theme:"dibk",color:"secondary",links:[{name:"Oversikt",href:"/oversikt"},{name:"Administrasjon",href:"/administrasjon"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "dibk",
    color: "neutral"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "dibk",
    color: "neutral",
    links: [{
      name: "Oversikt",
      href: "/oversikt"
    }, {
      name: "Administrasjon",
      href: "/administrasjon"
    }]
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "dibk",
    color: "secondary",
    links: [{
      name: "Oversikt",
      href: "/oversikt"
    }, {
      name: "Administrasjon",
      href: "/administrasjon"
    }]
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","WithLinks","WithSecondaryColor"];export{r as Default,e as WithLinks,n as WithSecondaryColor,m as __namedExportsOrder,i as default};
