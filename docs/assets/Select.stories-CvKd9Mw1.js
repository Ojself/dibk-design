import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-CY8VSDql.js";import{E as Xe}from"./ErrorMessage-DOpafp2d.js";import{C as Ye}from"./CheckBoxList-CBEEq2yw.js";import{C as Ze}from"./CheckBoxListItem-DWJXJ4Zf.js";import{a as ea}from"./asterisk-1FdKgIIn.js";import{g as aa}from"./generators-DdMDqxEb.js";import{a as la,c as ta,T as na}from"./ThemeProvider-BUCGweqt.js";import{L as T}from"./Label-kFZHDafk.js";import"./Header-BoeWRQn3.js";import"./CheckBoxInput-BptN2Oqy.js";import"./CheckBoxIcon-gpoXoisQ.js";const ra="_select_18o2z_1",oa="_requiredSymbol_18o2z_1",sa="_selectContainer_18o2z_8",ca="_selectListArrow_18o2z_11",ua="_multipleSelectDropdown_18o2z_40",ia="_multipleSelectElement_18o2z_52",da="_multiple_18o2z_40",pa="_hasErrors_18o2z_100",s={select:ra,requiredSymbol:oa,selectContainer:sa,selectListArrow:ca,multipleSelectDropdown:ua,multipleSelectElement:ia,multiple:da,hasErrors:pa},N=({id:e,onChange:i,name:D="",required:d=!1,disabled:Ke=!1,multiple:L=!1,options:p=[],width:m,value:c,defaultValue:u,label:A="",contentOnly:$e=!1,keyAsContent:Be=!1,placeholder:R="",placeholderValue:Fe="",defaultContent:Pe="",role:Te,"aria-describedby":Ge,hasErrors:O=!1,errorMessage:z=""})=>{const[I,K]=g.useState(!1),M=g.useRef(null);g.useCallback(a=>{a&&la(a)},[]);const $=()=>K(!1);g.useEffect(()=>{const a=n=>{n.key==="Escape"&&$()},r=n=>{M.current&&!M.current.contains(n.target)&&$()};return document.addEventListener("mousedown",r),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("keydown",a)}},[]);const B=(a,r)=>{const n=r.find(o=>typeof o=="object"?o.value===a:o===a);return typeof n=="object"?n.key??n.value:n},F=a=>typeof a=="object"?{key:a.key,value:a.value}:{key:a,value:a},He=()=>{var a;return((a=u||c)==null?void 0:a.map(r=>B(r,p)).join(", "))||null},Je=()=>p.map((a,r)=>{const{key:n,value:o}=F(a),Ue=(u||c||[]).includes(o);return l.jsx(Ze,{id:`${e}-${r}`,value:o,checked:Ue,onChange:()=>i(o),children:n},r)}),P=()=>`${e}-errorMessage`;if($e){const a=u||c||null;return l.jsxs("div",{className:s.select,children:[l.jsx(T,{htmlFor:e,children:A}),l.jsx("span",{children:a?Be?B(a,p):a:Pe})]})}const Qe={name:D,multiple:L,required:d,disabled:Ke,onChange:i,id:e,role:Te,className:ta([O&&s.hasErrors,L&&s.multiple]),"aria-describedby":O&&z?P():Ge,"aria-invalid":O||void 0,style:m?{maxWidth:m}:void 0,...u&&!c?{defaultValue:u}:{value:c||""}};return l.jsxs("div",{className:s.select,children:[l.jsxs(T,{htmlFor:e,children:[A,d&&l.jsx("img",{src:ea,alt:"",className:s.requiredSymbol})]}),l.jsxs("div",{className:s.selectContainer,style:m?{maxWidth:m}:void 0,children:[l.jsx("span",{className:s.selectListArrow}),L?l.jsxs("div",{ref:M,children:[l.jsx("div",{onClick:()=>K(!I),className:s.multipleSelectElement,children:He()}),I&&l.jsx("div",{className:s.multipleSelectDropdown,children:l.jsx(Ye,{compact:!0,children:Je()})})]}):l.jsxs("select",{...Qe,children:[R&&l.jsx("option",{value:Fe,disabled:!0,children:R}),p.map((a,r)=>{const{key:n,value:o}=F(a);return l.jsx("option",{value:o,children:n},r)})]},`${e}-${aa(6)}`)]}),l.jsx(Xe,{id:P(),content:z})]})};try{N.displayName="Select",N.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"Option[]"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},keyAsContent:{defaultValue:{value:"false"},description:"",name:"keyAsContent",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},placeholderValue:{defaultValue:{value:""},description:"",name:"placeholderValue",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const wa={title:"Example/Select",component:N,tags:["autodocs"],decorators:[(e,i)=>{const{theme:D,...d}=i.args;return l.jsx(na,{theme:D,children:l.jsx(e,{args:d})})}]},t=["option 1","option 2",{key:"option 3",value:"value 3"}],h={args:{onChange:e=>console.log(e.target.value),id:"select1",options:t}},v={args:{onChange:e=>console.log(e.target.value),id:"select2",label:"Select with label",options:t}},f={args:{onChange:e=>console.log(e.target.value),id:"select3",label:"Select with label and selected value",value:"value 3",options:t}},y={args:{onChange:e=>console.log(e.target.value),id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:t}},b={args:{onChange:e=>console.log(e.target.value),id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:t}},C={args:{onChange:e=>console.log(e.target.value),id:"select6",label:["Select with ",l.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:t}},S={args:{onChange:e=>console.log(e.target.value),id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:t}},V={args:{onChange:e=>console.log(e.target.value),id:"select8",required:!0,label:"Required select",options:t}},_={args:{onChange:e=>console.log(e.target.value),id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:t}},k={args:{onChange:e=>console.log(e.target.value),id:"select10",label:"Content only",value:"value 3",contentOnly:!0,options:t}},w={args:{onChange:e=>console.log(e.target.value),id:"select11",label:"Key as content",value:"value 3",contentOnly:!0,keyAsContent:!0,options:t}},x={args:{onChange:e=>console.log(e.target.value),id:"select12",label:"Default content fallback",contentOnly:!0,defaultContent:"No value selected",options:t}},W={args:{onChange:e=>console.log(e.target.value),id:"select13",label:"Custom width",width:"250px",options:t}},q={args:{onChange:e=>console.log(e.target.value),id:"select15",label:"Multiple select",multiple:!0,options:t}},E={args:{onChange:e=>console.log(e.target.value),id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:t}},j={args:{onChange:e=>console.log(e.target.value),id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:t}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select1',
    options
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select2',
    label: 'Select with label',
    options
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select3',
    label: 'Select with label and selected value',
    value: 'value 3',
    options
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,te;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select4',
    label: 'Select with label and default value',
    defaultValue: 'value 3',
    options
  }
}`,...(te=(le=y.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ne,re,oe;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select5',
    label: 'Select with error',
    value: 'value 3',
    hasErrors: true,
    errorMessage: 'Wrong value selected',
    options
  }
}`,...(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ce,ue;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select6',
    label: ['Select with ', <a key="link" href="#select6">
        link
      </a>, ' in label'],
    value: 'value 3',
    options
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ie,de,pe;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select7',
    disabled: true,
    label: 'Disabled select',
    value: 'value 3',
    options
  }
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select8',
    required: true,
    label: 'Required select',
    options
  }
}`,...(he=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,fe,ye;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select9',
    label: 'With placeholder',
    placeholder: 'Select from list',
    placeholderValue: 'notSelected',
    value: 'notSelected',
    options
  }
}`,...(ye=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,Ce,Se;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select10',
    label: 'Content only',
    value: 'value 3',
    contentOnly: true,
    options
  }
}`,...(Se=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ve,_e,ke;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select11',
    label: 'Key as content',
    value: 'value 3',
    contentOnly: true,
    keyAsContent: true,
    options
  }
}`,...(ke=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var we,xe,We;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select12',
    label: 'Default content fallback',
    contentOnly: true,
    defaultContent: 'No value selected',
    options
  }
}`,...(We=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:We.source}}};var qe,Ee,je;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select13',
    label: 'Custom width',
    width: '250px',
    options
  }
}`,...(je=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var De,Le,Oe;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select15',
    label: 'Multiple select',
    multiple: true,
    options
  }
}`,...(Oe=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Me,Ne,Ae;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select16',
    label: 'Multiple selected',
    multiple: true,
    value: ['option 1', 'value 3'],
    options
  }
}`,...(Ae=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Re,ze,Ie;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select17',
    label: 'Multiple default',
    multiple: true,
    defaultValue: ['option 1', 'value 3'],
    options
  }
}`,...(Ie=(ze=j.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};const xa=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithContentOnly","WithContentOnlyAndKeyAsContent","WithContentOnlyAndDefaultContent","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{h as Default,S as Disabled,q as Multiple,j as MultipleWithDefaultValue,E as MultipleWithSelectedValue,V as Required,k as WithContentOnly,x as WithContentOnlyAndDefaultContent,w as WithContentOnlyAndKeyAsContent,W as WithCustomWidth,y as WithDefaultValue,b as WithError,v as WithLabel,C as WithLinkInLabel,_ as WithPlaceholder,f as WithSelectedValue,xa as __namedExportsOrder,wa as default};
