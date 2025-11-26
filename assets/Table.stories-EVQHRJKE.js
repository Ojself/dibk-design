import{r as i,j as a,f as Se}from"./iframe-BWm-Rgin.js";import{C as he}from"./CheckBoxInput-Y-mK5gos.js";import{R as we}from"./RadioButtonInput-B0Yrr2oZ.js";import{S as fe}from"./Select-BtLAffdt.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./CheckBoxIcon-CzjtnCHT.js";import"./RadioButtonIcon-Com5UKJE.js";import"./CheckBoxList--dVM3m9J.js";import"./Header-Bll3-g5Y.js";import"./CheckBoxListItem-DaM8-xUT.js";import"./ErrorMessage-CUBWA2ol.js";import"./error-icon-q7FAEQyj.js";import"./Label-DX2rxQXz.js";const ye="_table_173le_1",_e="_thButton_173le_30",ke="_sortable_173le_41",Ce="_label_173le_51",xe="_sortIndicators_173le_55",Ne="_sortArrow_173le_62",Re="_activeArrow_173le_65",Pe="_evenRow_173le_69",ve="_oddRow_173le_72",Ie="_selectionHeader_173le_83",je="_selectionCell_173le_89",ze="_selectionControl_173le_95",Ae="_rowClickable_173le_102",Ve="_srOnly_173le_109",Te="_pagination_173le_120",Me="_paginationControls_173le_127",Be="_pageSizeSelector_173le_135",De="_pageButton_173le_139",qe="_pageInfo_173le_157",s={table:ye,thButton:_e,sortable:ke,label:Ce,sortIndicators:xe,sortArrow:Ne,activeArrow:Re,evenRow:Pe,oddRow:ve,selectionHeader:Ie,selectionCell:je,selectionControl:ze,rowClickable:Ae,srOnly:Ve,pagination:Te,paginationControls:Me,pageSizeSelector:Be,pageButton:De,pageInfo:qe},_=({columns:t,data:o,caption:u,getRowId:m,selectionType:c,selectionLabel:C="Velg rad",selectedRowId:re,onSelect:Y,selectedRowIds:Q,onSelectMany:R,onRowClick:U,pageSize:I,page:P,defaultPage:oe=1,onPageChange:ie,pageSizeOptions:j,defaultPageSize:L,onPageSizeChange:le})=>{const[g,$]=i.useState(null),E=i.useId(),[X,F]=i.useState(oe),[Z,ce]=i.useState(()=>{if(I===void 0){if(L&&L>0)return L;if(j?.length)return j[0]}});i.useEffect(()=>{const e=t.find(n=>n.sortable);$(e?{headerKey:e.key,direction:"asc"}:null)},[t]);const ee=i.useMemo(()=>{const e=new Map;for(const n of t)e.set(n.key,n);return e},[t]),w=i.useMemo(()=>{if(!g)return o;const e=ee.get(g.headerKey);if(!e)return o;const n=e.sortAccessor??e.accessor;if(!n)return o;const r=[...o];return r.sort((h,y)=>{const d=n(h),p=n(y);if(d==null||p==null)return 0;if(typeof d=="number"&&typeof p=="number")return g.direction==="asc"?d-p:p-d;if(d instanceof Date&&p instanceof Date)return g.direction==="asc"?d.getTime()-p.getTime():p.getTime()-d.getTime();const H=String(d),v=String(p);return g.direction==="asc"?H.localeCompare(v,void 0,{numeric:!0}):v.localeCompare(H,void 0,{numeric:!0})}),r},[o,g,ee]),de=e=>{$(n=>!n||n.headerKey!==e?{headerKey:e,direction:"asc"}:{headerKey:e,direction:n.direction==="asc"?"desc":"asc"})},ue=(e,n)=>{if(n)return g?.headerKey!==e?"none":g.direction==="asc"?"ascending":"descending"},K=(e,n)=>{const r=m?.(e,n);if(r==null||r===""){const h=o.indexOf(e);return h===-1?n:h}return r},O=i.useMemo(()=>c!=="multiple"?new Set:new Set(Q??[]),[Q,c]),f=i.useMemo(()=>{const e=I??Z;return!e||e<=0?w.length||o.length||1:e},[I,Z,w.length,o.length]),b=i.useMemo(()=>Math.max(1,Math.ceil(w.length/f)),[w.length,f]),S=i.useMemo(()=>{const e=P??X;return!Number.isFinite(e)||e<1?1:e>b?b:e},[P,X,b]);i.useEffect(()=>{P===void 0&&S>b&&F(b)},[S,b,P]);const me=i.useMemo(()=>{if(f>=w.length)return w;const e=(S-1)*f;return w.slice(e,e+f)},[w,S,f]),ae=e=>{const n=Math.min(Math.max(e,1),b);P!==void 0?ie?.(n):F(n)},ge=e=>{const n=e>0?Math.floor(e):1;I!==void 0?le?.(n):(ce(n),F(1))},te=b>1,ne=!!j?.length;return a.jsxs(a.Fragment,{children:[a.jsxs("table",{className:s.table,children:[u&&a.jsx("caption",{children:u}),a.jsx("thead",{children:a.jsxs("tr",{children:[c&&a.jsx("th",{className:s.selectionHeader,"aria-label":C,children:a.jsx("span",{className:s.srOnly,children:C})}),t.map(({key:e,label:n,sortable:r,ariaLabel:h})=>{const y=g?.headerKey===e,d=y&&g.direction==="asc",p=y&&g.direction==="desc";return a.jsx("th",{"aria-sort":ue(e,r),scope:"col",children:r?a.jsxs("button",{type:"button",className:`${s.thButton} ${s.sortable}`,onClick:()=>de(e),"aria-label":`${h??n}: sort ${y&&d?"descending":"ascending"}`,children:[a.jsx("span",{className:s.label,children:n}),a.jsxs("span",{className:s.sortIndicators,"aria-hidden":"true",children:[a.jsx("span",{className:`${s.sortArrow} ${d?s.activeArrow:""}`,children:"▲"}),a.jsx("span",{className:`${s.sortArrow} ${p?s.activeArrow:""}`,children:"▼"})]})]}):a.jsx("span",{className:s.thButton,children:a.jsx("span",{className:s.label,children:n})})},e)})]})}),a.jsx("tbody",{children:me.map((e,n)=>{const r=K(e,n),h=`${E}-${r}`,y=c==="single"&&re===r,d=c==="multiple"&&O.has(r),v=!!U||c==="single"&&!!Y||c==="multiple"&&!!R,pe=()=>{if(c==="single")Y?.(e);else if(c==="multiple"&&R){const l=new Set(O);l.has(r)?l.delete(r):l.add(r);const x=o.filter((W,G)=>{const J=K(W,G);return l.has(J)});R(x)}U?.(e)};return a.jsxs("tr",{className:Se([n%2===0?s.evenRow:s.oddRow,v&&s.rowClickable]),onClick:v?pe:void 0,children:[c==="single"&&a.jsx("td",{className:s.selectionCell,children:a.jsx("button",{type:"button",className:s.selectionControl,onClick:l=>l.stopPropagation(),children:a.jsx(we,{id:h,name:E,inputValue:String(r),checked:y,onChange:l=>{l?.stopPropagation(),Y?.(e)},"aria-label":C})})}),c==="multiple"&&a.jsx("td",{className:s.selectionCell,children:a.jsx("button",{type:"button",className:s.selectionControl,onClick:l=>l.stopPropagation(),children:a.jsx(he,{id:h,value:String(r),checked:d,onChange:l=>{if(l?.stopPropagation(),!R)return;const x=new Set(O);x.has(r)?x.delete(r):x.add(r);const W=o.filter((G,J)=>{const be=K(G,J);return x.has(be)});R(W)},"aria-label":C})})}),t.map(l=>a.jsx("td",{children:l.render?l.render(e):String(l.accessor?.(e)??"")},l.key))]},r)})})]}),(te||ne)&&a.jsxs("div",{className:s.paginationControls,children:[ne&&a.jsx("div",{className:s.pageSizeSelector,children:a.jsx(fe,{id:`${E}-page-size`,label:"Rader per side",options:j,value:f,onChange:e=>ge(Number(e)),width:"120px",size:"small"})}),te&&a.jsxs("div",{className:s.pagination,children:[a.jsx("button",{type:"button",className:s.pageButton,onClick:()=>ae(S-1),disabled:S<=1,"aria-label":"Forrige side",children:"Forrige"}),a.jsxs("span",{className:s.pageInfo,children:["Side ",S," av ",b]}),a.jsx("button",{type:"button",className:s.pageButton,onClick:()=>ae(S+1),disabled:S>=b,"aria-label":"Neste side",children:"Neste"})]})]})]})};try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const Ze={title:"Example/Table",component:_,tags:["autodocs"]},N=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],se=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],k=[{key:"id",label:"ID",sortable:!0,accessor:t=>t.id},{key:"name",label:"Name",sortable:!0,accessor:t=>t.name},{key:"age",label:"Age",sortable:!0,accessor:t=>t.age},{key:"city",label:"City",sortable:!0,accessor:t=>t.city}],z={args:{columns:k,data:N,caption:"A simple sortable table of people"}},A={args:{columns:k.map(t=>({...t,sortable:!1})),data:N,caption:"A table without sorting"}},V={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:t=>t.name,render:t=>a.jsx("strong",{children:t.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:t=>t.age,render:t=>a.jsxs("em",{children:[t.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:t=>t.city}],data:N,caption:"Table with custom cell rendering"}},T={render:t=>{const[o,u]=i.useState();return a.jsx(_,{...t,selectionType:"single",selectedRowId:o,onSelect:m=>u(m.id),onRowClick:m=>u(m.id)})},args:{columns:k,data:N,caption:"Single select table with radio buttons",getRowId:t=>t.id}},M={render:t=>{const[o,u]=i.useState([]);return a.jsx(_,{...t,selectionType:"multiple",selectedRowIds:o.map(m=>m.id),onSelectMany:u})},args:{columns:k,data:N,caption:"Multiple select table with checkboxes",getRowId:t=>t.id}},B={render:t=>{const[o,u]=i.useState();return a.jsxs(a.Fragment,{children:[a.jsx(_,{...t,onRowClick:m=>u(m.name)}),a.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",a.jsx("strong",{children:o??"Ingen"})]})]})},args:{columns:k,data:N,caption:"Click a row to trigger onRowClick"}},D={args:{columns:k,data:se,pageSize:10,caption:"Paginated table (10 rows per page)"}},q={render:t=>{const[o,u]=i.useState(5),[m,c]=i.useState(1);return a.jsx(_,{...t,page:m,onPageChange:c,pageSize:o,onPageSizeChange:C=>{u(C),c(1)}})},args:{columns:k,data:se,pageSizeOptions:[5,10,15,25],pageSize:5,caption:"Paginated table with selectable page size"}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData,
    caption: "A simple sortable table of people"
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData,
    caption: "A table without sorting"
  }
}`,...A.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    data: sampleData,
    caption: "Table with custom cell rendering"
  }
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | undefined>();
    return <Table {...args} selectionType="single" selectedRowId={selectedId} onSelect={row => setSelectedId(row.id)} onRowClick={row => setSelectedId(row.id)} />;
  },
  args: {
    columns,
    data: sampleData,
    caption: "Single select table with radio buttons",
    getRowId: row => row.id
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <Table {...args} selectionType="multiple" selectedRowIds={selectedRows.map(row => row.id)} onSelectMany={setSelectedRows} />;
  },
  args: {
    columns,
    data: sampleData,
    caption: "Multiple select table with checkboxes",
    getRowId: row => row.id
  }
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    data: sampleData,
    caption: "Click a row to trigger onRowClick"
  }
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10,
    caption: "Paginated table (10 rows per page)"
  }
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    pageSize: 5,
    caption: "Paginated table with selectable page size"
  }
}`,...q.parameters?.docs?.source}}};const ea=["Default","NoSorting","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{V as CustomRender,z as Default,M as MultiSelect,A as NoSorting,D as Paginated,q as PaginatedWithPageSizeSelector,B as RowClick,T as SingleSelect,ea as __namedExportsOrder,Ze as default};
