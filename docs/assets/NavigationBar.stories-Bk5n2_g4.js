import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{N as E}from"./NavigationBar-BAx5OQPO.js";import{T as j}from"./ThemeProvider-BUCGweqt.js";import"./iframe-CY8VSDql.js";const w={title:"Example/NavigationBar",component:E,argTypes:{compact:{control:"boolean",defaultValue:!1},primaryListItems:{control:"object",defaultValue:[]},secondaryListItems:{control:"object",defaultValue:[]}},tags:["autodocs"],decorators:[(S,y)=>{const{theme:b,...x}=y.args;return o.jsx(j,{theme:b,children:o.jsx(S,{args:x})})}]},v=[{name:"Primary item 1",listItems:[{name:"Sub item 1",href:"#"},{name:"Sub item 2",href:"#"}],href:"#"},{name:"Primary item 2",href:"#"},{name:"Primary item 3",href:"#"}],T=[{name:"Secondary item 1",href:"#"},{name:"Secondary item 2",href:"#"}],e={args:{}},n={args:{logoLink:"https://dibk.no/",logoLinkTitle:"Gå til forside",openLogoLinkInNewTab:!0,mainContentId:"main-content"}},t={args:{primaryListItems:v,secondaryListItems:T,mainContentId:"main-content"}},r={args:{children:o.jsx("span",{children:"Content here"}),mainContentId:"main-content"}},a={args:{preventChildElementStacking:!0,children:o.jsx("span",{children:"Content here"}),mainContentId:"main-content"}};var s,i,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    logoLink: 'https://dibk.no/',
    logoLinkTitle: 'Gå til forside',
    openLogoLinkInNewTab: true,
    mainContentId: 'main-content'
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,h,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primaryListItems,
    secondaryListItems,
    mainContentId: 'main-content'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,L,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <span>Content here</span>,
    mainContentId: 'main-content'
  }
}`,...(f=(L=r.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var I,C,k;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    preventChildElementStacking: true,
    children: <span>Content here</span>,
    mainContentId: 'main-content'
  }
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const B=["Default","WithLogoLink","WithListItems","WithChildElements","PreventChildElementStacking"];export{e as Default,a as PreventChildElementStacking,r as WithChildElements,t as WithListItems,n as WithLogoLink,B as __namedExportsOrder,w as default};
