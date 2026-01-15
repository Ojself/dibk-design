import{r as i,b as q,j as e}from"./iframe-PL7sJn6L.js";import{B as de}from"./Button-mArunAN0.js";import{C as xe}from"./CheckBoxInput-D2xE7k2c.js";import{L as ke}from"./LoadingAnimation-KxGF-V-Z.js";import{R as Ce}from"./RadioButtonInput-BIlaoGrd.js";import{S as Re}from"./Select-C-heAVzT.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-C6ZIkttX.js";import"./RadioButtonIcon-B3-PYKuo.js";import"./index-1UqKwFNP.js";import"./index-BPJ0Tknk.js";import"./ErrorMessage-DmV3l4EI.js";import"./error-icon-q7FAEQyj.js";import"./Label-DEmh4JYh.js";const Ie="_table_1qdja_1",qe="_thButton_1qdja_21",Pe="_sortable_1qdja_29",ze="_label_1qdja_39",Le="_sortIndicators_1qdja_43",Me="_sortArrow_1qdja_51",Be="_activeArrow_1qdja_58",Ae="_evenRow_1qdja_62",Ve="_oddRow_1qdja_65",De="_loadingRow_1qdja_78",Te="_loadingCell_1qdja_82",Ye="_selectionHeader_1qdja_87",$e="_selectionCell_1qdja_93",Ee="_selectionControl_1qdja_107",We="_rowClickable_1qdja_114",He="_srOnly_1qdja_121",Oe="_pagination_1qdja_132",Fe="_paginationControls_1qdja_139",Ke="_paginationWithPageSize_1qdja_148",Ge="_pageSizeSelector_1qdja_152",Je="_pageNavButtonHidden_1qdja_156",Qe="_pageNavIcon_1qdja_160",Ue="_pageList_1qdja_166",Xe="_pageNumber_1qdja_172",Ze="_pageNumberActive_1qdja_193",ea="_pageEllipsis_1qdja_198",t={table:Ie,thButton:qe,sortable:Pe,label:ze,sortIndicators:Le,sortArrow:Me,activeArrow:Be,evenRow:Ae,oddRow:Ve,loadingRow:De,loadingCell:Te,selectionHeader:Ye,selectionCell:$e,selectionControl:Ee,rowClickable:We,srOnly:He,pagination:Oe,paginationControls:Fe,paginationWithPageSize:Ke,pageSizeSelector:Ge,pageNavButtonHidden:Je,pageNavIcon:Qe,pageList:Ue,pageNumber:Xe,pageNumberActive:Ze,pageEllipsis:ea},aa=(n,r)=>r<=7?Array.from({length:r},(u,g)=>g+1):n<=4?[1,2,3,4,5,"...",r]:n>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",n-1,n,n+1,"...",r],j=({columns:n,data:r,loading:u=!1,loadingAriaLabel:g,getRowId:P,selectionType:c,selectionLabel:z="Velg rad",selectedRowId:ue,onSelect:H,selectedRowIds:se,onSelectMany:x,onRowClick:re,pageSize:L,page:k,defaultPage:ge=1,onPageChange:me,totalCount:C,totalPages:R,pageSizeOptions:M,defaultPageSize:O,onPageSizeChange:pe})=>{const[h,F]=i.useState(null),K=i.useId(),[oe,G]=i.useState(ge),[ie,he]=i.useState(()=>{if(L===void 0){if(O&&O>0)return O;if(M?.length)return M[0]}});i.useEffect(()=>{const a=n.find(s=>s.sortable);F(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const le=i.useMemo(()=>{const a=new Map;for(const s of n)a.set(s.key,s);return a},[n]),S=i.useMemo(()=>{if(!h)return r;const a=le.get(h.headerKey);if(!a)return r;const s=a.sortAccessor??a.accessor;if(!s)return r;const o=[...r];return o.sort((w,_)=>{const m=s(w),f=s(_);if(m==null||f==null)return 0;if(typeof m=="number"&&typeof f=="number")return h.direction==="asc"?m-f:f-m;if(m instanceof Date&&f instanceof Date)return h.direction==="asc"?m.getTime()-f.getTime():f.getTime()-m.getTime();const Z=String(m),I=String(f);return h.direction==="asc"?Z.localeCompare(I,void 0,{numeric:!0}):I.localeCompare(Z,void 0,{numeric:!0})}),o},[r,h,le]),fe=a=>{F(s=>!s||s.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:s.direction==="asc"?"desc":"asc"})},Se=(a,s)=>{if(s)return h?.headerKey!==a?"none":h.direction==="asc"?"ascending":"descending"},J=(a,s)=>{const o=P?.(a,s);if(o==null||o===""){const w=r.indexOf(a);return w===-1?s:w}return o},Q=i.useMemo(()=>c!=="multiple"?new Set:new Set(se??[]),[se,c]),b=i.useMemo(()=>{const a=L??ie;return!a||a<=0?S.length||r.length||1:a},[L,ie,S.length,r.length]),p=i.useMemo(()=>R!==void 0?Math.max(1,Math.floor(R)):C!==void 0?Math.max(1,Math.ceil(C/b)):Math.max(1,Math.ceil(S.length/b)),[S.length,b,C,R]),d=i.useMemo(()=>{const a=k??oe;return!Number.isFinite(a)||a<1?1:a>p?p:a},[k,oe,p]);i.useEffect(()=>{k===void 0&&d>p&&G(p)},[d,p,k]);const we=i.useMemo(()=>{if(R!==void 0||C!==void 0||b>=S.length)return S;const a=(d-1)*b;return S.slice(a,a+b)},[S,d,b,C,R]),be=n.length+(c?1:0),U=a=>{const s=Math.min(Math.max(a,1),p);k!==void 0?me?.(s):G(s)},ye=a=>{const s=a>0?Math.floor(a):1;L!==void 0?pe?.(s):(he(s),G(1))},ce=!u&&p>1,X=!u&&!!M?.length,_e=i.useMemo(()=>aa(d,p),[d,p]),je=q([t.paginationControls,X&&t.paginationWithPageSize]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[c&&e.jsx("th",{className:t.selectionHeader,"aria-label":z,children:e.jsx("span",{className:t.srOnly,children:z})}),n.map(({key:a,label:s,sortable:o,ariaLabel:w})=>{const _=h?.headerKey===a,m=_&&h.direction==="asc",f=_&&h.direction==="desc";return e.jsx("th",{"aria-sort":Se(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>fe(a),"aria-label":`${w??s}: sort ${_&&m?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:s}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${m?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${f?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:s})})},a)})]})}),e.jsx("tbody",{children:u?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:be,children:e.jsx(ke,{ariaLabel:g})})}):we.map((a,s)=>{const o=J(a,s),w=`${K}-${o}`,_=c==="single"&&ue===o,m=c==="multiple"&&Q.has(o),I=!!re||c==="single"&&!!H||c==="multiple"&&!!x,Ne=()=>{if(c==="single")H?.(a);else if(c==="multiple"&&x){const l=new Set(Q);l.has(o)?l.delete(o):l.add(o);const N=r.filter((ee,ae)=>{const ne=J(ee,ae);return l.has(ne)});x(N)}re?.(a)};return e.jsxs("tr",{className:q([s%2===0?t.evenRow:t.oddRow,I&&t.rowClickable]),onClick:I?Ne:void 0,children:[c==="single"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(Ce,{id:w,name:K,inputValue:String(o),checked:_,onChange:l=>{l?.stopPropagation(),H?.(a)},"aria-label":z})})}),c==="multiple"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(xe,{id:w,value:String(o),checked:m,onChange:l=>{if(l?.stopPropagation(),!x)return;const N=new Set(Q);N.has(o)?N.delete(o):N.add(o);const ee=r.filter((ae,ne)=>{const ve=J(ae,ne);return N.has(ve)});x(ee)},"aria-label":z})})}),n.map(l=>e.jsx("td",{children:l.render?l.render(a):String(l.accessor?.(a)??"")},l.key))]},o)})})]}),(ce||X)&&e.jsxs("div",{className:je,children:[X&&e.jsx("div",{className:t.pageSizeSelector,children:e.jsx(Re,{id:`${K}-page-size`,label:"Rader per side",options:M,value:b,onChange:a=>ye(Number(a)),width:"120px",size:"small"})}),ce&&e.jsxs("div",{className:t.pagination,children:[e.jsx(de,{type:"button",color:"neutral",noMargin:!0,className:q([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>U(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:_e.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:q([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>U(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(de,{type:"button",color:"neutral",noMargin:!0,className:q([t.pageNavButtonNext,d>=p&&t.pageNavButtonHidden]),onClick:()=>U(d+1),disabled:d>=p,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]})]})};try{j.displayName="Table",j.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const wa={title:"Primitives/Table",component:j,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],te=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],y=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],B={args:{columns:y,data:v}},A={args:{columns:y.map(n=>({...n,sortable:!1})),data:v}},V={args:{columns:y,data:te,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},D={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v}},T={render:n=>{const[r,u]=i.useState();return e.jsx(j,{...n,selectionType:"single",selectedRowId:r,onSelect:g=>u(g.id),onRowClick:g=>u(g.id)})},args:{columns:y,data:v,getRowId:n=>n.id}},Y={render:n=>{const[r,u]=i.useState([]);return e.jsx(j,{...n,selectionType:"multiple",selectedRowIds:r.map(g=>g.id),onSelectMany:u})},args:{columns:y,data:v,getRowId:n=>n.id}},$={render:n=>{const[r,u]=i.useState();return e.jsxs(e.Fragment,{children:[e.jsx(j,{...n,onRowClick:g=>u(g.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:y,data:v}},E={args:{columns:y,data:te,pageSize:10}},W={render:n=>{const[r,u]=i.useState(5),[g,P]=i.useState(1);return e.jsx(j,{...n,page:g,onPageChange:P,pageSize:r,onPageSizeChange:c=>{u(c),P(1)}})},args:{columns:y,data:te,pageSizeOptions:[5,10,15,25],pageSize:5}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | undefined>();
    return <Table {...args} selectionType="single" selectedRowId={selectedId} onSelect={row => setSelectedId(row.id)} onRowClick={row => setSelectedId(row.id)} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...T.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};const ba=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{D as CustomRender,B as Default,V as Loading,Y as MultiSelect,A as NoSorting,E as Paginated,W as PaginatedWithPageSizeSelector,$ as RowClick,T as SingleSelect,ba as __namedExportsOrder,wa as default};
