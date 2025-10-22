import{r as a,j as e}from"./iframe-DZO4KTEA.js";import{a as w}from"./asterisk-1FdKgIIn.js";import{B as $}from"./Button-DoBnOTr4.js";import{E as H}from"./ErrorMessage-BRGX6810.js";import{L as P}from"./Label-CMhyB94b.js";import"./preload-helper-PPVm8Dsz.js";const G="_dragAndDropFileInput_l98z1_1",J="_requiredSymbol_l98z1_1",K="_dragAndDropContainer_l98z1_8",Q="_highlighted_l98z1_26",d={dragAndDropFileInput:G,requiredSymbol:J,dragAndDropContainer:K,highlighted:Q},m=({id:t,name:j,onSelectChange:V,onDragAndDropChange:h,label:A="",contentOnly:S=!1,buttonColor:I="primary",buttonContent:f,buttonContentWhenSelectedFile:L,selectedFileName:o,defaultContent:k="",hasErrors:v=!1,errorMessage:E="",required:F=!1,children:O,"data-transaction-name":B})=>{const[M,y]=a.useState(!1),b=a.useRef(null),x=a.useRef(null),C=r=>{r.preventDefault(),r.stopPropagation()},R=(r,n)=>r||n,T=()=>{x.current?.click()},D=()=>`${t}-errorMessage`,z={id:t,"aria-describedby":v&&E?.toString().length?D():void 0,"aria-invalid":v?"true":void 0,name:j,required:F},N=o&&L||f,q=a.useCallback(()=>y(!0),[]),W=a.useCallback(()=>y(!1),[]),_=a.useCallback(r=>{C(r),r.dataTransfer?.files&&h(r.dataTransfer.files),y(!1)},[h]);return a.useEffect(()=>{const r=b.current;if(r)return["dragenter","dragover"].forEach(n=>{r.addEventListener(n,q)}),["dragleave","drop"].forEach(n=>{r.addEventListener(n,W)}),["dragenter","dragover","dragleave","drop"].forEach(n=>{r.addEventListener(n,C)}),r.addEventListener("drop",_),()=>{["dragenter","dragover","dragleave","drop"].forEach(n=>{r.removeEventListener(n,C),r.removeEventListener(n,q),r.removeEventListener(n,W)}),r.removeEventListener("drop",_)}},[h]),e.jsxs("div",{className:d.dragAndDropFileInput,children:[e.jsxs(P,{htmlFor:t,children:[A,F&&e.jsx("img",{src:w,alt:"",className:d.requiredSymbol})]}),e.jsx("div",{children:O}),!S&&e.jsxs("div",{ref:b,className:`${d.dragAndDropContainer} ${M?d.highlighted:""}`,children:[o?e.jsx("div",{children:e.jsxs("span",{children:[e.jsx("b",{children:"Valgt fil:"})," ",o]})}):e.jsx("div",{children:"Slipp fil her"}),e.jsx("input",{...z,ref:x,type:"file",onChange:V}),f&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:o?"":"eller klikk på knappen for å velge fil"}),e.jsx($,{size:"small",inputType:"button",color:I,onClick:T,content:N,hasErrors:v,"data-transaction-name":B})]})]}),S&&e.jsx("span",{children:R(o,k)}),e.jsx(H,{id:D(),content:E})]})};try{m.displayName="DragAndDropFileInput",m.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Example/DragAndDropFileInput",component:m,argTypes:{buttonColor:{control:"radio",options:["primary","secondary"]}},tags:["autodocs"],render:t=>e.jsx(m,{...t,children:t.children})},s={args:{id:"dragAndDropInput-1",label:"Input without selected file",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},l={args:{...s.args,selectedFileName:"important-file.xml"}},c={args:{...s.args,required:!0}},i={args:{...l.args,buttonContentWhenSelectedFile:"Velg annen fil"}},u={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},p={args:{...l.args,contentOnly:!0}},g={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"First paragraph"}),e.jsx("p",{children:"second paragraph"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'dragAndDropInput-1',
    label: 'Input without selected file',
    buttonContent: 'Velg fil',
    onSelectChange: () => console.log('Select change'),
    onDragAndDropChange: () => console.log('Drag and drop change')
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: 'important-file.xml'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    required: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: 'Velg annen fil'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: 'wrong-file.xml',
    hasErrors: true,
    errorMessage: 'Filen må være midre enn 15MB'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    contentOnly: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    children: <>
        <p>First paragraph</p>
        <p>second paragraph</p>
      </>
  }
}`,...g.parameters?.docs?.source}}};const te=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","ContentOnly","WithChildElements"];export{p as ContentOnly,c as Required,g as WithChildElements,i as WithCustomButtonContentWhenSelectedFile,u as WithError,l as WithSelectedFile,s as WithoutSelectedFile,te as __namedExportsOrder,ne as default};
