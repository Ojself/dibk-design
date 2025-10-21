import{c as d,j as e}from"./iframe-C-jjyl2S.js";import"./preload-helper-PPVm8Dsz.js";const p="_table_miy9l_1",a={table:p,"captionSide-top":"_captionSide-top_miy9l_14","captionSide-bottom":"_captionSide-bottom_miy9l_18","captionAlign-left":"_captionAlign-left_miy9l_22","captionAlign-center":"_captionAlign-center_miy9l_25","captionAlign-right":"_captionAlign-right_miy9l_28"},m=t=>t&&["left","center","right"].includes(t)?a[`captionAlign-${t}`]:a["captionAlign-left"],h=t=>t&&["top","bottom"].includes(t)?a[`captionSide-${t}`]:a["captionSide-top"],r=({captionAlign:t,captionSide:l,children:o})=>{const s=d([a.table,m(t),h(l)]);return e.jsx("table",{className:s,children:o})};try{r.displayName="Table",r.__docgenInfo={description:"",displayName:"Table",props:{captionAlign:{defaultValue:null,description:"",name:"captionAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},captionSide:{defaultValue:null,description:"",name:"captionSide",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const b={title:"Example/Table",component:r,argTypes:{captionSide:{control:"radio",options:["top","bottom"]},captionAlign:{control:"radio",options:["left","center","right"]}},tags:["autodocs"]},c=e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Table header 1"}),e.jsx("th",{children:"Table header 2"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Table data 1"}),e.jsx("td",{children:"Table data 2"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Table data 3"}),e.jsx("td",{children:"Table data 4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Table data 5"}),e.jsx("td",{children:"Table data 6"})]})]})]}),n={args:{children:c}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("caption",{children:"Table caption"}),c]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: rows
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <caption>Table caption</caption>
        {rows}
      </>
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","WithCaption"];export{n as Default,i as WithCaption,_ as __namedExportsOrder,b as default};
