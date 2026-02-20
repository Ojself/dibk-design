import{r as p,c as Y,j as t,F as be}from"./iframe-BSgnUm1r.js";import{B as G}from"./Button-DqV3OcX-.js";import{E as Ie}from"./ErrorMessage-DeXpnL-9.js";import{L as Fe}from"./Label-CyrX8Sap.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const qe="_inputField_xfgy7_5",Ve="_requiredSymbol_xfgy7_5",xe="_file_xfgy7_15",Ce="_input_xfgy7_5",_e="_hasErrors_xfgy7_55",Se="_dateInput_xfgy7_68",Be="_inputWithButton_xfgy7_86",Re="_fileInputContainer_xfgy7_94",Ee="_visuallyHidden_xfgy7_107",Ne="_caption_xfgy7_118",i={inputField:qe,requiredSymbol:Ve,file:xe,input:Ce,hasErrors:_e,dateInput:Se,inputWithButton:Be,fileInputContainer:Re,visuallyHidden:Ee,caption:Ne},J=e=>{if(e==null||e==="")return;const n=e instanceof Date?e:new Date(e);if(Number.isNaN(n.getTime()))return;const a=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),N=String(n.getDate()).padStart(2,"0");return`${a}-${r}-${N}`},De=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:n=()=>{},onBlur:a,onFocus:r,name:N="",type:s="text",disabled:d=!1,required:w=!1,readOnly:M,width:k,value:m,defaultValue:g,elementKey:L,label:Q="",actionButtonColor:A="secondary",actionButtonContent:D,actionButtonIconLeft:X,actionButtonIconRight:Z,actionButtonOnClick:P,actionButtonDisabled:T=!1,actionButtonAriaLabel:O,selectedFileName:ee,placeholder:te="",min:ne,max:ae,role:re,"aria-describedby":le,"aria-autocomplete":ie,hasErrors:h=!1,errorMessage:W="",noMargin:ue=!1,caption:j,requirementIndicatorMode:oe,optionalLabel:se})=>{const u=p.useRef(null),H=()=>`${e}-errorMessage`,U=`${e}-caption`,$=k?{maxWidth:k}:{},de=s==="date"&&!d&&!M,c=s==="file",K=!!D&&!!P&&!c,ce=D||"Velg fil",pe=()=>{if(!de||!u.current)return;document.activeElement!==u.current&&u.current.focus(),u.current.showPicker?.()},me=o=>{pe(),r?.(o)},fe=()=>{c&&(d||u.current?.click())},ge=o=>{!c||d||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),u.current?.click())},ve=(()=>{if(c)return{};if(s==="date"){const v=m!==void 0?J(m):void 0,ye=m===void 0&&g!==void 0?J(g):void 0;return m!==void 0?{value:v??""}:g!==void 0?{defaultValue:ye}:{}}const o=v=>v instanceof Date?String(v.getTime()):v;return m!==void 0?{value:o(m)}:g!==void 0?{defaultValue:o(g)}:{}})(),he=Y([h&&i.hasErrors,s==="date"&&i.dateInput,c&&i.visuallyHidden]),z={name:N,readOnly:M,disabled:d,type:s,role:re,id:e,min:ne,max:ae,onChange:n,onBlur:a,onFocus:me,placeholder:c?void 0:te,className:he||void 0,"aria-describedby":[h&&W?H():null,j?U:null,le].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-required":w||void 0,"aria-autocomplete":De(s)?ie:void 0,style:K?void 0:$,...ve};return t.jsxs("div",{className:Y([i.inputField,i[s],ue&&i.noMargin]),children:[t.jsxs(Fe,{htmlFor:e,children:[Q,t.jsx(be,{required:w,mode:oe,optionalLabel:se,requiredClassName:i.requiredSymbol}),c&&t.jsxs("div",{className:i.fileInputContainer,onClick:fe,onKeyDown:ge,role:"button",tabIndex:d?-1:0,"aria-disabled":d||void 0,children:[t.jsx("span",{className:i.input,children:ee}),t.jsx(G,{color:A,inputType:"button",onClick:()=>u.current?.click(),content:ce,disabled:d||T,"aria-label":O})]})]}),K?t.jsxs("div",{className:i.inputWithButton,style:$,children:[t.jsx("input",{...z,ref:u},L||e),t.jsx(G,{color:A,inputType:"button",onClick:P,disabled:T,"aria-label":O,iconLeft:X,iconRight:Z,noMargin:!0,children:D})]}):t.jsx("input",{...z,ref:u},L||e),j?t.jsx("p",{className:i.caption,id:U,children:j}):null,h&&W?t.jsx(Ie,{id:H(),content:W}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"both"'},{value:'"none"'},{value:'"list"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"required"'},{value:'"none"'},{value:'"optional"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}}}}}catch{}const Ae={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},f=()=>e=>t.jsx(l,{...e}),y={args:{id:"inputField1"},render:f()},b={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},I={render:()=>t.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[t.jsx(l,{id:"inputField-indicator-required",label:"Required mode (required=true)",required:!0,requirementIndicatorMode:"required",placeholder:"Placeholder"}),t.jsx(l,{id:"inputField-indicator-optional",label:"Optional mode (required=false)",required:!1,requirementIndicatorMode:"optional",placeholder:"Placeholder"}),t.jsx(l,{id:"inputField-indicator-none",label:"None mode (required=true)",required:!0,requirementIndicatorMode:"none",placeholder:"Placeholder"})]})},F={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},q={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},V={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},x={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:f()},C={args:{id:"inputField14",label:"File input",type:"file"},render:f()},_={args:{id:"inputField15",label:"File input",type:"file",actionButtonContent:"Legg til fil",selectedFileName:"file.txt",actionButtonColor:"secondary"},render:f()},S={args:{id:"inputField16",label:"Date input without value",type:"date"},render:f()},B={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},R={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[n,a]=p.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},E={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:f()};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <InputField id="inputField-indicator-required" label="Required mode (required=true)" required requirementIndicatorMode="required" placeholder="Placeholder" />
      <InputField id="inputField-indicator-optional" label="Optional mode (required=false)" required={false} requirementIndicatorMode="optional" placeholder="Placeholder" />
      <InputField id="inputField-indicator-none" label="None mode (required=true)" required requirementIndicatorMode="none" placeholder="Placeholder" />
    </div>
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "Input with action button",
    placeholder: "Placeholder text",
    actionButtonContent: "Action button",
    actionButtonOnClick: () => console.log("Action button clicked")
  },
  render: Uncontrolled()
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    actionButtonContent: "Legg til fil",
    selectedFileName: "file.txt",
    actionButtonColor: "secondary"
  },
  render: Uncontrolled()
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const Pe=["Default","WithLabelAndValue","RequirementIndicators","RequiredWithLabelAndValue","WithErrors","Readonly","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth"];export{S as DateInput,B as DateInputWithValue,R as DateInputWithValueAndError,y as Default,C as FileInput,_ as FileInputWithButtonContentAndSelectedFile,x as InputWithActionButton,E as InputWithCustomWidth,V as Readonly,F as RequiredWithLabelAndValue,I as RequirementIndicators,q as WithErrors,b as WithLabelAndValue,Pe as __namedExportsOrder,Ae as default};
