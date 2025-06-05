import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as q}from"./ThemeProvider-CIwViPQe.js";import"./iframe-CEv5T24E.js";const V="_contentBox_1ndvc_1",$="_link_1ndvc_8",z="_content_1ndvc_1",D="_title_1ndvc_25",F="_secondary_1ndvc_28",E="_regular_1ndvc_36",I="_large_1ndvc_45",n={contentBox:V,link:$,default:"_default_1ndvc_21",content:z,title:D,secondary:F,regular:E,large:I},s=({title:r=null,titleSize:c="regular",content:t="",children:i,color:S="default",href:d=null})=>{const C=()=>{if(!r)return null;const k=`${n.title} ${n[c]}`;return e.jsx("h2",{className:k,children:r})},w=n[S]||"",N=d?n.link:"",m=`${n.contentBox} ${w} ${N}`.trim(),T=t!=null&&t.length?t:i,p=e.jsxs(e.Fragment,{children:[C(),e.jsx("div",{className:n.content,children:T})]});return d?e.jsx("a",{href:d,className:m,children:p}):e.jsx("div",{className:m,children:p})};try{s.displayName="ContentBox",s.__docgenInfo={description:"",displayName:"ContentBox",props:{title:{defaultValue:{value:"null"},description:"",name:"title",required:!1,type:{name:"string"}},titleSize:{defaultValue:{value:"regular"},description:"",name:"titleSize",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'}]}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Example/ContentBox",component:s,argTypes:{},tags:["autodocs"],decorators:[(r,c)=>{const{theme:t,...i}=c.args;return e.jsx(q,{theme:t,children:e.jsx(r,{args:i})})}]},u=r=>e.jsx(s,{...r}),a={args:{color:"default",children:e.jsx(e.Fragment,{children:"Box with default color"}),titleSize:"regular"},render:u},o={args:{color:"default",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with default color"})},render:u},l={args:{color:"secondary",title:"Box title",children:e.jsx(e.Fragment,{children:"Box with secondary color"})},render:u};var g,x,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'default',
    children: <>Box with default color</>,
    titleSize: 'regular'
  },
  render
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,h,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'default',
    title: 'Box title',
    children: <>Box with default color</>
  },
  render
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,B,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    title: 'Box title',
    children: <>Box with secondary color</>
  },
  render
}`,...(j=(B=l.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const R=["DefaultWithoutTitle","Default","Secondary"];export{o as Default,a as DefaultWithoutTitle,l as Secondary,R as __namedExportsOrder,P as default};
