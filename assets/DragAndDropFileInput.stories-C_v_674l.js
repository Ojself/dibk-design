import{r as a,j as r,F as O}from"./iframe-Bgu-WHGL.js";import{B as G}from"./Button-Cg56Y0H1.js";import{E as T}from"./ErrorMessage-B-43ywPq.js";import{L as $}from"./Label-C_4yP7OU.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const w="_dragAndDropFileInput_1x1u3_5",H="_requiredSymbol_1x1u3_5",J="_dragAndDropContainer_1x1u3_12",z="_highlighted_1x1u3_30",K="_hasErrors_1x1u3_34",l={dragAndDropFileInput:w,requiredSymbol:H,dragAndDropContainer:J,highlighted:z,hasErrors:K},m=({id:s,name:W,onSelectChange:_,onDragAndDropChange:h,label:V="",subLabel:I="",buttonContent:f,buttonContentWhenSelectedFile:A,selectedFileName:d,hasErrors:b=!1,errorMessage:E="",required:F=!1,requirementIndicatorMode:j,optionalLabel:M,"data-transaction-name":k})=>{const[B,v]=a.useState(!1),q=a.useRef(null),y=a.useRef(null),S=e=>{e.preventDefault(),e.stopPropagation()},P=()=>{y.current?.click()},C=()=>`${s}-errorMessage`,R={id:s,"aria-describedby":b&&E?.toString().length?C():void 0,"aria-invalid":b?"true":void 0,"aria-required":F?"true":void 0,name:W},N=d&&A||f,D=a.useCallback(()=>v(!0),[]),x=a.useCallback(()=>v(!1),[]),L=a.useCallback(e=>{S(e),e.dataTransfer?.files&&h(e.dataTransfer.files),v(!1)},[h]);return a.useEffect(()=>{const e=q.current;if(e)return["dragenter","dragover"].forEach(n=>{e.addEventListener(n,D)}),["dragleave","drop"].forEach(n=>{e.addEventListener(n,x)}),["dragenter","dragover","dragleave","drop"].forEach(n=>{e.addEventListener(n,S)}),e.addEventListener("drop",L),()=>{["dragenter","dragover","dragleave","drop"].forEach(n=>{e.removeEventListener(n,S),e.removeEventListener(n,D),e.removeEventListener(n,x)}),e.removeEventListener("drop",L)}},[h]),r.jsxs("div",{className:l.dragAndDropFileInput,children:[r.jsxs($,{htmlFor:s,subLabel:I,children:[V,r.jsx(O,{required:F,mode:j,optionalLabel:M,requiredClassName:l.requiredSymbol})]}),r.jsxs("div",{ref:q,className:`${l.dragAndDropContainer} ${B?l.highlighted:""} ${b?l.hasErrors:""}`,children:[d?r.jsx("div",{children:r.jsxs("span",{children:[r.jsx("b",{children:"Valgt fil:"})," ",d]})}):r.jsx("div",{children:"Slipp fil her"}),r.jsx("input",{...R,ref:y,type:"file",onChange:_}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{children:d?"":"eller klikk på knappen for å velge fil"}),r.jsx(G,{size:"small",inputType:"button",color:"secondary",onClick:P,content:N,"data-transaction-name":k})]})]}),r.jsx(T,{id:C(),content:E})]})};try{m.displayName="DragAndDropFileInput",m.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},subLabel:{defaultValue:{value:""},description:"",name:"subLabel",required:!1,type:{name:"string | (string | Element)[]"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"required"'},{value:'"optional"'},{value:'"none"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Primitives/DragAndDropFileInput",component:m,tags:["autodocs"],render:s=>r.jsx(m,{...s})},t={args:{id:"dragAndDropInput-1",label:"Input uten valgt fil",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},o={args:{...t.args,selectedFileName:"important-file.xml"}},u={args:{...t.args,required:!0}},i={args:{...o.args,buttonContentWhenSelectedFile:"Velg annen fil"}},c={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},p={args:{...t.args,subLabel:"Støtter PDF, PNG og JPG. Maks 15MB."}},g={args:{...t.args,subLabel:""}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: "dragAndDropInput-1",
    label: "Input uten valgt fil",
    buttonContent: "Velg fil",
    onSelectChange: () => console.log("Select change"),
    onDragAndDropChange: () => console.log("Drag and drop change")
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: "important-file.xml"
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    required: true
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: "Velg annen fil"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: "wrong-file.xml",
    hasErrors: true,
    errorMessage: "Filen må være midre enn 15MB"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: "Støtter PDF, PNG og JPG. Maks 15MB."
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: ""
  }
}`,...g.parameters?.docs?.source}}};const ne=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","WithSubLabel","WithLabelOnly"];export{u as Required,i as WithCustomButtonContentWhenSelectedFile,c as WithError,g as WithLabelOnly,o as WithSelectedFile,p as WithSubLabel,t as WithoutSelectedFile,ne as __namedExportsOrder,re as default};
