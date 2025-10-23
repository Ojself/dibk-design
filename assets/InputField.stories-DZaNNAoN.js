import{r as i,j as r,c as B}from"./iframe-BHtDog0D.js";import{a as H}from"./asterisk-1FdKgIIn.js";import{B as pe}from"./Button-DkOXl9dS.js";import{E as P}from"./ErrorMessage-kLU387eS.js";import{L as Y}from"./Label-DD2I3kgp.js";import"./preload-helper-PPVm8Dsz.js";const ce="_inputField_9tnyr_1",me="_noMargin_9tnyr_4",ge="_requiredSymbol_9tnyr_10",ve="_file_9tnyr_17",fe="_input_9tnyr_1",ye="_hasErrors_9tnyr_50",he="_fileInputContainer_9tnyr_62",u={inputField:ce,noMargin:me,requiredSymbol:ge,file:ve,input:fe,hasErrors:ye,fileInputContainer:he},be=e=>{const a=typeof e=="string"?new Date(e):e;if(Number.isNaN(a.getTime()))return String(e??"");const t=String(a.getDate()).padStart(2,"0"),n=String(a.getMonth()+1).padStart(2,"0"),s=a.getFullYear();return`${t}.${n}.${s}`},z=e=>{if(e==null||e==="")return;const a=e instanceof Date?e:new Date(e);if(Number.isNaN(a.getTime()))return;const t=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${t}-${n}-${s}`},Fe=e=>!e||["text","search","url","email","tel","password","number"].includes(e),l=({id:e,onChange:a=()=>{},onBlur:t,name:n="",type:s="text",disabled:G=!1,required:L=!1,readOnly:J,width:M,value:d,defaultValue:c,elementKey:Q,label:U="",contentOnly:X=!1,buttonColor:Z="primary",buttonContent:A,selectedFileName:ee,placeholder:ae="",defaultContent:T="",min:te,max:ne,role:re,"aria-describedby":le,"aria-autocomplete":se,hasErrors:g=!1,errorMessage:v="",noMargin:K=!1})=>{const $=i.useRef(null),k=()=>`${e}-errorMessage`,ue=M?{maxWidth:M}:{},ie=(()=>{if(s==="file")return{};if(s==="date"){const p=d!==void 0?z(d):void 0,de=d===void 0&&c!==void 0?z(c):void 0;return d!==void 0?{value:p??""}:c!==void 0?{defaultValue:de}:{}}const m=p=>p instanceof Date?String(p.getTime()):p;return d!==void 0?{value:m(d)}:c!==void 0?{defaultValue:m(c)}:{}})(),oe={name:n,readOnly:J,disabled:G,required:L,type:s,role:re,id:e,min:te,max:ne,onChange:a,onBlur:t,placeholder:s==="file"?void 0:ae,className:g?u.hasErrors:void 0,"aria-describedby":g&&v?k():le,"aria-invalid":g||void 0,"aria-autocomplete":Fe(s)?se:void 0,style:ue,...ie};if(X){const m=d??c??"",p=s==="date"?m?be(m):T:String(m??"")||T;return r.jsxs("div",{className:B([u.inputField,u[s],K&&u.noMargin]),children:[r.jsxs(Y,{htmlFor:e,children:[U,L&&r.jsx("img",{src:H,alt:"",className:u.requiredSymbol})]}),r.jsx("span",{children:p}),g&&v?r.jsx(P,{id:k(),content:v}):null]})}return r.jsxs("div",{className:B([u.inputField,u[s],K&&u.noMargin]),children:[r.jsxs(Y,{htmlFor:e,children:[U,L&&r.jsx("img",{src:H,alt:"",className:u.requiredSymbol}),s==="file"&&r.jsxs("div",{className:u.fileInputContainer,children:[r.jsx("span",{className:u.input,children:ee}),A&&r.jsx(pe,{color:Z,inputType:"button",onClick:()=>$.current?.click(),content:A})]})]}),r.jsx("input",{...oe,ref:$},Q||e),g&&v?r.jsx(P,{id:k(),content:v}):null]})};try{l.displayName="InputField",l.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Date"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | Date"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"list"'},{value:'"both"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}const De={title:"Example/InputField",component:l,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"]},o=()=>e=>r.jsx(l,{...e}),f={args:{id:"inputField1"},render:o()},y={args:{id:"inputField2",required:!0},render:o()},h={args:{id:"inputField3",value:"Input field value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},b={args:{id:"inputField4",defaultValue:"Input field default value"},render:o()},F={args:{id:"inputField5",value:"Input field value",label:"Input field label"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},I={args:{id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},V={args:{id:"inputField7",value:"Input field value",label:["Input with ",r.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},S={args:{id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},C={args:{id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},x={args:{id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},q={args:{id:"inputField11",value:3,label:"Input with number values",type:"number"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},D={args:{id:"inputField12",value:"Input field value",label:"Input with contentOnly set to true",contentOnly:!0},render:o()},W={args:{id:"inputField13",label:"Input with contentOnly set to true and default content",contentOnly:!0,defaultContent:"Default content"},render:o()},_={args:{id:"inputField14",label:"File input",type:"file"},render:o()},w={args:{id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt"},render:o()},j={args:{id:"inputField16",label:"Date input without value",type:"date"},render:o()},N={args:{id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},E={args:{id:"inputField18",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:e=>{const[a,t]=i.useState(e.value??"");return r.jsx(l,{...e,value:a,onChange:n=>t(n.target.value)})}},O={args:{id:"inputField19",label:"Input with custom width",width:"400px"},render:o()},R={args:{id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:o()};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField1"
  },
  render: Uncontrolled()
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField2",
    required: true
  },
  render: Uncontrolled()
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField3",
    value: "Input field value"
  },
  render: args => {
    const [val, setVal] = useState(args.value ?? "");
    return <InputField {...args} value={val} onChange={e => setVal(e.target.value)} />;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField19",
    label: "Input with custom width",
    width: "400px"
  },
  render: Uncontrolled()
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputField20",
    label: "Input with custom element key",
    elementKey: "inputKeyHere"
  },
  render: Uncontrolled()
}`,...R.parameters?.docs?.source}}};const We=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","NumberInput","ContentOnly","ContentOnlyWithDefaultContent","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{D as ContentOnly,W as ContentOnlyWithDefaultContent,j as DateInput,N as DateInputWithValue,E as DateInputWithValueAndError,f as Default,x as Disabled,_ as FileInput,w as FileInputWithButtonContentAndSelectedFile,R as InputWithCustomElementKey,O as InputWithCustomWidth,q as NumberInput,C as Readonly,y as Required,I as RequiredWithLabelAndValue,b as WithDefaultValue,S as WithErrors,F as WithLabelAndValue,V as WithLinkInLabel,h as WithValue,We as __namedExportsOrder,De as default};
