import{j as a,c as re}from"./iframe-C-jjyl2S.js";import{B as le}from"./Button-DweBpD6F.js";import{L as oe}from"./Label-B1gKBC7u.js";import{E as ue}from"./ErrorMessage-CSng-FAn.js";import{a as se}from"./asterisk-1FdKgIIn.js";import"./preload-helper-PPVm8Dsz.js";const ie="_inputField_17rmz_1",de="_noMargin_17rmz_4",pe="_requiredSymbol_17rmz_10",ce="_file_17rmz_17",ge="_input_17rmz_1",me="_hasErrors_17rmz_50",fe="_fileInputContainer_17rmz_62",t={inputField:ie,noMargin:de,requiredSymbol:pe,file:ce,input:ge,hasErrors:me,fileInputContainer:fe},_=({id:e,onChange:R,onBlur:j,name:k="",type:o="text",disabled:A=!1,required:E=!1,readOnly:K,width:O,value:D,defaultValue:w,elementKey:z,label:B="",contentOnly:T=!1,buttonColor:H="primary",buttonContent:N,selectedFileName:$,placeholder:P="",defaultContent:Y="",min:G,max:J,role:Q,"aria-describedby":U,"aria-autocomplete":X,hasErrors:x=!1,errorMessage:L="",noMargin:Z=!1})=>{const ee=r=>{const l=new Date(r);return`${String(l.getDate()).padStart(2,"0")}.${String(l.getMonth()+1).padStart(2,"0")}.${l.getFullYear()}`},ne=(r,l)=>o==="date"?r?ee(r):l:r||l,M=()=>`${e}-errorMessage`,ae=O?{maxWidth:O}:{},te={name:k,readOnly:K,disabled:A,required:E,type:o,role:Q,id:e,min:G,max:J,onChange:R,onBlur:j,...D!==void 0?{value:D}:w!==void 0?{defaultValue:w}:{},placeholder:P,className:x?t.hasErrors:void 0,"aria-describedby":x&&L?M():U,"aria-invalid":x?"true":void 0,"aria-autocomplete":X||void 0,style:ae};return a.jsxs("div",{className:re([t.inputField,t[o],Z&&t.noMargin]),children:[a.jsxs(oe,{htmlFor:e,children:[B,E&&a.jsx("img",{src:se,alt:"",className:t.requiredSymbol}),o==="file"&&a.jsxs("div",{className:t.fileInputContainer,children:[a.jsx("span",{className:t.input,children:$}),N&&a.jsx(le,{color:H,inputType:"button",onClick:()=>{document?.getElementById(e)?.click()},content:N})]})]}),T?a.jsx("span",{children:ne(D??w,Y)}):a.jsx("input",{...te},z||e),a.jsx(ue,{id:M(),content:L})]})};try{_.displayName="InputField",_.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}const Ie={title:"Example/InputField",component:_,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},n=e=>a.jsx(_,{...e}),u={args:{onChange:e=>console.log(e.target.value),id:"inputField1"},render:n},s={args:{onChange:e=>console.log(e.target.value),id:"inputField2",required:!0},render:n},i={args:{onChange:e=>console.log(e.target.value),id:"inputField3",value:"Input field value"},render:n},d={args:{onChange:e=>console.log(e.target.value),id:"inputField4",value:"Input field default value"},render:n},p={args:{onChange:e=>console.log(e.target.value),id:"inputField5",value:"Input field value",label:"Input field label"},render:n},c={args:{onChange:e=>console.log(e.target.value),id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:n},g={args:{onChange:e=>console.log(e.target.value),id:"inputField7",value:"Input field value",label:["Input with ",a.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:n},m={args:{onChange:e=>console.log(e.target.value),id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"},render:n},f={args:{onChange:e=>console.log(e.target.value),id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:n},v={args:{onChange:e=>console.log(e.target.value),id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:n},h={args:{onChange:e=>console.log(e.target.value),id:"inputField11",value:"3",label:"Input with number values",type:"number"},render:n},y={args:{onChange:e=>console.log(e.target.value),id:"inputField12",value:"Input field value",label:"Input with contentOnly set to true",contentOnly:!0},render:n},b={args:{onChange:e=>console.log(e.target.value),id:"inputField13",label:"Input with contentOnly set to true and default content",contentOnly:!0,defaultContent:"Default content"},render:n},C={args:{onChange:e=>console.log(e.target.value),id:"inputField14",label:"File input",type:"file"},render:n},F={args:{onChange:e=>console.log(e.target.value),id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt"},render:n},I={args:{onChange:e=>console.log(e.target.value),id:"inputField16",label:"Date input without value",type:"date"},render:n},q={args:{onChange:e=>console.log(e.target.value),id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:n},V={args:{onChange:e=>console.log(e.target.value),id:"inputField17",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:n},S={args:{onChange:e=>console.log(e.target.value),id:"inputField19",label:"Input with custom width",width:"400px"},render:n},W={args:{onChange:e=>console.log(e.target.value),id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:n};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField1'
  },
  render
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField2',
    required: true
  },
  render
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField3',
    value: 'Input field value'
  },
  render
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField4',
    value: 'Input field default value'
  },
  render
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField5',
    value: 'Input field value',
    label: 'Input field label'
  },
  render
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField6',
    value: 'Input field value',
    label: 'Input field label',
    required: true
  },
  render
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField7',
    value: 'Input field value',
    label: ['Input with ', <a key="labelLink" href="#label-link">
        link
      </a>, ' in label']
  },
  render
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField8',
    value: 'Input field value',
    label: 'Input with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value'
  },
  render
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField9',
    value: 'Input field value',
    label: 'Readonly input',
    readOnly: true
  },
  render
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField10',
    value: 'Input field value',
    label: 'Disabled input',
    disabled: true
  },
  render
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField11',
    value: '3',
    label: 'Input with number values',
    type: 'number'
  },
  render
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField12',
    value: 'Input field value',
    label: 'Input with contentOnly set to true',
    contentOnly: true
  },
  render
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField13',
    label: 'Input with contentOnly set to true and default content',
    contentOnly: true,
    defaultContent: 'Default content'
  },
  render
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField14',
    label: 'File input',
    type: 'file'
  },
  render
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField15',
    label: 'File input',
    type: 'file',
    buttonContent: 'Legg til fil',
    selectedFileName: 'file.txt'
  },
  render
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField16',
    label: 'Date input without value',
    type: 'date'
  },
  render
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with value',
    value: '2020-05-10',
    type: 'date'
  },
  render
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with error',
    value: '2020-05-10',
    type: 'date',
    hasErrors: true,
    errorMessage: 'Wrong date value'
  },
  render
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField19',
    label: 'Input with custom width',
    width: '400px'
  },
  render
}`,...S.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField20',
    label: 'Input with custom element key',
    elementKey: 'inputKeyHere'
  },
  render
}`,...W.parameters?.docs?.source}}};const qe=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","Number","ContentOnly","ContentOnlyWithDefaultContent","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{y as ContentOnly,b as ContentOnlyWithDefaultContent,I as DateInput,q as DateInputWithValue,V as DateInputWithValueAndError,u as Default,v as Disabled,C as FileInput,F as FileInputWithButtonContentAndSelectedFile,W as InputWithCustomElementKey,S as InputWithCustomWidth,h as Number,f as Readonly,s as Required,c as RequiredWithLabelAndValue,d as WithDefaultValue,m as WithErrors,p as WithLabelAndValue,g as WithLinkInLabel,i as WithValue,qe as __namedExportsOrder,Ie as default};
