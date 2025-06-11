import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as de}from"./ThemeProvider-Dl0m7e08.js";import{r as a}from"./iframe-CzTDeAL5.js";import{L as ce}from"./Label-DSEd7ahe.js";import{a as ue}from"./asterisk-1FdKgIIn.js";import{E as pe}from"./ErrorMessage-8ipONYxa.js";import{B as me}from"./Button-BjhvQZSg.js";import"./chunk-DQRVZFIR-OkI4va5j.js";const ge="_dragAndDropFileInput_l98z1_1",he="_requiredSymbol_l98z1_1",fe="_dragAndDropContainer_l98z1_8",ve="_highlighted_l98z1_26",u={dragAndDropFileInput:ge,requiredSymbol:he,dragAndDropContainer:fe,highlighted:ve},f=({id:t,name:v,onSelectChange:y,onDragAndDropChange:o,label:Y="",contentOnly:x=!1,buttonColor:Z="primary",buttonContent:C,buttonContentWhenSelectedFile:ee,selectedFileName:i,defaultContent:re="",hasErrors:S=!1,errorMessage:c="",required:b=!1,children:ne,"data-transaction-name":te})=>{const[ae,E]=a.useState(!1),D=a.useRef(null),q=a.useRef(null),F=r=>{r.preventDefault(),r.stopPropagation()},se=(r,n)=>r||n,le=()=>{var r;(r=q.current)==null||r.click()},j=()=>`${t}-errorMessage`,oe={id:t,"aria-describedby":S&&(c!=null&&c.toString().length)?j():void 0,"aria-invalid":S?"true":void 0,name:v,required:b},ie=i&&ee||C,W=a.useCallback(()=>E(!0),[]),_=a.useCallback(()=>E(!1),[]),V=a.useCallback(r=>{var n;F(r),(n=r.dataTransfer)!=null&&n.files&&o(r.dataTransfer.files),E(!1)},[o]);return a.useEffect(()=>{const r=D.current;if(r)return["dragenter","dragover"].forEach(n=>r.addEventListener(n,W)),["dragleave","drop"].forEach(n=>r.addEventListener(n,_)),["dragenter","dragover","dragleave","drop"].forEach(n=>r.addEventListener(n,F)),r.addEventListener("drop",V),()=>{["dragenter","dragover","dragleave","drop"].forEach(n=>{r.removeEventListener(n,F),r.removeEventListener(n,W),r.removeEventListener(n,_)}),r.removeEventListener("drop",V)}},[o]),e.jsxs("div",{className:u.dragAndDropFileInput,children:[e.jsxs(ce,{htmlFor:t,children:[Y,b&&e.jsx("img",{src:ue,alt:"",className:u.requiredSymbol})]}),e.jsx("div",{children:ne}),!x&&e.jsxs("div",{ref:D,className:`${u.dragAndDropContainer} ${ae?u.highlighted:""}`,children:[i?e.jsx("div",{children:e.jsxs("span",{children:[e.jsx("b",{children:"Valgt fil:"})," ",i]})}):e.jsx("div",{children:"Slipp fil her"}),e.jsx("input",{...oe,ref:q,type:"file",onChange:y}),C&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:i?"":"eller klikk på knappen for å velge fil"}),e.jsx(me,{size:"small",inputType:"button",color:Z,onClick:le,content:ie,hasErrors:S,"data-transaction-name":te})]})]}),x&&e.jsx("span",{children:se(i,re)}),e.jsx(pe,{id:j(),content:c})]})};try{f.displayName="DragAndDropFileInput",f.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const qe={title:"Example/DragAndDropFileInput",component:f,argTypes:{buttonColor:{control:"radio",options:["primary","secondary"]}},tags:["autodocs"],decorators:[(t,v)=>{const{theme:y,...o}=v.args;return e.jsx(de,{theme:y,children:e.jsx(t,{args:o})})}],render:t=>e.jsx(f,{...t,children:t.children})},s={args:{id:"dragAndDropInput-1",label:"Input without selected file",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")}},l={args:{...s.args,selectedFileName:"important-file.xml"}},p={args:{...s.args,required:!0}},d={args:{...l.args,buttonContentWhenSelectedFile:"Velg annen fil"}},m={args:{...d.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"}},g={args:{...l.args,contentOnly:!0}},h={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"First paragraph"}),e.jsx("p",{children:"second paragraph"})]})}};var A,I,L;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'dragAndDropInput-1',
    label: 'Input without selected file',
    buttonContent: 'Velg fil',
    onSelectChange: () => console.log('Select change'),
    onDragAndDropChange: () => console.log('Drag and drop change')
  }
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,O,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: 'important-file.xml'
  }
}`,...(B=(O=l.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var R,T,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    required: true
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var N,w,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: 'Velg annen fil'
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,$,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: 'wrong-file.xml',
    hasErrors: true,
    errorMessage: 'Filen må være midre enn 15MB'
  }
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    contentOnly: true
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    children: <>
        <p>First paragraph</p>
        <p>second paragraph</p>
      </>
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const je=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","ContentOnly","WithChildElements"];export{g as ContentOnly,p as Required,h as WithChildElements,d as WithCustomButtonContentWhenSelectedFile,m as WithError,l as WithSelectedFile,s as WithoutSelectedFile,je as __namedExportsOrder,qe as default};
