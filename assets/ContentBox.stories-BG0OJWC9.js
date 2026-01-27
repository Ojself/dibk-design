import{j as e}from"./iframe-tujtW6Px.js";import"./preload-helper-PPVm8Dsz.js";const B="_contentBox_wr8ku_2",v="_link_wr8ku_9",w="_content_wr8ku_2",k="_title_wr8ku_26",j="_secondary_wr8ku_29",S="_regular_wr8ku_37",C="_large_wr8ku_46",t={contentBox:B,link:v,default:"_default_wr8ku_22",content:w,title:k,secondary:j,regular:S,large:C},l=({title:r="",titleSize:m="regular",content:i="",children:p,color:_="default",href:s=null})=>{const g=()=>{if(!r)return null;const y=`${t.title} ${t[m]}`;return e.jsx("h2",{className:y,children:r})},f=t[_]||"",x=s?t.link:"",u=`${t.contentBox} ${f} ${x}`.trim(),h=i?.length?i:p,d=e.jsxs(e.Fragment,{children:[g(),e.jsx("div",{className:t.content,children:h})]});return s?e.jsx("a",{href:s,className:u,children:d}):e.jsx("div",{className:u,children:d})};try{l.displayName="ContentBox",l.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"regular"},description:"",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"default"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Primitives/ContentBox",component:l,argTypes:{},tags:["autodocs"]},c=r=>e.jsx(l,{...r}),n={args:{color:"default",children:e.jsx(e.Fragment,{children:"Box with default color"}),titleSize:"regular"},render:c},o={args:{color:"default",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with default color"})},render:c},a={args:{color:"secondary",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with secondary color"})},render:c};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
