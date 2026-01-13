import{j as S,r as W}from"./iframe-D-wun3FS.js";import{S as V}from"./Select-D_jtOI_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7cIzlbd.js";import"./index-CkGu_gum.js";import"./asterisk-1FdKgIIn.js";import"./ErrorMessage-DTOH58zA.js";import"./error-icon-q7FAEQyj.js";import"./Label-BidrN6wp.js";const R={title:"Example/Select",component:V,tags:["autodocs"],decorators:[(f,l)=>{if(!!l.args.multiple){const a=l.args,[b,v]=W.useState(a.value??a.defaultValue);return S.jsx(f,{...l,args:{...a,value:b,onChange:v}})}else{const a=l.args,[b,v]=W.useState(a.value??a.defaultValue);return S.jsx(f,{...l,args:{...a,value:b,onChange:v}})}}]},e=["Option 1","Option 2",{key:"Option 3",value:"value 3"}],t={args:{id:"select1",options:e}},r={args:{id:"select2",label:"Select with label",options:e}},s={args:{id:"select3",label:"Select with label and selected value",value:"value 3",options:e}},o={args:{id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:e}},n={args:{id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:e}},c={args:{id:"select6",label:["Select with ",S.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:e}},i={args:{id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:e}},u={args:{id:"select8",required:!0,label:"Required select",options:e}},d={args:{id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:e}},p={args:{id:"select13",label:"Custom width",width:"250px",options:e}},m={args:{id:"select15",label:"Multiple select",multiple:!0,options:e}},g={args:{id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:e}},h={args:{id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:e}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select1",
    options
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select2",
    label: "Select with label",
    options
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select3",
    label: "Select with label and selected value",
    value: "value 3",
    options
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select4",
    label: "Select with label and default value",
    defaultValue: "value 3",
    options
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select5",
    label: "Select with error",
    value: "value 3",
    hasErrors: true,
    errorMessage: "Wrong value selected",
    options
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select6",
    label: ["Select with ", <a key="link" href="#select6">
        link
      </a>, " in label"],
    value: "value 3",
    options
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select7",
    disabled: true,
    label: "Disabled select",
    value: "value 3",
    options
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select8",
    required: true,
    label: "Required select",
    options
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select9",
    label: "With placeholder",
    placeholder: "Select from list",
    placeholderValue: "notSelected",
    value: "notSelected",
    options
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select13",
    label: "Custom width",
    width: "250px",
    options
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select15",
    label: "Multiple select",
    multiple: true,
    options
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select16",
    label: "Multiple selected",
    multiple: true,
    value: ["option 1", "value 3"],
    options
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select17",
    label: "Multiple default",
    multiple: true,
    defaultValue: ["option 1", "value 3"],
    options
  }
}`,...h.parameters?.docs?.source}}};const O=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{t as Default,i as Disabled,m as Multiple,h as MultipleWithDefaultValue,g as MultipleWithSelectedValue,u as Required,p as WithCustomWidth,o as WithDefaultValue,n as WithError,r as WithLabel,c as WithLinkInLabel,d as WithPlaceholder,s as WithSelectedValue,O as __namedExportsOrder,R as default};
