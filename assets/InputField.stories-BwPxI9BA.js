import{r as s,b as X,j as a}from"./iframe-PL7sJn6L.js";import{a as Ve}from"./asterisk-1FdKgIIn.js";import{B as Z}from"./Button-mArunAN0.js";import{E as xe}from"./ErrorMessage-DmV3l4EI.js";import{L as Se}from"./Label-DEmh4JYh.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-q7FAEQyj.js";const Ce="_inputField_1x7wx_1",qe="_requiredSymbol_1x7wx_1",_e="_file_1x7wx_9",we="_input_1x7wx_1",We="_hasErrors_1x7wx_44",De="_dateInput_1x7wx_53",ke="_inputWithButton_1x7wx_71",Be="_fileInputContainer_1x7wx_79",Re="_visuallyHidden_1x7wx_92",Ee="_caption_1x7wx_103",i={inputField:Ce,requiredSymbol:qe,file:_e,input:we,hasErrors:We,dateInput:De,inputWithButton:ke,fileInputContainer:Be,visuallyHidden:Re,caption:Ee},ee=e=>{if(e==null||e==="")return;const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))return;const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),N=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${N}`},je=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:t=()=>{},onBlur:n,onFocus:r,name:N="",type:u="text",disabled:p=!1,required:M=!1,readOnly:T,width:H,value:m,defaultValue:v,elementKey:U,label:te="",buttonColor:K="primary",buttonContent:P,actionButtonContent:O,actionButtonIconLeft:ae,actionButtonIconRight:ne,actionButtonOnClick:$,actionButtonDisabled:re=!1,actionButtonAriaLabel:le,selectedFileName:ue,placeholder:ie="",min:se,max:oe,role:de,"aria-describedby":ce,"aria-autocomplete":pe,hasErrors:f=!1,errorMessage:L="",noMargin:me=!1,caption:A})=>{const o=s.useRef(null),z=()=>`${e}-errorMessage`,Y=`${e}-caption`,G=H?{maxWidth:H}:{},ve=u==="date"&&!p&&!T,J=!!O&&!!$&&u!=="file",ge=()=>{if(!ve||!o.current)return;document.activeElement!==o.current&&o.current.focus(),o.current.showPicker?.()},fe=d=>{ge(),r?.(d)},he=()=>{u==="file"&&(p||o.current?.click())},be=d=>{u!=="file"||p||(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o.current?.click())},ye=(()=>{if(u==="file")return{};if(u==="date"){const g=m!==void 0?ee(m):void 0,Fe=m===void 0&&v!==void 0?ee(v):void 0;return m!==void 0?{value:g??""}:v!==void 0?{defaultValue:Fe}:{}}const d=g=>g instanceof Date?String(g.getTime()):g;return m!==void 0?{value:d(m)}:v!==void 0?{defaultValue:d(v)}:{}})(),Ie=X([f&&i.hasErrors,u==="date"&&i.dateInput,u==="file"&&i.visuallyHidden]),Q={name:N,readOnly:T,disabled:p,required:M,type:u,role:de,id:e,min:se,max:oe,onChange:t,onBlur:n,onFocus:fe,placeholder:u==="file"?void 0:ie,className:Ie||void 0,"aria-describedby":[f&&L?z():null,A?Y:null,ce].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":f||void 0,"aria-autocomplete":je(u)?pe:void 0,style:J?void 0:G,...ye};return a.jsxs("div",{className:X([i.inputField,i[u],me&&i.noMargin]),children:[a.jsxs(Se,{htmlFor:e,children:[te,M&&a.jsx("img",{src:Ve,alt:"",className:i.requiredSymbol}),u==="file"&&a.jsxs("div",{className:i.fileInputContainer,onClick:he,onKeyDown:be,role:"button",tabIndex:p?-1:0,"aria-disabled":p||void 0,children:[a.jsx("span",{className:i.input,children:ue}),P&&a.jsx(Z,{color:K,inputType:"button",onClick:()=>o.current?.click(),content:P})]})]}),J?a.jsxs("div",{className:i.inputWithButton,style:G,children:[a.jsx("input",{...Q,ref:o},U||e),a.jsx(Z,{color:K,inputType:"button",onClick:$,disabled:re,"aria-label":le,iconLeft:ae,iconRight:ne,noMargin:!0,children:O})]}):a.jsx("input",{...Q,ref:o},U||e),A?a.jsx("p",{className:i.caption,id:Y,children:A}):null,f&&L?a.jsx(xe,{id:z(),content:L}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"React.ReactNode"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"none"'},{value:'"inline"'},{value:'"list"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Ke={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},c=()=>e=>a.jsx(l,{...e}),h={args:{id:"inputField1"},render:c()},b={args:{id:"inputField2",required:!0},render:c()},y={args:{id:"inputField3",value:"Input field value"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},I={args:{id:"inputField4",defaultValue:"Input field default value"},render:c()},F={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},V={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},x={args:{id:"inputField7",value:"Input field value",label:["Input with ",a.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},S={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},C={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},q={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},_={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},w={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:c()},W={args:{id:"inputField14",label:"File input",type:"file"},render:c()},D={args:{id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt",buttonColor:"secondary"},render:c()},k={args:{id:"inputField16",label:"Date input without value",type:"date"},render:c()},B={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},R={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[t,n]=s.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},E={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:c()},j={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:c()};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField2",
    required: true
  },
  render: Uncontrolled()
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField4",
    defaultValue: "Input field default value" // <-- fixed
  },
  render: Uncontrolled()
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "Input with action button",
    placeholder: "Placeholder text",
    actionButtonContent: "Action button",
    actionButtonOnClick: () => console.log("Action button clicked")
  },
  render: Uncontrolled()
}`,...w.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    buttonContent: "Legg til fil",
    selectedFileName: "file.txt",
    buttonColor: "secondary"
  },
  render: Uncontrolled()
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...j.parameters?.docs?.source}}};const Pe=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{k as DateInput,B as DateInputWithValue,R as DateInputWithValueAndError,h as Default,q as Disabled,W as FileInput,D as FileInputWithButtonContentAndSelectedFile,w as InputWithActionButton,j as InputWithCustomElementKey,E as InputWithCustomWidth,_ as NumberInput,C as Readonly,b as Required,V as RequiredWithLabelAndValue,I as WithDefaultValue,S as WithErrors,F as WithLabelAndValue,x as WithLinkInLabel,y as WithValue,Pe as __namedExportsOrder,Ke as default};
