import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L,a as r}from"./ListItem-2nJtKOvH.js";import{T as O}from"./ThemeProvider-Dx1BAIvc.js";import"./iframe-4BhRvnXb.js";const R={title:"Example/List",component:L,argTypes:{},tags:["autodocs"],decorators:[(f,q)=>{const{theme:W,...E}=q.args;return e.jsx(O,{theme:W,children:e.jsx(f,{args:E})})}]},d=e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"item 1"}),e.jsx(r,{children:"item 2"}),e.jsx(r,{children:"item 3"})]}),T=e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"item 1"}),e.jsxs(r,{children:["item 2",e.jsxs(L,{children:[e.jsx(r,{children:"subitem 1"}),e.jsx(r,{children:"subitem 2"})]})]}),e.jsx(r,{children:"item 3"})]}),s={args:{children:d,ordered:!0}},t={args:{children:d}},n={args:{children:d,listStyle:"square"}},a={args:{children:d,listStyle:"none"}},o={args:{children:T}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: listItems,
    ordered: true
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: listItems
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: listItems,
    listStyle: 'square'
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,j,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: listItems,
    listStyle: 'none'
  }
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var U,y,b;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: listItemsWithSubItems
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const k=["Ordered","Unordered","UnorderedSquareStyled","UnorderedUnstyled","UnorderedListWithSubItems"];export{s as Ordered,t as Unordered,o as UnorderedListWithSubItems,n as UnorderedSquareStyled,a as UnorderedUnstyled,k as __namedExportsOrder,R as default};
