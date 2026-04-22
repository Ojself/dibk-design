import{r as d,c as z,j as n}from"./iframe-B48H92AK.js";import{S as Ce}from"./arrow-left-icon-S8ukZB34.js";import{S as Re}from"./arrow-right-icon-DWGV8iwT.js";import{B as oe}from"./Button-CHQK6pps.js";import{C as ie}from"./CheckBoxInput-BV19oTfT.js";import{L as je}from"./LoadingAnimation-Cx5tABzl.js";import{R as Ie}from"./RadioButtonInput-6s1JFRT3.js";import"./preload-helper-PPVm8Dsz.js";import"./checkmark-symbol-icon-BsbOuO83.js";import"./CheckBoxIcon-rXKgBQw5.js";import"./RadioButtonIcon-D0dCP6_Q.js";const Ae="_table_d9tiz_5",ze="_thButton_d9tiz_25",Le="_sortable_d9tiz_34",Ve="_label_d9tiz_44",Pe="_sortIndicators_d9tiz_48",Te="_sortArrow_d9tiz_56",Be="_activeArrow_d9tiz_63",Me="_evenRow_d9tiz_67",qe="_oddRow_d9tiz_70",De="_loadingRow_d9tiz_83",Ye="_loadingCell_d9tiz_87",Ee="_selectionHeader_d9tiz_92",Oe="_selectionCell_d9tiz_98",$e="_selectionControl_d9tiz_112",Fe="_rowClickable_d9tiz_119",He="_srOnly_d9tiz_126",Ke="_pagination_d9tiz_137",Ue="_paginationControls_d9tiz_144",We="_pageNavButtonHidden_d9tiz_153",Ge="_pageList_d9tiz_163",Je="_pageNumber_d9tiz_169",Qe="_pageNumberActive_d9tiz_190",Xe="_pageEllipsis_d9tiz_195",t={table:Ae,thButton:ze,sortable:Le,label:Ve,sortIndicators:Pe,sortArrow:Te,activeArrow:Be,evenRow:Me,oddRow:qe,loadingRow:De,loadingCell:Ye,selectionHeader:Ee,selectionCell:Oe,selectionControl:$e,rowClickable:Fe,srOnly:He,pagination:Ke,paginationControls:Ue,pageNavButtonHidden:We,pageList:Ge,pageNumber:Je,pageNumberActive:Qe,pageEllipsis:Xe},Ze=(a,r)=>r<=7?Array.from({length:r},(b,p)=>p+1):a<=4?[1,2,3,4,5,"...",r]:a>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",a-1,a,a+1,"...",r],C=({columns:a,data:r,loading:b=!1,loadingAriaLabel:p,getRowId:ce,selectionType:y,selectionLabel:L="Velg rad",selectedRowId:de,onSelect:F,selectedRowIds:Z,onSelectMany:S,onRowClick:ee,getRowClassName:ue,pageSize:V,page:j,defaultPage:me=1,onPageChange:ge,totalCount:I,totalPages:A})=>{const[f,H]=d.useState(null),K=d.useId(),[ae,ne]=d.useState(me);d.useEffect(()=>{const e=a.find(s=>s.sortable);H(e?{headerKey:e.key,direction:"asc"}:null)},[a]);const te=d.useMemo(()=>{const e=new Map;for(const s of a)e.set(s.key,s);return e},[a]),h=d.useMemo(()=>{if(!f)return r;const e=te.get(f.headerKey);if(!e)return r;const s=e.sortAccessor??e.accessor;if(!s)return r;const o=[...r];return o.sort((w,i)=>{const l=s(w),g=s(i);if(l==null||g==null)return 0;if(typeof l=="number"&&typeof g=="number")return f.direction==="asc"?l-g:g-l;if(l instanceof Date&&g instanceof Date)return f.direction==="asc"?l.getTime()-g.getTime():g.getTime()-l.getTime();const P=String(l),G=String(g);return f.direction==="asc"?P.localeCompare(G,void 0,{numeric:!0}):G.localeCompare(P,void 0,{numeric:!0})}),o},[r,f,te]),pe=e=>{H(s=>!s||s.headerKey!==e?{headerKey:e,direction:"asc"}:{headerKey:e,direction:s.direction==="asc"?"desc":"asc"})},fe=(e,s)=>{if(s)return f?.headerKey!==e?"none":f.direction==="asc"?"ascending":"descending"},v=(e,s)=>{const o=ce?.(e,s);if(o==null||o===""){const w=r.indexOf(e);return w===-1?s:w}return o},k=d.useMemo(()=>y!=="multiple"?new Set:new Set(Z??[]),[Z,y]),N=d.useMemo(()=>!V||V<=0?h.length||r.length||1:V,[V,h.length,r.length]),m=d.useMemo(()=>A!==void 0?Math.max(1,Math.floor(A)):I!==void 0?Math.max(1,Math.ceil(I/N)):Math.max(1,Math.ceil(h.length/N)),[h.length,N,I,A]),u=d.useMemo(()=>{const e=j??ae;return!Number.isFinite(e)||e<1?1:e>m?m:e},[j,ae,m]);d.useEffect(()=>{j===void 0&&u>m&&ne(m)},[u,m,j]);const U=d.useMemo(()=>{if(A!==void 0||I!==void 0||N>=h.length)return h;const e=(u-1)*N;return h.slice(e,e+N)},[h,u,N,I,A]),we=a.length+(y?1:0),se=U.map((e,s)=>v(e,s)),be=y==="multiple"&&se.length>0&&se.every(e=>k.has(e)),he=`${K}-select-all`,ye=()=>{if(!S)return;const e=U.map((i,l)=>v(i,l)),s=e.length>0&&e.every(i=>k.has(i)),o=new Set(k);if(s)for(const i of e)o.delete(i);else for(const i of e)o.add(i);const w=r.filter((i,l)=>o.has(v(i,l)));S(w)},W=e=>{const s=Math.min(Math.max(e,1),m);j!==void 0?ge?.(s):ne(s)},Se=!b&&m>1,Ne=d.useMemo(()=>Ze(u,m),[u,m]),_e=z([t.paginationControls]);return n.jsxs(n.Fragment,{children:[n.jsxs("table",{className:t.table,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[y&&n.jsx("th",{className:t.selectionHeader,"aria-label":L,children:y==="multiple"?n.jsx(ie,{id:he,checked:be,onChange:()=>ye(),children:n.jsx("span",{className:t.srOnly,children:"Velg alle rader"})}):n.jsxs(n.Fragment,{children:[n.jsx("span",{"aria-hidden":"true",children:"Velg"}),n.jsx("span",{className:t.srOnly,children:L})]})}),a.map(({key:e,label:s,sortable:o,ariaLabel:w})=>{const i=f?.headerKey===e,l=i&&f.direction==="asc",g=i&&f.direction==="desc";return n.jsx("th",{"aria-sort":fe(e,o),scope:"col",children:o?n.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>pe(e),"aria-label":`${w??s}: sort ${i&&l?"descending":"ascending"}`,children:[n.jsx("span",{className:t.label,children:s}),n.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[n.jsx("span",{className:`${t.sortArrow} ${l?t.activeArrow:""}`,children:n.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:n.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("span",{className:`${t.sortArrow} ${g?t.activeArrow:""}`,children:n.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:n.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):n.jsx("span",{className:t.thButton,children:n.jsx("span",{className:t.label,children:s})})},e)})]})}),n.jsx("tbody",{children:b?n.jsx("tr",{className:t.loadingRow,children:n.jsx("td",{className:t.loadingCell,colSpan:we,children:n.jsx(je,{ariaLabel:p})})}):U.map((e,s)=>{const o=v(e,s),w=`${K}-${o}`,i=y==="single",l=y==="multiple",g=i&&de===o,P=l&&k.has(o),re=!!ee||i&&!!F||l&&!!S,ve=()=>{if(i)F?.(e);else if(l&&S){const c=new Set(k);c.has(o)?c.delete(o):c.add(o);const x=r.filter((J,Q)=>{const X=v(J,Q);return c.has(X)});S(x)}ee?.(e)},ke=ue?.(e,s);return n.jsxs("tr",{className:z([ke??(s%2===0?t.evenRow:t.oddRow),re&&t.rowClickable]),onClick:re?ve:void 0,children:[i&&n.jsx("td",{className:t.selectionCell,children:n.jsx("button",{type:"button",className:t.selectionControl,onClick:c=>c.stopPropagation(),children:n.jsx(Ie,{id:w,name:K,inputValue:String(o),checked:g,onChange:c=>{c?.stopPropagation(),F?.(e)},"aria-label":L})})}),l&&n.jsx("td",{className:t.selectionCell,children:n.jsx("button",{type:"button",className:t.selectionControl,onClick:c=>c.stopPropagation(),children:n.jsx(ie,{id:w,value:String(o),checked:P,onChange:c=>{if(c?.stopPropagation(),!S)return;const x=new Set(k);x.has(o)?x.delete(o):x.add(o);const J=r.filter((Q,X)=>{const xe=v(Q,X);return x.has(xe)});S(J)},"aria-label":L})})}),a.map(c=>n.jsx("td",{children:c.render?c.render(e):String(c.accessor?.(e)??"")},c.key))]},o)})})]}),Se&&n.jsx("div",{className:_e,children:n.jsxs("div",{className:t.pagination,children:[n.jsx(oe,{type:"button",color:"neutral",noMargin:!0,className:z([t.pageNavButtonPrevious,u<=1&&t.pageNavButtonHidden]),onClick:()=>W(u-1),disabled:u<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:n.jsx(Ce,{})}),n.jsx("div",{className:t.pageList,children:Ne.map(e=>e==="..."?n.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${e}`):n.jsx("button",{type:"button",className:z([t.pageNumber,e===u&&t.pageNumberActive]),onClick:()=>W(Number(e)),"aria-current":e===u?"page":void 0,children:e},e))}),n.jsx(oe,{type:"button",color:"neutral",noMargin:!0,className:z([t.pageNavButtonNext,u>=m&&t.pageNavButtonHidden]),onClick:()=>W(u+1),disabled:u>=m,"aria-label":"Neste side",content:"Neste",iconRight:n.jsx(Re,{})})]})})]})};try{C.displayName="Table",C.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},getRowClassName:{defaultValue:null,description:"",name:"getRowClassName",required:!1,type:{name:"(row: T, index: number) => string"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const pa={title:"Primitives/Table",component:C,tags:["autodocs"]},R=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],le=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],_=[{key:"id",label:"ID",sortable:!0,accessor:a=>a.id},{key:"name",label:"Name",sortable:!0,accessor:a=>a.name},{key:"age",label:"Age",sortable:!0,accessor:a=>a.age},{key:"city",label:"City",sortable:!0,accessor:a=>a.city}],T={args:{columns:_,data:R}},B={args:{columns:_.map(a=>({...a,sortable:!1})),data:R}},M={args:{columns:_,data:le,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},q={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:a=>a.name,render:a=>n.jsx("strong",{children:a.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:a=>a.age,render:a=>n.jsxs("em",{children:[a.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:a=>a.city}],data:R}},D={render:a=>{const[r,b]=d.useState();return n.jsx(C,{...a,selectionType:"single",selectedRowId:r,onSelect:p=>b(p.id),onRowClick:p=>b(p.id)})},args:{columns:_,data:R,getRowId:a=>a.id}},Y={render:a=>{const[r,b]=d.useState([]);return n.jsx(C,{...a,selectionType:"multiple",selectedRowIds:r.map(p=>p.id),onSelectMany:b})},args:{columns:_,data:R,getRowId:a=>a.id}},E={render:a=>{const[r,b]=d.useState();return n.jsxs(n.Fragment,{children:[n.jsx(C,{...a,onRowClick:p=>b(p.name)}),n.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",n.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:_,data:R}},O={args:{columns:_,data:le,pageSize:10}},ea=[{line:2,name:"Alice",status:"Active"},{line:3,name:"Bob",status:"INVALID_STATUS",error:"Unknown status value"},{line:4,name:"Charlie",status:"Inactive"},{line:5,name:"",status:"Active",error:"Name is required"},{line:6,name:"Eve",status:"Active"},{line:7,name:"Frank",status:"UNKNOWN",error:"Unknown status value"}],aa=[{key:"line",label:"Line",sortable:!0,accessor:a=>a.line},{key:"name",label:"Name",sortable:!0,accessor:a=>a.name},{key:"status",label:"Status",sortable:!0,accessor:a=>a.status},{key:"error",label:"Error",sortable:!1,accessor:a=>a.error??""}],$={args:{columns:aa,data:ea,getRowId:a=>a.line,getRowClassName:a=>a.error?"bg-red-50":void 0}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...M.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10
  }
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    columns: importColumns,
    data: importData,
    getRowId: row => row.line,
    getRowClassName: row => row.error ? "bg-red-50" : undefined
  }
}`,...$.parameters?.docs?.source}}};const fa=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","RowClassName"];export{q as CustomRender,T as Default,M as Loading,Y as MultiSelect,B as NoSorting,O as Paginated,$ as RowClassName,E as RowClick,D as SingleSelect,fa as __namedExportsOrder,pa as default};
