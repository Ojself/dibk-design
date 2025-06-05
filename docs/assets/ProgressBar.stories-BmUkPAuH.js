import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as _}from"./ThemeProvider-CZ49igs2.js";import"./iframe-ahiNd-bR.js";const h="_progressBar_t5aid_1",E="_hasErrors_t5aid_23",n={progressBar:h,hasErrors:E},t=({progress:r=0,hasErrors:a=!1})=>o.jsx("div",{className:`${n.progressBar} ${a?n.hasErrors:""}`,role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,style:{"--value":r}});try{t.displayName="ProgressBar",t.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:{value:"0"},description:"",name:"progress",required:!1,type:{name:"number"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"Example/ProgressBar",component:t,argTypes:{},tags:["autodocs"],decorators:[(r,a)=>{const{theme:u,...g}=a.args;return o.jsx(_,{theme:u,children:o.jsx(r,{args:g})})}]},s={args:{progress:25}},e={args:{progress:60,hasErrors:!0}};var p,c,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    progress: 25
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    progress: 60,
    hasErrors: true
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Default","WithError"];export{s as Default,e as WithError,B as __namedExportsOrder,v as default};
