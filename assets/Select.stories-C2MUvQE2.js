import{j as y,r as V}from"./iframe-BWm-Rgin.js";import{S as M}from"./Select-BtLAffdt.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./CheckBoxList--dVM3m9J.js";import"./Header-Bll3-g5Y.js";import"./CheckBoxListItem-DaM8-xUT.js";import"./CheckBoxInput-Y-mK5gos.js";import"./CheckBoxIcon-CzjtnCHT.js";import"./ErrorMessage-CUBWA2ol.js";import"./error-icon-q7FAEQyj.js";import"./Label-DX2rxQXz.js";const N={title:"Example/Select",component:M,tags:["autodocs"],decorators:[(C,a)=>{if(!!a.args.multiple){const t=a.args,[f,W]=V.useState(t.value??t.defaultValue);return y.jsx(C,{...a,args:{...t,value:f,onChange:W}})}else{const t=a.args,[f,W]=V.useState(t.value??t.defaultValue);return y.jsx(C,{...a,args:{...t,value:f,onChange:W}})}}]},e=["Option 1","Option 2",{key:"Option 3",value:"value 3"}],l={args:{id:"select1",options:e}},r={args:{id:"select2",label:"Select with label",options:e}},s={args:{id:"select3",label:"Select with label and selected value",value:"value 3",options:e}},n={args:{id:"select4",label:"Select with label and default value",defaultValue:"value 3",options:e}},o={args:{id:"select5",label:"Select with error",value:"value 3",hasErrors:!0,errorMessage:"Wrong value selected",options:e}},c={args:{id:"select6",label:["Select with ",y.jsx("a",{href:"#select6",children:"link"},"link")," in label"],value:"value 3",options:e}},u={args:{id:"select7",disabled:!0,label:"Disabled select",value:"value 3",options:e}},i={args:{id:"select8",required:!0,label:"Required select",options:e}},d={args:{id:"select9",label:"With placeholder",placeholder:"Select from list",placeholderValue:"notSelected",value:"notSelected",options:e}},p={args:{id:"select10",label:"Content only",value:"value 3",contentOnly:!0,options:e}},m={args:{id:"select11",label:"Key as content",value:"value 3",contentOnly:!0,keyAsContent:!0,options:e}},g={args:{id:"select12",label:"Default content fallback",contentOnly:!0,defaultContent:"No value selected",options:e}},h={args:{id:"select13",label:"Custom width",width:"250px",options:e}},b={args:{id:"select15",label:"Multiple select",multiple:!0,options:e}},v={args:{id:"select16",label:"Multiple selected",multiple:!0,value:["option 1","value 3"],options:e}},S={args:{id:"select17",label:"Multiple default",multiple:!0,defaultValue:["option 1","value 3"],options:e}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select1",
    options
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select4",
    label: "Select with label and default value",
    defaultValue: "value 3",
    options
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select5",
    label: "Select with error",
    value: "value 3",
    hasErrors: true,
    errorMessage: "Wrong value selected",
    options
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select6",
    label: ["Select with ", <a key="link" href="#select6">
        link
      </a>, " in label"],
    value: "value 3",
    options
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select7",
    disabled: true,
    label: "Disabled select",
    value: "value 3",
    options
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select8",
    required: true,
    label: "Required select",
    options
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    id: "select10",
    label: "Content only",
    value: "value 3",
    contentOnly: true,
    options
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select11",
    label: "Key as content",
    value: "value 3",
    contentOnly: true,
    keyAsContent: true,
    options
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select12",
    label: "Default content fallback",
    contentOnly: true,
    defaultContent: "No value selected",
    options
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select13",
    label: "Custom width",
    width: "250px",
    options
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select15",
    label: "Multiple select",
    multiple: true,
    options
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select16",
    label: "Multiple selected",
    multiple: true,
    value: ["option 1", "value 3"],
    options
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "select17",
    label: "Multiple default",
    multiple: true,
    defaultValue: ["option 1", "value 3"],
    options
  }
}`,...S.parameters?.docs?.source}}};const P=["Default","WithLabel","WithSelectedValue","WithDefaultValue","WithError","WithLinkInLabel","Disabled","Required","WithPlaceholder","WithContentOnly","WithContentOnlyAndKeyAsContent","WithContentOnlyAndDefaultContent","WithCustomWidth","Multiple","MultipleWithSelectedValue","MultipleWithDefaultValue"];export{l as Default,u as Disabled,b as Multiple,S as MultipleWithDefaultValue,v as MultipleWithSelectedValue,i as Required,p as WithContentOnly,g as WithContentOnlyAndDefaultContent,m as WithContentOnlyAndKeyAsContent,h as WithCustomWidth,n as WithDefaultValue,o as WithError,r as WithLabel,c as WithLinkInLabel,d as WithPlaceholder,s as WithSelectedValue,P as __namedExportsOrder,N as default};
