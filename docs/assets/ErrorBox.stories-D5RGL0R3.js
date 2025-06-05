import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t,T as d}from"./ThemeProvider-CIwViPQe.js";import{i as g}from"./info-sign-WhqadNGJ.js";import{H as f}from"./Header-DXwBsvha.js";import"./iframe-CEv5T24E.js";const p="_errorBoxContainer_88ulw_7",_="_messageIn_88ulw_1",x="_warning_88ulw_14",y="_error_88ulw_7",k="_fullScreen_88ulw_22",h="_errorBox_88ulw_7",v="_infoSign_88ulw_38",n={errorBoxContainer:p,messageIn:_,warning:x,error:y,fullScreen:k,errorBox:h,infoSign:v},a=({type:r="warning",fullScreen:o=!1,children:s=""})=>e.jsx("div",{className:t([n.errorBoxContainer,n[r],o&&n.fullScreen]),children:e.jsxs("div",{className:t([n.errorBox,o&&n.fullScreen]),children:[e.jsx("img",{src:g,alt:"",className:n.infoSign}),s]})});try{a.displayName="ErrorBox",a.__docgenInfo={description:"",displayName:"ErrorBox",props:{type:{defaultValue:{value:"warning"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},fullScreen:{defaultValue:{value:"false"},description:"",name:"fullScreen",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Example/ErrorBox",component:a,argTypes:{type:{control:"radio",options:["warning","error"]},fullScreen:{control:"boolean"}},tags:["autodocs"],decorators:[(r,o)=>{const{theme:s,...m}=o.args;return e.jsx(d,{theme:s,children:e.jsx(r,{args:m})})}]},w=r=>e.jsx(a,{...r}),l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(f,{size:2,children:"Du kan ikke signere erklæringen før alle opplysningene er fylt ut:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Du må krysse av for at foretaket erklærer ansvar i henhold til plan- og bygningsloven."}),e.jsx("li",{children:"Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen."})]})]})},render:w};var i,c,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(c=l.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const b=["Default"];export{l as Default,b as __namedExportsOrder,N as default};
