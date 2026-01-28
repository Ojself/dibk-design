import{r as c,d as I,j as e}from"./iframe-BH9uU73o.js";import{B as te}from"./Button-CFF8Zyx3.js";import{C as we}from"./CheckBoxInput-CEd-yAxA.js";import{L as ye}from"./LoadingAnimation-PbZcgAg9.js";import{R as Ne}from"./RadioButtonInput-5CfxEkBl.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-CVNeGJDo.js";import"./RadioButtonIcon-rksXy2EZ.js";const _e="_table_u0bfg_5",Se="_thButton_u0bfg_25",ke="_sortable_u0bfg_33",ve="_label_u0bfg_43",xe="_sortIndicators_u0bfg_47",Ce="_sortArrow_u0bfg_55",je="_activeArrow_u0bfg_62",Re="_evenRow_u0bfg_66",Ie="_oddRow_u0bfg_69",Le="_loadingRow_u0bfg_82",Me="_loadingCell_u0bfg_86",Ae="_selectionHeader_u0bfg_91",Be="_selectionCell_u0bfg_97",Ve="_selectionControl_u0bfg_111",Pe="_rowClickable_u0bfg_118",Te="_srOnly_u0bfg_125",qe="_pagination_u0bfg_136",De="_paginationControls_u0bfg_143",Ye="_pageNavButtonHidden_u0bfg_152",ze="_pageNavIcon_u0bfg_156",Ee="_pageList_u0bfg_162",Oe="_pageNumber_u0bfg_168",$e="_pageNumberActive_u0bfg_189",He="_pageEllipsis_u0bfg_194",t={table:_e,thButton:Se,sortable:ke,label:ve,sortIndicators:xe,sortArrow:Ce,activeArrow:je,evenRow:Re,oddRow:Ie,loadingRow:Le,loadingCell:Me,selectionHeader:Ae,selectionCell:Be,selectionControl:Ve,rowClickable:Pe,srOnly:Te,pagination:qe,paginationControls:De,pageNavButtonHidden:Ye,pageNavIcon:ze,pageList:Ee,pageNumber:Oe,pageNumberActive:$e,pageEllipsis:He},Fe=(n,s)=>s<=7?Array.from({length:s},(f,m)=>m+1):n<=4?[1,2,3,4,5,"...",s]:n>=s-3?[1,"...",s-4,s-3,s-2,s-1,s]:[1,"...",n-1,n,n+1,"...",s],k=({columns:n,data:s,loading:f=!1,loadingAriaLabel:m,getRowId:re,selectionType:_,selectionLabel:L="Velg rad",selectedRowId:oe,onSelect:E,selectedRowIds:Q,onSelectMany:x,onRowClick:U,pageSize:M,page:C,defaultPage:ie=1,onPageChange:le,totalCount:j,totalPages:R})=>{const[p,O]=c.useState(null),X=c.useId(),[Z,ee]=c.useState(ie);c.useEffect(()=>{const a=n.find(r=>r.sortable);O(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const ae=c.useMemo(()=>{const a=new Map;for(const r of n)a.set(r.key,r);return a},[n]),h=c.useMemo(()=>{if(!p)return s;const a=ae.get(p.headerKey);if(!a)return s;const r=a.sortAccessor??a.accessor;if(!r)return s;const o=[...s];return o.sort((w,b)=>{const l=r(w),g=r(b);if(l==null||g==null)return 0;if(typeof l=="number"&&typeof g=="number")return p.direction==="asc"?l-g:g-l;if(l instanceof Date&&g instanceof Date)return p.direction==="asc"?l.getTime()-g.getTime():g.getTime()-l.getTime();const A=String(l),K=String(g);return p.direction==="asc"?A.localeCompare(K,void 0,{numeric:!0}):K.localeCompare(A,void 0,{numeric:!0})}),o},[s,p,ae]),ce=a=>{O(r=>!r||r.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:r.direction==="asc"?"desc":"asc"})},de=(a,r)=>{if(r)return p?.headerKey!==a?"none":p.direction==="asc"?"ascending":"descending"},$=(a,r)=>{const o=re?.(a,r);if(o==null||o===""){const w=s.indexOf(a);return w===-1?r:w}return o},H=c.useMemo(()=>_!=="multiple"?new Set:new Set(Q??[]),[Q,_]),y=c.useMemo(()=>!M||M<=0?h.length||s.length||1:M,[M,h.length,s.length]),u=c.useMemo(()=>R!==void 0?Math.max(1,Math.floor(R)):j!==void 0?Math.max(1,Math.ceil(j/y)):Math.max(1,Math.ceil(h.length/y)),[h.length,y,j,R]),d=c.useMemo(()=>{const a=C??Z;return!Number.isFinite(a)||a<1?1:a>u?u:a},[C,Z,u]);c.useEffect(()=>{C===void 0&&d>u&&ee(u)},[d,u,C]);const ue=c.useMemo(()=>{if(R!==void 0||j!==void 0||y>=h.length)return h;const a=(d-1)*y;return h.slice(a,a+y)},[h,d,y,j,R]),ge=n.length+(_?1:0),F=a=>{const r=Math.min(Math.max(a,1),u);C!==void 0?le?.(r):ee(r)},me=!f&&u>1,pe=c.useMemo(()=>Fe(d,u),[d,u]),fe=I([t.paginationControls]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[_&&e.jsx("th",{className:t.selectionHeader,"aria-label":L,children:e.jsx("span",{className:t.srOnly,children:L})}),n.map(({key:a,label:r,sortable:o,ariaLabel:w})=>{const b=p?.headerKey===a,l=b&&p.direction==="asc",g=b&&p.direction==="desc";return e.jsx("th",{"aria-sort":de(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>ce(a),"aria-label":`${w??r}: sort ${b&&l?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:r}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${l?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${g?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:r})})},a)})]})}),e.jsx("tbody",{children:f?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:ge,children:e.jsx(ye,{ariaLabel:m})})}):ue.map((a,r)=>{const o=$(a,r),w=`${X}-${o}`,b=_==="single",l=_==="multiple",g=b&&oe===o,A=l&&H.has(o),ne=!!U||b&&!!E||l&&!!x,be=()=>{if(b)E?.(a);else if(l&&x){const i=new Set(H);i.has(o)?i.delete(o):i.add(o);const S=s.filter((W,G)=>{const J=$(W,G);return i.has(J)});x(S)}U?.(a)};return e.jsxs("tr",{className:I([r%2===0?t.evenRow:t.oddRow,ne&&t.rowClickable]),onClick:ne?be:void 0,children:[b&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(Ne,{id:w,name:X,inputValue:String(o),checked:g,onChange:i=>{i?.stopPropagation(),E?.(a)},"aria-label":L})})}),l&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(we,{id:w,value:String(o),checked:A,onChange:i=>{if(i?.stopPropagation(),!x)return;const S=new Set(H);S.has(o)?S.delete(o):S.add(o);const W=s.filter((G,J)=>{const he=$(G,J);return S.has(he)});x(W)},"aria-label":L})})}),n.map(i=>e.jsx("td",{children:i.render?i.render(a):String(i.accessor?.(a)??"")},i.key))]},o)})})]}),me&&e.jsx("div",{className:fe,children:e.jsxs("div",{className:t.pagination,children:[e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>F(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:pe.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:I([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>F(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonNext,d>=u&&t.pageNavButtonHidden]),onClick:()=>F(d+1),disabled:d>=u,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})})]})};try{k.displayName="Table",k.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const ta={title:"Primitives/Table",component:k,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],se=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],N=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],B={args:{columns:N,data:v}},V={args:{columns:N.map(n=>({...n,sortable:!1})),data:v}},P={args:{columns:N,data:se,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},T={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v}},q={render:n=>{const[s,f]=c.useState();return e.jsx(k,{...n,selectionType:"single",selectedRowId:s,onSelect:m=>f(m.id),onRowClick:m=>f(m.id)})},args:{columns:N,data:v,getRowId:n=>n.id}},D={render:n=>{const[s,f]=c.useState([]);return e.jsx(k,{...n,selectionType:"multiple",selectedRowIds:s.map(m=>m.id),onSelectMany:f})},args:{columns:N,data:v,getRowId:n=>n.id}},Y={render:n=>{const[s,f]=c.useState();return e.jsxs(e.Fragment,{children:[e.jsx(k,{...n,onRowClick:m=>f(m.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:s??"Ingen"})]})]})},args:{columns:N,data:v}},z={args:{columns:N,data:se,pageSize:10}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData
  }
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData
  }
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = useState<number | undefined>();
    return <Table {...args} selectionType="single" selectedRowId={selectedId} onSelect={row => setSelectedId(row.id)} onRowClick={row => setSelectedId(row.id)} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <Table {...args} selectionType="multiple" selectedRowIds={selectedRows.map(row => row.id)} onSelectMany={setSelectedRows} />;
  },
  args: {
    columns,
    data: sampleData,
    getRowId: row => row.id
  }
}`,...D.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    pageSize: 10
  }
}`,...z.parameters?.docs?.source}}};const sa=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated"];export{T as CustomRender,B as Default,P as Loading,D as MultiSelect,V as NoSorting,z as Paginated,Y as RowClick,q as SingleSelect,sa as __namedExportsOrder,ta as default};
