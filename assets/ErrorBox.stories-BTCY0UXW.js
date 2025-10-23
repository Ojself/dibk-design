import{j as e,c as s}from"./iframe-BHtDog0D.js";import{i}from"./info-sign-WhqadNGJ.js";import{H as c}from"./Header-DH3Dqcy1.js";import"./preload-helper-PPVm8Dsz.js";const u="_errorBoxContainer_88ulw_7",m="_messageIn_88ulw_1",d="_warning_88ulw_14",f="_error_88ulw_7",g="_fullScreen_88ulw_22",p="_errorBox_88ulw_7",_="_infoSign_88ulw_38",r={errorBoxContainer:u,messageIn:m,warning:d,error:f,fullScreen:g,errorBox:p,infoSign:_},l=({type:n="warning",fullScreen:a=!1,children:t=""})=>e.jsx("div",{className:s([r.errorBoxContainer,r[n],a&&r.fullScreen]),children:e.jsxs("div",{className:s([r.errorBox,a&&r.fullScreen]),children:[e.jsx("img",{src:i,alt:"",className:r.infoSign}),t]})});try{l.displayName="ErrorBox",l.__docgenInfo={description:"",displayName:"ErrorBox",props:{type:{defaultValue:{value:"warning"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},fullScreen:{defaultValue:{value:"false"},description:"",name:"fullScreen",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Example/ErrorBox",component:l,argTypes:{type:{control:"radio",options:["warning","error"]},fullScreen:{control:"boolean"}},tags:["autodocs"]},x=n=>e.jsx(l,{...n}),o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{size:2,children:"Du kan ikke signere erklæringen før alle opplysningene er fylt ut:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven."}),e.jsx("li",{children:"Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen."})]})]})},render:x};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Header size={2}>
          Du kan ikke signere erklæringen før alle opplysningene er fylt ut:
        </Header>
        <ul>
          <li>
            Du må krysse av for at foretaket erklærer ansvar i henhold til plan-
            og bygningsloven.
          </li>
          <li>
            Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.
          </li>
        </ul>
      </>
  },
  render
}`,...o.parameters?.docs?.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,S as default};
