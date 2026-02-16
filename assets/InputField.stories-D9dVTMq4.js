import{r as i,d as ee,j as a}from"./iframe-WYyUpwoz.js";import{a as xe}from"./asterisk-icon-Dj6UDs0Y.js";import{B as te}from"./Button-C5fOTAE2.js";import{E as Se}from"./ErrorMessage-DOQQP1UQ.js";import{L as Ce}from"./Label-DKFEERH8.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const qe="_inputField_14x24_5",_e="_requiredSymbol_14x24_5",We="_file_14x24_13",Be="_input_14x24_5",De="_hasErrors_14x24_48",ke="_dateInput_14x24_57",Ee="_inputWithButton_14x24_75",Re="_fileInputContainer_14x24_83",we="_visuallyHidden_14x24_96",je="_caption_14x24_107",u={inputField:qe,requiredSymbol:_e,file:We,input:Be,hasErrors:De,dateInput:ke,inputWithButton:Ee,fileInputContainer:Re,visuallyHidden:we,caption:je},ae=e=>{if(e==null||e==="")return;const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))return;const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),L=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${L}`},Ne=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:t=()=>{},onBlur:n,onFocus:r,name:L="",type:c="text",disabled:p=!1,required:H=!1,readOnly:U,width:K,value:v,defaultValue:g,elementKey:P,label:ne="",actionButtonColor:O="secondary",actionButtonContent:A,actionButtonIconLeft:re,actionButtonIconRight:le,actionButtonOnClick:$,actionButtonDisabled:z=!1,actionButtonAriaLabel:Y,selectedFileName:ue,placeholder:ie="",min:se,max:oe,role:de,"aria-describedby":ce,"aria-autocomplete":pe,hasErrors:h=!1,errorMessage:M="",noMargin:me=!1,caption:T})=>{const s=i.useRef(null),G=()=>`${e}-errorMessage`,J=`${e}-caption`,Q=K?{maxWidth:K}:{},ve=c==="date"&&!p&&!U,m=c==="file",X=!!A&&!!$&&!m,ge=A||"Velg fil",fe=()=>{if(!ve||!s.current)return;document.activeElement!==s.current&&s.current.focus(),s.current.showPicker?.()},he=o=>{fe(),r?.(o)},be=()=>{m&&(p||s.current?.click())},ye=o=>{!m||p||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s.current?.click())},Ie=(()=>{if(m)return{};if(c==="date"){const f=v!==void 0?ae(v):void 0,Ve=v===void 0&&g!==void 0?ae(g):void 0;return v!==void 0?{value:f??""}:g!==void 0?{defaultValue:Ve}:{}}const o=f=>f instanceof Date?String(f.getTime()):f;return v!==void 0?{value:o(v)}:g!==void 0?{defaultValue:o(g)}:{}})(),Fe=ee([h&&u.hasErrors,c==="date"&&u.dateInput,m&&u.visuallyHidden]),Z={name:L,readOnly:U,disabled:p,required:H,type:c,role:de,id:e,min:se,max:oe,onChange:t,onBlur:n,onFocus:he,placeholder:m?void 0:ie,className:Fe||void 0,"aria-describedby":[h&&M?G():null,T?J:null,ce].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-autocomplete":Ne(c)?pe:void 0,style:X?void 0:Q,...Ie};return a.jsxs("div",{className:ee([u.inputField,u[c],me&&u.noMargin]),children:[a.jsxs(Ce,{htmlFor:e,children:[ne,H&&a.jsx("img",{src:xe,alt:"",className:u.requiredSymbol}),m&&a.jsxs("div",{className:u.fileInputContainer,onClick:be,onKeyDown:ye,role:"button",tabIndex:p?-1:0,"aria-disabled":p||void 0,children:[a.jsx("span",{className:u.input,children:ue}),a.jsx(te,{color:O,inputType:"button",onClick:()=>s.current?.click(),content:ge,disabled:p||z,"aria-label":Y})]})]}),X?a.jsxs("div",{className:u.inputWithButton,style:Q,children:[a.jsx("input",{...Z,ref:s},P||e),a.jsx(te,{color:O,inputType:"button",onClick:$,disabled:z,"aria-label":Y,iconLeft:re,iconRight:le,noMargin:!0,children:A})]}):a.jsx("input",{...Z,ref:s},P||e),T?a.jsx("p",{className:u.caption,id:J,children:T}):null,h&&M?a.jsx(Se,{id:G(),content:M}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Pe={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},d=()=>e=>a.jsx(l,{...e}),b={args:{id:"inputField1"},render:d()},y={args:{id:"inputField2",required:!0},render:d()},I={args:{id:"inputField3",value:"Input field value"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},F={args:{id:"inputField4",defaultValue:"Input field default value"},render:d()},V={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},x={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},S={args:{id:"inputField7",value:"Input field value",label:["Input with ",a.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},C={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},q={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},_={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},W={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},B={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:d()},D={args:{id:"inputField14",label:"File input",type:"file"},render:d()},k={args:{id:"inputField15",label:"File input",type:"file",actionButtonContent:"Legg til fil",selectedFileName:"file.txt",actionButtonColor:"secondary"},render:d()},E={args:{id:"inputField16",label:"Date input without value",type:"date"},render:d()},R={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},w={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[t,n]=i.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},j={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:d()},N={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:d()};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "Input with action button",
    placeholder: "Placeholder text",
    actionButtonContent: "Action button",
    actionButtonOnClick: () => console.log("Action button clicked")
  },
  render: Uncontrolled()
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    actionButtonContent: "Legg til fil",
    selectedFileName: "file.txt",
    actionButtonColor: "secondary"
  },
  render: Uncontrolled()
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const Oe=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{E as DateInput,R as DateInputWithValue,w as DateInputWithValueAndError,b as Default,_ as Disabled,D as FileInput,k as FileInputWithButtonContentAndSelectedFile,B as InputWithActionButton,N as InputWithCustomElementKey,j as InputWithCustomWidth,W as NumberInput,q as Readonly,y as Required,x as RequiredWithLabelAndValue,F as WithDefaultValue,C as WithErrors,V as WithLabelAndValue,S as WithLinkInLabel,I as WithValue,Oe as __namedExportsOrder,Pe as default};
