import{j as a,F as O}from"./iframe-D6JUdhjZ.js";import{E as A}from"./ErrorMessage-C3J1pZhG.js";import{L as F}from"./Label-BzoaM2XY.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const H=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=n.length;for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*v));return t},B="_textarea_116qr_5",P="_requiredSymbol_116qr_8",$="_hasErrors_116qr_59",f={textarea:B,requiredSymbol:P,hasErrors:$},y=({id:e,onChange:t,onBlur:n,name:v="",required:r=!1,readOnly:_,disabled:S,width:q,resize:C="both",value:w,defaultValue:T,elementKey:L,rows:V,label:k="",placeholder:M="","aria-describedby":D,hasErrors:b=!1,errorMessage:W="",requirementIndicatorMode:j,optionalLabel:z})=>{const R=()=>`${e}-errorMessage`,E=!w?.length&&T?.length?T:void 0,I=L||`${e}-${H(6)}`,K={...q&&{maxWidth:q},...C&&{resize:C}},N={name:v,readOnly:_,disabled:S,id:e,onChange:t,onBlur:n,value:E?void 0:w,defaultValue:E||void 0,placeholder:M,rows:V?parseInt(V,10):void 0,className:b?f.hasErrors:"","aria-describedby":b&&W?R():D,"aria-invalid":b?"true":void 0,"aria-required":r?"true":void 0,style:K};return a.jsxs("div",{className:f.textarea,children:[a.jsxs(F,{htmlFor:e,children:[k,a.jsx(O,{required:r,mode:j,optionalLabel:z,requiredClassName:f.requiredSymbol})]}),a.jsx("textarea",{...N},I),a.jsx(A,{id:R(),content:W})]})};try{y.displayName="Textarea",y.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLTextAreaElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},resize:{defaultValue:{value:"both"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"vertical"'},{value:'"horizontal"'},{value:'"both"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"required"'},{value:'"optional"'},{value:'"none"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Primitives/Textarea",component:y,tags:["autodocs"]},l={args:{onChange:()=>{},id:"textarea1"}},s={args:{onChange:()=>{},id:"textarea2",value:"Textarea with value"}},i={args:{onChange:()=>{},id:"textarea3",defaultValue:"Textarea with default value"}},o={args:{onChange:()=>{},id:"textarea4",value:"Textarea with label and value",label:"Textarea with label and value"}},d={args:{onChange:()=>{},id:"textarea5",required:!0,label:"Required textarea",value:"Textarea with required value"}},u={args:{onChange:()=>{},id:"textarea6",value:"Textarea with link in label",label:["Textarea with ",a.jsx("a",{href:"#textarea6",children:"link"},"link")," in label"]}},c={args:{onChange:()=>{},id:"textarea7",value:"Textarea with label, value, errors and error message",label:"Textarea with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"}},m={args:{onChange:()=>{},id:"textarea8",readOnly:!0,value:"Read only",label:"Read only"}},p={args:{onChange:()=>{},id:"textarea9",disabled:!0,value:"Disabled",label:"Disabled"}},h={args:{onChange:()=>{},id:"textarea12",value:"Textarea with custom width",width:"320px"}},g={args:{onChange:()=>{},id:"textarea13",value:"Textarea with resizing",width:"450px",resize:"vertical"}},x={args:{onChange:()=>{},id:"textarea14",value:"Textarea with key",elementKey:"textareaKeyHere"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea1"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea2",
    value: "Textarea with value"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea3",
    defaultValue: "Textarea with default value"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea4",
    value: "Textarea with label and value",
    label: "Textarea with label and value"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea5",
    required: true,
    label: "Required textarea",
    value: "Textarea with required value"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea6",
    value: "Textarea with link in label",
    label: ["Textarea with ", <a key="link" href="#textarea6">
        link
      </a>, " in label"]
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea7",
    value: "Textarea with label, value, errors and error message",
    label: "Textarea with label, value, errors and error message",
    hasErrors: true,
    errorMessage: "Wrong value"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea8",
    readOnly: true,
    value: "Read only",
    label: "Read only"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea9",
    disabled: true,
    value: "Disabled",
    label: "Disabled"
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea12",
    value: "Textarea with custom width",
    width: "320px"
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea13",
    value: "Textarea with resizing",
    width: "450px",
    resize: "vertical"
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: "textarea14",
    value: "Textarea with key",
    elementKey: "textareaKeyHere"
  }
}`,...x.parameters?.docs?.source}}};const Z=["Default","WithValue","WithDefaultValue","WithLabel","Required","WithLinkInLabel","WithError","ReadOnly","Disabled","WithCustomWidth","WithCustomWidthAndVerticalResizing","WithCustomElementKey"];export{l as Default,p as Disabled,m as ReadOnly,d as Required,x as WithCustomElementKey,h as WithCustomWidth,g as WithCustomWidthAndVerticalResizing,i as WithDefaultValue,c as WithError,o as WithLabel,u as WithLinkInLabel,s as WithValue,Z as __namedExportsOrder,Y as default};
