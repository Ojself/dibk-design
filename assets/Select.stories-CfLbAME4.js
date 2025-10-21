import{r as d,a as re,j as l,c as se}from"./iframe-C-jjyl2S.js";import{E as oe}from"./ErrorMessage-CSng-FAn.js";import{C as ce}from"./CheckBoxList-BYYmBqYu.js";import{C as ue}from"./CheckBoxListItem-BeceO6Vb.js";import{a as ie}from"./asterisk-1FdKgIIn.js";import{L as G}from"./Label-B1gKBC7u.js";import"./preload-helper-PPVm8Dsz.js";import"./Header-tEczLNJJ.js";import"./CheckBoxInput-C3gFO46A.js";import"./CheckBoxIcon-Cq85S3Cv.js";const de="_select_18o2z_1",pe="_requiredSymbol_18o2z_1",me="_selectContainer_18o2z_8",ge="_selectListArrow_18o2z_11",he="_multipleSelectDropdown_18o2z_40",ve="_multipleSelectElement_18o2z_52",fe="_multiple_18o2z_40",ye="_hasErrors_18o2z_100",o={select:de,requiredSymbol:pe,selectContainer:me,selectListArrow:ge,multipleSelectDropdown:he,multipleSelectElement:ve,multiple:fe,hasErrors:ye},A=({id:e,onChange:c,name:D="",required:p=!1,disabled:O=!1,multiple:L=!1,options:m=[],width:g,value:u,defaultValue:i,label:R="",contentOnly:H=!1,keyAsContent:J=!1,placeholder:z="",placeholderValue:Q="",defaultContent:U="",role:X,"aria-describedby":Y,hasErrors:M=!1,errorMessage:I=""})=>{const[K,B]=d.useState(!1),N=d.useRef(null),Z=d.useCallback(a=>{a&&re(a)},[]),F=()=>B(!1);d.useEffect(()=>{const a=r=>{r.key==="Escape"&&F()},n=r=>{N.current&&!N.current.contains(r.target)&&F()};return document.addEventListener("mousedown",n),document.addEventListener("keydown",a),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("keydown",a)}},[]);const P=(a,n)=>{const r=n.find(s=>typeof s=="object"?s.value===a:s===a);return typeof r=="object"?r.key??r.value:r},T=a=>typeof a=="object"?{key:a.key,value:a.value}:{key:a,value:a},ee=()=>(i||u)?.map(a=>P(a,m)).join(", ")||null,ae=a=>{const n=u??i??[],r=n.includes(a)?n.filter(s=>s!==a):[...n,a];c(r)},le=()=>m.map((a,n)=>{const{key:r,value:s}=T(a),ne=(i||u||[]).includes(s);return l.jsx(ue,{id:`${e}-${n}`,value:s,checked:ne,onChange:()=>ae(s),children:r},n)}),$=()=>`${e}-errorMessage`;if(H){const a=i||u||null;return l.jsxs("div",{className:o.select,children:[l.jsx(G,{htmlFor:e,children:R}),l.jsx("span",{children:a?J?P(a,m):a:U})]})}const te={name:D,multiple:L,required:p,disabled:O,onChange:a=>c(a.target.value),id:e,role:X,className:se([M&&o.hasErrors,L&&o.multiple]),"aria-describedby":M&&I?$():Y,"aria-invalid":M||void 0,style:g?{maxWidth:g}:void 0,...i!==void 0&&u===void 0?{defaultValue:i}:{value:u||""}};return l.jsxs("div",{className:o.select,children:[l.jsxs(G,{htmlFor:e,children:[R,p&&l.jsx("img",{src:ie,alt:"",className:o.requiredSymbol})]}),l.jsxs("div",{className:o.selectContainer,style:g?{maxWidth:g}:void 0,children:[l.jsx("span",{className:o.selectListArrow}),L?l.jsxs("div",{ref:N,children:[l.jsx("div",{onClick:()=>B(!K),className:o.multipleSelectElement,children:ee()}),K&&l.jsx("div",{ref:Z,className:o.multipleSelectDropdown,children:l.jsx(ce,{compact:!0,children:le()})})]}):l.jsxs("select",{...te,children:[z&&l.jsx("option",{value:Q,disabled:!0,children:z}),m.map(a=>{const{key:n,value:r}=T(a);return l.jsx("option",{value:r,children:n},n)})]})]}),l.jsx(oe,{id:$(),content:I})]})};try{A.displayName="Select",A.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"Option[]"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},keyAsContent:{defaultValue:{value:"false"},description:"",name:"keyAsContent",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},placeholderValue:{defaultValue:{value:""},description:"",name:"placeholderValue",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Ee={title:"Example/Select",component:A,tags:["autodocs"],decorators:[(e,c)=>{const[D,p]=d.useState(c.args.value||c.args.defaultValue);return l.jsx(e,{...c,args:{...c.args,value:D,onChange:O=>p(O)}})}]},t=["Option 1","Option 2",{key:"Option 3",value:"value 3"}],h={args:{onChange:e=>console.log(e.target.value),id:"select1",options:t}},v={args:{onChange:e=>console.log(e.target.value),id:"select2",label:"Select with label",options:t}},f={args:{onChange:e=>console.log(e.target.value),id:"select3",label:"Select with label and selected value",value:"value 3",options:t}},y={args:{onChange:e=>console.log(e.target.value),id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:t}},b={args:{onChange:e=>console.log(e.target.value),id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:t}},C={args:{onChange:e=>console.log(e.target.value),id:"select6",label:["Select with ",l.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:t}},S={args:{onChange:e=>console.log(e.target.value),id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:t}},V={args:{onChange:e=>console.log(e.target.value),id:"select8",required:!0,label:"Required select",options:t}},_={args:{onChange:e=>console.log(e.target.value),id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:t}},w={args:{onChange:e=>console.log(e.target.value),id:"select10",label:"Content only",value:"value 3",contentOnly:!0,options:t}},k={args:{onChange:e=>console.log(e.target.value),id:"select11",label:"Key as content",value:"value 3",contentOnly:!0,keyAsContent:!0,options:t}},W={args:{onChange:e=>console.log(e.target.value),id:"select12",label:"Default content fallback",contentOnly:!0,defaultContent:"No value selected",options:t}},q={args:{onChange:e=>console.log(e.target.value),id:"select13",label:"Custom width",width:"250px",options:t}},x={args:{onChange:e=>console.log(e.target.value),id:"select15",label:"Multiple select",multiple:!0,options:t}},E={args:{onChange:e=>console.log(e.target.value),id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:t}},j={args:{onChange:e=>console.log(e.target.value),id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:t}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select1',
    options
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select2',
    label: 'Select with label',
    options
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select3',
    label: 'Select with label and selected value',
    value: 'value 3',
    options
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select4',
    label: 'Select with label and default value',
    defaultValue: 'value 3',
    options
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select5',
    label: 'Select with error',
    value: 'value 3',
    hasErrors: true,
    errorMessage: 'Wrong value selected',
    options
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select6',
    label: ['Select with ', <a key="link" href="#select6">
        link
      </a>, ' in label'],
    value: 'value 3',
    options
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select7',
    disabled: true,
    label: 'Disabled select',
    value: 'value 3',
    options
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select8',
    required: true,
    label: 'Required select',
    options
  }
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select9',
    label: 'With placeholder',
    placeholder: 'Select from list',
    placeholderValue: 'notSelected',
    value: 'notSelected',
    options
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select10',
    label: 'Content only',
    value: 'value 3',
    contentOnly: true,
    options
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select11',
    label: 'Key as content',
    value: 'value 3',
    contentOnly: true,
    keyAsContent: true,
    options
  }
}`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select12',
    label: 'Default content fallback',
    contentOnly: true,
    defaultContent: 'No value selected',
    options
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select13',
    label: 'Custom width',
    width: '250px',
    options
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select15',
    label: 'Multiple select',
    multiple: true,
    options
  }
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select16',
    label: 'Multiple selected',
    multiple: true,
    value: ['option 1', 'value 3'],
    options
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'select17',
    label: 'Multiple default',
    multiple: true,
    defaultValue: ['option 1', 'value 3'],
    options
  }
}`,...j.parameters?.docs?.source}}};const je=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithContentOnly","WithContentOnlyAndKeyAsContent","WithContentOnlyAndDefaultContent","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{h as Default,S as Disabled,x as Multiple,j as MultipleWithDefaultValue,E as MultipleWithSelectedValue,V as Required,w as WithContentOnly,W as WithContentOnlyAndDefaultContent,k as WithContentOnlyAndKeyAsContent,q as WithCustomWidth,y as WithDefaultValue,b as WithError,v as WithLabel,C as WithLinkInLabel,_ as WithPlaceholder,f as WithSelectedValue,je as __namedExportsOrder,Ee as default};
