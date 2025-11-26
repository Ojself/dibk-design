import{j as a}from"./iframe-BWm-Rgin.js";import{a as H}from"./asterisk-1FdKgIIn.js";import{E as P}from"./ErrorMessage-CUBWA2ol.js";import{L as B}from"./Label-DX2rxQXz.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const F=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=n.length;for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*y));return t},$="_textarea_1596u_1",G="_requiredSymbol_1596u_4",J="_hasErrors_1596u_55",w={textarea:$,requiredSymbol:G,hasErrors:J},q=({id:e,onChange:t,onBlur:n,name:y="",required:r=!1,readOnly:_,disabled:k,width:V,resize:W="both",value:b,defaultValue:C,elementKey:D,rows:E,label:L="",contentOnly:j=!1,placeholder:M="",defaultContent:z="","aria-describedby":K,hasErrors:T=!1,errorMessage:R=""})=>{const O=()=>`${e}-errorMessage`,S=!b?.length&&C?.length?C:void 0,A=D||`${e}-${F(6)}`,N={...V&&{maxWidth:V},...W&&{resize:W}},I={name:y,readOnly:_,disabled:k,required:r,id:e,onChange:t,onBlur:n,value:S?void 0:b,defaultValue:S||void 0,placeholder:M,rows:E?parseInt(E,10):void 0,className:T?w.hasErrors:"","aria-describedby":T&&R?O():K,"aria-invalid":T?"true":void 0,style:N};return a.jsxs("div",{className:w.textarea,children:[a.jsxs(B,{htmlFor:e,children:[L,r&&a.jsx("img",{src:H,alt:"",className:w.requiredSymbol})]}),j?a.jsx("span",{children:b||C||z}):a.jsx("textarea",{...I},A),a.jsx(P,{id:O(),content:R})]})};try{q.displayName="Textarea",q.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLTextAreaElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},resize:{defaultValue:{value:"both"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const ae={title:"Example/Textarea",component:q,tags:["autodocs"]},l={args:{onChange:e=>console.log(e.target.value),id:"textarea1"}},o={args:{onChange:e=>console.log(e.target.value),id:"textarea2",value:"Textarea with value"}},s={args:{onChange:e=>console.log(e.target.value),id:"textarea3",defaultValue:"Textarea with default value"}},i={args:{onChange:e=>console.log(e.target.value),id:"textarea4",value:"Textarea with label and value",label:"Textarea with label and value"}},u={args:{onChange:e=>console.log(e.target.value),id:"textarea5",required:!0,label:"Required textarea",value:"Textarea with required value"}},d={args:{onChange:e=>console.log(e.target.value),id:"textarea6",value:"Textarea with link in label",label:["Textarea with ",a.jsx("a",{href:"#textarea6",children:"link"},"link")," in label"]}},c={args:{onChange:e=>console.log(e.target.value),id:"textarea7",value:"Textarea with label, value, errors and error message",label:"Textarea with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"}},g={args:{onChange:e=>console.log(e.target.value),id:"textarea8",readOnly:!0,value:"Read only",label:"Read only"}},m={args:{onChange:e=>console.log(e.target.value),id:"textarea9",disabled:!0,value:"Disabled",label:"Disabled"}},p={args:{onChange:e=>console.log(e.target.value),id:"textarea10",value:"Value for Textarea",label:"Textarea with contentOnly",contentOnly:!0}},h={args:{onChange:e=>console.log(e.target.value),id:"textarea11",label:"Textarea with defaultContent",contentOnly:!0,defaultContent:"Please insert a value"}},v={args:{onChange:e=>console.log(e.target.value),id:"textarea12",value:"Textarea with custom width",width:"320px"}},x={args:{onChange:e=>console.log(e.target.value),id:"textarea13",value:"Textarea with resizing",width:"450px",resize:"vertical"}},f={args:{onChange:e=>console.log(e.target.value),id:"textarea14",value:"Textarea with key",elementKey:"textareaKeyHere"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea1'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea2',
    value: 'Textarea with value'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea3',
    defaultValue: 'Textarea with default value'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea4',
    value: 'Textarea with label and value',
    label: 'Textarea with label and value'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea5',
    required: true,
    label: 'Required textarea',
    value: 'Textarea with required value'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea6',
    value: 'Textarea with link in label',
    label: ['Textarea with ', <a key="link" href="#textarea6">
        link
      </a>, ' in label']
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea7',
    value: 'Textarea with label, value, errors and error message',
    label: 'Textarea with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea8',
    readOnly: true,
    value: 'Read only',
    label: 'Read only'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea9',
    disabled: true,
    value: 'Disabled',
    label: 'Disabled'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea10',
    value: 'Value for Textarea',
    label: 'Textarea with contentOnly',
    contentOnly: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea11',
    label: 'Textarea with defaultContent',
    contentOnly: true,
    defaultContent: 'Please insert a value'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea12',
    value: 'Textarea with custom width',
    width: '320px'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea13',
    value: 'Textarea with resizing',
    width: '450px',
    resize: 'vertical'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea14',
    value: 'Textarea with key',
    elementKey: 'textareaKeyHere'
  }
}`,...f.parameters?.docs?.source}}};const re=["Default","WithValue","WithDefaultValue","WithLabel","Required","WithLinkInLabel","WithError","ReadOnly","Disabled","ContentOnly","ContentOnlyAndDefaultContent","WithCustomWidth","WithCustomWidthAndVerticalResizing","WithCustomElementKey"];export{p as ContentOnly,h as ContentOnlyAndDefaultContent,l as Default,m as Disabled,g as ReadOnly,u as Required,f as WithCustomElementKey,v as WithCustomWidth,x as WithCustomWidthAndVerticalResizing,s as WithDefaultValue,c as WithError,i as WithLabel,d as WithLinkInLabel,o as WithValue,re as __namedExportsOrder,ae as default};
