import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-4BhRvnXb.js";import{B as da}from"./Button-B4LsxDDn.js";import{L as pa}from"./Label-qM6ZzA7G.js";import{E as ca}from"./ErrorMessage-BJ7i25pt.js";import{g as ga}from"./generators-DdMDqxEb.js";import{c as ma,T as fa}from"./ThemeProvider-Dx1BAIvc.js";import{a as va}from"./asterisk-1FdKgIIn.js";import"./chunk-DQRVZFIR-Bwt_kJ6q.js";const ha="_inputField_17rmz_1",ya="_noMargin_17rmz_4",ba="_requiredSymbol_17rmz_10",Ca="_file_17rmz_17",Fa="_input_17rmz_1",Ia="_hasErrors_17rmz_50",qa="_fileInputContainer_17rmz_62",r={inputField:ha,noMargin:ya,requiredSymbol:ba,file:Ca,input:Fa,hasErrors:Ia,fileInputContainer:qa},_=({id:e,onChange:x,onBlur:D,name:w="",type:o="text",disabled:He=!1,required:R=!1,readOnly:Pe,width:L,value:E,defaultValue:O,elementKey:Ye,label:Ge="",contentOnly:Je=!1,buttonColor:Qe="primary",buttonContent:M,selectedFileName:Ue,placeholder:Xe="",defaultContent:Ze="",min:ea,max:aa,role:na,"aria-describedby":ta,"aria-autocomplete":ra,hasErrors:N=!1,errorMessage:j="",noMargin:la=!1})=>{const oa=t=>{const l=new Date(t);return`${String(l.getDate()).padStart(2,"0")}.${String(l.getMonth()+1).padStart(2,"0")}.${l.getFullYear()}`},sa=(t,l)=>o==="date"?t?oa(t):l:t||l,k=()=>`${e}-errorMessage`,ua=L?{maxWidth:L}:{},ia={name:w,readOnly:Pe,disabled:He,required:R,type:o,role:na,id:e,min:ea,max:aa,onChange:x,onBlur:D,...E!==void 0?{value:E}:O!==void 0?{defaultValue:O}:{},placeholder:Xe,className:N?r.hasErrors:void 0,"aria-describedby":N&&j?k():ta,"aria-invalid":N?"true":void 0,"aria-autocomplete":ra||void 0,style:ua};return n.jsxs("div",{className:ma([r.inputField,r[o],la&&r.noMargin]),children:[n.jsxs(pa,{htmlFor:e,children:[Ge,R&&n.jsx("img",{src:va,alt:"",className:r.requiredSymbol}),o==="file"&&n.jsxs("div",{className:r.fileInputContainer,children:[n.jsx("span",{className:r.input,children:Ue}),M&&n.jsx(da,{color:Qe,inputType:"button",onClick:()=>{const t=document==null?void 0:document.getElementById(e);t==null||t.click()},content:M})]})]}),Je?n.jsx("span",{children:sa(E??O,Ze)}):n.jsx("input",{...ia},Ye||`${e}-${ga(6)}`),n.jsx(ca,{id:k(),content:j})]})};try{_.displayName="InputField",_.__docgenInfo={description:"",displayName:"InputField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLInputElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"primary"'}]}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"string"}},selectedFileName:{defaultValue:null,description:"",name:"selectedFileName",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:"",name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"inline"'},{value:'"list"'}]}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}},noMargin:{defaultValue:{value:"false"},description:"",name:"noMargin",required:!1,type:{name:"boolean"}}}}}catch{}const Na={title:"Example/InputField",component:_,argTypes:{"aria-autocomplete":{control:"select",options:["none","inline","list","both"]}},tags:["autodocs"],decorators:[(e,x)=>{const{theme:D,...w}=x.args;return n.jsx(fa,{theme:D,children:n.jsx(e,{args:w})})}]},a=e=>n.jsx(_,{...e}),s={args:{onChange:e=>console.log(e.target.value),id:"inputField1"},render:a},u={args:{onChange:e=>console.log(e.target.value),id:"inputField2",required:!0},render:a},i={args:{onChange:e=>console.log(e.target.value),id:"inputField3",value:"Input field value"},render:a},d={args:{onChange:e=>console.log(e.target.value),id:"inputField4",value:"Input field default value"},render:a},p={args:{onChange:e=>console.log(e.target.value),id:"inputField5",value:"Input field value",label:"Input field label"},render:a},c={args:{onChange:e=>console.log(e.target.value),id:"inputField6",value:"Input field value",label:"Input field label",required:!0},render:a},g={args:{onChange:e=>console.log(e.target.value),id:"inputField7",value:"Input field value",label:["Input with ",n.jsx("a",{href:"#label-link",children:"link"},"labelLink")," in label"]},render:a},m={args:{onChange:e=>console.log(e.target.value),id:"inputField8",value:"Input field value",label:"Input with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"},render:a},f={args:{onChange:e=>console.log(e.target.value),id:"inputField9",value:"Input field value",label:"Readonly input",readOnly:!0},render:a},v={args:{onChange:e=>console.log(e.target.value),id:"inputField10",value:"Input field value",label:"Disabled input",disabled:!0},render:a},h={args:{onChange:e=>console.log(e.target.value),id:"inputField11",value:"3",label:"Input with number values",type:"number"},render:a},y={args:{onChange:e=>console.log(e.target.value),id:"inputField12",value:"Input field value",label:"Input with contentOnly set to true",contentOnly:!0},render:a},b={args:{onChange:e=>console.log(e.target.value),id:"inputField13",label:"Input with contentOnly set to true and default content",contentOnly:!0,defaultContent:"Default content"},render:a},C={args:{onChange:e=>console.log(e.target.value),id:"inputField14",label:"File input",type:"file"},render:a},F={args:{onChange:e=>console.log(e.target.value),id:"inputField15",label:"File input",type:"file",buttonContent:"Legg til fil",selectedFileName:"file.txt"},render:a},I={args:{onChange:e=>console.log(e.target.value),id:"inputField16",label:"Date input without value",type:"date"},render:a},q={args:{onChange:e=>console.log(e.target.value),id:"inputField17",label:"Date input with value",value:"2020-05-10",type:"date"},render:a},V={args:{onChange:e=>console.log(e.target.value),id:"inputField17",label:"Date input with error",value:"2020-05-10",type:"date",hasErrors:!0,errorMessage:"Wrong date value"},render:a},S={args:{onChange:e=>console.log(e.target.value),id:"inputField19",label:"Input with custom width",width:"400px"},render:a},W={args:{onChange:e=>console.log(e.target.value),id:"inputField20",label:"Input with custom element key",elementKey:"inputKeyHere"},render:a};var A,K,T;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField1'
  },
  render
}`,...(T=(K=s.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var z,B,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField2',
    required: true
  },
  render
}`,...($=(B=u.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var H,P,Y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField3',
    value: 'Input field value'
  },
  render
}`,...(Y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var G,J,Q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField4',
    value: 'Input field default value'
  },
  render
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField5',
    value: 'Input field value',
    label: 'Input field label'
  },
  render
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField6',
    value: 'Input field value',
    label: 'Input field label',
    required: true
  },
  render
}`,...(ne=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField7',
    value: 'Input field value',
    label: ['Input with ', <a key="labelLink" href="#label-link">
        link
      </a>, ' in label']
  },
  render
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,se,ue;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField8',
    value: 'Input field value',
    label: 'Input with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value'
  },
  render
}`,...(ue=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ie,de,pe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField9',
    value: 'Input field value',
    label: 'Readonly input',
    readOnly: true
  },
  render
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ge,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField10',
    value: 'Input field value',
    label: 'Disabled input',
    disabled: true
  },
  render
}`,...(me=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,ve,he;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField11',
    value: '3',
    label: 'Input with number values',
    type: 'number'
  },
  render
}`,...(he=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ye,be,Ce;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField12',
    value: 'Input field value',
    label: 'Input with contentOnly set to true',
    contentOnly: true
  },
  render
}`,...(Ce=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Fe,Ie,qe;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField13',
    label: 'Input with contentOnly set to true and default content',
    contentOnly: true,
    defaultContent: 'Default content'
  },
  render
}`,...(qe=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Ve,Se,We;C.parameters={...C.parameters,docs:{...(Ve=C.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField14',
    label: 'File input',
    type: 'file'
  },
  render
}`,...(We=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:We.source}}};var _e,xe,De;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField15',
    label: 'File input',
    type: 'file',
    buttonContent: 'Legg til fil',
    selectedFileName: 'file.txt'
  },
  render
}`,...(De=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var we,Ee,Oe;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField16',
    label: 'Date input without value',
    type: 'date'
  },
  render
}`,...(Oe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Ne,Re,Le;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with value',
    value: '2020-05-10',
    type: 'date'
  },
  render
}`,...(Le=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var Me,je,ke;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField17',
    label: 'Date input with error',
    value: '2020-05-10',
    type: 'date',
    hasErrors: true,
    errorMessage: 'Wrong date value'
  },
  render
}`,...(ke=(je=V.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ae,Ke,Te;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField19',
    label: 'Input with custom width',
    width: '400px'
  },
  render
}`,...(Te=(Ke=S.parameters)==null?void 0:Ke.docs)==null?void 0:Te.source}}};var ze,Be,$e;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'inputField20',
    label: 'Input with custom element key',
    elementKey: 'inputKeyHere'
  },
  render
}`,...($e=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};const Ra=["Default","Required","WithValue","WithDefaultValue","WithLabelAndValue","RequiredWithLabelAndValue","WithLinkInLabel","WithErrors","Readonly","Disabled","Number","ContentOnly","ContentOnlyWithDefaultContent","FileInput","FileInputWithButtonContentAndSelectedFile","DateInput","DateInputWithValue","DateInputWithValueAndError","InputWithCustomWidth","InputWithCustomElementKey"];export{y as ContentOnly,b as ContentOnlyWithDefaultContent,I as DateInput,q as DateInputWithValue,V as DateInputWithValueAndError,s as Default,v as Disabled,C as FileInput,F as FileInputWithButtonContentAndSelectedFile,W as InputWithCustomElementKey,S as InputWithCustomWidth,h as Number,f as Readonly,u as Required,c as RequiredWithLabelAndValue,d as WithDefaultValue,m as WithErrors,p as WithLabelAndValue,g as WithLinkInLabel,i as WithValue,Ra as __namedExportsOrder,Na as default};
