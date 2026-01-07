import{r as i,c as X,j as a}from"./iframe-jc3mSUDW.js";import{C as fe}from"./CheckBoxInput-CRaFCCiC.js";import{R as ye}from"./RadioButtonInput-B4FusiS2.js";import{S as _e}from"./Select-CDgX0A60.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./CheckBoxIcon-QyjQzFWH.js";import"./RadioButtonIcon-Bq96uN5A.js";import"./index-SIIUCqcs.js";import"./index-DyOcHBTn.js";import"./ErrorMessage-CX05eKGM.js";import"./error-icon-q7FAEQyj.js";import"./Label-BtTMsq9C.js";const ke="_table_1mqun_1",Ne="_thButton_1mqun_30",xe="_sortable_1mqun_40",ve="_label_1mqun_50",Ce="_sortIndicators_1mqun_54",je="_sortArrow_1mqun_60",Pe="_activeArrow_1mqun_66",Re="_evenRow_1mqun_70",Ie="_oddRow_1mqun_73",qe="_selectionHeader_1mqun_84",ze="_selectionCell_1mqun_90",Ae="_selectionControl_1mqun_104",Le="_rowClickable_1mqun_111",Me="_srOnly_1mqun_118",Be="_pagination_1mqun_129",Ve="_paginationControls_1mqun_136",Te="_paginationWithPageSize_1mqun_145",De="_pageSizeSelector_1mqun_149",Ye="_pageNavButton_1mqun_153",Ee="_pageNavIcon_1mqun_178",$e="_pageList_1mqun_184",We="_pageNumber_1mqun_190",Fe="_pageNumberActive_1mqun_212",Ke="_pageEllipsis_1mqun_216",s={table:ke,thButton:Ne,sortable:xe,label:ve,sortIndicators:Ce,sortArrow:je,activeArrow:Pe,evenRow:Re,oddRow:Ie,selectionHeader:qe,selectionCell:ze,selectionControl:Ae,rowClickable:Le,srOnly:Me,pagination:Be,paginationControls:Ve,paginationWithPageSize:Te,pageSizeSelector:De,pageNavButton:Ye,pageNavIcon:Ee,pageList:$e,pageNumber:We,pageNumberActive:Fe,pageEllipsis:Ke},Oe=(n,r)=>r<=7?Array.from({length:r},(m,d)=>d+1):n<=4?[1,2,3,4,5,"...",r]:n>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",n-1,n,n+1,"...",r],_=({columns:n,data:r,caption:m,getRowId:d,selectionType:c,selectionLabel:N="Velg rad",selectedRowId:oe,onSelect:D,selectedRowIds:Z,onSelectMany:C,onRowClick:ee,pageSize:R,page:j,defaultPage:ie=1,onPageChange:le,pageSizeOptions:I,defaultPageSize:Y,onPageSizeChange:ce})=>{const[p,E]=i.useState(null),$=i.useId(),[ae,W]=i.useState(ie),[ne,de]=i.useState(()=>{if(R===void 0){if(Y&&Y>0)return Y;if(I?.length)return I[0]}});i.useEffect(()=>{const e=n.find(t=>t.sortable);E(e?{headerKey:e.key,direction:"asc"}:null)},[n]);const te=i.useMemo(()=>{const e=new Map;for(const t of n)e.set(t.key,t);return e},[n]),S=i.useMemo(()=>{if(!p)return r;const e=te.get(p.headerKey);if(!e)return r;const t=e.sortAccessor??e.accessor;if(!t)return r;const o=[...r];return o.sort((w,y)=>{const u=t(w),b=t(y);if(u==null||b==null)return 0;if(typeof u=="number"&&typeof b=="number")return p.direction==="asc"?u-b:b-u;if(u instanceof Date&&b instanceof Date)return p.direction==="asc"?u.getTime()-b.getTime():b.getTime()-u.getTime();const G=String(u),P=String(b);return p.direction==="asc"?G.localeCompare(P,void 0,{numeric:!0}):P.localeCompare(G,void 0,{numeric:!0})}),o},[r,p,te]),ue=e=>{E(t=>!t||t.headerKey!==e?{headerKey:e,direction:"asc"}:{headerKey:e,direction:t.direction==="asc"?"desc":"asc"})},me=(e,t)=>{if(t)return p?.headerKey!==e?"none":p.direction==="asc"?"ascending":"descending"},F=(e,t)=>{const o=d?.(e,t);if(o==null||o===""){const w=r.indexOf(e);return w===-1?t:w}return o},K=i.useMemo(()=>c!=="multiple"?new Set:new Set(Z??[]),[Z,c]),f=i.useMemo(()=>{const e=R??ne;return!e||e<=0?S.length||r.length||1:e},[R,ne,S.length,r.length]),h=i.useMemo(()=>Math.max(1,Math.ceil(S.length/f)),[S.length,f]),g=i.useMemo(()=>{const e=j??ae;return!Number.isFinite(e)||e<1?1:e>h?h:e},[j,ae,h]);i.useEffect(()=>{j===void 0&&g>h&&W(h)},[g,h,j]);const ge=i.useMemo(()=>{if(f>=S.length)return S;const e=(g-1)*f;return S.slice(e,e+f)},[S,g,f]),O=e=>{const t=Math.min(Math.max(e,1),h);j!==void 0?le?.(t):W(t)},pe=e=>{const t=e>0?Math.floor(e):1;R!==void 0?ce?.(t):(de(t),W(1))},se=h>1,H=!!I?.length,he=i.useMemo(()=>Oe(g,h),[g,h]),be=X([s.paginationControls,H&&s.paginationWithPageSize]);return a.jsxs(a.Fragment,{children:[a.jsxs("table",{className:s.table,children:[m&&a.jsx("caption",{children:m}),a.jsx("thead",{children:a.jsxs("tr",{children:[c&&a.jsx("th",{className:s.selectionHeader,"aria-label":N,children:a.jsx("span",{className:s.srOnly,children:N})}),n.map(({key:e,label:t,sortable:o,ariaLabel:w})=>{const y=p?.headerKey===e,u=y&&p.direction==="asc",b=y&&p.direction==="desc";return a.jsx("th",{"aria-sort":me(e,o),scope:"col",children:o?a.jsxs("button",{type:"button",className:`${s.thButton} ${s.sortable}`,onClick:()=>ue(e),"aria-label":`${w??t}: sort ${y&&u?"descending":"ascending"}`,children:[a.jsx("span",{className:s.label,children:t}),a.jsxs("span",{className:s.sortIndicators,"aria-hidden":"true",children:[a.jsx("span",{className:`${s.sortArrow} ${u?s.activeArrow:""}`,children:a.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:a.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx("span",{className:`${s.sortArrow} ${b?s.activeArrow:""}`,children:a.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:a.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):a.jsx("span",{className:s.thButton,children:a.jsx("span",{className:s.label,children:t})})},e)})]})}),a.jsx("tbody",{children:ge.map((e,t)=>{const o=F(e,t),w=`${$}-${o}`,y=c==="single"&&oe===o,u=c==="multiple"&&K.has(o),P=!!ee||c==="single"&&!!D||c==="multiple"&&!!C,we=()=>{if(c==="single")D?.(e);else if(c==="multiple"&&C){const l=new Set(K);l.has(o)?l.delete(o):l.add(o);const x=r.filter((J,Q)=>{const U=F(J,Q);return l.has(U)});C(x)}ee?.(e)};return a.jsxs("tr",{className:X([t%2===0?s.evenRow:s.oddRow,P&&s.rowClickable]),onClick:P?we:void 0,children:[c==="single"&&a.jsx("td",{className:s.selectionCell,children:a.jsx("button",{type:"button",className:s.selectionControl,onClick:l=>l.stopPropagation(),children:a.jsx(ye,{id:w,name:$,inputValue:String(o),checked:y,onChange:l=>{l?.stopPropagation(),D?.(e)},"aria-label":N})})}),c==="multiple"&&a.jsx("td",{className:s.selectionCell,children:a.jsx("button",{type:"button",className:s.selectionControl,onClick:l=>l.stopPropagation(),children:a.jsx(fe,{id:w,value:String(o),checked:u,onChange:l=>{if(l?.stopPropagation(),!C)return;const x=new Set(K);x.has(o)?x.delete(o):x.add(o);const J=r.filter((Q,U)=>{const Se=F(Q,U);return x.has(Se)});C(J)},"aria-label":N})})}),n.map(l=>a.jsx("td",{children:l.render?l.render(e):String(l.accessor?.(e)??"")},l.key))]},o)})})]}),(se||H)&&a.jsxs("div",{className:be,children:[H&&a.jsx("div",{className:s.pageSizeSelector,children:a.jsx(_e,{id:`${$}-page-size`,label:"Rader per side",options:I,value:f,onChange:e=>pe(Number(e)),width:"120px",size:"small"})}),se&&a.jsxs("div",{className:s.pagination,children:[a.jsxs("button",{type:"button",className:s.pageNavButton,onClick:()=>O(g-1),disabled:g<=1,"aria-label":"Forrige side",children:[a.jsx("span",{className:s.pageNavIcon,"aria-hidden":"true",children:a.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Forrige"]}),a.jsx("div",{className:s.pageList,role:"list",children:he.map((e,t)=>e==="..."?a.jsx("span",{className:s.pageEllipsis,children:"..."},`ellipsis-${t}`):a.jsx("button",{type:"button",className:X([s.pageNumber,e===g&&s.pageNumberActive]),onClick:()=>O(Number(e)),"aria-current":e===g?"page":void 0,children:e},e))}),a.jsxs("button",{type:"button",className:s.pageNavButton,onClick:()=>O(g+1),disabled:g>=h,"aria-label":"Neste side",children:["Neste",a.jsx("span",{className:s.pageNavIcon,"aria-hidden":"true",children:a.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})};try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const oa={title:"Example/Table",component:_,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],re=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],k=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],q={args:{columns:k,data:v,caption:"A simple sortable table of people"}},z={args:{columns:k.map(n=>({...n,sortable:!1})),data:v,caption:"A table without sorting"}},A={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>a.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>a.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v,caption:"Table with custom cell rendering"}},L={render:n=>{const[r,m]=i.useState();return a.jsx(_,{...n,selectionType:"single",selectedRowId:r,onSelect:d=>m(d.id),onRowClick:d=>m(d.id)})},args:{columns:k,data:v,caption:"Single select table with radio buttons",getRowId:n=>n.id}},M={render:n=>{const[r,m]=i.useState([]);return a.jsx(_,{...n,selectionType:"multiple",selectedRowIds:r.map(d=>d.id),onSelectMany:m})},args:{columns:k,data:v,caption:"Multiple select table with checkboxes",getRowId:n=>n.id}},B={render:n=>{const[r,m]=i.useState();return a.jsxs(a.Fragment,{children:[a.jsx(_,{...n,onRowClick:d=>m(d.name)}),a.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",a.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:k,data:v,caption:"Click a row to trigger onRowClick"}},V={args:{columns:k,data:re,pageSize:10,caption:"Paginated table (10 rows per page)"}},T={render:n=>{const[r,m]=i.useState(5),[d,c]=i.useState(1);return a.jsx(_,{...n,page:d,onPageChange:c,pageSize:r,onPageSizeChange:N=>{m(N),c(1)}})},args:{columns:k,data:re,pageSizeOptions:[5,10,15,25],pageSize:5,caption:"Paginated table with selectable page size"}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData,
    caption: "A simple sortable table of people"
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData,
    caption: "A table without sorting"
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10,
    caption: "Paginated table (10 rows per page)"
  }
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ia=["Default","NoSorting","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{A as CustomRender,q as Default,M as MultiSelect,z as NoSorting,V as Paginated,T as PaginatedWithPageSizeSelector,B as RowClick,L as SingleSelect,ia as __namedExportsOrder,oa as default};
