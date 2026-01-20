import{r as a,j as r}from"./iframe-DlHmRUDc.js";import{a as N}from"./asterisk-1FdKgIIn.js";import{B as R}from"./Button-DNFH9BJt.js";import{E as O}from"./ErrorMessage-BCZ_hsZw.js";import{L as G}from"./Label-D-kwSQvn.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const T="_dragAndDropFileInput_1hivh_1",$="_requiredSymbol_1hivh_1",w="_dragAndDropContainer_1hivh_8",H="_highlighted_1hivh_26",J="_hasErrors_1hivh_30",l={dragAndDropFileInput:T,requiredSymbol:$,dragAndDropContainer:w,highlighted:H,hasErrors:J},m=({id:s,name:L,onSelectChange:q,onDragAndDropChange:h,label:V="",subLabel:A="",buttonContent:f,buttonContentWhenSelectedFile:j,selectedFileName:d,hasErrors:v=!1,errorMessage:E="",required:F=!1,"data-transaction-name":I})=>{const[k,b]=a.useState(!1),C=a.useRef(null),D=a.useRef(null),S=e=>{e.preventDefault(),e.stopPropagation()},M=()=>{D.current?.click()},y=()=>`${s}-errorMessage`,B={id:s,"aria-describedby":v&&E?.toString().length?y():void 0,"aria-invalid":v?"true":void 0,name:L,required:F},P=d&&j||f,W=a.useCallback(()=>b(!0),[]),_=a.useCallback(()=>b(!1),[]),x=a.useCallback(e=>{S(e),e.dataTransfer?.files&&h(e.dataTransfer.files),b(!1)},[h]);return a.useEffect(()=>{const e=C.current;if(e)return["dragenter","dragover"].forEach(t=>{e.addEventListener(t,W)}),["dragleave","drop"].forEach(t=>{e.addEventListener(t,_)}),["dragenter","dragover","dragleave","drop"].forEach(t=>{e.addEventListener(t,S)}),e.addEventListener("drop",x),()=>{["dragenter","dragover","dragleave","drop"].forEach(t=>{e.removeEventListener(t,S),e.removeEventListener(t,W),e.removeEventListener(t,_)}),e.removeEventListener("drop",x)}},[h]),r.jsxs("div",{className:l.dragAndDropFileInput,children:[r.jsxs(G,{htmlFor:s,subLabel:A,children:[V,F&&r.jsx("img",{src:N,alt:"",className:l.requiredSymbol})]}),r.jsxs("div",{ref:C,className:`${l.dragAndDropContainer} ${k?l.highlighted:""} ${v?l.hasErrors:""}`,children:[d?r.jsx("div",{children:r.jsxs("span",{children:[r.jsx("b",{children:"Valgt fil:"})," ",d]})}):r.jsx("div",{children:"Slipp fil her"}),r.jsx("input",{...B,ref:D,type:"file",onChange:q}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{children:d?"":"eller klikk på knappen for å velge fil"}),r.jsx(R,{size:"small",inputType:"button",color:"secondary",onClick:M,content:P,"data-transaction-name":I})]})]}),r.jsx(O,{id:y(),content:E})]})};try{m.displayName="DragAndDropFileInput",m.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},subLabel:{defaultValue:{value:""},description:"",name:"subLabel",required:!1,type:{name:"string | (string | Element)[]"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Primitives/DragAndDropFileInput",component:m,tags:["autodocs"],render:s=>r.jsx(m,{...s})},n={args:{id:"dragAndDropInput-1",label:"Input uten valgt fil",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},o={args:{...n.args,selectedFileName:"important-file.xml"}},c={args:{...n.args,required:!0}},i={args:{...o.args,buttonContentWhenSelectedFile:"Velg annen fil"}},u={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},g={args:{...n.args,subLabel:"Støtter PDF, PNG og JPG. Maks 15MB."}},p={args:{...n.args,subLabel:""}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "dragAndDropInput-1",
    label: "Input uten valgt fil",
    buttonContent: "Velg fil",
    onSelectChange: () => console.log("Select change"),
    onDragAndDropChange: () => console.log("Drag and drop change")
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: "important-file.xml"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    required: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: "Velg annen fil"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: "wrong-file.xml",
    hasErrors: true,
    errorMessage: "Filen må være midre enn 15MB"
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: "Støtter PDF, PNG og JPG. Maks 15MB."
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: ""
  }
}`,...p.parameters?.docs?.source}}};const re=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","WithSubLabel","WithLabelOnly"];export{c as Required,i as WithCustomButtonContentWhenSelectedFile,u as WithError,p as WithLabelOnly,o as WithSelectedFile,g as WithSubLabel,n as WithoutSelectedFile,re as __namedExportsOrder,ee as default};
