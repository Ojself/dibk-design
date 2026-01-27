import{r as c,b as I,j as e}from"./iframe-tujtW6Px.js";import{B as te}from"./Button-CujWYUv4.js";import{C as ye}from"./CheckBoxInput-41jzknJ8.js";import{L as be}from"./LoadingAnimation-G0Aki3qo.js";import{R as ve}from"./RadioButtonInput-CWrFSrmA.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-1FdKgIIn.js";import"./checkmark-symbol-BF8iouuA.js";import"./CheckBoxIcon-fferfpkU.js";import"./RadioButtonIcon-B6-JzBc3.js";const je="_table_jvdpc_2",Ne="_thButton_jvdpc_22",_e="_sortable_jvdpc_30",Se="_label_jvdpc_40",ke="_sortIndicators_jvdpc_44",xe="_sortArrow_jvdpc_52",Ce="_activeArrow_jvdpc_59",Re="_evenRow_jvdpc_63",Ie="_oddRow_jvdpc_66",Le="_loadingRow_jvdpc_79",Me="_loadingCell_jvdpc_83",Ae="_selectionHeader_jvdpc_88",Be="_selectionCell_jvdpc_94",Ve="_selectionControl_jvdpc_108",Pe="_rowClickable_jvdpc_115",Te="_srOnly_jvdpc_122",qe="_pagination_jvdpc_133",De="_paginationControls_jvdpc_140",Ye="_pageNavButtonHidden_jvdpc_149",ze="_pageNavIcon_jvdpc_153",Ee="_pageList_jvdpc_159",Oe="_pageNumber_jvdpc_165",$e="_pageNumberActive_jvdpc_186",He="_pageEllipsis_jvdpc_191",t={table:je,thButton:Ne,sortable:_e,label:Se,sortIndicators:ke,sortArrow:xe,activeArrow:Ce,evenRow:Re,oddRow:Ie,loadingRow:Le,loadingCell:Me,selectionHeader:Ae,selectionCell:Be,selectionControl:Ve,rowClickable:Pe,srOnly:Te,pagination:qe,paginationControls:De,pageNavButtonHidden:Ye,pageNavIcon:ze,pageList:Ee,pageNumber:Oe,pageNumberActive:$e,pageEllipsis:He},Fe=(n,s)=>s<=7?Array.from({length:s},(f,p)=>p+1):n<=4?[1,2,3,4,5,"...",s]:n>=s-3?[1,"...",s-4,s-3,s-2,s-1,s]:[1,"...",n-1,n,n+1,"...",s],_=({columns:n,data:s,loading:f=!1,loadingAriaLabel:p,getRowId:re,selectionType:j,selectionLabel:L="Velg rad",selectedRowId:oe,onSelect:E,selectedRowIds:Q,onSelectMany:k,onRowClick:U,pageSize:M,page:x,defaultPage:ie=1,onPageChange:le,totalCount:C,totalPages:R})=>{const[g,O]=c.useState(null),X=c.useId(),[Z,ee]=c.useState(ie);c.useEffect(()=>{const a=n.find(r=>r.sortable);O(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const ae=c.useMemo(()=>{const a=new Map;for(const r of n)a.set(r.key,r);return a},[n]),w=c.useMemo(()=>{if(!g)return s;const a=ae.get(g.headerKey);if(!a)return s;const r=a.sortAccessor??a.accessor;if(!r)return s;const o=[...s];return o.sort((y,h)=>{const l=r(y),m=r(h);if(l==null||m==null)return 0;if(typeof l=="number"&&typeof m=="number")return g.direction==="asc"?l-m:m-l;if(l instanceof Date&&m instanceof Date)return g.direction==="asc"?l.getTime()-m.getTime():m.getTime()-l.getTime();const A=String(l),K=String(m);return g.direction==="asc"?A.localeCompare(K,void 0,{numeric:!0}):K.localeCompare(A,void 0,{numeric:!0})}),o},[s,g,ae]),ce=a=>{O(r=>!r||r.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:r.direction==="asc"?"desc":"asc"})},de=(a,r)=>{if(r)return g?.headerKey!==a?"none":g.direction==="asc"?"ascending":"descending"},$=(a,r)=>{const o=re?.(a,r);if(o==null||o===""){const y=s.indexOf(a);return y===-1?r:y}return o},H=c.useMemo(()=>j!=="multiple"?new Set:new Set(Q??[]),[Q,j]),b=c.useMemo(()=>!M||M<=0?w.length||s.length||1:M,[M,w.length,s.length]),u=c.useMemo(()=>R!==void 0?Math.max(1,Math.floor(R)):C!==void 0?Math.max(1,Math.ceil(C/b)):Math.max(1,Math.ceil(w.length/b)),[w.length,b,C,R]),d=c.useMemo(()=>{const a=x??Z;return!Number.isFinite(a)||a<1?1:a>u?u:a},[x,Z,u]);c.useEffect(()=>{x===void 0&&d>u&&ee(u)},[d,u,x]);const ue=c.useMemo(()=>{if(R!==void 0||C!==void 0||b>=w.length)return w;const a=(d-1)*b;return w.slice(a,a+b)},[w,d,b,C,R]),me=n.length+(j?1:0),F=a=>{const r=Math.min(Math.max(a,1),u);x!==void 0?le?.(r):ee(r)},pe=!f&&u>1,ge=c.useMemo(()=>Fe(d,u),[d,u]),fe=I([t.paginationControls]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[j&&e.jsx("th",{className:t.selectionHeader,"aria-label":L,children:e.jsx("span",{className:t.srOnly,children:L})}),n.map(({key:a,label:r,sortable:o,ariaLabel:y})=>{const h=g?.headerKey===a,l=h&&g.direction==="asc",m=h&&g.direction==="desc";return e.jsx("th",{"aria-sort":de(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>ce(a),"aria-label":`${y??r}: sort ${h&&l?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:r}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${l?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${m?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:r})})},a)})]})}),e.jsx("tbody",{children:f?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:me,children:e.jsx(be,{ariaLabel:p})})}):ue.map((a,r)=>{const o=$(a,r),y=`${X}-${o}`,h=j==="single",l=j==="multiple",m=h&&oe===o,A=l&&H.has(o),ne=!!U||h&&!!E||l&&!!k,he=()=>{if(h)E?.(a);else if(l&&k){const i=new Set(H);i.has(o)?i.delete(o):i.add(o);const N=s.filter((W,G)=>{const J=$(W,G);return i.has(J)});k(N)}U?.(a)};return e.jsxs("tr",{className:I([r%2===0?t.evenRow:t.oddRow,ne&&t.rowClickable]),onClick:ne?he:void 0,children:[h&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(ve,{id:y,name:X,inputValue:String(o),checked:m,onChange:i=>{i?.stopPropagation(),E?.(a)},"aria-label":L})})}),l&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(ye,{id:y,value:String(o),checked:A,onChange:i=>{if(i?.stopPropagation(),!k)return;const N=new Set(H);N.has(o)?N.delete(o):N.add(o);const W=s.filter((G,J)=>{const we=$(G,J);return N.has(we)});k(W)},"aria-label":L})})}),n.map(i=>e.jsx("td",{children:i.render?i.render(a):String(i.accessor?.(a)??"")},i.key))]},o)})})]}),pe&&e.jsx("div",{className:fe,children:e.jsxs("div",{className:t.pagination,children:[e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>F(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Forrige side"}),e.jsx("path",{d:"M10.5 3.5L6 8l4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),e.jsx("div",{className:t.pageList,children:ge.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:I([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>F(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonNext,d>=u&&t.pageNavButtonHidden]),onClick:()=>F(d+1),disabled:d>=u,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx("span",{className:t.pageNavIcon,"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("title",{children:"Neste side"}),e.jsx("path",{d:"M5.5 3.5L10 8l-4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})})]})};try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const ta={title:"Primitives/Table",component:_,tags:["autodocs"]},S=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],se=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],v=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],B={args:{columns:v,data:S}},V={args:{columns:v.map(n=>({...n,sortable:!1})),data:S}},P={args:{columns:v,data:se,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},T={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:S}},q={render:n=>{const[s,f]=c.useState();return e.jsx(_,{...n,selectionType:"single",selectedRowId:s,onSelect:p=>f(p.id),onRowClick:p=>f(p.id)})},args:{columns:v,data:S,getRowId:n=>n.id}},D={render:n=>{const[s,f]=c.useState([]);return e.jsx(_,{...n,selectionType:"multiple",selectedRowIds:s.map(p=>p.id),onSelectMany:f})},args:{columns:v,data:S,getRowId:n=>n.id}},Y={render:n=>{const[s,f]=c.useState();return e.jsxs(e.Fragment,{children:[e.jsx(_,{...n,onRowClick:p=>f(p.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:s??"Ingen"})]})]})},args:{columns:v,data:S}},z={args:{columns:v,data:se,pageSize:10}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
