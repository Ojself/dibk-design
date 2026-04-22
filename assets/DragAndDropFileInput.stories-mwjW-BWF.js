import{r as t,j as r,F as O}from"./iframe-B48H92AK.js";import{B as G}from"./Button-CHQK6pps.js";import{E as T}from"./ErrorMessage-BSByBaYM.js";import{L as $}from"./Label-BS0l2LCW.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DFDMEtTH.js";const w="_dragAndDropFileInput_1x1u3_5",H="_requiredSymbol_1x1u3_5",J="_dragAndDropContainer_1x1u3_12",z="_highlighted_1x1u3_30",K="_hasErrors_1x1u3_34",l={dragAndDropFileInput:w,requiredSymbol:H,dragAndDropContainer:J,highlighted:z,hasErrors:K},h=({id:s,name:W,onSelectChange:_,onDragAndDropChange:C,label:V="",subLabel:I="",buttonContent:f,buttonContentWhenSelectedFile:A,selectedFileName:d,hasErrors:b=!1,errorMessage:D="",required:q=!1,requirementIndicatorMode:j,optionalLabel:M,"data-transaction-name":k})=>{const[B,v]=t.useState(!1),y=t.useRef(null),x=t.useRef(null),u=t.useCallback(e=>{e.preventDefault(),e.stopPropagation()},[]),P=()=>{x.current?.click()},L=()=>`${s}-errorMessage`,R={id:s,"aria-describedby":b&&D?.toString().length?L():void 0,"aria-invalid":b?"true":void 0,"aria-required":q?"true":void 0,name:W},N=d&&A||f,S=t.useCallback(()=>v(!0),[]),E=t.useCallback(()=>v(!1),[]),F=t.useCallback(e=>{u(e),e.dataTransfer?.files&&C(e.dataTransfer.files),v(!1)},[C]);return t.useEffect(()=>{const e=y.current;if(e)return["dragenter","dragover"].forEach(n=>{e.addEventListener(n,S)}),["dragleave","drop"].forEach(n=>{e.addEventListener(n,E)}),["dragenter","dragover","dragleave","drop"].forEach(n=>{e.addEventListener(n,u)}),e.addEventListener("drop",F),()=>{["dragenter","dragover","dragleave","drop"].forEach(n=>{e.removeEventListener(n,u),e.removeEventListener(n,S),e.removeEventListener(n,E)}),e.removeEventListener("drop",F)}},[F,S,E,u]),r.jsxs("div",{className:l.dragAndDropFileInput,children:[r.jsxs($,{htmlFor:s,subLabel:I,children:[V,r.jsx(O,{required:q,mode:j,optionalLabel:M,requiredClassName:l.requiredSymbol})]}),r.jsxs("div",{ref:y,className:`${l.dragAndDropContainer} ${B?l.highlighted:""} ${b?l.hasErrors:""}`,children:[d?r.jsx("div",{children:r.jsxs("span",{children:[r.jsx("b",{children:"Valgt fil:"})," ",d]})}):r.jsx("div",{children:"Slipp fil her"}),r.jsx("input",{...R,ref:x,type:"file",onChange:_}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{children:d?"":"eller klikk på knappen for å velge fil"}),r.jsx(G,{size:"small",inputType:"button",color:"secondary",onClick:P,content:N,"data-transaction-name":k})]})]}),r.jsx(T,{id:L(),content:D})]})};try{h.displayName="DragAndDropFileInput",h.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},subLabel:{defaultValue:{value:""},description:"",name:"subLabel",required:!1,type:{name:"string | (string | Element)[]"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"required"'},{value:'"none"'},{value:'"optional"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Primitives/DragAndDropFileInput",component:h,tags:["autodocs"],render:s=>r.jsx(h,{...s})},a={args:{id:"dragAndDropInput-1",label:"Input uten valgt fil",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},o={args:{...a.args,selectedFileName:"important-file.xml"}},c={args:{...a.args,required:!0}},i={args:{...o.args,buttonContentWhenSelectedFile:"Velg annen fil"}},p={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},g={args:{...a.args,subLabel:"Støtter PDF, PNG og JPG. Maks 15MB."}},m={args:{...a.args,subLabel:""}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "dragAndDropInput-1",
    label: "Input uten valgt fil",
    buttonContent: "Velg fil",
    onSelectChange: () => console.log("Select change"),
    onDragAndDropChange: () => console.log("Drag and drop change")
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: "wrong-file.xml",
    hasErrors: true,
    errorMessage: "Filen må være midre enn 15MB"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: "Støtter PDF, PNG og JPG. Maks 15MB."
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    subLabel: ""
  }
}`,...m.parameters?.docs?.source}}};const ne=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","WithSubLabel","WithLabelOnly"];export{c as Required,i as WithCustomButtonContentWhenSelectedFile,p as WithError,m as WithLabelOnly,o as WithSelectedFile,g as WithSubLabel,a as WithoutSelectedFile,ne as __namedExportsOrder,re as default};
