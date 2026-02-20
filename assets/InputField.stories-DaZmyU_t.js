import{r as m,d as z,j as t,F as ye}from"./iframe-Bgu-WHGL.js";import{B as Y}from"./Button-Cg56Y0H1.js";import{E as be}from"./ErrorMessage-B-43ywPq.js";import{L as qe}from"./Label-C_4yP7OU.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const Ie="_inputField_xfgy7_5",Fe="_requiredSymbol_xfgy7_5",Ve="_file_xfgy7_15",xe="_input_xfgy7_5",_e="_hasErrors_xfgy7_55",Ce="_dateInput_xfgy7_68",Se="_inputWithButton_xfgy7_86",Be="_fileInputContainer_xfgy7_94",Re="_visuallyHidden_xfgy7_107",Ne="_caption_xfgy7_118",i={inputField:Ie,requiredSymbol:Fe,file:Ve,input:xe,hasErrors:_e,dateInput:Ce,inputWithButton:Se,fileInputContainer:Be,visuallyHidden:Re,caption:Ne},G=e=>{if(e==null||e==="")return;const n=e instanceof Date?e:new Date(e);if(Number.isNaN(n.getTime()))return;const a=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),N=String(n.getDate()).padStart(2,"0");return`${a}-${r}-${N}`},je=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:n=()=>{},onBlur:a,onFocus:r,name:N="",type:s="text",disabled:d=!1,required:W=!1,readOnly:w,width:M,value:p,defaultValue:g,elementKey:k,label:J="",actionButtonColor:L="secondary",actionButtonContent:j,actionButtonIconLeft:Q,actionButtonIconRight:X,actionButtonOnClick:A,actionButtonDisabled:P=!1,actionButtonAriaLabel:T,selectedFileName:Z,placeholder:ee="",min:te,max:ne,role:ae,"aria-describedby":re,"aria-autocomplete":le,hasErrors:h=!1,errorMessage:E="",noMargin:ie=!1,caption:D,requirementIndicatorMode:oe,optionalLabel:ue})=>{const o=m.useRef(null),O=()=>`${e}-errorMessage`,H=`${e}-caption`,U=M?{maxWidth:M}:{},se=s==="date"&&!d&&!w,c=s==="file",$=!!j&&!!A&&!c,de=j||"Velg fil",ce=()=>{if(!se||!o.current)return;document.activeElement!==o.current&&o.current.focus(),o.current.showPicker?.()},pe=u=>{ce(),r?.(u)},me=()=>{c&&(d||o.current?.click())},fe=u=>{!c||d||(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),o.current?.click())},ge=(()=>{if(c)return{};if(s==="date"){const v=p!==void 0?G(p):void 0,he=p===void 0&&g!==void 0?G(g):void 0;return p!==void 0?{value:v??""}:g!==void 0?{defaultValue:he}:{}}const u=v=>v instanceof Date?String(v.getTime()):v;return p!==void 0?{value:u(p)}:g!==void 0?{defaultValue:u(g)}:{}})(),ve=z([h&&i.hasErrors,s==="date"&&i.dateInput,c&&i.visuallyHidden]),K={name:N,readOnly:w,disabled:d,type:s,role:ae,id:e,min:te,max:ne,onChange:n,onBlur:a,onFocus:pe,placeholder:c?void 0:ee,className:ve||void 0,"aria-describedby":[h&&E?O():null,D?H:null,re].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-required":W||void 0,"aria-autocomplete":je(s)?le:void 0,style:$?void 0:U,...ge};return t.jsxs("div",{className:z([i.inputField,i[s],ie&&i.noMargin]),children:[t.jsxs(qe,{htmlFor:e,children:[J,t.jsx(ye,{required:W,mode:oe,optionalLabel:ue,requiredClassName:i.requiredSymbol}),c&&t.jsxs("div",{className:i.fileInputContainer,onClick:me,onKeyDown:fe,role:"button",tabIndex:d?-1:0,"aria-disabled":d||void 0,children:[t.jsx("span",{className:i.input,children:Z}),t.jsx(Y,{color:L,inputType:"button",onClick:()=>o.current?.click(),content:de,disabled:d||P,"aria-label":T})]})]}),$?t.jsxs("div",{className:i.inputWithButton,style:U,children:[t.jsx("input",{...K,ref:o},k||e),t.jsx(Y,{color:L,inputType:"button",onClick:A,disabled:P,"aria-label":T,iconLeft:Q,iconRight:X,noMargin:!0,children:j})]}):t.jsx("input",{...K,ref:o},k||e),D?t.jsx("p",{className:i.caption,id:H,children:D}):null,h&&E?t.jsx(be,{id:O(),content:E}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"list"'},{value:'"inline"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"required"'},{value:'"optional"'},{value:'"none"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},f=()=>e=>t.jsx(l,{...e}),y={args:{id:"inputField1"},render:f()},b={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[n,a]=m.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},q={render:()=>t.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[t.jsx(l,{id:"inputField-indicator-required",label:"Required mode (required=true)",required:!0,requirementIndicatorMode:"required",placeholder:"Placeholder"}),t.jsx(l,{id:"inputField-indicator-optional",label:"Optional mode (required=false)",required:!1,requirementIndicatorMode:"optional",placeholder:"Placeholder"}),t.jsx(l,{id:"inputField-indicator-none",label:"None mode (required=true)",required:!0,requirementIndicatorMode:"none",placeholder:"Placeholder"})]})},I={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[n,a]=m.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},F={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[n,a]=m.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},V={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[n,a]=m.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},x={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:f()},_={args:{id:"inputField14",label:"File input",type:"file"},render:f()},C={args:{id:"inputField15",label:"File input",type:"file",actionButtonContent:"Legg til fil",selectedFileName:"file.txt",actionButtonColor:"secondary"},render:f()},S={args:{id:"inputField16",label:"Date input without value",type:"date"},render:f()},B={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[n,a]=m.useState(e.value??"");return t.jsx(l,{...e,value:n,onChange:r=>a(r.target.value)})}},R={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:f()};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <InputField id="inputField-indicator-required" label="Required mode (required=true)" required requirementIndicatorMode="required" placeholder="Placeholder" />
      <InputField id="inputField-indicator-optional" label="Optional mode (required=false)" required={false} requirementIndicatorMode="optional" placeholder="Placeholder" />
      <InputField id="inputField-indicator-none" label="None mode (required=true)" required requirementIndicatorMode="none" placeholder="Placeholder" />
    </div>
}`,...q.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    actionButtonContent: "Legg til fil",
    selectedFileName: "file.txt",
    actionButtonColor: "secondary"
  },
  render: Uncontrolled()
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...R.parameters?.docs?.source}}};const Ae=["Default","WithLabelAndValue","RequirementIndicators","RequiredWithLabelAndValue","WithErrors","Readonly","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","InputWithCustomWidth"];export{S as DateInput,B as DateInputWithValue,y as Default,_ as FileInput,C as FileInputWithButtonContentAndSelectedFile,x as InputWithActionButton,R as InputWithCustomWidth,V as Readonly,I as RequiredWithLabelAndValue,q as RequirementIndicators,F as WithErrors,b as WithLabelAndValue,Ae as __namedExportsOrder,Le as default};
