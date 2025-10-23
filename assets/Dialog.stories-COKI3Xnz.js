import{r as n,a as C,c as i,j as e}from"./iframe-BHtDog0D.js";import{H as k}from"./Header-DH3Dqcy1.js";import{B as z}from"./Button-DkOXl9dS.js";import"./preload-helper-PPVm8Dsz.js";const D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%3e%3cpath%20fill='%23072938'%20stroke='%23072938'%20stroke-linecap='round'%20stroke-width='3.23'%20d='m3.97%203.57%2017.44%2018.2m-17.44.01L21.41%203.57'/%3e%3c/svg%3e",S="_dialog_psz2f_19",b="_dialogContainer_psz2f_36",j="_dialogContent_psz2f_41",B="_closeButton_psz2f_48",R="_isSidebar_psz2f_63",E="_modalInVertical_psz2f_1",I="_noPadding_psz2f_77",L="_left_psz2f_116",N="_modalInHorizontalLeft_psz2f_1",H="_right_psz2f_123",V="_modalInHorizontalRight_psz2f_1",O="_dialogOverlay_psz2f_131",t={dialog:S,dialogContainer:b,dialogContent:j,closeButton:B,isSidebar:R,modalInVertical:E,noPadding:I,left:L,modalInHorizontalLeft:N,right:H,modalInHorizontalRight:V,dialogOverlay:O},d=({maxWidth:c="none",noPadding:a,closeButton:u,onClickOutside:o,modal:f=!0,attachTo:p,hidden:h=!1,children:y})=>{const s=n.useRef(null),g=n.useRef(null),x=n.useCallback(l=>{l&&C(l)},[]);n.useEffect(()=>{const l=m=>{m.key==="Escape"&&o&&o()},_=m=>{g.current&&!g.current.contains(m.target)&&o()};return document.addEventListener("mousedown",_),document.addEventListener("keydown",l,!1),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("keydown",l,!1)}},[o]),n.useEffect(()=>{s.current&&(s.current.close(),h||(f?s.current.showModal():s.current.show()))},[h,f]);const v=p&&i([t.isSidebar,t[p]]),w={"--max-width":c};return e.jsx("dialog",{className:i([t.dialog,v]),ref:s,children:e.jsx("div",{ref:g,className:t.dialogContainer,style:w,children:e.jsxs("div",{ref:x,className:i([t.dialogContent,a&&t.noPadding]),children:[u&&e.jsx("button",{type:"button","aria-label":"Lukk dialog",onClick:o,className:i([t.closeButton,a&&t.noPadding]),children:e.jsx("img",{src:D,alt:""})}),e.jsx("div",{"aria-live":"assertive",role:"dialog",children:y})]})})})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{maxWidth:{defaultValue:{value:"none"},description:"",name:"maxWidth",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!0,type:{name:"() => void"}},modal:{defaultValue:{value:"true"},description:"",name:"modal",required:!1,type:{name:"boolean"}},attachTo:{defaultValue:null,description:"",name:"attachTo",required:!1,type:{name:"string"}},hidden:{defaultValue:{value:"false"},description:"",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"Example/Dialog",component:d,tags:["autodocs"],argTypes:{attachTo:{control:"select",options:["None","Left","Right"],mapping:{None:null,Left:"left",Right:"right"}}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(k,{size:1,children:"Dialog title"}),e.jsx("p",{children:"Dialog paragraph"})]}),closeButton:!0,modal:!0,onClickOutside:()=>{console.log("clicked outside")}},render:function(a){const[u,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(z,{onClick:()=>o(!0),children:"Show dialog"}),e.jsx(d,{...a,hidden:!u,onClickOutside:()=>{o(!1),a.onClickOutside()}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Header size={1}>Dialog title</Header>
        <p>Dialog paragraph</p>
      </>,
    closeButton: true,
    modal: true,
    onClickOutside: () => {
      console.log("clicked outside");
    }
  },
  render: function Render(args) {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    return <>
        <Button onClick={() => setShowDialog(true)}>Show dialog</Button>
        <Dialog {...args} hidden={!showDialog} onClickOutside={() => {
        setShowDialog(false);
        (args.onClickOutside as () => void)();
      }} />
      </>;
  }
}`,...r.parameters?.docs?.source}}};const A=["Default"];export{r as Default,A as __namedExportsOrder,W as default};
