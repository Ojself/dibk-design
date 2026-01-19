import{r as i,b as I,j as e}from"./iframe-CWY_U3YA.js";import{B as ue}from"./Button-sGzvj_LY.js";import{C as ke}from"./CheckBoxInput-j8frGoEI.js";import{L as Ce}from"./LoadingAnimation-DQxqPunV.js";import{R as Re}from"./RadioButtonInput-07Mh3Cxl.js";import{S as Ie}from"./Select-BCb_j3M5.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-DMU-x4Xn.js";import"./RadioButtonIcon-9W_14z8x.js";import"./index-CGwK88Fz.js";import"./index-BslzcISl.js";import"./ErrorMessage-woVFdiS-.js";import"./error-icon-q7FAEQyj.js";import"./Label-tkMhUEUn.js";const qe="_table_1qdja_1",Pe="_thButton_1qdja_21",ze="_sortable_1qdja_29",Le="_label_1qdja_39",Me="_sortIndicators_1qdja_43",Be="_sortArrow_1qdja_51",Ae="_activeArrow_1qdja_58",Te="_evenRow_1qdja_62",Ve="_oddRow_1qdja_65",De="_loadingRow_1qdja_78",Ye="_loadingCell_1qdja_82",$e="_selectionHeader_1qdja_87",Ee="_selectionCell_1qdja_93",We="_selectionControl_1qdja_107",He="_rowClickable_1qdja_114",Oe="_srOnly_1qdja_121",Fe="_pagination_1qdja_132",Ke="_paginationControls_1qdja_139",Ge="_paginationWithPageSize_1qdja_148",Je="_pageSizeSelector_1qdja_152",Qe="_pageNavButtonHidden_1qdja_156",Ue="_pageNavIcon_1qdja_160",Xe="_pageList_1qdja_166",Ze="_pageNumber_1qdja_172",ea="_pageNumberActive_1qdja_193",aa="_pageEllipsis_1qdja_198",t={table:qe,thButton:Pe,sortable:ze,label:Le,sortIndicators:Me,sortArrow:Be,activeArrow:Ae,evenRow:Te,oddRow:Ve,loadingRow:De,loadingCell:Ye,selectionHeader:$e,selectionCell:Ee,selectionControl:We,rowClickable:He,srOnly:Oe,pagination:Fe,paginationControls:Ke,paginationWithPageSize:Ge,pageSizeSelector:Je,pageNavButtonHidden:Qe,pageNavIcon:Ue,pageList:Xe,pageNumber:Ze,pageNumberActive:ea,pageEllipsis:aa},na=(n,r)=>r<=7?Array.from({length:r},(u,g)=>g+1):n<=4?[1,2,3,4,5,"...",r]:n>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",n-1,n,n+1,"...",r],j=({columns:n,data:r,loading:u=!1,loadingAriaLabel:g,getRowId:q,selectionType:b,selectionLabel:P="Velg rad",selectedRowId:ge,onSelect:H,selectedRowIds:se,onSelectMany:x,onRowClick:re,pageSize:z,page:k,defaultPage:me=1,onPageChange:pe,totalCount:C,totalPages:R,pageSizeOptions:L,defaultPageSize:O,onPageSizeChange:he})=>{const[h,F]=i.useState(null),K=i.useId(),[oe,G]=i.useState(me),[ie,Se]=i.useState(()=>{if(z===void 0){if(O&&O>0)return O;if(L?.length)return L[0]}});i.useEffect(()=>{const a=n.find(s=>s.sortable);F(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const le=i.useMemo(()=>{const a=new Map;for(const s of n)a.set(s.key,s);return a},[n]),f=i.useMemo(()=>{if(!h)return r;const a=le.get(h.headerKey);if(!a)return r;const s=a.sortAccessor??a.accessor;if(!s)return r;const o=[...r];return o.sort((w,S)=>{const c=s(w),p=s(S);if(c==null||p==null)return 0;if(typeof c=="number"&&typeof p=="number")return h.direction==="asc"?c-p:p-c;if(c instanceof Date&&p instanceof Date)return h.direction==="asc"?c.getTime()-p.getTime():p.getTime()-c.getTime();const M=String(c),Z=String(p);return h.direction==="asc"?M.localeCompare(Z,void 0,{numeric:!0}):Z.localeCompare(M,void 0,{numeric:!0})}),o},[r,h,le]),fe=a=>{F(s=>!s||s.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:s.direction==="asc"?"desc":"asc"})},we=(a,s)=>{if(s)return h?.headerKey!==a?"none":h.direction==="asc"?"ascending":"descending"},J=(a,s)=>{const o=q?.(a,s);if(o==null||o===""){const w=r.indexOf(a);return w===-1?s:w}return o},Q=i.useMemo(()=>b!=="multiple"?new Set:new Set(se??[]),[se,b]),y=i.useMemo(()=>{const a=z??ie;return!a||a<=0?f.length||r.length||1:a},[z,ie,f.length,r.length]),m=i.useMemo(()=>R!==void 0?Math.max(1,Math.floor(R)):C!==void 0?Math.max(1,Math.ceil(C/y)):Math.max(1,Math.ceil(f.length/y)),[f.length,y,C,R]),d=i.useMemo(()=>{const a=k??oe;return!Number.isFinite(a)||a<1?1:a>m?m:a},[k,oe,m]);i.useEffect(()=>{k===void 0&&d>m&&G(m)},[d,m,k]);const be=i.useMemo(()=>{if(R!==void 0||C!==void 0||y>=f.length)return f;const a=(d-1)*y;return f.slice(a,a+y)},[f,d,y,C,R]),ye=n.length+(b?1:0),U=a=>{const s=Math.min(Math.max(a,1),m);k!==void 0?pe?.(s):G(s)},_e=a=>{const s=a>0?Math.floor(a):1;z!==void 0?he?.(s):(Se(s),G(1))},ce=!u&&m>1,X=!u&&!!L?.length,je=i.useMemo(()=>na(d,m),[d,m]),Ne=I([t.paginationControls,X&&t.paginationWithPageSize]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[b&&e.jsx("th",{className:t.selectionHeader,"aria-label":P,children:e.jsx("span",{className:t.srOnly,children:P})}),n.map(({key:a,label:s,sortable:o,ariaLabel:w})=>{const S=h?.headerKey===a,c=S&&h.direction==="asc",p=S&&h.direction==="desc";return e.jsx("th",{"aria-sort":we(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>fe(a),"aria-label":`${w??s}: sort ${S&&c?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:s}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${c?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${p?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:s})})},a)})]})}),e.jsx("tbody",{children:u?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:ye,children:e.jsx(Ce,{ariaLabel:g})})}):be.map((a,s)=>{const o=J(a,s),w=`${K}-${o}`,S=b==="single",c=b==="multiple",p=S&&ge===o,M=c&&Q.has(o),de=!!re||S&&!!H||c&&!!x,ve=()=>{if(S)H?.(a);else if(c&&x){const l=new Set(Q);l.has(o)?l.delete(o):l.add(o);const N=r.filter((ee,ae)=>{const ne=J(ee,ae);return l.has(ne)});x(N)}re?.(a)};return e.jsxs("tr",{className:I([s%2===0?t.evenRow:t.oddRow,de&&t.rowClickable]),onClick:de?ve:void 0,children:[S&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(Re,{id:w,name:K,inputValue:String(o),checked:p,onChange:l=>{l?.stopPropagation(),H?.(a)},"aria-label":P})})}),c&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(ke,{id:w,value:String(o),checked:M,onChange:l=>{if(l?.stopPropagation(),!x)return;const N=new Set(Q);N.has(o)?N.delete(o):N.add(o);const ee=r.filter((ae,ne)=>{const xe=J(ae,ne);return N.has(xe)});x(ee)},"aria-label":P})})}),n.map(l=>e.jsx("td",{children:l.render?l.render(a):String(l.accessor?.(a)??"")},l.key))]},o)})})]}),(ce||X)&&e.jsxs("div",{className:Ne,children:[X&&e.jsx("div",{className:t.pageSizeSelector,children:e.jsx(Ie,{id:`${K}-page-size`,label:"Rader per side",options:L,value:y,onChange:a=>_e(Number(a)),width:"120px",size:"small"})}),ce&&e.jsxs("div",{className:t.pagination,children:[e.jsx(ue,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>U(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:je.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:I([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>U(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(ue,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonNext,d>=m&&t.pageNavButtonHidden]),onClick:()=>U(d+1),disabled:d>=m,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]})]})};try{j.displayName="Table",j.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const ya={title:"Primitives/Table",component:j,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],te=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],_=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],B={args:{columns:_,data:v}},A={args:{columns:_.map(n=>({...n,sortable:!1})),data:v}},T={args:{columns:_,data:te,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},V={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v}},D={render:n=>{const[r,u]=i.useState();return e.jsx(j,{...n,selectionType:"single",selectedRowId:r,onSelect:g=>u(g.id),onRowClick:g=>u(g.id)})},args:{columns:_,data:v,getRowId:n=>n.id}},Y={render:n=>{const[r,u]=i.useState([]);return e.jsx(j,{...n,selectionType:"multiple",selectedRowIds:r.map(g=>g.id),onSelectMany:u})},args:{columns:_,data:v,getRowId:n=>n.id}},$={render:n=>{const[r,u]=i.useState();return e.jsxs(e.Fragment,{children:[e.jsx(j,{...n,onRowClick:g=>u(g.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:_,data:v}},E={args:{columns:_,data:te,pageSize:10}},W={render:n=>{const[r,u]=i.useState(5),[g,q]=i.useState(1);return e.jsx(j,{...n,page:g,onPageChange:q,pageSize:r,onPageSizeChange:b=>{u(b),q(1)}})},args:{columns:_,data:te,pageSizeOptions:[5,10,15,25],pageSize:5}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "name",
      label: "Full Name",
      sortable: true,
      accessor: p => p.name,
      render: p => <strong>{p.name}</strong>
    }, {
      key: "age",
      label: "Age in Years",
      sortable: true,
      accessor: p => p.age,
      render: p => <em>{p.age} years old</em>
    }, {
      key: "city",
      label: "Location",
      sortable: true,
      accessor: p => p.city
    }],
    data: sampleData
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | undefined>();
    return <Table {...args} selectionType="single" selectedRowId={selectedId} onSelect={row => setSelectedId(row.id)} onRowClick={row => setSelectedId(row.id)} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...D.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <Table {...args} selectionType="multiple" selectedRowIds={selectedRows.map(row => row.id)} onSelectMany={setSelectedRows} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...Y.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [clickedName, setClickedName] = useState<string | undefined>();
    return <>
        <Table {...args} onRowClick={row => setClickedName(row.name)} />
        <p style={{
        marginTop: 12
      }}>
          Sist klikket rad: <strong>{clickedName ?? "Ingen"}</strong>
        </p>
      </>;
  },
  args: {
    columns,
    data: sampleData
  }
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10
  }
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(1);
    return <Table {...args} page={page} onPageChange={setPage} pageSize={pageSize} onPageSizeChange={size => {
      setPageSize(size);
      setPage(1);
    }} />;
  },
  args: {
    columns,
    data: sampleDataBig,
    pageSizeOptions: [5, 10, 15, 25],
    pageSize: 5
  }
}`,...W.parameters?.docs?.source}}};const _a=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{V as CustomRender,B as Default,T as Loading,Y as MultiSelect,A as NoSorting,E as Paginated,W as PaginatedWithPageSizeSelector,$ as RowClick,D as SingleSelect,_a as __namedExportsOrder,ya as default};
