import{j as e}from"./iframe-CWY_U3YA.js";import"./preload-helper-PPVm8Dsz.js";const y="_contentBox_1ndvc_1",B="_link_1ndvc_8",j="_content_1ndvc_1",S="_title_1ndvc_25",C="_secondary_1ndvc_28",w="_regular_1ndvc_36",N="_large_1ndvc_45",t={contentBox:y,link:B,default:"_default_1ndvc_21",content:j,title:S,secondary:C,regular:w,large:N},l=({title:r="",titleSize:m="regular",content:i="",children:p,color:_="default",href:c=null})=>{const g=()=>{if(!r)return null;const v=`${t.title} ${t[m]}`;return e.jsx("h2",{className:v,children:r})},f=t[_]||"",x=c?t.link:"",d=`${t.contentBox} ${f} ${x}`.trim(),h=i?.length?i:p,u=e.jsxs(e.Fragment,{children:[g(),e.jsx("div",{className:t.content,children:h})]});return c?e.jsx("a",{href:c,className:d,children:u}):e.jsx("div",{className:d,children:u})};try{l.displayName="ContentBox",l.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"regular"},description:"",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"regular"'}]}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Primitives/ContentBox",component:l,argTypes:{},tags:["autodocs"]},s=r=>e.jsx(l,{...r}),n={args:{color:"default",children:e.jsx(e.Fragment,{children:"Box with default color"}),titleSize:"regular"},render:s},o={args:{color:"default",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with default color"})},render:s},a={args:{color:"secondary",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with secondary color"})},render:s};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
