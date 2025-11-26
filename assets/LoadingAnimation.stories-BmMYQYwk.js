import{j as t}from"./iframe-BWm-Rgin.js";import"./preload-helper-PPVm8Dsz.js";const r="_loadingAnimation_hzd5u_1",d="_fixed_hzd5u_17",a={loadingAnimation:r,fixed:d},n=({fixed:o=!1,message:i=""})=>{const s=o?`${a.loadingAnimation} ${a.fixed}`:a.loadingAnimation;return t.jsx("div",{className:s,children:i})};try{n.displayName="LoadingAnimation",n.__docgenInfo={description:"",displayName:"LoadingAnimation",props:{fixed:{defaultValue:{value:"false"},description:"",name:"fixed",required:!1,type:{name:"boolean"}},message:{defaultValue:{value:""},description:"",name:"message",required:!1,type:{name:"string"}}}}}catch{}const c={title:"Example/LoadingAnimation",component:n,argTypes:{},tags:["autodocs"]},e={args:{message:"Loading..."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Loading...'
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,c as default};
