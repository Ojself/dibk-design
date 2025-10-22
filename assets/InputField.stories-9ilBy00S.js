import{j as r,c as K,r as i}from"./iframe-DZO4KTEA.js";import{a as B}from"./asterisk-1FdKgIIn.js";import{B as de}from"./Button-DoBnOTr4.js";import{E as $}from"./ErrorMessage-BRGX6810.js";import{L as H}from"./Label-CMhyB94b.js";import"./preload-helper-PPVm8Dsz.js";const pe="_inputField_17rmz_1",ce="_noMargin_17rmz_4",me="_requiredSymbol_17rmz_10",ge="_file_17rmz_17",ve="_input_17rmz_1",fe="_hasErrors_17rmz_50",he="_fileInputContainer_17rmz_62",u={inputField:pe,noMargin:ce,requiredSymbol:me,file:ge,input:ve,hasErrors:fe,fileInputContainer:he},ye=e=>{const a=typeof e=="string"?new Date(e):e;if(Number.isNaN(a.getTime()))return String(e??"");const t=String(a.getDate()).padStart(2,"0"),n=String(a.getMonth()+1).padStart(2,"0"),s=a.getFullYear();return`${t}.${n}.${s}`},P=e=>{if(e==null||e==="")return;const a=e instanceof Date?e:new Date(e);if(Number.isNaN(a.getTime()))return;const t=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${t}-${n}-${s}`},be=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:a=()=>{},onBlur:t,name:n="",type:s="text",disabled:Y=!1,required:R=!1,readOnly:G,width:M,value:d,defaultValue:m,elementKey:J,label:U="",contentOnly:Q=!1,buttonColor:X="primary",buttonContent:A,selectedFileName:Z,placeholder:ee="",defaultContent:T="",min:ae,max:te,role:ne,"aria-describedby":re,"aria-autocomplete":le,hasErrors:g=!1,errorMessage:v="",noMargin:z=!1})=>{const k=()=>`${e}-errorMessage`,se=M?{maxWidth:M}:{},ue=(()=>{if(s==="file")return{};if(s==="date"){const c=d!==void 0?P(d):void 0,oe=d===void 0&&m!==void 0?P(m):void 0;return d!==void 0?{value:c??""}:m!==void 0?{defaultValue:oe}:{}}const p=c=>c instanceof Date?String(c.getTime()):c;return d!==void 0?{value:p(d)}:m!==void 0?{defaultValue:p(m)}:{}})(),ie={name:n,readOnly:G,disabled:Y,required:R,type:s,role:ne,id:e,min:ae,max:te,onChange:a,onBlur:t,placeholder:s==="file"?void 0:ee,className:g?u.hasErrors:void 0,"aria-describedby":g&&v?k():re,"aria-invalid":g||void 0,"aria-autocomplete":be(s)?le:void 0,style:se,...ue};if(Q){const p=d??m??"",c=s==="date"?p?ye(p):T:String(p??"")||T;return r.jsxs("div",{className:K([u.inputField,u[s],z&&u.noMargin]),children:[r.jsxs(H,{htmlFor:e,children:[U,R&&r.jsx("img",{src:B,alt:"",className:u.requiredSymbol})]}),r.jsx("span",{children:c}),g&&v?r.jsx($,{id:k(),content:v}):null]})}return r.jsxs("div",{className:K([u.inputField,u[s],z&&u.noMargin]),children:[r.jsxs(H,{htmlFor:e,children:[U,R&&r.jsx("img",{src:B,alt:"",className:u.requiredSymbol}),s==="file"&&r.jsxs("div",{className:u.fileInputContainer,children:[r.jsx("span",{className:u.input,children:Z}),A&&r.jsx(de,{color:X,inputType:"button",onClick:()=>{document?.getElementById(e)?.click()},content:A})]})]}),r.jsx("input",{...ie},J||e),g&&v?r.jsx($,{id:k(),content:v}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}const qe={title:"Example/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},o=()=>e=>r.jsx(l,{...e}),f={args:{id:"inputField1"},render:o()},h={args:{id:"inputField2",required:!0},render:o()},y={args:{id:"inputField3",value:"Input field value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},b={args:{id:"inputField4",defaultValue:"Input field default value"},render:o()},F={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},I={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},V={args:{id:"inputField7",value:"Input field value",label:["Input with ",r.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},S={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},C={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},x={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},q={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},D={args:{id:"inputField12",value:"Input field value",label:"Input with contentOnly set to true",contentOnly:!0},render:o()},W={args:{id:"inputField13",label:"Input with contentOnly set to true and default content",contentOnly:!0,defaultContent:"Default content"},render:o()},_={args:{id:"inputField14",label:"File input",type:"file"},render:o()},w={args:{id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt"},render:o()},j={args:{id:"inputField16",label:"Date input without value",type:"date"},render:o()},E={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},N={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},O={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:o()},L={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:o()};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField2",
    required: true
  },
  render: Uncontrolled()
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField4",
    defaultValue: "Input field default value" // <-- fixed
  },
  render: Uncontrolled()
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField6",
    value: "Input field value",
    label: "Input field label",
    required: true
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField7",
    value: "Input field value",
    label: ["Input with ", <a key="labelLink" href="#label-link">
        link
      </a>, " in label"]
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField8",
    value: "Input field value",
    label: "Input with label, value, errors and error message",
    hasErrors: true,
    errorMessage: "Wrong value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField9",
    value: "Input field value",
    label: "Readonly input",
    readOnly: true
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField10",
    value: "Input field value",
    label: "Disabled input",
    disabled: true
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField11",
    value: 3,
    label: "Input with number values",
    type: "number"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField12",
    value: "Input field value",
    label: "Input with contentOnly set to true",
    contentOnly: true
  },
  render: Uncontrolled()
}`,...D.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField13",
    label: "Input with contentOnly set to true and default content",
    contentOnly: true,
    defaultContent: "Default content"
  },
  render: Uncontrolled()
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    buttonContent: "Legg til fil",
    selectedFileName: "file.txt"
  },
  render: Uncontrolled()
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField17",
    label: "Date input with value",
    value: "2020-05-10",
    type: "date"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField18",
    label: "Date input with error",
    value: "2020-05-10",
    type: "date",
    hasErrors: true,
    errorMessage: "Wrong date value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...L.parameters?.docs?.source}}};const De=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","ContentOnly","ContentOnlyWithDefaultContent","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{D as ContentOnly,W as ContentOnlyWithDefaultContent,j as DateInput,E as DateInputWithValue,N as DateInputWithValueAndError,f as Default,x as Disabled,_ as FileInput,w as FileInputWithButtonContentAndSelectedFile,L as InputWithCustomElementKey,O as InputWithCustomWidth,q as NumberInput,C as Readonly,h as Required,I as RequiredWithLabelAndValue,b as WithDefaultValue,S as WithErrors,F as WithLabelAndValue,V as WithLinkInLabel,y as WithValue,De as __namedExportsOrder,qe as default};
