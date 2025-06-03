import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as ue}from"./ThemeProvider-BUCGweqt.js";import{r as p}from"./iframe-CY8VSDql.js";import{L as pe}from"./Label-kFZHDafk.js";import{a as ge}from"./asterisk-1FdKgIIn.js";import{E as me}from"./ErrorMessage-DOpafp2d.js";import{B as he}from"./Button-B6yyTQvP.js";import"./chunk-DQRVZFIR-DSGMKMR-.js";const fe="_dragAndDropFileInput_l98z1_1",ve="_requiredSymbol_l98z1_1",ye="_dragAndDropContainer_l98z1_8",Ce="_highlighted_l98z1_26",g={dragAndDropFileInput:fe,requiredSymbol:ve,dragAndDropContainer:ye,highlighted:Ce},y=({id:t,name:C,onSelectChange:S,onDragAndDropChange:d,label:ee="",contentOnly:b=!1,buttonColor:re="primary",buttonContent:E,buttonContentWhenSelectedFile:ne,selectedFileName:l,defaultContent:te="",hasErrors:F=!1,errorMessage:c="",required:q=!1,children:ae,"data-transaction-name":oe})=>{const[se,x]=p.useState(!1),j=p.useRef(null),W=p.useRef(null),D=r=>{r.preventDefault(),r.stopPropagation()},le=(r,u)=>r||u,ie=()=>{var r;(r=W.current)==null||r.click()},_=()=>`${t}-errorMessage`,de={id:t,"aria-describedby":F&&(c!=null&&c.toString().length)?_():void 0,"aria-invalid":F?"true":void 0,name:C,required:q},ce=l&&ne||E;return p.useEffect(()=>{const r=j.current;if(!r)return;const u=n=>{var I;D(n),(I=n.dataTransfer)!=null&&I.files&&d(n.dataTransfer.files),x(!1)},V=()=>x(!0),A=()=>x(!1);return["dragenter","dragover"].forEach(n=>r.addEventListener(n,V)),["dragleave","drop"].forEach(n=>r.addEventListener(n,A)),["dragenter","dragover","dragleave","drop"].forEach(n=>r.addEventListener(n,D)),r.addEventListener("drop",u),()=>{["dragenter","dragover","dragleave","drop"].forEach(n=>{r.removeEventListener(n,D),r.removeEventListener(n,V),r.removeEventListener(n,A)}),r.removeEventListener("drop",u)}},[d]),e.jsxs("div",{className:g.dragAndDropFileInput,children:[e.jsxs(pe,{htmlFor:t,children:[ee,q&&e.jsx("img",{src:ge,alt:"",className:g.requiredSymbol})]}),e.jsx("div",{children:ae}),!b&&e.jsxs("div",{ref:j,className:`${g.dragAndDropContainer} ${se?g.highlighted:""}`,children:[l?e.jsx("div",{children:e.jsxs("span",{children:[e.jsx("b",{children:"Valgt fil:"})," ",l]})}):e.jsx("div",{children:"Slipp fil her"}),e.jsx("input",{...de,ref:W,type:"file",onChange:S}),E&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:l?"":"eller klikk på knappen for å velge fil"}),e.jsx(he,{size:"small",inputType:"button",color:re,onClick:ie,content:ce,hasErrors:F,"data-transaction-name":oe})]})]}),b&&e.jsx("span",{children:le(l,te)}),e.jsx(me,{id:_(),content:c})]})};try{y.displayName="DragAndDropFileInput",y.__docgenInfo={description:"",displayName:"DragAndDropFileInput",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onSelectChange:{defaultValue:null,description:"",name:"onSelectChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onDragAndDropChange:{defaultValue:null,description:"",name:"onDragAndDropChange",required:!0,type:{name:"(files: FileList) => void"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | (string | Element)[]"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},buttonContentWhenSelectedFile:{defaultValue:null,description:"",name:"buttonContentWhenSelectedFile",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string | (string | Element)[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"data-transaction-name":{defaultValue:null,description:"",name:"data-transaction-name",required:!1,type:{name:"string"}}}}}catch{}const We={title:"Example/DragAndDropFileInput",component:y,argTypes:{buttonColor:{control:"radio",options:["primary","secondary"]}},tags:["autodocs"],decorators:[(t,C)=>{const{theme:S,...d}=C.args;return e.jsx(ue,{theme:S,children:e.jsx(t,{args:d})})}]},o=t=>e.jsx(y,{...t}),a={args:{id:"dragAndDropInput-1",label:"Input without selected file",buttonContent:"Velg fil",onSelectChange:()=>console.log("Select change"),onDragAndDropChange:()=>console.log("Drag and drop change")},render:o},s={args:{...a.args,selectedFileName:"important-file.xml"},render:o},m={args:{...a.args,required:!0},render:o},i={args:{...s.args,buttonContentWhenSelectedFile:"Velg annen fil"},render:o},h={args:{...i.args,selectedFileName:"wrong-file.xml",hasErrors:!0,errorMessage:"Filen må være midre enn 15MB"},render:o},f={args:{...s.args,contentOnly:!0},render:o},v={args:{...a.args,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"First paragraph"}),e.jsx("p",{children:"second paragraph"})]})},render:o};var L,O,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'dragAndDropInput-1',
    label: 'Input without selected file',
    buttonContent: 'Velg fil',
    onSelectChange: () => console.log('Select change'),
    onDragAndDropChange: () => console.log('Drag and drop change')
  },
  render
}`,...(k=(O=a.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,R,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    selectedFileName: 'important-file.xml'
  },
  render
}`,...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var z,N,w;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    required: true
  },
  render
}`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var M,P,$;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    buttonContentWhenSelectedFile: 'Velg annen fil'
  },
  render
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var H,G,J;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...WithCustomButtonContentWhenSelectedFile.args,
    selectedFileName: 'wrong-file.xml',
    hasErrors: true,
    errorMessage: 'Filen må være midre enn 15MB'
  },
  render
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...WithSelectedFile.args,
    contentOnly: true
  },
  render
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...WithoutSelectedFile.args,
    children: <>
        <p>First paragraph</p>
        <p>second paragraph</p>
      </>
  },
  render
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const _e=["WithoutSelectedFile","WithSelectedFile","Required","WithCustomButtonContentWhenSelectedFile","WithError","ContentOnly","WithChildElements"];export{f as ContentOnly,m as Required,v as WithChildElements,i as WithCustomButtonContentWhenSelectedFile,h as WithError,s as WithSelectedFile,a as WithoutSelectedFile,_e as __namedExportsOrder,We as default};
