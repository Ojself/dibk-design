import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-Bbc0x-XZ.js";import{a as D,c as d,T as b}from"./ThemeProvider-Jjq4oEH6.js";import{H as S}from"./Header-CRwaI6Zd.js";const j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%3e%3cpath%20fill='%23072938'%20stroke='%23072938'%20stroke-linecap='round'%20stroke-width='3.23'%20d='m3.97%203.57%2017.44%2018.2m-17.44.01L21.41%203.57'/%3e%3c/svg%3e",E="_dialog_1qsqp_19",I="_dialogContainer_1qsqp_33",L="_dialogContent_1qsqp_38",N="_closeButton_1qsqp_45",R="_isSidebar_1qsqp_60",H="_modalInVertical_1qsqp_1",P="_noPadding_1qsqp_74",V="_left_1qsqp_113",B="_modalInHorizontalLeft_1qsqp_1",O="_right_1qsqp_120",T="_modalInHorizontalRight_1qsqp_1",z="_dialogOverlay_1qsqp_128",n={dialog:E,dialogContainer:I,dialogContent:L,closeButton:N,isSidebar:R,modalInVertical:H,noPadding:P,left:V,modalInHorizontalLeft:B,right:O,modalInHorizontalRight:T,dialogOverlay:z},u=({maxWidth:o="none",noPadding:i,closeButton:r,onClickOutside:t,modal:p=!1,attachTo:f,hidden:h=!1,children:y})=>{const l=a.useRef(null),m=a.useRef(null),w=a.useCallback(s=>{s&&D(s)},[]);a.useEffect(()=>{const s=g=>{g.key==="Escape"&&t&&t()},_=g=>{m.current&&!m.current.contains(g.target)&&t()};return document.addEventListener("mousedown",_),document.addEventListener("keydown",s,!1),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("keydown",s,!1)}},[t]),a.useEffect(()=>{l.current&&(l.current.close(),h||(p?l.current.showModal():l.current.show()))},[h,p]);const C=f&&d([n.isSidebar,n[f]]),k={"--max-width":o};return e.jsx("dialog",{className:d([n.dialog,C]),ref:l,children:e.jsx("div",{ref:m,className:n.dialogContainer,style:k,children:e.jsxs("div",{ref:w,className:d([n.dialogContent,i&&n.noPadding]),children:[r&&e.jsx("button",{"aria-label":"Lukk dialog",onClick:t,className:d([n.closeButton,i&&n.noPadding]),children:e.jsx("img",{src:j,alt:""})}),e.jsx("div",{"aria-live":"assertive",role:"dialog",children:y})]})})})};try{u.displayName="Dialog",u.__docgenInfo={description:"",displayName:"Dialog",props:{maxWidth:{defaultValue:{value:"none"},description:"",name:"maxWidth",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!0,type:{name:"() => void"}},modal:{defaultValue:{value:"false"},description:"",name:"modal",required:!1,type:{name:"boolean"}},attachTo:{defaultValue:null,description:"",name:"attachTo",required:!1,type:{name:"string"}},hidden:{defaultValue:{value:"false"},description:"",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Example/Dialog",component:u,argTypes:{attachTo:{control:"select",options:["None","Left","Right"],mapping:{None:null,Left:"left",Right:"right"}}}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(S,{size:1,children:"Dialog title"}),e.jsx("p",{children:"dialog paragraph"})]}),closeButton:!0,modal:!0,onClickOutside:()=>{console.log("clicked outside")}},render:o=>{const[i,r]=a.useState(!1);return e.jsxs(b,{theme:o.theme,children:[e.jsx("button",{onClick:()=>r(!0),children:"Show dialog"}),e.jsx(u,{...o,hidden:!i,onClickOutside:()=>{var t;r(!1),(t=o.onClickOutside)==null||t.call(o)}})]})}};var q,v,x;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <>
        <Header size={1}>Dialog title</Header>
        <p>dialog paragraph</p>
      </>,
    closeButton: true,
    modal: true,
    onClickOutside: () => {
      console.log('clicked outside');
    }
  },
  render: (args: ExtendedArgs) => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    return <ThemeProvider theme={args.theme}>
        <button onClick={() => setShowDialog(true)}>Show dialog</button>
        <Dialog {...args} hidden={!showDialog} onClickOutside={() => {
        setShowDialog(false);
        args.onClickOutside?.();
      }} />
      </ThemeProvider>;
  }
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const J=["Default"];export{c as Default,J as __namedExportsOrder,G as default};
