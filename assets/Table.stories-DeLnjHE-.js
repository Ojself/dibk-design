import{r as i,c as R,j as e}from"./iframe-DUqbcw3k.js";import{B as le}from"./Button-Bf1xqB_Y.js";import{C as Ne}from"./CheckBoxInput-D2SbLvaR.js";import{L as xe}from"./LoadingAnimation-C9mCAKSq.js";import{R as ve}from"./RadioButtonInput-DCZ3lLC3.js";import{S as ke}from"./Select-Dmw3GH5x.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-BWTw1XxP.js";import"./RadioButtonIcon-ShZE4W6i.js";import"./index-CXAHN7kE.js";import"./index-BmSWFQFO.js";import"./ErrorMessage-CSTVEEgx.js";import"./error-icon-q7FAEQyj.js";import"./Label-Bd7O7igD.js";const Ce="_table_1qdja_1",Re="_thButton_1qdja_21",Pe="_sortable_1qdja_29",Ie="_label_1qdja_39",qe="_sortIndicators_1qdja_43",ze="_sortArrow_1qdja_51",Le="_activeArrow_1qdja_58",Be="_evenRow_1qdja_62",Ae="_oddRow_1qdja_65",Me="_loadingRow_1qdja_78",Ve="_loadingCell_1qdja_82",De="_selectionHeader_1qdja_87",Te="_selectionCell_1qdja_93",Ye="_selectionControl_1qdja_107",Ee="_rowClickable_1qdja_114",$e="_srOnly_1qdja_121",We="_pagination_1qdja_132",He="_paginationControls_1qdja_139",Oe="_paginationWithPageSize_1qdja_148",Fe="_pageSizeSelector_1qdja_152",Ke="_pageNavButtonHidden_1qdja_156",Ge="_pageNavIcon_1qdja_160",Je="_pageList_1qdja_166",Qe="_pageNumber_1qdja_172",Ue="_pageNumberActive_1qdja_193",Xe="_pageEllipsis_1qdja_198",t={table:Ce,thButton:Re,sortable:Pe,label:Ie,sortIndicators:qe,sortArrow:ze,activeArrow:Le,evenRow:Be,oddRow:Ae,loadingRow:Me,loadingCell:Ve,selectionHeader:De,selectionCell:Te,selectionControl:Ye,rowClickable:Ee,srOnly:$e,pagination:We,paginationControls:He,paginationWithPageSize:Oe,pageSizeSelector:Fe,pageNavButtonHidden:Ke,pageNavIcon:Ge,pageList:Je,pageNumber:Qe,pageNumberActive:Ue,pageEllipsis:Xe},Ze=(n,r)=>r<=7?Array.from({length:r},(u,g)=>g+1):n<=4?[1,2,3,4,5,"...",r]:n>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",n-1,n,n+1,"...",r],j=({columns:n,data:r,loading:u=!1,loadingAriaLabel:g,getRowId:P,selectionType:c,selectionLabel:I="Velg rad",selectedRowId:ce,onSelect:$,selectedRowIds:ne,onSelectMany:v,onRowClick:te,pageSize:q,page:k,defaultPage:de=1,onPageChange:ue,pageSizeOptions:z,defaultPageSize:W,onPageSizeChange:ge})=>{const[h,H]=i.useState(null),O=i.useId(),[se,F]=i.useState(de),[re,me]=i.useState(()=>{if(q===void 0){if(W&&W>0)return W;if(z?.length)return z[0]}});i.useEffect(()=>{const a=n.find(s=>s.sortable);H(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const oe=i.useMemo(()=>{const a=new Map;for(const s of n)a.set(s.key,s);return a},[n]),f=i.useMemo(()=>{if(!h)return r;const a=oe.get(h.headerKey);if(!a)return r;const s=a.sortAccessor??a.accessor;if(!s)return r;const o=[...r];return o.sort((w,_)=>{const m=s(w),S=s(_);if(m==null||S==null)return 0;if(typeof m=="number"&&typeof S=="number")return h.direction==="asc"?m-S:S-m;if(m instanceof Date&&S instanceof Date)return h.direction==="asc"?m.getTime()-S.getTime():S.getTime()-m.getTime();const U=String(m),C=String(S);return h.direction==="asc"?U.localeCompare(C,void 0,{numeric:!0}):C.localeCompare(U,void 0,{numeric:!0})}),o},[r,h,oe]),pe=a=>{H(s=>!s||s.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:s.direction==="asc"?"desc":"asc"})},he=(a,s)=>{if(s)return h?.headerKey!==a?"none":h.direction==="asc"?"ascending":"descending"},K=(a,s)=>{const o=P?.(a,s);if(o==null||o===""){const w=r.indexOf(a);return w===-1?s:w}return o},G=i.useMemo(()=>c!=="multiple"?new Set:new Set(ne??[]),[ne,c]),y=i.useMemo(()=>{const a=q??re;return!a||a<=0?f.length||r.length||1:a},[q,re,f.length,r.length]),p=i.useMemo(()=>Math.max(1,Math.ceil(f.length/y)),[f.length,y]),d=i.useMemo(()=>{const a=k??se;return!Number.isFinite(a)||a<1?1:a>p?p:a},[k,se,p]);i.useEffect(()=>{k===void 0&&d>p&&F(p)},[d,p,k]);const Se=i.useMemo(()=>{if(y>=f.length)return f;const a=(d-1)*y;return f.slice(a,a+y)},[f,d,y]),we=n.length+(c?1:0),J=a=>{const s=Math.min(Math.max(a,1),p);k!==void 0?ue?.(s):F(s)},fe=a=>{const s=a>0?Math.floor(a):1;q!==void 0?ge?.(s):(me(s),F(1))},ie=!u&&p>1,Q=!u&&!!z?.length,be=i.useMemo(()=>Ze(d,p),[d,p]),ye=R([t.paginationControls,Q&&t.paginationWithPageSize]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[c&&e.jsx("th",{className:t.selectionHeader,"aria-label":I,children:e.jsx("span",{className:t.srOnly,children:I})}),n.map(({key:a,label:s,sortable:o,ariaLabel:w})=>{const _=h?.headerKey===a,m=_&&h.direction==="asc",S=_&&h.direction==="desc";return e.jsx("th",{"aria-sort":he(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>pe(a),"aria-label":`${w??s}: sort ${_&&m?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:s}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${m?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${S?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:s})})},a)})]})}),e.jsx("tbody",{children:u?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:we,children:e.jsx(xe,{ariaLabel:g})})}):Se.map((a,s)=>{const o=K(a,s),w=`${O}-${o}`,_=c==="single"&&ce===o,m=c==="multiple"&&G.has(o),C=!!te||c==="single"&&!!$||c==="multiple"&&!!v,_e=()=>{if(c==="single")$?.(a);else if(c==="multiple"&&v){const l=new Set(G);l.has(o)?l.delete(o):l.add(o);const N=r.filter((X,Z)=>{const ee=K(X,Z);return l.has(ee)});v(N)}te?.(a)};return e.jsxs("tr",{className:R([s%2===0?t.evenRow:t.oddRow,C&&t.rowClickable]),onClick:C?_e:void 0,children:[c==="single"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(ve,{id:w,name:O,inputValue:String(o),checked:_,onChange:l=>{l?.stopPropagation(),$?.(a)},"aria-label":I})})}),c==="multiple"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(Ne,{id:w,value:String(o),checked:m,onChange:l=>{if(l?.stopPropagation(),!v)return;const N=new Set(G);N.has(o)?N.delete(o):N.add(o);const X=r.filter((Z,ee)=>{const je=K(Z,ee);return N.has(je)});v(X)},"aria-label":I})})}),n.map(l=>e.jsx("td",{children:l.render?l.render(a):String(l.accessor?.(a)??"")},l.key))]},o)})})]}),(ie||Q)&&e.jsxs("div",{className:ye,children:[Q&&e.jsx("div",{className:t.pageSizeSelector,children:e.jsx(ke,{id:`${O}-page-size`,label:"Rader per side",options:z,value:y,onChange:a=>fe(Number(a)),width:"120px",size:"small"})}),ie&&e.jsxs("div",{className:t.pagination,children:[e.jsx(le,{type:"button",color:"neutral",noMargin:!0,className:R([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>J(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:be.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:R([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>J(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(le,{type:"button",color:"neutral",noMargin:!0,className:R([t.pageNavButtonNext,d>=p&&t.pageNavButtonHidden]),onClick:()=>J(d+1),disabled:d>=p,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]})]})};try{j.displayName="Table",j.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const Sa={title:"Example/Table",component:j,tags:["autodocs"]},x=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],ae=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],b=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],L={args:{columns:b,data:x}},B={args:{columns:b.map(n=>({...n,sortable:!1})),data:x}},A={args:{columns:b,data:ae,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},M={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:x}},V={render:n=>{const[r,u]=i.useState();return e.jsx(j,{...n,selectionType:"single",selectedRowId:r,onSelect:g=>u(g.id),onRowClick:g=>u(g.id)})},args:{columns:b,data:x,getRowId:n=>n.id}},D={render:n=>{const[r,u]=i.useState([]);return e.jsx(j,{...n,selectionType:"multiple",selectedRowIds:r.map(g=>g.id),onSelectMany:u})},args:{columns:b,data:x,getRowId:n=>n.id}},T={render:n=>{const[r,u]=i.useState();return e.jsxs(e.Fragment,{children:[e.jsx(j,{...n,onRowClick:g=>u(g.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:b,data:x}},Y={args:{columns:b,data:ae,pageSize:10}},E={render:n=>{const[r,u]=i.useState(5),[g,P]=i.useState(1);return e.jsx(j,{...n,page:g,onPageChange:P,pageSize:r,onPageSizeChange:c=>{u(c),P(1)}})},args:{columns:b,data:ae,pageSizeOptions:[5,10,15,25],pageSize:5}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | undefined>();
    return <Table {...args} selectionType="single" selectedRowId={selectedId} onSelect={row => setSelectedId(row.id)} onRowClick={row => setSelectedId(row.id)} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <Table {...args} selectionType="multiple" selectedRowIds={selectedRows.map(row => row.id)} onSelectMany={setSelectedRows} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10
  }
}`,...Y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const wa=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{M as CustomRender,L as Default,A as Loading,D as MultiSelect,B as NoSorting,Y as Paginated,E as PaginatedWithPageSizeSelector,T as RowClick,V as SingleSelect,wa as __namedExportsOrder,Sa as default};
