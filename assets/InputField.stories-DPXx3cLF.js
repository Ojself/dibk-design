import{r as i,d as ee,j as a}from"./iframe-BH9uU73o.js";import{a as Se}from"./asterisk-1FdKgIIn.js";import{B as te}from"./Button-CFF8Zyx3.js";import{E as Ce}from"./ErrorMessage-3w5WfDN0.js";import{L as qe}from"./Label-7jDjVG1l.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const xe="_inputField_rvupw_5",_e="_requiredSymbol_rvupw_5",we="_file_rvupw_13",We="_input_rvupw_5",Be="_hasErrors_rvupw_48",De="_dateInput_rvupw_57",ke="_inputWithButton_rvupw_75",Ee="_fileInputContainer_rvupw_83",Re="_visuallyHidden_rvupw_96",je="_caption_rvupw_107",u={inputField:xe,requiredSymbol:_e,file:we,input:We,hasErrors:Be,dateInput:De,inputWithButton:ke,fileInputContainer:Ee,visuallyHidden:Re,caption:je},ae=e=>{if(e==null||e==="")return;const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))return;const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),L=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${L}`},Ne=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:t=()=>{},onBlur:n,onFocus:r,name:L="",type:c="text",disabled:p=!1,required:H=!1,readOnly:U,width:K,value:v,defaultValue:g,elementKey:P,label:ne="",actionButtonColor:O="secondary",actionButtonContent:A,actionButtonIconLeft:re,actionButtonIconRight:le,actionButtonOnClick:$,actionButtonDisabled:z=!1,actionButtonAriaLabel:Y,selectedFileName:ue,placeholder:ie="",min:se,max:oe,role:de,"aria-describedby":ce,"aria-autocomplete":pe,hasErrors:h=!1,errorMessage:M="",noMargin:me=!1,caption:T})=>{const s=i.useRef(null),G=()=>`${e}-errorMessage`,J=`${e}-caption`,Q=K?{maxWidth:K}:{},ve=c==="date"&&!p&&!U,m=c==="file",X=!!A&&!!$&&!m,ge=A||"Velg fil",fe=()=>{if(!ve||!s.current)return;document.activeElement!==s.current&&s.current.focus(),s.current.showPicker?.()},he=o=>{fe(),r?.(o)},be=()=>{m&&(p||s.current?.click())},ye=o=>{!m||p||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s.current?.click())},Ie=(()=>{if(m)return{};if(c==="date"){const f=v!==void 0?ae(v):void 0,Ve=v===void 0&&g!==void 0?ae(g):void 0;return v!==void 0?{value:f??""}:g!==void 0?{defaultValue:Ve}:{}}const o=f=>f instanceof Date?String(f.getTime()):f;return v!==void 0?{value:o(v)}:g!==void 0?{defaultValue:o(g)}:{}})(),Fe=ee([h&&u.hasErrors,c==="date"&&u.dateInput,m&&u.visuallyHidden]),Z={name:L,readOnly:U,disabled:p,required:H,type:c,role:de,id:e,min:se,max:oe,onChange:t,onBlur:n,onFocus:he,placeholder:m?void 0:ie,className:Fe||void 0,"aria-describedby":[h&&M?G():null,T?J:null,ce].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-autocomplete":Ne(c)?pe:void 0,style:X?void 0:Q,...Ie};return a.jsxs("div",{className:ee([u.inputField,u[c],me&&u.noMargin]),children:[a.jsxs(qe,{htmlFor:e,children:[ne,H&&a.jsx("img",{src:Se,alt:"",className:u.requiredSymbol}),m&&a.jsxs("div",{className:u.fileInputContainer,onClick:be,onKeyDown:ye,role:"button",tabIndex:p?-1:0,"aria-disabled":p||void 0,children:[a.jsx("span",{className:u.input,children:ue}),a.jsx(te,{color:O,inputType:"button",onClick:()=>s.current?.click(),content:ge,disabled:p||z,"aria-label":Y})]})]}),X?a.jsxs("div",{className:u.inputWithButton,style:Q,children:[a.jsx("input",{...Z,ref:s},P||e),a.jsx(te,{color:O,inputType:"button",onClick:$,disabled:z,"aria-label":Y,iconLeft:re,iconRight:le,noMargin:!0,children:A})]}):a.jsx("input",{...Z,ref:s},P||e),T?a.jsx("p",{className:u.caption,id:J,children:T}):null,h&&M?a.jsx(Ce,{id:G(),content:M}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"none"'},{value:'"inline"'},{value:'"list"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Pe={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},d=()=>e=>a.jsx(l,{...e}),b={args:{id:"inputField1"},render:d()},y={args:{id:"inputField2",required:!0},render:d()},I={args:{id:"inputField3",value:"Input field value"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},F={args:{id:"inputField4",defaultValue:"Input field default value"},render:d()},V={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},S={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},C={args:{id:"inputField7",value:"Input field value",label:["Input with ",a.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},q={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},x={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},_={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},w={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},W={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:d()},B={args:{id:"inputField14",label:"File input",type:"file"},render:d()},D={args:{id:"inputField15",label:"File input",type:"file",actionButtonContent:"Legg til fil",selectedFileName:"file.txt",actionButtonColor:"secondary"},render:d()},k={args:{id:"inputField16",label:"Date input without value",type:"date"},render:d()},E={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},R={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},j={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:d()},N={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:d()};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    actionButtonContent: "Legg til fil",
    selectedFileName: "file.txt",
    actionButtonColor: "secondary"
  },
  render: Uncontrolled()
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const Oe=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{k as DateInput,E as DateInputWithValue,R as DateInputWithValueAndError,b as Default,_ as Disabled,B as FileInput,D as FileInputWithButtonContentAndSelectedFile,W as InputWithActionButton,N as InputWithCustomElementKey,j as InputWithCustomWidth,w as NumberInput,x as Readonly,y as Required,S as RequiredWithLabelAndValue,F as WithDefaultValue,q as WithErrors,V as WithLabelAndValue,C as WithLinkInLabel,I as WithValue,Oe as __namedExportsOrder,Pe as default};
