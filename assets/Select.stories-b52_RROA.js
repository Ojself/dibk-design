import{r as c,a as ie,j as a,c as ce}from"./iframe-DZO4KTEA.js";import{a as ue}from"./asterisk-1FdKgIIn.js";import{C as de}from"./CheckBoxList-D3WTN_tj.js";import{C as pe}from"./CheckBoxListItem-BoSkjhKE.js";import{E as me}from"./ErrorMessage-BRGX6810.js";import{L as Q}from"./Label-CMhyB94b.js";import"./preload-helper-PPVm8Dsz.js";import"./Header-CR92oRIr.js";import"./CheckBoxInput-XxlXGZD-.js";import"./CheckBoxIcon-164Rxcvi.js";const fe="_select_18o2z_1",he="_requiredSymbol_18o2z_1",ge="_selectContainer_18o2z_8",be="_selectListArrow_18o2z_11",ve="_multipleSelectDropdown_18o2z_40",ye="_multipleSelectElement_18o2z_52",Se="_hasErrors_18o2z_100",n={select:fe,requiredSymbol:he,selectContainer:ge,selectListArrow:be,multipleSelectDropdown:ve,multipleSelectElement:ye,hasErrors:Se},I=({id:s,onChange:o,name:A="",required:u=!1,disabled:d=!1,multiple:U=!1,options:p=[],width:m,value:f,defaultValue:h,label:F="",contentOnly:X=!1,keyAsContent:Y=!1,placeholder:M="",placeholderValue:Z="",defaultContent:K="",role:ee,"aria-describedby":te,hasErrors:N=!1,errorMessage:B=""})=>{const[T,$]=c.useState(!1),R=c.useRef(null),ae=c.useCallback(e=>{e&&ie(e)},[]),P=()=>$(!1);c.useEffect(()=>{const e=r=>{r.key==="Escape"&&P()},t=r=>{R.current&&!R.current.contains(r.target)&&P()};return document.addEventListener("mousedown",t),document.addEventListener("keydown",e),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",e)}},[]);const g=e=>typeof e=="object"?{key:e.key,value:e.value}:{key:e,value:e},G=e=>{const t=p.map(g).find(r=>r.value===e||r.key===e);return t?t.key??t.value:e},H=e=>Array.isArray(e)?e:e==null?[]:[e],b=()=>f!==void 0?H(f):h!==void 0?H(h):[],le=()=>{const e=b();return e.length===0?M||K||"":e.map(G).join(", ")},re=e=>{const t=b(),i=t.includes(e)?t.filter(z=>z!==e):[...t,e];o(i)},se=()=>{const e=b();return p.map(t=>{const{key:r,value:i}=g(t),z=e.includes(i),oe=`${s}-${String(i)}`;return a.jsx(pe,{id:oe,value:i,checked:z,onChange:()=>re(i),children:r},String(i))})},J=()=>`${s}-errorMessage`;if(X){const e=b(),t=e.length===0?K:Y?e.map(G).join(", "):e.join(", ");return a.jsxs("div",{className:n.select,children:[a.jsx(Q,{htmlFor:s,children:F}),a.jsx("span",{children:t})]})}const ne=e=>{const t=p.map(g).find(r=>String(r.value)===e);return t?t.value:e};return a.jsxs("div",{className:n.select,children:[a.jsxs(Q,{htmlFor:s,children:[F,u&&a.jsx("img",{src:ue,alt:"",className:n.requiredSymbol})]}),a.jsxs("div",{className:n.selectContainer,style:m?{maxWidth:m}:void 0,children:[a.jsx("span",{className:n.selectListArrow}),U?a.jsxs("div",{ref:R,children:[a.jsx("button",{type:"button",id:s,"aria-haspopup":"listbox","aria-expanded":T,onClick:()=>$(e=>!e),className:n.multipleSelectElement,disabled:d,children:le()}),T&&a.jsx("div",{ref:ae,className:n.multipleSelectDropdown,role:"listbox","aria-multiselectable":"true","aria-labelledby":s,children:a.jsx(de,{compact:!0,children:se()})})]}):a.jsxs("select",{name:A,required:u,disabled:d,onChange:e=>o(ne(e.target.value)),id:s,role:ee,className:ce([N&&n.hasErrors]),"aria-describedby":N&&B?J():te,"aria-invalid":N||void 0,style:m?{maxWidth:m}:void 0,...f!==void 0?{value:f}:h!==void 0?{defaultValue:h}:{},children:[M&&a.jsx("option",{value:Z,disabled:!0,children:M}),p.map(e=>{const{key:t,value:r}=g(e);return a.jsx("option",{value:String(r),children:t},String(r))})]})]}),a.jsx(me,{id:J(),content:B})]})};try{I.displayName="Select",I.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | number | (string | number)[]) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"Option[]"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | (string | number)[]"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},keyAsContent:{defaultValue:{value:"false"},description:"",name:"keyAsContent",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},placeholderValue:{defaultValue:{value:""},description:"",name:"placeholderValue",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const De={title:"Example/Select",component:I,tags:["autodocs"],decorators:[(s,o)=>{const[A,u]=c.useState(o.args.value||o.args.defaultValue);return a.jsx(s,{...o,args:{...o.args,value:A,onChange:d=>u(d)}})}]},l=["Option 1","Option 2",{key:"Option 3",value:"value 3"}],v={args:{id:"select1",options:l}},y={args:{id:"select2",label:"Select with label",options:l}},S={args:{id:"select3",label:"Select with label and selected value",value:"value 3",options:l}},C={args:{id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:l}},V={args:{id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:l}},x={args:{id:"select6",label:["Select with ",a.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:l}},k={args:{id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:l}},W={args:{id:"select8",required:!0,label:"Required select",options:l}},q={args:{id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:l}},w={args:{id:"select10",label:"Content only",value:"value 3",contentOnly:!0,options:l}},_={args:{id:"select11",label:"Key as content",value:"value 3",contentOnly:!0,keyAsContent:!0,options:l}},E={args:{id:"select12",label:"Default content fallback",contentOnly:!0,defaultContent:"No value selected",options:l}},j={args:{id:"select13",label:"Custom width",width:"250px",options:l}},D={args:{id:"select15",label:"Multiple select",multiple:!0,options:l}},L={args:{id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:l}},O={args:{id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:l}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select1",
    options
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select2",
    label: "Select with label",
    options
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select3",
    label: "Select with label and selected value",
    value: "value 3",
    options
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select4",
    label: "Select with label and default value",
    defaultValue: "value 3",
    options
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select5",
    label: "Select with error",
    value: "value 3",
    hasErrors: true,
    errorMessage: "Wrong value selected",
    options
  }
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select6",
    label: ["Select with ", <a key="link" href="#select6">
        link
      </a>, " in label"],
    value: "value 3",
    options
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select7",
    disabled: true,
    label: "Disabled select",
    value: "value 3",
    options
  }
}`,...k.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select8",
    required: true,
    label: "Required select",
    options
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select9",
    label: "With placeholder",
    placeholder: "Select from list",
    placeholderValue: "notSelected",
    value: "notSelected",
    options
  }
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select10",
    label: "Content only",
    value: "value 3",
    contentOnly: true,
    options
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select11",
    label: "Key as content",
    value: "value 3",
    contentOnly: true,
    keyAsContent: true,
    options
  }
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select12",
    label: "Default content fallback",
    contentOnly: true,
    defaultContent: "No value selected",
    options
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select13",
    label: "Custom width",
    width: "250px",
    options
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select15",
    label: "Multiple select",
    multiple: true,
    options
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select16",
    label: "Multiple selected",
    multiple: true,
    value: ["option 1", "value 3"],
    options
  }
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select17",
    label: "Multiple default",
    multiple: true,
    defaultValue: ["option 1", "value 3"],
    options
  }
}`,...O.parameters?.docs?.source}}};const Le=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithContentOnly","WithContentOnlyAndKeyAsContent","WithContentOnlyAndDefaultContent","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{v as Default,k as Disabled,D as Multiple,O as MultipleWithDefaultValue,L as MultipleWithSelectedValue,W as Required,w as WithContentOnly,E as WithContentOnlyAndDefaultContent,_ as WithContentOnlyAndKeyAsContent,j as WithCustomWidth,C as WithDefaultValue,V as WithError,y as WithLabel,x as WithLinkInLabel,q as WithPlaceholder,S as WithSelectedValue,Le as __namedExportsOrder,De as default};
