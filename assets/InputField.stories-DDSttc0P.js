import{r as i,f as T,j as r}from"./iframe-BWm-Rgin.js";import{a as z}from"./asterisk-1FdKgIIn.js";import{B as fe}from"./Button-D8gJCdNO.js";import{E as G}from"./ErrorMessage-CUBWA2ol.js";import{L as J}from"./Label-DX2rxQXz.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const he="_inputField_unu3b_1",be="_noMargin_unu3b_4",ye="_requiredSymbol_unu3b_10",Fe="_file_unu3b_17",Ie="_input_unu3b_1",Ve="_hasErrors_unu3b_57",Se="_fileInputContainer_unu3b_74",Ce="_visuallyHidden_unu3b_87",u={inputField:he,noMargin:be,requiredSymbol:ye,file:Fe,input:Ie,hasErrors:Ve,fileInputContainer:Se,visuallyHidden:Ce},xe=e=>{const a=typeof e=="string"?new Date(e):e;if(Number.isNaN(a.getTime()))return String(e??"");const n=String(a.getDate()).padStart(2,"0"),t=String(a.getMonth()+1).padStart(2,"0"),v=a.getFullYear();return`${n}.${t}.${v}`},Q=e=>{if(e==null||e==="")return;const a=e instanceof Date?e:new Date(e);if(Number.isNaN(a.getTime()))return;const n=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),v=String(a.getDate()).padStart(2,"0");return`${n}-${t}-${v}`},qe=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:a=()=>{},onBlur:n,onFocus:t,name:v="",type:s="text",disabled:A=!1,required:M=!1,readOnly:H,width:K,value:c,defaultValue:m,elementKey:X,label:$="",contentOnly:Z=!1,buttonColor:ee="primary",buttonContent:B,selectedFileName:ae,placeholder:ne="",defaultContent:P="",min:te,max:re,role:le,"aria-describedby":ue,"aria-autocomplete":se,hasErrors:f=!1,errorMessage:h="",noMargin:Y=!1})=>{const g=i.useRef(null),U=()=>`${e}-errorMessage`,ie=K?{maxWidth:K}:{},oe=s==="date"&&!A&&!H,de=()=>{if(!oe||!g.current)return;document.activeElement!==g.current&&g.current.focus(),g.current.showPicker?.()},ce=d=>{de(),t?.(d)},pe=(()=>{if(s==="file")return{};if(s==="date"){const p=c!==void 0?Q(c):void 0,ve=c===void 0&&m!==void 0?Q(m):void 0;return c!==void 0?{value:p??""}:m!==void 0?{defaultValue:ve}:{}}const d=p=>p instanceof Date?String(p.getTime()):p;return c!==void 0?{value:d(c)}:m!==void 0?{defaultValue:d(m)}:{}})(),me=T([f&&u.hasErrors,s==="file"&&u.visuallyHidden]),ge={name:v,readOnly:H,disabled:A,required:M,type:s,role:le,id:e,min:te,max:re,onChange:a,onBlur:n,onFocus:ce,placeholder:s==="file"?void 0:ne,className:me||void 0,"aria-describedby":f&&h?U():ue,"aria-invalid":f||void 0,"aria-autocomplete":qe(s)?se:void 0,style:ie,...pe};if(Z){const d=c??m??"",p=s==="date"?d?xe(d):P:String(d??"")||P;return r.jsxs("div",{className:T([u.inputField,u[s],Y&&u.noMargin]),children:[r.jsxs(J,{htmlFor:e,children:[$,M&&r.jsx("img",{src:z,alt:"",className:u.requiredSymbol})]}),r.jsx("span",{children:p}),f&&h?r.jsx(G,{id:U(),content:h}):null]})}return r.jsxs("div",{className:T([u.inputField,u[s],Y&&u.noMargin]),children:[r.jsxs(J,{htmlFor:e,children:[$,M&&r.jsx("img",{src:z,alt:"",className:u.requiredSymbol}),s==="file"&&r.jsxs("div",{className:u.fileInputContainer,children:[r.jsx("span",{className:u.input,children:ae}),B&&r.jsx(fe,{color:ee,inputType:"button",onClick:()=>g.current?.click(),content:B})]})]}),r.jsx("input",{...ge,ref:g},X||e),f&&h?r.jsx(G,{id:U(),content:h}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}const ke={title:"Example/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},o=()=>e=>r.jsx(l,{...e}),b={args:{id:"inputField1"},render:o()},y={args:{id:"inputField2",required:!0},render:o()},F={args:{id:"inputField3",value:"Input field value"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},I={args:{id:"inputField4",defaultValue:"Input field default value"},render:o()},V={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},S={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},C={args:{id:"inputField7",value:"Input field value",label:["Input with ",r.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},x={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},q={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},D={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},_={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},W={args:{id:"inputField12",value:"Input field value",label:"Input with contentOnly set to true",contentOnly:!0},render:o()},w={args:{id:"inputField13",label:"Input with contentOnly set to true and default content",contentOnly:!0,defaultContent:"Default content"},render:o()},j={args:{id:"inputField14",label:"File input",type:"file"},render:o()},E={args:{id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt"},render:o()},N={args:{id:"inputField16",label:"Date input without value",type:"date"},render:o()},k={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},R={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[a,n]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:t=>n(t.target.value)})}},L={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:o()},O={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:o()};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField2",
    required: true
  },
  render: Uncontrolled()
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField4",
    defaultValue: "Input field default value" // <-- fixed
  },
  render: Uncontrolled()
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField12",
    value: "Input field value",
    label: "Input with contentOnly set to true",
    contentOnly: true
  },
  render: Uncontrolled()
}`,...W.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField13",
    label: "Input with contentOnly set to true and default content",
    contentOnly: true,
    defaultContent: "Default content"
  },
  render: Uncontrolled()
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    buttonContent: "Legg til fil",
    selectedFileName: "file.txt"
  },
  render: Uncontrolled()
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...O.parameters?.docs?.source}}};const Re=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","ContentOnly","ContentOnlyWithDefaultContent","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{W as ContentOnly,w as ContentOnlyWithDefaultContent,N as DateInput,k as DateInputWithValue,R as DateInputWithValueAndError,b as Default,D as Disabled,j as FileInput,E as FileInputWithButtonContentAndSelectedFile,O as InputWithCustomElementKey,L as InputWithCustomWidth,_ as NumberInput,q as Readonly,y as Required,S as RequiredWithLabelAndValue,I as WithDefaultValue,x as WithErrors,V as WithLabelAndValue,C as WithLinkInLabel,F as WithValue,Re as __namedExportsOrder,ke as default};
