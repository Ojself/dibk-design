import{r as s,b as Q,j as t}from"./iframe-Ds9AI08K.js";import{a as Fe}from"./asterisk-1FdKgIIn.js";import{B as X}from"./Button-DQD9Qw44.js";import{E as Ve}from"./ErrorMessage-DCCNMlTW.js";import{L as xe}from"./Label-CZpnL6zx.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const Se="_inputField_1x7wx_1",Ce="_requiredSymbol_1x7wx_1",qe="_file_1x7wx_9",_e="_input_1x7wx_1",we="_hasErrors_1x7wx_44",We="_dateInput_1x7wx_53",De="_inputWithButton_1x7wx_71",ke="_fileInputContainer_1x7wx_79",Be="_visuallyHidden_1x7wx_92",Ee="_caption_1x7wx_103",i={inputField:Se,requiredSymbol:Ce,file:qe,input:_e,hasErrors:we,dateInput:We,inputWithButton:De,fileInputContainer:ke,visuallyHidden:Be,caption:Ee},Z=e=>{if(e==null||e==="")return;const a=e instanceof Date?e:new Date(e);if(Number.isNaN(a.getTime()))return;const n=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,"0"),L=String(a.getDate()).padStart(2,"0");return`${n}-${r}-${L}`},Re=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:a=()=>{},onBlur:n,onFocus:r,name:L="",type:u="text",disabled:p=!1,required:T=!1,readOnly:H,width:U,value:m,defaultValue:v,elementKey:K,label:ee="",actionButtonColor:P="secondary",actionButtonContent:f,actionButtonIconLeft:ae,actionButtonIconRight:te,actionButtonOnClick:O,actionButtonDisabled:ne=!1,actionButtonAriaLabel:re,selectedFileName:le,placeholder:ue="",min:ie,max:se,role:oe,"aria-describedby":de,"aria-autocomplete":ce,hasErrors:h=!1,errorMessage:A="",noMargin:pe=!1,caption:M})=>{const o=s.useRef(null),$=()=>`${e}-errorMessage`,z=`${e}-caption`,Y=U?{maxWidth:U}:{},me=u==="date"&&!p&&!H,G=!!f&&!!O&&u!=="file",ve=()=>{if(!me||!o.current)return;document.activeElement!==o.current&&o.current.focus(),o.current.showPicker?.()},ge=d=>{ve(),r?.(d)},fe=()=>{u==="file"&&(p||o.current?.click())},he=d=>{u!=="file"||p||(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o.current?.click())},be=(()=>{if(u==="file")return{};if(u==="date"){const g=m!==void 0?Z(m):void 0,Ie=m===void 0&&v!==void 0?Z(v):void 0;return m!==void 0?{value:g??""}:v!==void 0?{defaultValue:Ie}:{}}const d=g=>g instanceof Date?String(g.getTime()):g;return m!==void 0?{value:d(m)}:v!==void 0?{defaultValue:d(v)}:{}})(),ye=Q([h&&i.hasErrors,u==="date"&&i.dateInput,u==="file"&&i.visuallyHidden]),J={name:L,readOnly:H,disabled:p,required:T,type:u,role:oe,id:e,min:ie,max:se,onChange:a,onBlur:n,onFocus:ge,placeholder:u==="file"?void 0:ue,className:ye||void 0,"aria-describedby":[h&&A?$():null,M?z:null,de].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-autocomplete":Re(u)?ce:void 0,style:G?void 0:Y,...be};return t.jsxs("div",{className:Q([i.inputField,i[u],pe&&i.noMargin]),children:[t.jsxs(xe,{htmlFor:e,children:[ee,T&&t.jsx("img",{src:Fe,alt:"",className:i.requiredSymbol}),u==="file"&&t.jsxs("div",{className:i.fileInputContainer,onClick:fe,onKeyDown:he,role:"button",tabIndex:p?-1:0,"aria-disabled":p||void 0,children:[t.jsx("span",{className:i.input,children:le}),f&&t.jsx(X,{color:P,inputType:"button",onClick:()=>o.current?.click(),content:f})]})]}),G?t.jsxs("div",{className:i.inputWithButton,style:Y,children:[t.jsx("input",{...J,ref:o},K||e),t.jsx(X,{color:P,inputType:"button",onClick:O,disabled:ne,"aria-label":re,iconLeft:ae,iconRight:te,noMargin:!0,children:f})]}):t.jsx("input",{...J,ref:o},K||e),M?t.jsx("p",{className:i.caption,id:z,children:M}):null,h&&A?t.jsx(Ve,{id:$(),content:A}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"both"'},{value:'"none"'},{value:'"list"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Ue={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},c=()=>e=>t.jsx(l,{...e}),b={args:{id:"inputField1"},render:c()},y={args:{id:"inputField2",required:!0},render:c()},I={args:{id:"inputField3",value:"Input field value"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},F={args:{id:"inputField4",defaultValue:"Input field default value"},render:c()},V={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},x={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},S={args:{id:"inputField7",value:"Input field value",label:["Input with ",t.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},C={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},q={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},_={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},w={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},W={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:c()},D={args:{id:"inputField14",label:"File input",type:"file"},render:c()},k={args:{id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt",buttonColor:"secondary"},render:c()},B={args:{id:"inputField16",label:"Date input without value",type:"date"},render:c()},E={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},R={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[a,n]=s.useState(e.value??"");return t.jsx(l,{...e,value:a,onChange:r=>n(r.target.value)})}},j={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:c()},N={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:c()};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField4",
    defaultValue: "Input field default value" // <-- fixed
  },
  render: Uncontrolled()
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField8",
    value: "Input field value",
    label: "Input with label, value, errors and error message",
    hasErrors: true,
    errorMessage: "Feil input"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "Input with action button",
    placeholder: "Placeholder text",
    actionButtonContent: "Action button",
    actionButtonOnClick: () => console.log("Action button clicked")
  },
  render: Uncontrolled()
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    buttonContent: "Legg til fil",
    selectedFileName: "file.txt",
    buttonColor: "secondary"
  },
  render: Uncontrolled()
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...N.parameters?.docs?.source}}};const Ke=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{B as DateInput,E as DateInputWithValue,R as DateInputWithValueAndError,b as Default,_ as Disabled,D as FileInput,k as FileInputWithButtonContentAndSelectedFile,W as InputWithActionButton,N as InputWithCustomElementKey,j as InputWithCustomWidth,w as NumberInput,q as Readonly,y as Required,x as RequiredWithLabelAndValue,F as WithDefaultValue,C as WithErrors,V as WithLabelAndValue,S as WithLinkInLabel,I as WithValue,Ke as __namedExportsOrder,Ue as default};
