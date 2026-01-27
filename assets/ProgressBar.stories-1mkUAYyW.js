import{j as n}from"./iframe-tujtW6Px.js";import"./preload-helper-PPVm8Dsz.js";const p="_progressBar_1g6mt_2",c="_hasErrors_1g6mt_24",o={progressBar:p,hasErrors:c},a=({progress:e=0,hasErrors:t=!1})=>n.jsx("div",{className:`${o.progressBar} ${t?o.hasErrors:""}`,role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,style:{"--value":e}});try{a.displayName="ProgressBar",a.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}}}}}catch{}const m={title:"Primitives/ProgressBar",component:a,argTypes:{},tags:["autodocs"]},r={args:{progress:25}},s={args:{progress:60,hasErrors:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 25
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 60,
    hasErrors: true
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","WithError"];export{r as Default,s as WithError,u as __namedExportsOrder,m as default};
