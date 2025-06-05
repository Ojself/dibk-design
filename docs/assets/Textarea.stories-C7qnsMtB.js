import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-4BhRvnXb.js";import{E as Se}from"./ErrorMessage-BJ7i25pt.js";import{a as _e}from"./asterisk-1FdKgIIn.js";import{g as ke}from"./generators-DdMDqxEb.js";import{L as De}from"./Label-qM6ZzA7G.js";import{T as je}from"./ThemeProvider-Dx1BAIvc.js";const Le="_textarea_1596u_1",ze="_requiredSymbol_1596u_4",Ke="_hasErrors_1596u_55",T={textarea:Le,requiredSymbol:ze,hasErrors:Ke},w=({id:e,onChange:f,onBlur:y,name:b="",required:q=!1,readOnly:ye,disabled:be,width:V,resize:W="both",value:r,defaultValue:t,elementKey:Ce,rows:E,label:Te="",contentOnly:we=!1,placeholder:qe="",defaultContent:Ve="","aria-describedby":We,hasErrors:C=!1,errorMessage:R=""})=>{const O=()=>`${e}-errorMessage`,S=!(r!=null&&r.length)&&(t!=null&&t.length)?t:void 0,Ee=Ce||`${e}-${ke(6)}`,Re={...V&&{maxWidth:V},...W&&{resize:W}},Oe={name:b,readOnly:ye,disabled:be,required:q,id:e,onChange:f,onBlur:y,value:S?void 0:r,defaultValue:S||void 0,placeholder:qe,rows:E?parseInt(E,10):void 0,className:C?T.hasErrors:"","aria-describedby":C&&R?O():We,"aria-invalid":C?"true":void 0,style:Re};return a.jsxs("div",{className:T.textarea,children:[a.jsxs(De,{htmlFor:e,children:[Te,q&&a.jsx("img",{src:_e,alt:"",className:T.requiredSymbol})]}),we?a.jsx("span",{children:r||t||Ve}):a.jsx("textarea",{...Oe},Ee),a.jsx(Se,{id:O(),content:R})]})};try{w.displayName="Textarea",w.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: React.FocusEvent<HTMLTextAreaElement>) => void"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},resize:{defaultValue:{value:"both"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"vertical"'},{value:'"horizontal"'},{value:'"both"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},elementKey:{defaultValue:null,description:"",name:"elementKey",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"React.ReactNode"}},contentOnly:{defaultValue:{value:"false"},description:"",name:"contentOnly",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultContent:{defaultValue:{value:""},description:"",name:"defaultContent",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},hasErrors:{defaultValue:{value:"false"},description:"",name:"hasErrors",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"React.ReactNode"}}}}}catch{}const Be={title:"Example/Textarea",component:w,tags:["autodocs"],decorators:[(e,f)=>{const{theme:y,...b}=f.args;return a.jsx(je,{theme:y,children:a.jsx(e,{args:b})})}]},n={args:{onChange:e=>console.log(e.target.value),id:"textarea1"}},l={args:{onChange:e=>console.log(e.target.value),id:"textarea2",value:"Textarea with value"}},o={args:{onChange:e=>console.log(e.target.value),id:"textarea3",defaultValue:"Textarea with default value"}},s={args:{onChange:e=>console.log(e.target.value),id:"textarea4",value:"Textarea with label and value",label:"Textarea with label and value"}},i={args:{onChange:e=>console.log(e.target.value),id:"textarea5",required:!0,label:"Required textarea",value:"Textarea with required value"}},u={args:{onChange:e=>console.log(e.target.value),id:"textarea6",value:"Textarea with link in label",label:["Textarea with ",a.jsx("a",{href:"#textarea6",children:"link"},"link")," in label"]}},d={args:{onChange:e=>console.log(e.target.value),id:"textarea7",value:"Textarea with label, value, errors and error message",label:"Textarea with label, value, errors and error message",hasErrors:!0,errorMessage:"Wrong value"}},c={args:{onChange:e=>console.log(e.target.value),id:"textarea8",readOnly:!0,value:"Read only",label:"Read only"}},g={args:{onChange:e=>console.log(e.target.value),id:"textarea9",disabled:!0,value:"Disabled",label:"Disabled"}},m={args:{onChange:e=>console.log(e.target.value),id:"textarea10",value:"Value for Textarea",label:"Textarea with contentOnly",contentOnly:!0}},p={args:{onChange:e=>console.log(e.target.value),id:"textarea11",label:"Textarea with defaultContent",contentOnly:!0,defaultContent:"Please insert a value"}},h={args:{onChange:e=>console.log(e.target.value),id:"textarea12",value:"Textarea with custom width",width:"320px"}},x={args:{onChange:e=>console.log(e.target.value),id:"textarea13",value:"Textarea with resizing",width:"450px",resize:"vertical"}},v={args:{onChange:e=>console.log(e.target.value),id:"textarea14",value:"Textarea with key",elementKey:"textareaKeyHere"}};var _,k,D;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea1'
  }
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var j,L,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea2',
    value: 'Textarea with value'
  }
}`,...(z=(L=l.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,M,N;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea3',
    defaultValue: 'Textarea with default value'
  }
}`,...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var A,I,H;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea4',
    value: 'Textarea with label and value',
    label: 'Textarea with label and value'
  }
}`,...(H=(I=s.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var P,$,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea5',
    required: true,
    label: 'Required textarea',
    value: 'Textarea with required value'
  }
}`,...(B=($=i.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var F,G,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea6',
    value: 'Textarea with link in label',
    label: ['Textarea with ', <a key="link" href="#textarea6">
        link
      </a>, ' in label']
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea7',
    value: 'Textarea with label, value, errors and error message',
    label: 'Textarea with label, value, errors and error message',
    hasErrors: true,
    errorMessage: 'Wrong value'
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea8',
    readOnly: true,
    value: 'Read only',
    label: 'Read only'
  }
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea9',
    disabled: true,
    value: 'Disabled',
    label: 'Disabled'
  }
}`,...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,le,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea10',
    value: 'Value for Textarea',
    label: 'Textarea with contentOnly',
    contentOnly: true
  }
}`,...(oe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,ie,ue;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea11',
    label: 'Textarea with defaultContent',
    contentOnly: true,
    defaultContent: 'Please insert a value'
  }
}`,...(ue=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,ce,ge;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea12',
    value: 'Textarea with custom width',
    width: '320px'
  }
}`,...(ge=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var me,pe,he;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea13',
    value: 'Textarea with resizing',
    width: '450px',
    resize: 'vertical'
  }
}`,...(he=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var xe,ve,fe;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value),
    id: 'textarea14',
    value: 'Textarea with key',
    elementKey: 'textareaKeyHere'
  }
}`,...(fe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const Fe=["Default","WithValue","WithDefaultValue","WithLabel","Required","WithLinkInLabel","WithError","ReadOnly","Disabled","ContentOnly","ContentOnlyAndDefaultContent","WithCustomWidth","WithCustomWidthAndVerticalResizing","WithCustomElementKey"];export{m as ContentOnly,p as ContentOnlyAndDefaultContent,n as Default,g as Disabled,c as ReadOnly,i as Required,v as WithCustomElementKey,h as WithCustomWidth,x as WithCustomWidthAndVerticalResizing,o as WithDefaultValue,d as WithError,s as WithLabel,u as WithLinkInLabel,l as WithValue,Fe as __namedExportsOrder,Be as default};
