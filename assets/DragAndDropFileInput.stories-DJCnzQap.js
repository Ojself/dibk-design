import{r as a,j as r}from"./iframe-BC02K8Tv.js";import{a as N}from"./asterisk-icon-Dj6UDs0Y.js";import{B as R}from"./Button-BjOBkh8L.js";import{E as O}from"./ErrorMessage-DCDU4rL9.js";import{L as G}from"./Label-CcrQI-mr.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const T="_dragAndDropFileInput_1x1u3_5",$="_requiredSymbol_1x1u3_5",w="_dragAndDropContainer_1x1u3_12",H="_highlighted_1x1u3_30",J="_hasErrors_1x1u3_34",o={dragAndDropFileInput:T,requiredSymbol:$,dragAndDropContainer:w,highlighted:H,hasErrors:J},m=({id:s,name:L,onSelectChange:q,onDragAndDropChange:h,label:V="",subLabel:A="",buttonContent:f,buttonContentWhenSelectedFile:I,selectedFileName:d,hasErrors:b=!1,errorMessage:E="",required:F=!1,"data-transaction-name":j})=>{const[k,v]=a.useState(!1),C=a.useRef(null),D=a.useRef(null),S=e=>{e.preventDefault(),e.stopPropagation()},M=()=>{D.current?.click()},x=()=>`${s}-errorMessage`,B={id:s,"aria-describedby":b&&E?.toString().length?x():void 0,"aria-invalid":b?"true":void 0,name:L,required:F},P=d&&I||f,y=a.useCallback(()=>v(!0),[]),W=a.useCallback(()=>v(!1),[]),_=a.useCallback(e=>{S(e),e.dataTransfer?.files&&h(e.dataTransfer.files),v(!1)},[h]);return a.useEffect(()=>{const e=C.current;if(e)return["dragenter","dragover"].forEach(t=>{e.addEventListener(t,y)}),["dragleave","drop"].forEach(t=>{e.addEventListener(t,W)}),["dragenter","dragover","dragleave","drop"].forEach(t=>{e.addEventListener(t,S)}),e.addEventListener("drop",_),()=>{["dragenter","dragover","dragleave","drop"].forEach(t=>{e.removeEventListener(t,S),e.removeEventListener(t,y),e.removeEventListener(t,W)}),e.removeEventListener("drop",_)}},[h]),r.jsxs("div",{className:o.dragAndDropFileInput,children:[r.jsxs(G,{htmlFor:s,subLabel:A,children:[V,F&&r.jsx("img",{src:N,alt:"",className:o.requiredSymbol})]}),r.jsxs("div",{ref:C,className:`${o.dragAndDropContainer} ${k?o.highlighted:""} ${b?o.hasErrors:""}`,children:[d?r.jsx("div",{children:r.jsxs("span",{children:[r.jsx("b",{children:"Valgt fil:"})," ",d]})}):r.jsx("div",{children:"Slipp fil her"}),r.jsx("input",{...B,ref:D,type:"file",onChange:q}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{children:d?"":"eller klikk på knappen for å velge fil"}),r.jsx(R,{size:"small",inputType:"button",color:"secondary",onClick:M,content:P,"data-transaction-name":j})]})]}),r.jsx(O,{id:x(),content:E})]})};try{m.displayName="DragAndDropFileInput",m.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},subLabel:{defaultValue:{value:""},description:"",name:"subLabel",required:!1,type:{name:"string | (string | Element)[]"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Primitives/DragAndDropFileInput",component:m,tags:["autodocs"],render:s=>r.jsx(m,{...s})},n={args:{id:"dragAndDropInput-1",label:"Input uten valgt fil",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},l={args:{...n.args,selectedFileName:"important-file.xml"}},c={args:{...n.args,required:!0}},i={args:{...l.args,buttonContentWhenSelectedFile:"Velg annen fil"}},u={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},g={args:{...n.args,subLabel:"Støtter PDF, PNG og JPG. Maks 15MB."}},p={args:{...n.args,subLabel:""}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "dragAndDropInput-1",
    label: "Input uten valgt fil",
    buttonContent: "Velg fil",
    onSelectChange: () => console.log("Select change"),
    onDragAndDropChange: () => console.log("Drag and drop change")
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: "important-file.xml"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const re=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","WithSubLabel","WithLabelOnly"];export{c as Required,i as WithCustomButtonContentWhenSelectedFile,u as WithError,p as WithLabelOnly,l as WithSelectedFile,g as WithSubLabel,n as WithoutSelectedFile,re as __namedExportsOrder,ee as default};
