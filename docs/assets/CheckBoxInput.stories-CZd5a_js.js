import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{C as Q}from"./CheckBoxInput-BptN2Oqy.js";import{T as Y}from"./ThemeProvider-BUCGweqt.js";import"./iframe-CY8VSDql.js";import"./CheckBoxIcon-gpoXoisQ.js";import"./asterisk-1FdKgIIn.js";const ne={title:"Example/CheckBoxInput",component:Q,argTypes:{},tags:["autodocs"],decorators:[(k,V)=>{const{theme:W,...X}=V.args;return l.jsx(Y,{theme:W,children:l.jsx(k,{args:X})})}]},e=k=>l.jsx(Q,{...k}),r={args:{id:"checkBoxInput-1",children:"Label for unchecked checkbox"},render:e},c={args:{id:"checkBoxInput-2",children:"Label for checked checkbox",checked:!0},render:e},o={args:{id:"checkBoxInput-3",children:"Label for checked disabled checkbox",checked:!0,disabled:!0},render:e},n={args:{id:"checkBoxInput-4",children:"Label for unchecked checkbox with content only",contentOnly:!0},render:e},s={args:{id:"checkBoxInput-5",children:"Label for checked checkbox with content only",checked:!0,contentOnly:!0},render:e},a={args:{id:"checkBoxInput-6",children:"Label for checked checkbox with custom checkmark",checked:!0,disabled:!0,checkmarkCharacter:"✕"},render:e},t={args:{id:"checkBoxInput-7",children:"Label for checkbox with errors",hasErrors:!0},render:e},d={args:{id:"checkBoxInput-8",children:"Label for disabled checkbox with errors",hasErrors:!0,disabled:!0},render:e},h={args:{id:"checkBoxInput-9",children:"Label for checked checkbox with errors",hasErrors:!0,checked:!0},render:e},i={args:{id:"checkBoxInput-10",children:"Label for checked disabled checkbox with errors",hasErrors:!0,checked:!0,disabled:!0},render:e},u={args:{id:"checkBoxInput-11",required:!0,children:"Label for required checkbox"},render:e};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-1',
    children: 'Label for unchecked checkbox'
  },
  render
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,g,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-2',
    children: 'Label for checked checkbox',
    checked: true
  },
  render
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,B,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-3',
    children: 'Label for checked disabled checkbox',
    checked: true,
    disabled: true
  },
  render
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,E,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-4',
    children: 'Label for unchecked checkbox with content only',
    contentOnly: true
  },
  render
}`,...(w=(E=n.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var y,S,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-5',
    children: 'Label for checked checkbox with content only',
    checked: true,
    contentOnly: true
  },
  render
}`,...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var H,q,D;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-6',
    children: 'Label for checked checkbox with custom checkmark',
    checked: true,
    disabled: true,
    checkmarkCharacter: '✕'
  },
  render
}`,...(D=(q=a.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var j,U,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-7',
    children: 'Label for checkbox with errors',
    hasErrors: true
  },
  render
}`,...(R=(U=t.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var T,_,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-8',
    children: 'Label for disabled checkbox with errors',
    hasErrors: true,
    disabled: true
  },
  render
}`,...(v=(_=d.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var P,z,A;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-9',
    children: 'Label for checked checkbox with errors',
    hasErrors: true,
    checked: true
  },
  render
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,J;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-10',
    children: 'Label for checked disabled checkbox with errors',
    hasErrors: true,
    checked: true,
    disabled: true
  },
  render
}`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: 'checkBoxInput-11',
    required: true,
    children: 'Label for required checkbox'
  },
  render
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const se=["Unchecked","Checked","CheckedDisabled","UncheckedContentOnly","CheckedContentOnly","CheckedCustomCheckmark","HasErrors","HasErrorsDisabled","HasErrorsChecked","HasErrorsCheckedDisabled","Required"];export{c as Checked,s as CheckedContentOnly,a as CheckedCustomCheckmark,o as CheckedDisabled,t as HasErrors,h as HasErrorsChecked,i as HasErrorsCheckedDisabled,d as HasErrorsDisabled,u as Required,r as Unchecked,n as UncheckedContentOnly,se as __namedExportsOrder,ne as default};
