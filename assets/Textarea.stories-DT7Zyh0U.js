import{j as a}from"./iframe-D-wun3FS.js";import{a as N}from"./asterisk-1FdKgIIn.js";import{E as O}from"./ErrorMessage-DTOH58zA.js";import{L as A}from"./Label-BidrN6wp.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const I=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=n.length;for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*v));return t},H="_textarea_1596u_1",B="_requiredSymbol_1596u_4",F="_hasErrors_1596u_55",f={textarea:H,requiredSymbol:B,hasErrors:F},y=({id:e,onChange:t,onBlur:n,name:v="",required:r=!1,readOnly:_,disabled:S,width:w,resize:C="both",value:T,defaultValue:q,elementKey:k,rows:V,label:L="",placeholder:D="","aria-describedby":M,hasErrors:b=!1,errorMessage:W=""})=>{const E=()=>`${e}-errorMessage`,R=!T?.length&&q?.length?q:void 0,j=k||`${e}-${I(6)}`,z={...w&&{maxWidth:w},...C&&{resize:C}},K={name:v,readOnly:_,disabled:S,required:r,id:e,onChange:t,onBlur:n,value:R?void 0:T,defaultValue:R||void 0,placeholder:D,rows:V?parseInt(V,10):void 0,className:b?f.hasErrors:"","aria-describedby":b&&W?E():M,"aria-invalid":b?"true":void 0,style:z};return a.jsxs("div",{className:f.textarea,children:[a.jsxs(A,{htmlFor:e,children:[L,r&&a.jsx("img",{src:N,alt:"",className:f.requiredSymbol})]}),a.jsx("textarea",{...K},j),a.jsx(O,{id:E(),content:W})]})};try{y.displayName="Textarea",y.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLTextAreaElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},resize:{defaultValue:{value:"both"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'},{value:'"none"'},{value:'"both"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const X={title:"Example/Textarea",component:y,tags:["autodocs"]},s={args:{onChange:()=>{},id:"textarea1"}},l={args:{onChange:()=>{},id:"textarea2",value:"Textarea with value"}},o={args:{onChange:()=>{},id:"textarea3",defaultValue:"Textarea with default value"}},i={args:{onChange:()=>{},id:"textarea4",value:"Textarea with label and value",label:"Textarea with label and value"}},d={args:{onChange:()=>{},id:"textarea5",required:!0,label:"Required textarea",value:"Textarea with required value"}},u={args:{onChange:()=>{},id:"textarea6",value:"Textarea with link in label",label:["Textarea with ",a.jsx("a",{href:"#textarea6",children:"link"},"link")," in label"]}},c={args:{onChange:()=>{},id:"textarea7",value:"Textarea with label, value, errors and error message",label:"Textarea with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"}},m={args:{onChange:()=>{},id:"textarea8",readOnly:!0,value:"Read only",label:"Read only"}},p={args:{onChange:()=>{},id:"textarea9",disabled:!0,value:"Disabled",label:"Disabled"}},h={args:{onChange:()=>{},id:"textarea12",value:"Textarea with custom width",width:"320px"}},g={args:{onChange:()=>{},id:"textarea13",value:"Textarea with resizing",width:"450px",resize:"vertical"}},x={args:{onChange:()=>{},id:"textarea14",value:"Textarea with key",elementKey:"textareaKeyHere"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea1'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea2',
    value: 'Textarea with value'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea3',
    defaultValue: 'Textarea with default value'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea4',
    value: 'Textarea with label and value',
    label: 'Textarea with label and value'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea5',
    required: true,
    label: 'Required textarea',
    value: 'Textarea with required value'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea6',
    value: 'Textarea with link in label',
    label: ['Textarea with ', <a key="link" href="#textarea6">
        link
      </a>, ' in label']
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea7',
    value: 'Textarea with label, value, errors and error message',
    label: 'Textarea with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea8',
    readOnly: true,
    value: 'Read only',
    label: 'Read only'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea9',
    disabled: true,
    value: 'Disabled',
    label: 'Disabled'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea12',
    value: 'Textarea with custom width',
    width: '320px'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea13',
    value: 'Textarea with resizing',
    width: '450px',
    resize: 'vertical'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    id: 'textarea14',
    value: 'Textarea with key',
    elementKey: 'textareaKeyHere'
  }
}`,...x.parameters?.docs?.source}}};const Y=["Default","WithValue","WithDefaultValue","WithLabel","Required","WithLinkInLabel","WithError","ReadOnly","Disabled","WithCustomWidth","WithCustomWidthAndVerticalResizing","WithCustomElementKey"];export{s as Default,p as Disabled,m as ReadOnly,d as Required,x as WithCustomElementKey,h as WithCustomWidth,g as WithCustomWidthAndVerticalResizing,o as WithDefaultValue,c as WithError,i as WithLabel,u as WithLinkInLabel,l as WithValue,Y as __namedExportsOrder,X as default};
