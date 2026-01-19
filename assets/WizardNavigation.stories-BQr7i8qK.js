import{b as f,j as a,L as _}from"./iframe-CWY_U3YA.js";import{c as y}from"./checkmark-symbol-BF8iouuA.js";import"./preload-helper-PPVm8Dsz.js";const I="_wizardTopnavItem_5ar16_1",N="_wizardTopnavItemContent_5ar16_4",S="_vertical_5ar16_7",z="_stepNumber_5ar16_24",b="_stepName_5ar16_36",x="_active_5ar16_46",C="_finished_5ar16_46",k="_hasErrors_5ar16_46",w="_horizontal_5ar16_64",r={wizardTopnavItem:I,wizardTopnavItemContent:N,vertical:S,stepNumber:z,stepName:b,active:x,finished:C,hasErrors:k,horizontal:w},u=({step:e,index:p,activeStepId:i,direction:n="vertical"})=>{const t=i===e.id,h=n==="vertical",o=f([r.wizardTopnavItem,t&&r.active,e.finished&&r.finished,e.hasErrors&&r.hasErrors,r[n]]),l=t?"step":void 0,s=()=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:r.stepNumber,children:p+1}),a.jsx("span",{className:r.stepName,children:e.name}),h&&e.finished&&!t&&a.jsx("img",{src:y,alt:"",className:r.checkmarkSymbol})]});return e.link&&Object.keys(e.link).length>0?a.jsx("li",{className:o,children:a.jsx(_,{to:e.link,"aria-current":l,className:r.wizardTopnavItemContent,children:s()})}):a.jsx("li",{className:o,children:a.jsx("span",{"aria-current":l,className:r.wizardTopnavItemContent,children:s()})})};try{u.displayName="Step",u.__docgenInfo={description:"",displayName:"Step",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"StepData"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const E="_wizardTopnavContainer_qiy2o_1",j="_wizardTopnav_qiy2o_1",T="_vertical_qiy2o_6",R="_horizontal_qiy2o_11",m={wizardTopnavContainer:E,wizardTopnav:j,vertical:T,horizontal:R},v=({steps:e,activeStepId:p,direction:i="vertical","aria-label":n})=>{const t=Object.keys(e),o=`I dette skjemaet er det totalt ${t.length} steg som du skal gå igjennom`,l=n?.length?n:o;return a.jsx("nav",{"aria-label":l,className:f([m.wizardTopnavContainer,m[i]]),children:a.jsx("ol",{className:m.wizardTopnav,children:t.map((s,g)=>a.jsx(u,{step:e[s],activeStepId:p,direction:i,index:g},s))})})};try{v.displayName="WizardNavigation",v.__docgenInfo={description:"",displayName:"WizardNavigation",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Record<StepKey, StepData>"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Primitives/WizardNavigation",component:v,argTypes:{activeStepId:{control:"select",options:["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"]},direction:{control:"radio",options:["vertical","horizontal"]}},tags:["autodocs"]},c={args:{steps:{SignIn:{id:"SignIn",name:"Start",finished:!0,hasErrors:!1},AvailableReportees:{id:"AvailableReportees",name:"Velg hvem du representerer",finished:!0,hasErrors:!1},Import:{id:"Import",name:"Importer fil fra ByggSøk",finished:!1,hasErrors:!0},NextProcessCategory:{id:"NextProcessCategory",name:"Velg søknadstype",finished:!1,hasErrors:!1},Receipt:{id:"Receipt",name:"Velg søknadssystem",finished:!1,hasErrors:!1}},activeStepId:"NextProcessCategory"}},d={args:{steps:Object.fromEntries(["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"].map(e=>[e,{id:e,name:`Step: ${e}`,finished:e==="SignIn"||e==="AvailableReportees",hasErrors:e==="Import",link:{pathname:e,search:window.location.search}}])),activeStepId:"NextProcessCategory"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: {
      SignIn: {
        id: "SignIn",
        name: "Start",
        finished: true,
        hasErrors: false
      },
      AvailableReportees: {
        id: "AvailableReportees",
        name: "Velg hvem du representerer",
        finished: true,
        hasErrors: false
      },
      Import: {
        id: "Import",
        name: "Importer fil fra ByggSøk",
        finished: false,
        hasErrors: true
      },
      NextProcessCategory: {
        id: "NextProcessCategory",
        name: "Velg søknadstype",
        finished: false,
        hasErrors: false
      },
      Receipt: {
        id: "Receipt",
        name: "Velg søknadssystem",
        finished: false,
        hasErrors: false
      }
    },
    activeStepId: "NextProcessCategory"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    steps: Object.fromEntries(["SignIn", "AvailableReportees", "Import", "NextProcessCategory", "Receipt"].map(id => [id, {
      id,
      name: \`Step: \${id}\`,
      finished: id === "SignIn" || id === "AvailableReportees",
      hasErrors: id === "Import",
      link: {
        pathname: id,
        search: window.location.search
      }
    }])) as WizardNavigationProps["steps"],
    activeStepId: "NextProcessCategory"
  }
}`,...d.parameters?.docs?.source}}};const O=["Default","WithLinks"];export{c as Default,d as WithLinks,O as __namedExportsOrder,P as default};
