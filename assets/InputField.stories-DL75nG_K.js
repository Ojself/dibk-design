import{r as u,c as ae,j as a,F as Ce}from"./iframe-CTEYoQnF.js";import{B as te}from"./Button-C5eb0tJH.js";import{E as _e}from"./ErrorMessage-Ctv4irTQ.js";import{L as We}from"./Label-ByuhNtGl.js";import"./preload-helper-PPVm8Dsz.js";import"./error-icon-DtteE0GG.js";const Be="_inputField_1l5io_5",Re="_requiredSymbol_1l5io_5",De="_file_1l5io_15",je="_input_1l5io_5",ke="_hasErrors_1l5io_55",we="_dateInput_1l5io_68",Ee="_inputWithButton_1l5io_86",Ne="_fileInputContainer_1l5io_94",Le="_visuallyHidden_1l5io_107",Me="_caption_1l5io_118",i={inputField:Be,requiredSymbol:Re,file:De,input:je,hasErrors:ke,dateInput:we,inputWithButton:Ee,fileInputContainer:Ne,visuallyHidden:Le,caption:Me},ne=e=>{if(e==null||e==="")return;const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))return;const n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),M=String(t.getDate()).padStart(2,"0");return`${n}-${r}-${M}`},Ae=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:t=()=>{},onBlur:n,onFocus:r,name:M="",type:c="text",disabled:p=!1,required:H=!1,readOnly:U,width:K,value:v,defaultValue:g,elementKey:O,label:re="",actionButtonColor:$="secondary",actionButtonContent:A,actionButtonIconLeft:le,actionButtonIconRight:ie,actionButtonOnClick:z,actionButtonDisabled:Y=!1,actionButtonAriaLabel:G,selectedFileName:ue,placeholder:oe="",min:se,max:de,role:ce,"aria-describedby":pe,"aria-autocomplete":me,hasErrors:h=!1,errorMessage:P="",noMargin:ve=!1,caption:T,requirementIndicatorMode:ge,optionalLabel:fe})=>{const o=u.useRef(null),J=()=>`${e}-errorMessage`,Q=`${e}-caption`,X=K?{maxWidth:K}:{},he=c==="date"&&!p&&!U,m=c==="file",Z=!!A&&!!z&&!m,be=A||"Velg fil",Ie=()=>{if(!he||!o.current)return;document.activeElement!==o.current&&o.current.focus(),o.current.showPicker?.()},ye=s=>{Ie(),r?.(s)},Fe=()=>{m&&(p||o.current?.click())},Ve=s=>{!m||p||(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),o.current?.click())},qe=(()=>{if(m)return{};if(c==="date"){const f=v!==void 0?ne(v):void 0,Se=v===void 0&&g!==void 0?ne(g):void 0;return v!==void 0?{value:f??""}:g!==void 0?{defaultValue:Se}:{}}const s=f=>f instanceof Date?String(f.getTime()):f;return v!==void 0?{value:s(v)}:g!==void 0?{defaultValue:s(g)}:{}})(),xe=ae([h&&i.hasErrors,c==="date"&&i.dateInput,m&&i.visuallyHidden]),ee={name:M,readOnly:U,disabled:p,type:c,role:ce,id:e,min:se,max:de,onChange:t,onBlur:n,onFocus:ye,placeholder:m?void 0:oe,className:xe||void 0,"aria-describedby":[h&&P?J():null,T?Q:null,pe].filter(Boolean).join(" ").trim()||void 0,"aria-invalid":h||void 0,"aria-required":H||void 0,"aria-autocomplete":Ae(c)?me:void 0,style:Z?void 0:X,...qe};return a.jsxs("div",{className:ae([i.inputField,i[c],ve&&i.noMargin]),children:[a.jsxs(We,{htmlFor:e,children:[re,a.jsx(Ce,{required:H,mode:ge,optionalLabel:fe,requiredClassName:i.requiredSymbol}),m&&a.jsxs("div",{className:i.fileInputContainer,onClick:Fe,onKeyDown:Ve,role:"button",tabIndex:p?-1:0,"aria-disabled":p||void 0,children:[a.jsx("span",{className:i.input,children:ue}),a.jsx(te,{color:$,inputType:"button",onClick:()=>o.current?.click(),content:be,disabled:p||Y,"aria-label":G})]})]}),Z?a.jsxs("div",{className:i.inputWithButton,style:X,children:[a.jsx("input",{...ee,ref:o},O||e),a.jsx(te,{color:$,inputType:"button",onClick:z,disabled:Y,"aria-label":G,iconLeft:le,iconRight:ie,noMargin:!0,children:A})]}):a.jsx("input",{...ee,ref:o},O||e),T?a.jsx("p",{className:i.caption,id:Q,children:T}):null,h&&P?a.jsx(_e,{id:J(),content:P}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},actionButtonColor:{defaultValue:{value:"secondary"},description:"",name:"actionButtonColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},actionButtonContent:{defaultValue:null,description:"",name:"actionButtonContent",required:!1,type:{name:"string"}},actionButtonIconLeft:{defaultValue:null,description:"",name:"actionButtonIconLeft",required:!1,type:{name:"React.ReactNode"}},actionButtonIconRight:{defaultValue:null,description:"",name:"actionButtonIconRight",required:!1,type:{name:"React.ReactNode"}},actionButtonOnClick:{defaultValue:null,description:"",name:"actionButtonOnClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},actionButtonDisabled:{defaultValue:{value:"false"},description:"",name:"actionButtonDisabled",required:!1,type:{name:"boolean"}},actionButtonAriaLabel:{defaultValue:null,description:"",name:"actionButtonAriaLabel",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"React.ReactNode"}},requirementIndicatorMode:{defaultValue:null,description:"",name:"requirementIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"required"'},{value:'"optional"'}]}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}}}}}catch{}const $e={title:"Primitives/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},d=()=>e=>a.jsx(l,{...e}),b={args:{id:"inputField1"},render:d()},I={args:{id:"inputField2",required:!0},render:d()},y={render:()=>a.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[a.jsx(l,{id:"inputField-indicator-required",label:"Required mode (required=true)",required:!0,requirementIndicatorMode:"required",placeholder:"Placeholder"}),a.jsx(l,{id:"inputField-indicator-optional",label:"Optional mode (required=false)",required:!1,requirementIndicatorMode:"optional",placeholder:"Placeholder"}),a.jsx(l,{id:"inputField-indicator-none",label:"None mode (required=true)",required:!0,requirementIndicatorMode:"none",placeholder:"Placeholder"})]})},F={args:{id:"inputField3",value:"Input field value"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},V={args:{id:"inputField4",defaultValue:"Input field default value"},render:d()},q={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},x={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},S={args:{id:"inputField7",value:"Input field value",label:["Input with ",a.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},C={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Feil input"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},_={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},W={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},B={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},R={args:{id:"inputField14",label:"Input with action button",placeholder:"Placeholder text",actionButtonContent:"Action button",actionButtonOnClick:()=>console.log("Action button clicked")},render:d()},D={args:{id:"inputField14",label:"File input",type:"file"},render:d()},j={args:{id:"inputField15",label:"File input",type:"file",actionButtonContent:"Legg til fil",selectedFileName:"file.txt",actionButtonColor:"secondary"},render:d()},k={args:{id:"inputField16",label:"Date input without value",type:"date"},render:d()},w={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},E={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[t,n]=u.useState(e.value??"");return a.jsx(l,{...e,value:t,onChange:r=>n(r.target.value)})}},N={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:d()},L={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:d()};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField2",
    required: true
  },
  render: Uncontrolled()
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <InputField id="inputField-indicator-required" label="Required mode (required=true)" required requirementIndicatorMode="required" placeholder="Placeholder" />
      <InputField id="inputField-indicator-optional" label="Optional mode (required=false)" required={false} requirementIndicatorMode="optional" placeholder="Placeholder" />
      <InputField id="inputField-indicator-none" label="None mode (required=true)" required requirementIndicatorMode="none" placeholder="Placeholder" />
    </div>
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField4",
    defaultValue: "Input field default value" // <-- fixed
  },
  render: Uncontrolled()
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField5",
    value: "Input field value",
    label: "Input field label"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "Input with action button",
    placeholder: "Placeholder text",
    actionButtonContent: "Action button",
    actionButtonOnClick: () => console.log("Action button clicked")
  },
  render: Uncontrolled()
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField14",
    label: "File input",
    type: "file"
  },
  render: Uncontrolled()
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField15",
    label: "File input",
    type: "file",
    actionButtonContent: "Legg til fil",
    selectedFileName: "file.txt",
    actionButtonColor: "secondary"
  },
  render: Uncontrolled()
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField16",
    label: "Date input without value",
    type: "date"
  },
  render: Uncontrolled()
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...L.parameters?.docs?.source}}};const ze=["Default","Required","RequirementIndicators","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","InputWithActionButton","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{k as DateInput,w as DateInputWithValue,E as DateInputWithValueAndError,b as Default,W as Disabled,D as FileInput,j as FileInputWithButtonContentAndSelectedFile,R as InputWithActionButton,L as InputWithCustomElementKey,N as InputWithCustomWidth,B as NumberInput,_ as Readonly,I as Required,x as RequiredWithLabelAndValue,y as RequirementIndicators,V as WithDefaultValue,C as WithErrors,q as WithLabelAndValue,S as WithLinkInLabel,F as WithValue,ze as __namedExportsOrder,$e as default};
