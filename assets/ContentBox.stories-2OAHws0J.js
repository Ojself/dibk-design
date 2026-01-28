import{j as e}from"./iframe-BH9uU73o.js";import"./preload-helper-PPVm8Dsz.js";const j="_contentBox_1s3j9_5",B="_link_1s3j9_12",v="_content_1s3j9_5",S="_title_1s3j9_29",C="_secondary_1s3j9_32",w="_regular_1s3j9_40",N="_large_1s3j9_49",t={contentBox:j,link:B,default:"_default_1s3j9_25",content:v,title:S,secondary:C,regular:w,large:N},l=({title:r="",titleSize:m="regular",content:i="",children:p,color:_="default",href:s=null})=>{const g=()=>{if(!r)return null;const y=`${t.title} ${t[m]}`;return e.jsx("h2",{className:y,children:r})},f=t[_]||"",x=s?t.link:"",d=`${t.contentBox} ${f} ${x}`.trim(),h=i?.length?i:p,u=e.jsxs(e.Fragment,{children:[g(),e.jsx("div",{className:t.content,children:h})]});return s?e.jsx("a",{href:s,className:d,children:u}):e.jsx("div",{className:d,children:u})};try{l.displayName="ContentBox",l.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"regular"},description:"",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"default"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Primitives/ContentBox",component:l,argTypes:{},tags:["autodocs"]},c=r=>e.jsx(l,{...r}),n={args:{color:"default",children:e.jsx(e.Fragment,{children:"Box with default color"}),titleSize:"regular"},render:c},o={args:{color:"default",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with default color"})},render:c},a={args:{color:"secondary",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with secondary color"})},render:c};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "default",
    children: <>Box with default color</>,
    titleSize: "regular"
  },
  render
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "default",
    title: "Box title",
    children: <>Box with default color</>
  },
  render
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "secondary",
    title: "Box title",
    children: <>Box with secondary color</>
  },
  render
}`,...a.parameters?.docs?.source}}};const $=["DefaultWithoutTitle","Default","Secondary"];export{o as Default,n as DefaultWithoutTitle,a as Secondary,$ as __namedExportsOrder,V as default};
