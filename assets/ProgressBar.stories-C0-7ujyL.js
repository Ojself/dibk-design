import{j as n}from"./iframe-CtMCua-f.js";import"./preload-helper-PPVm8Dsz.js";const p="_progressBar_ihv60_5",c="_hasErrors_ihv60_27",o={progressBar:p,hasErrors:c},a=({progress:e=0,hasErrors:t=!1})=>n.jsx("div",{className:`${o.progressBar} ${t?o.hasErrors:""}`,role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":100,style:{"--value":e}});try{a.displayName="ProgressBar",a.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}}}}}catch{}const u={title:"Primitives/ProgressBar",component:a,argTypes:{},tags:["autodocs"]},r={args:{progress:25}},s={args:{progress:60,hasErrors:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 25
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 60,
    hasErrors: true
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","WithError"];export{r as Default,s as WithError,m as __namedExportsOrder,u as default};
