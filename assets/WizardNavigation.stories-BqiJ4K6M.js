import{c as g,j as a,L as _}from"./iframe-BHtDog0D.js";import"./preload-helper-PPVm8Dsz.js";const y="_wizardTopnavItem_5ar16_1",I="_wizardTopnavItemContent_5ar16_4",N="_vertical_5ar16_7",S="_stepNumber_5ar16_24",x="_stepName_5ar16_36",z="_active_5ar16_46",b="_finished_5ar16_46",k="_hasErrors_5ar16_46",w="_horizontal_5ar16_64",r={wizardTopnavItem:y,wizardTopnavItemContent:I,vertical:N,stepNumber:S,stepName:x,active:z,finished:b,hasErrors:k,horizontal:w},C="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20aria-label='Ferdig'%20style='fill:%20rgb(23,%20121,%2018);'%3e%3cmask%20id='mask0_1089_7430'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7430)'%3e%3cpath%20d='M5.71427%208.57149L3.80951%2010.4762L8.57141%2015.2382L17.1428%206.66672L15.2381%204.76196L8.57141%2011.4286L5.71427%208.57149Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",h=({step:e,index:p,activeStepId:i,direction:s="vertical"})=>{const t=i===e.id,v=s==="vertical",o=g([r.wizardTopnavItem,t&&r.active,e.finished&&r.finished,e.hasErrors&&r.hasErrors,r[s]]),l=t?"step":void 0,n=()=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:r.stepNumber,children:p+1}),a.jsx("span",{className:r.stepName,children:e.name}),v&&e.finished&&!t&&a.jsx("img",{src:C,alt:"",className:r.checkmarkSymbol})]});return e.link&&Object.keys(e.link).length>0?a.jsx("li",{className:o,children:a.jsx(_,{to:e.link,"aria-current":l,className:r.wizardTopnavItemContent,children:n()})}):a.jsx("li",{className:o,children:a.jsx("span",{"aria-current":l,className:r.wizardTopnavItemContent,children:n()})})};try{h.displayName="Step",h.__docgenInfo={description:"",displayName:"Step",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"StepData"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const E="_wizardTopnavContainer_qiy2o_1",j="_wizardTopnav_qiy2o_1",T="_vertical_qiy2o_6",R="_horizontal_qiy2o_11",m={wizardTopnavContainer:E,wizardTopnav:j,vertical:T,horizontal:R},u=({steps:e,activeStepId:p,direction:i="vertical","aria-label":s})=>{const t=Object.keys(e),o=`I dette skjemaet er det totalt ${t.length} steg som du skal gå igjennom`,l=s?.length?s:o;return a.jsx("nav",{"aria-label":l,className:g([m.wizardTopnavContainer,m[i]]),children:a.jsx("ol",{className:m.wizardTopnav,children:t.map((n,f)=>a.jsx(h,{step:e[n],activeStepId:p,direction:i,index:f},n))})})};try{u.displayName="WizardNavigation",u.__docgenInfo={description:"",displayName:"WizardNavigation",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Record<StepKey, StepData>"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Example/WizardNavigation",component:u,argTypes:{activeStepId:{control:"select",options:["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"]},direction:{control:"radio",options:["vertical","horizontal"]}},tags:["autodocs"]},c={args:{steps:{SignIn:{id:"SignIn",name:"Start",finished:!0,hasErrors:!1},AvailableReportees:{id:"AvailableReportees",name:"Velg hvem du representerer",finished:!0,hasErrors:!1},Import:{id:"Import",name:"Importer fil fra ByggSøk",finished:!1,hasErrors:!0},NextProcessCategory:{id:"NextProcessCategory",name:"Velg søknadstype",finished:!1,hasErrors:!1},Receipt:{id:"Receipt",name:"Velg søknadssystem",finished:!1,hasErrors:!1}},activeStepId:"NextProcessCategory"}},d={args:{steps:Object.fromEntries(["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"].map(e=>[e,{id:e,name:`Step: ${e}`,finished:e==="SignIn"||e==="AvailableReportees",hasErrors:e==="Import",link:{pathname:e,search:window.location.search}}])),activeStepId:"NextProcessCategory"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: {
      SignIn: {
        id: 'SignIn',
        name: 'Start',
        finished: true,
        hasErrors: false
      },
      AvailableReportees: {
        id: 'AvailableReportees',
        name: 'Velg hvem du representerer',
        finished: true,
        hasErrors: false
      },
      Import: {
        id: 'Import',
        name: 'Importer fil fra ByggSøk',
        finished: false,
        hasErrors: true
      },
      NextProcessCategory: {
        id: 'NextProcessCategory',
        name: 'Velg søknadstype',
        finished: false,
        hasErrors: false
      },
      Receipt: {
        id: 'Receipt',
        name: 'Velg søknadssystem',
        finished: false,
        hasErrors: false
      }
    },
    activeStepId: 'NextProcessCategory'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    steps: Object.fromEntries(['SignIn', 'AvailableReportees', 'Import', 'NextProcessCategory', 'Receipt'].map(id => [id, {
      id,
      name: \`Step: \${id}\`,
      finished: id === 'SignIn' || id === 'AvailableReportees',
      hasErrors: id === 'Import',
      link: {
        pathname: id,
        search: window.location.search
      }
    }])) as WizardNavigationProps['steps'],
    activeStepId: 'NextProcessCategory'
  }
}`,...d.parameters?.docs?.source}}};const L=["Default","WithLinks"];export{c as Default,d as WithLinks,L as __namedExportsOrder,A as default};
