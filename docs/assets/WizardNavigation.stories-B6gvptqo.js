import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as S,T as z}from"./ThemeProvider-BUCGweqt.js";import{L as k}from"./chunk-DQRVZFIR-DSGMKMR-.js";import"./iframe-CY8VSDql.js";const w="_wizardTopnavItem_5ar16_1",b="_wizardTopnavItemContent_5ar16_4",C="_vertical_5ar16_7",E="_stepNumber_5ar16_24",j="_stepName_5ar16_36",T="_active_5ar16_46",R="_finished_5ar16_46",V="_hasErrors_5ar16_46",q="_horizontal_5ar16_64",r={wizardTopnavItem:w,wizardTopnavItemContent:b,vertical:C,stepNumber:E,stepName:j,active:T,finished:R,hasErrors:V,horizontal:q},A="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20aria-label='Ferdig'%20style='fill:%20rgb(23,%20121,%2018);'%3e%3cmask%20id='mask0_1089_7430'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7430)'%3e%3cpath%20d='M5.71427%208.57149L3.80951%2010.4762L8.57141%2015.2382L17.1428%206.66672L15.2381%204.76196L8.57141%2011.4286L5.71427%208.57149Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",h=({step:e,index:i,activeStepId:s,direction:t="vertical"})=>{const n=s===e.id,v=t==="vertical",l=S([r.wizardTopnavItem,n&&r.active,e.finished&&r.finished,e.hasErrors&&r.hasErrors,r[t]]),c=n?"step":void 0,o=()=>a.jsxs(a.Fragment,{children:[a.jsx("span",{className:r.stepNumber,children:i+1}),a.jsx("span",{className:r.stepName,children:e.name}),v&&e.finished&&!n&&a.jsx("img",{src:A,alt:"",className:r.checkmarkSymbol})]});return e.link&&Object.keys(e.link).length>0?a.jsx("li",{className:l,children:a.jsx(k,{to:e.link,"aria-current":c,className:r.wizardTopnavItemContent,children:o()})}):a.jsx("li",{className:l,children:a.jsx("span",{"aria-current":c,className:r.wizardTopnavItemContent,children:o()})})};try{h.displayName="Step",h.__docgenInfo={description:"",displayName:"Step",props:{step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"StepData"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const O="_wizardTopnavContainer_qiy2o_1",P="_wizardTopnav_qiy2o_1",L="_vertical_qiy2o_6",W="_horizontal_qiy2o_11",m={wizardTopnavContainer:O,wizardTopnav:P,vertical:L,horizontal:W},u=({steps:e,activeStepId:i,direction:s="vertical","aria-label":t})=>{const n=Object.keys(e),l=`I dette skjemaet er det totalt ${n.length} steg som du skal gå igjennom`,c=t!=null&&t.length?t:l;return a.jsx("nav",{"aria-label":c,className:S([m.wizardTopnavContainer,m[s]]),children:a.jsx("ol",{className:m.wizardTopnav,children:n.map((o,x)=>a.jsx(h,{step:e[o],activeStepId:i,direction:s,index:x},o))})})};try{u.displayName="WizardNavigation",u.__docgenInfo={description:"",displayName:"WizardNavigation",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Record<StepKey, StepData>"}},activeStepId:{defaultValue:null,description:"",name:"activeStepId",required:!0,type:{name:"string | number"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Example/WizardNavigation",component:u,argTypes:{activeStepId:{control:"select",options:["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"]},direction:{control:"radio",options:["vertical","horizontal"]}},tags:["autodocs"],decorators:[(e,i)=>{const{theme:s,...t}=i.args;return a.jsx(z,{theme:s,children:a.jsx(e,{args:t})})}]},d={args:{steps:{SignIn:{id:"SignIn",name:"Start",finished:!0,hasErrors:!1},AvailableReportees:{id:"AvailableReportees",name:"Velg hvem du representerer",finished:!0,hasErrors:!1},Import:{id:"Import",name:"Importer fil fra ByggSøk",finished:!1,hasErrors:!0},NextProcessCategory:{id:"NextProcessCategory",name:"Velg søknadstype",finished:!1,hasErrors:!1},Receipt:{id:"Receipt",name:"Velg søknadssystem",finished:!1,hasErrors:!1}},activeStepId:"NextProcessCategory"}},p={args:{steps:Object.fromEntries(["SignIn","AvailableReportees","Import","NextProcessCategory","Receipt"].map(e=>[e,{id:e,name:`Step: ${e}`,finished:e==="SignIn"||e==="AvailableReportees",hasErrors:e==="Import",link:{pathname:e,search:window.location.search}}])),activeStepId:"NextProcessCategory"}};var g,f,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(f=d.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var y,I,N;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const K=["Default","WithLinks"];export{d as Default,p as WithLinks,K as __namedExportsOrder,U as default};
