import{r as p,a as ne,j as t,c as se}from"./iframe-BHtDog0D.js";import{a as oe}from"./asterisk-1FdKgIIn.js";import{C as ie}from"./CheckBoxList-BxX-Yb7Q.js";import{C as ue}from"./CheckBoxListItem-OYggcAIO.js";import{E as ce}from"./ErrorMessage-kLU387eS.js";import{L as H}from"./Label-DD2I3kgp.js";import"./preload-helper-PPVm8Dsz.js";import"./Header-DH3Dqcy1.js";import"./CheckBoxInput-CMGNUtlV.js";import"./CheckBoxIcon-D6rJe3zK.js";const de="_select_11vnt_1",pe="_requiredSymbol_11vnt_1",me="_selectContainer_11vnt_8",fe="_selectListArrow_11vnt_11",he="_multipleSelectDropdown_11vnt_40",ge="_multipleSelectElement_11vnt_50",be="_hasErrors_11vnt_98",u={select:de,requiredSymbol:pe,selectContainer:me,selectListArrow:fe,multipleSelectDropdown:he,multipleSelectElement:ge,hasErrors:be},N=a=>{const{id:s,name:R="",required:o=!1,disabled:d=!1,options:i=[],width:m,label:I="",contentOnly:J=!1,keyAsContent:Q=!1,placeholder:O="",placeholderValue:U="",defaultContent:F="",role:X,"aria-describedby":Y,hasErrors:A=!1,errorMessage:B=""}=a,[K,T]=p.useState(!1),L=p.useRef(null),Z=p.useCallback(e=>{e&&ne(e)},[]),$=()=>T(!1);p.useEffect(()=>{const e=n=>{n.key==="Escape"&&$()},l=n=>{L.current&&!L.current.contains(n.target)&&$()};return document.addEventListener("mousedown",l),document.addEventListener("keydown",e),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("keydown",e)}},[]);const f=e=>typeof e=="object"?{key:e.key,value:e.value}:{key:e,value:e},P=e=>{const l=i.map(f).find(n=>n.value===e||n.key===e);return l?l.key??l.value:e},z=e=>Array.isArray(e)?e:e==null?[]:[e],h=()=>a.value!==void 0?z(a.value):a.defaultValue!==void 0?z(a.defaultValue):[],ee=()=>{const e=h();return e.length===0?O||F||"":e.map(P).join(", ")},te=e=>{const l=h(),c=l.includes(e)?l.filter(M=>M!==e):[...l,e];a.multiple&&a.onChange(c)},le=()=>{const e=h();return i.map(l=>{const{key:n,value:c}=f(l),M=e.includes(c),re=`${s}-${String(c)}`;return t.jsx(ue,{id:re,value:c,checked:M,onChange:()=>te(c),children:n},String(c))})},G=()=>`${s}-errorMessage`;if(J){const e=h(),l=e.length===0?F:Q?e.map(P).join(", "):e.join(", ");return t.jsxs("div",{className:u.select,children:[t.jsx(H,{htmlFor:s,children:I}),t.jsx("span",{children:l})]})}const ae=e=>{const l=i.map(f).find(n=>String(n.value)===e);return l?l.value:e};return t.jsxs("div",{className:u.select,children:[t.jsxs(H,{htmlFor:s,children:[I,o&&t.jsx("img",{src:oe,alt:"",className:u.requiredSymbol})]}),t.jsxs("div",{className:u.selectContainer,style:m?{maxWidth:m}:void 0,children:[t.jsx("span",{className:u.selectListArrow}),a.multiple?t.jsxs("div",{ref:L,children:[t.jsx("button",{type:"button",id:s,"aria-haspopup":"listbox","aria-expanded":K,onClick:()=>T(e=>!e),className:u.multipleSelectElement,disabled:d,children:ee()}),K&&t.jsx("div",{ref:Z,className:u.multipleSelectDropdown,role:"listbox","aria-multiselectable":"true","aria-labelledby":s,children:t.jsx(ie,{compact:!0,children:le()})})]}):t.jsxs("select",{name:R,required:o,disabled:d,onChange:e=>a.onChange(ae(e.target.value)),id:s,role:X,className:se([A&&u.hasErrors]),"aria-describedby":A&&B?G():Y,"aria-invalid":A||void 0,style:m?{maxWidth:m}:void 0,...a.value!==void 0?{value:a.value}:a.defaultValue!==void 0?{defaultValue:a.defaultValue}:{},children:[O&&t.jsx("option",{value:U,disabled:!0,children:O}),i.map(e=>{const{key:l,value:n}=f(e);return t.jsx("option",{value:String(n),children:l},String(n))})]})]}),t.jsx(ce,{id:G(),content:B})]})};try{N.displayName="Select",N.__docgenInfo={description:"",displayName:"Select",props:{multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string | number) => void) | ((value: (string | number)[]) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | (string | number)[]"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"Option[]"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:null,description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},keyAsContent:{defaultValue:null,description:"",name:"keyAsContent",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},placeholderValue:{defaultValue:null,description:"",name:"placeholderValue",required:!1,type:{name:"string"}},defaultContent:{defaultValue:null,description:"",name:"defaultContent",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:null,description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Ee={title:"Example/Select",component:N,tags:["autodocs"],decorators:[(a,s)=>{if(!!s.args.multiple){const o=s.args,[d,i]=p.useState(o.value??o.defaultValue);return t.jsx(a,{...s,args:{...o,value:d,onChange:i}})}else{const o=s.args,[d,i]=p.useState(o.value??o.defaultValue);return t.jsx(a,{...s,args:{...o,value:d,onChange:i}})}}]},r=["Option 1","Option 2",{key:"Option 3",value:"value 3"}],g={args:{id:"select1",options:r}},b={args:{id:"select2",label:"Select with label",options:r}},v={args:{id:"select3",label:"Select with label and selected value",value:"value 3",options:r}},y={args:{id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:r}},S={args:{id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:r}},V={args:{id:"select6",label:["Select with ",t.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:r}},C={args:{id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:r}},w={args:{id:"select8",required:!0,label:"Required select",options:r}},x={args:{id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:r}},k={args:{id:"select10",label:"Content only",value:"value 3",contentOnly:!0,options:r}},q={args:{id:"select11",label:"Key as content",value:"value 3",contentOnly:!0,keyAsContent:!0,options:r}},W={args:{id:"select12",label:"Default content fallback",contentOnly:!0,defaultContent:"No value selected",options:r}},E={args:{id:"select13",label:"Custom width",width:"250px",options:r}},_={args:{id:"select15",label:"Multiple select",multiple:!0,options:r}},j={args:{id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:r}},D={args:{id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:r}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select1",
    options
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select2",
    label: "Select with label",
    options
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select3",
    label: "Select with label and selected value",
    value: "value 3",
    options
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select4",
    label: "Select with label and default value",
    defaultValue: "value 3",
    options
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select5",
    label: "Select with error",
    value: "value 3",
    hasErrors: true,
    errorMessage: "Wrong value selected",
    options
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select6",
    label: ["Select with ", <a key="link" href="#select6">
        link
      </a>, " in label"],
    value: "value 3",
    options
  }
}`,...V.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select7",
    disabled: true,
    label: "Disabled select",
    value: "value 3",
    options
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select8",
    required: true,
    label: "Required select",
    options
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select9",
    label: "With placeholder",
    placeholder: "Select from list",
    placeholderValue: "notSelected",
    value: "notSelected",
    options
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select10",
    label: "Content only",
    value: "value 3",
    contentOnly: true,
    options
  }
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select11",
    label: "Key as content",
    value: "value 3",
    contentOnly: true,
    keyAsContent: true,
    options
  }
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select12",
    label: "Default content fallback",
    contentOnly: true,
    defaultContent: "No value selected",
    options
  }
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select13",
    label: "Custom width",
    width: "250px",
    options
  }
}`,...E.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select15",
    label: "Multiple select",
    multiple: true,
    options
  }
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select16",
    label: "Multiple selected",
    multiple: true,
    value: ["option 1", "value 3"],
    options
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select17",
    label: "Multiple default",
    multiple: true,
    defaultValue: ["option 1", "value 3"],
    options
  }
}`,...D.parameters?.docs?.source}}};const _e=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithContentOnly","WithContentOnlyAndKeyAsContent","WithContentOnlyAndDefaultContent","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{g as Default,C as Disabled,_ as Multiple,D as MultipleWithDefaultValue,j as MultipleWithSelectedValue,w as Required,k as WithContentOnly,W as WithContentOnlyAndDefaultContent,q as WithContentOnlyAndKeyAsContent,E as WithCustomWidth,y as WithDefaultValue,S as WithError,b as WithLabel,V as WithLinkInLabel,x as WithPlaceholder,v as WithSelectedValue,_e as __namedExportsOrder,Ee as default};
