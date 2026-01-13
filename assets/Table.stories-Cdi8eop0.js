import{r as i,c as R,j as e}from"./iframe-D-wun3FS.js";import{B as le}from"./Button-BEwnHnlq.js";import{C as xe}from"./CheckBoxInput-DJOQxXye.js";import{L as ve}from"./LoadingAnimation-DZH_bdeX.js";import{R as ke}from"./RadioButtonInput-UCKZzbM-.js";import{S as Ce}from"./Select-D_jtOI_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-D6J2dKLc.js";import"./RadioButtonIcon-_DC3Fn0K.js";import"./index-D7cIzlbd.js";import"./index-CkGu_gum.js";import"./ErrorMessage-DTOH58zA.js";import"./error-icon-q7FAEQyj.js";import"./Label-BidrN6wp.js";const je="_table_m7buf_1",Re="_thButton_m7buf_19",Pe="_sortable_m7buf_29",Ie="_label_m7buf_39",ze="_sortIndicators_m7buf_43",Le="_sortArrow_m7buf_49",Be="_activeArrow_m7buf_55",Ae="_evenRow_m7buf_59",Me="_oddRow_m7buf_62",Ve="_loadingRow_m7buf_73",De="_loadingCell_m7buf_77",qe="_selectionHeader_m7buf_82",Te="_selectionCell_m7buf_88",Ye="_selectionControl_m7buf_102",Ee="_rowClickable_m7buf_109",$e="_srOnly_m7buf_116",We="_pagination_m7buf_127",He="_paginationControls_m7buf_134",Oe="_paginationWithPageSize_m7buf_143",Fe="_pageSizeSelector_m7buf_147",Ke="_pageNavButtonHidden_m7buf_151",Ge="_pageNavIcon_m7buf_155",Je="_pageList_m7buf_161",Qe="_pageNumber_m7buf_167",Ue="_pageNumberActive_m7buf_188",Xe="_pageEllipsis_m7buf_193",t={table:je,thButton:Re,sortable:Pe,label:Ie,sortIndicators:ze,sortArrow:Le,activeArrow:Be,evenRow:Ae,oddRow:Me,loadingRow:Ve,loadingCell:De,selectionHeader:qe,selectionCell:Te,selectionControl:Ye,rowClickable:Ee,srOnly:$e,pagination:We,paginationControls:He,paginationWithPageSize:Oe,pageSizeSelector:Fe,pageNavButtonHidden:Ke,pageNavIcon:Ge,pageList:Je,pageNumber:Qe,pageNumberActive:Ue,pageEllipsis:Xe},Ze=(n,r)=>r<=7?Array.from({length:r},(u,m)=>m+1):n<=4?[1,2,3,4,5,"...",r]:n>=r-3?[1,"...",r-4,r-3,r-2,r-1,r]:[1,"...",n-1,n,n+1,"...",r],N=({columns:n,data:r,loading:u=!1,loadingAriaLabel:m,getRowId:P,selectionType:c,selectionLabel:I="Velg rad",selectedRowId:ce,onSelect:$,selectedRowIds:ne,onSelectMany:k,onRowClick:te,pageSize:z,page:C,defaultPage:de=1,onPageChange:ue,pageSizeOptions:L,defaultPageSize:W,onPageSizeChange:me})=>{const[f,H]=i.useState(null),O=i.useId(),[se,F]=i.useState(de),[re,ge]=i.useState(()=>{if(z===void 0){if(W&&W>0)return W;if(L?.length)return L[0]}});i.useEffect(()=>{const a=n.find(s=>s.sortable);H(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const oe=i.useMemo(()=>{const a=new Map;for(const s of n)a.set(s.key,s);return a},[n]),S=i.useMemo(()=>{if(!f)return r;const a=oe.get(f.headerKey);if(!a)return r;const s=a.sortAccessor??a.accessor;if(!s)return r;const o=[...r];return o.sort((h,_)=>{const g=s(h),b=s(_);if(g==null||b==null)return 0;if(typeof g=="number"&&typeof b=="number")return f.direction==="asc"?g-b:b-g;if(g instanceof Date&&b instanceof Date)return f.direction==="asc"?g.getTime()-b.getTime():b.getTime()-g.getTime();const U=String(g),j=String(b);return f.direction==="asc"?U.localeCompare(j,void 0,{numeric:!0}):j.localeCompare(U,void 0,{numeric:!0})}),o},[r,f,oe]),pe=a=>{H(s=>!s||s.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:s.direction==="asc"?"desc":"asc"})},fe=(a,s)=>{if(s)return f?.headerKey!==a?"none":f.direction==="asc"?"ascending":"descending"},K=(a,s)=>{const o=P?.(a,s);if(o==null||o===""){const h=r.indexOf(a);return h===-1?s:h}return o},G=i.useMemo(()=>c!=="multiple"?new Set:new Set(ne??[]),[ne,c]),y=i.useMemo(()=>{const a=z??re;return!a||a<=0?S.length||r.length||1:a},[z,re,S.length,r.length]),p=i.useMemo(()=>Math.max(1,Math.ceil(S.length/y)),[S.length,y]),d=i.useMemo(()=>{const a=C??se;return!Number.isFinite(a)||a<1?1:a>p?p:a},[C,se,p]);i.useEffect(()=>{C===void 0&&d>p&&F(p)},[d,p,C]);const be=i.useMemo(()=>{if(y>=S.length)return S;const a=(d-1)*y;return S.slice(a,a+y)},[S,d,y]),he=n.length+(c?1:0),J=a=>{const s=Math.min(Math.max(a,1),p);C!==void 0?ue?.(s):F(s)},Se=a=>{const s=a>0?Math.floor(a):1;z!==void 0?me?.(s):(ge(s),F(1))},ie=!u&&p>1,Q=!u&&!!L?.length,we=i.useMemo(()=>Ze(d,p),[d,p]),ye=R([t.paginationControls,Q&&t.paginationWithPageSize]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[c&&e.jsx("th",{className:t.selectionHeader,"aria-label":I,children:e.jsx("span",{className:t.srOnly,children:I})}),n.map(({key:a,label:s,sortable:o,ariaLabel:h})=>{const _=f?.headerKey===a,g=_&&f.direction==="asc",b=_&&f.direction==="desc";return e.jsx("th",{"aria-sort":fe(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>pe(a),"aria-label":`${h??s}: sort ${_&&g?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:s}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${g?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${b?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:s})})},a)})]})}),e.jsx("tbody",{children:u?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:he,children:e.jsx(ve,{ariaLabel:m})})}):be.map((a,s)=>{const o=K(a,s),h=`${O}-${o}`,_=c==="single"&&ce===o,g=c==="multiple"&&G.has(o),j=!!te||c==="single"&&!!$||c==="multiple"&&!!k,_e=()=>{if(c==="single")$?.(a);else if(c==="multiple"&&k){const l=new Set(G);l.has(o)?l.delete(o):l.add(o);const x=r.filter((X,Z)=>{const ee=K(X,Z);return l.has(ee)});k(x)}te?.(a)};return e.jsxs("tr",{className:R([s%2===0?t.evenRow:t.oddRow,j&&t.rowClickable]),onClick:j?_e:void 0,children:[c==="single"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(ke,{id:h,name:O,inputValue:String(o),checked:_,onChange:l=>{l?.stopPropagation(),$?.(a)},"aria-label":I})})}),c==="multiple"&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:l=>l.stopPropagation(),children:e.jsx(xe,{id:h,value:String(o),checked:g,onChange:l=>{if(l?.stopPropagation(),!k)return;const x=new Set(G);x.has(o)?x.delete(o):x.add(o);const X=r.filter((Z,ee)=>{const Ne=K(Z,ee);return x.has(Ne)});k(X)},"aria-label":I})})}),n.map(l=>e.jsx("td",{children:l.render?l.render(a):String(l.accessor?.(a)??"")},l.key))]},o)})})]}),(ie||Q)&&e.jsxs("div",{className:ye,children:[Q&&e.jsx("div",{className:t.pageSizeSelector,children:e.jsx(Ce,{id:`${O}-page-size`,label:"Rader per side",options:L,value:y,onChange:a=>Se(Number(a)),width:"120px",size:"small"})}),ie&&e.jsxs("div",{className:t.pagination,children:[e.jsx(le,{type:"button",color:"neutral",noMargin:!0,className:R([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>J(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:we.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:R([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>J(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(le,{type:"button",color:"neutral",noMargin:!0,className:R([t.pageNavButtonNext,d>=p&&t.pageNavButtonHidden]),onClick:()=>J(d+1),disabled:d>=p,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]})]})};try{N.displayName="Table",N.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const ba={title:"Example/Table",component:N,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],ae=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],w=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],B={args:{columns:w,data:v}},A={args:{columns:w.map(n=>({...n,sortable:!1})),data:v}},M={args:{columns:w,data:ae,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},V={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v}},D={render:n=>{const[r,u]=i.useState();return e.jsx(N,{...n,selectionType:"single",selectedRowId:r,onSelect:m=>u(m.id),onRowClick:m=>u(m.id)})},args:{columns:w,data:v,getRowId:n=>n.id}},q={render:n=>{const[r,u]=i.useState([]);return e.jsx(N,{...n,selectionType:"multiple",selectedRowIds:r.map(m=>m.id),onSelectMany:u})},args:{columns:w,data:v,getRowId:n=>n.id}},T={render:n=>{const[r,u]=i.useState();return e.jsxs(e.Fragment,{children:[e.jsx(N,{...n,onRowClick:m=>u(m.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:r??"Ingen"})]})]})},args:{columns:w,data:v}},Y={args:{columns:w,data:ae,pageSize:10}},E={render:n=>{const[r,u]=i.useState(5),[m,P]=i.useState(1);return e.jsx(N,{...n,page:m,onPageChange:P,pageSize:r,onPageSizeChange:c=>{u(c),P(1)}})},args:{columns:w,data:ae,pageSizeOptions:[5,10,15,25],pageSize:5}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <Table {...args} selectionType="multiple" selectedRowIds={selectedRows.map(row => row.id)} onSelectMany={setSelectedRows} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const ha=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated","PaginatedWithPageSizeSelector"];export{V as CustomRender,B as Default,M as Loading,q as MultiSelect,A as NoSorting,Y as Paginated,E as PaginatedWithPageSizeSelector,T as RowClick,D as SingleSelect,ha as __namedExportsOrder,ba as default};
