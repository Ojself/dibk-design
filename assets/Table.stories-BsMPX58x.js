import{r as c,d as I,j as e}from"./iframe-WYyUpwoz.js";import{S as we}from"./arrow-left-icon-BH3_sS7c.js";import{S as he}from"./arrow-right-icon-Dk5Nb9P9.js";import{B as te}from"./Button-C5fOTAE2.js";import{C as Se}from"./CheckBoxInput-DJIR26cV.js";import{L as _e}from"./LoadingAnimation-BxSBcpKH.js";import{R as Ne}from"./RadioButtonInput-G-hODX5i.js";import"./preload-helper-PPVm8Dsz.js";import"./asterisk-icon-Dj6UDs0Y.js";import"./checkmark-symbol-icon-DTJIUxYm.js";import"./CheckBoxIcon-CblykO5X.js";import"./RadioButtonIcon-BWZ1nQsJ.js";const ke="_table_u0bfg_5",ve="_thButton_u0bfg_25",xe="_sortable_u0bfg_33",Ce="_label_u0bfg_43",Re="_sortIndicators_u0bfg_47",je="_sortArrow_u0bfg_55",Ie="_activeArrow_u0bfg_62",Le="_evenRow_u0bfg_66",Ae="_oddRow_u0bfg_69",Me="_loadingRow_u0bfg_82",Ve="_loadingCell_u0bfg_86",Pe="_selectionHeader_u0bfg_91",Te="_selectionCell_u0bfg_97",Be="_selectionControl_u0bfg_111",qe="_rowClickable_u0bfg_118",De="_srOnly_u0bfg_125",Ye="_pagination_u0bfg_136",ze="_paginationControls_u0bfg_143",Ee="_pageNavButtonHidden_u0bfg_152",Oe="_pageList_u0bfg_162",$e="_pageNumber_u0bfg_168",He="_pageNumberActive_u0bfg_189",Fe="_pageEllipsis_u0bfg_194",t={table:ke,thButton:ve,sortable:xe,label:Ce,sortIndicators:Re,sortArrow:je,activeArrow:Ie,evenRow:Le,oddRow:Ae,loadingRow:Me,loadingCell:Ve,selectionHeader:Pe,selectionCell:Te,selectionControl:Be,rowClickable:qe,srOnly:De,pagination:Ye,paginationControls:ze,pageNavButtonHidden:Ee,pageList:Oe,pageNumber:$e,pageNumberActive:He,pageEllipsis:Fe},Ke=(n,s)=>s<=7?Array.from({length:s},(f,g)=>g+1):n<=4?[1,2,3,4,5,"...",s]:n>=s-3?[1,"...",s-4,s-3,s-2,s-1,s]:[1,"...",n-1,n,n+1,"...",s],k=({columns:n,data:s,loading:f=!1,loadingAriaLabel:g,getRowId:re,selectionType:_,selectionLabel:L="Velg rad",selectedRowId:oe,onSelect:E,selectedRowIds:Q,onSelectMany:x,onRowClick:U,pageSize:A,page:C,defaultPage:ie=1,onPageChange:le,totalCount:R,totalPages:j})=>{const[p,O]=c.useState(null),X=c.useId(),[Z,ee]=c.useState(ie);c.useEffect(()=>{const a=n.find(r=>r.sortable);O(a?{headerKey:a.key,direction:"asc"}:null)},[n]);const ae=c.useMemo(()=>{const a=new Map;for(const r of n)a.set(r.key,r);return a},[n]),y=c.useMemo(()=>{if(!p)return s;const a=ae.get(p.headerKey);if(!a)return s;const r=a.sortAccessor??a.accessor;if(!r)return s;const o=[...s];return o.sort((w,b)=>{const l=r(w),m=r(b);if(l==null||m==null)return 0;if(typeof l=="number"&&typeof m=="number")return p.direction==="asc"?l-m:m-l;if(l instanceof Date&&m instanceof Date)return p.direction==="asc"?l.getTime()-m.getTime():m.getTime()-l.getTime();const M=String(l),K=String(m);return p.direction==="asc"?M.localeCompare(K,void 0,{numeric:!0}):K.localeCompare(M,void 0,{numeric:!0})}),o},[s,p,ae]),ce=a=>{O(r=>!r||r.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:r.direction==="asc"?"desc":"asc"})},de=(a,r)=>{if(r)return p?.headerKey!==a?"none":p.direction==="asc"?"ascending":"descending"},$=(a,r)=>{const o=re?.(a,r);if(o==null||o===""){const w=s.indexOf(a);return w===-1?r:w}return o},H=c.useMemo(()=>_!=="multiple"?new Set:new Set(Q??[]),[Q,_]),h=c.useMemo(()=>!A||A<=0?y.length||s.length||1:A,[A,y.length,s.length]),u=c.useMemo(()=>j!==void 0?Math.max(1,Math.floor(j)):R!==void 0?Math.max(1,Math.ceil(R/h)):Math.max(1,Math.ceil(y.length/h)),[y.length,h,R,j]),d=c.useMemo(()=>{const a=C??Z;return!Number.isFinite(a)||a<1?1:a>u?u:a},[C,Z,u]);c.useEffect(()=>{C===void 0&&d>u&&ee(u)},[d,u,C]);const ue=c.useMemo(()=>{if(j!==void 0||R!==void 0||h>=y.length)return y;const a=(d-1)*h;return y.slice(a,a+h)},[y,d,h,R,j]),me=n.length+(_?1:0),F=a=>{const r=Math.min(Math.max(a,1),u);C!==void 0?le?.(r):ee(r)},ge=!f&&u>1,pe=c.useMemo(()=>Ke(d,u),[d,u]),fe=I([t.paginationControls]);return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:t.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[_&&e.jsx("th",{className:t.selectionHeader,"aria-label":L,children:e.jsx("span",{className:t.srOnly,children:L})}),n.map(({key:a,label:r,sortable:o,ariaLabel:w})=>{const b=p?.headerKey===a,l=b&&p.direction==="asc",m=b&&p.direction==="desc";return e.jsx("th",{"aria-sort":de(a,o),scope:"col",children:o?e.jsxs("button",{type:"button",className:`${t.thButton} ${t.sortable}`,onClick:()=>ce(a),"aria-label":`${w??r}: sort ${b&&l?"descending":"ascending"}`,children:[e.jsx("span",{className:t.label,children:r}),e.jsxs("span",{className:t.sortIndicators,"aria-hidden":"true",children:[e.jsx("span",{className:`${t.sortArrow} ${l?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 6 6 2 10 6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:`${t.sortArrow} ${m?t.activeArrow:""}`,children:e.jsx("svg",{viewBox:"0 0 12 8",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:e.jsx("path",{d:"M2 2 6 6 10 2",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}):e.jsx("span",{className:t.thButton,children:e.jsx("span",{className:t.label,children:r})})},a)})]})}),e.jsx("tbody",{children:f?e.jsx("tr",{className:t.loadingRow,children:e.jsx("td",{className:t.loadingCell,colSpan:me,children:e.jsx(_e,{ariaLabel:g})})}):ue.map((a,r)=>{const o=$(a,r),w=`${X}-${o}`,b=_==="single",l=_==="multiple",m=b&&oe===o,M=l&&H.has(o),ne=!!U||b&&!!E||l&&!!x,be=()=>{if(b)E?.(a);else if(l&&x){const i=new Set(H);i.has(o)?i.delete(o):i.add(o);const N=s.filter((W,G)=>{const J=$(W,G);return i.has(J)});x(N)}U?.(a)};return e.jsxs("tr",{className:I([r%2===0?t.evenRow:t.oddRow,ne&&t.rowClickable]),onClick:ne?be:void 0,children:[b&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(Ne,{id:w,name:X,inputValue:String(o),checked:m,onChange:i=>{i?.stopPropagation(),E?.(a)},"aria-label":L})})}),l&&e.jsx("td",{className:t.selectionCell,children:e.jsx("button",{type:"button",className:t.selectionControl,onClick:i=>i.stopPropagation(),children:e.jsx(Se,{id:w,value:String(o),checked:M,onChange:i=>{if(i?.stopPropagation(),!x)return;const N=new Set(H);N.has(o)?N.delete(o):N.add(o);const W=s.filter((G,J)=>{const ye=$(G,J);return N.has(ye)});x(W)},"aria-label":L})})}),n.map(i=>e.jsx("td",{children:i.render?i.render(a):String(i.accessor?.(a)??"")},i.key))]},o)})})]}),ge&&e.jsx("div",{className:fe,children:e.jsxs("div",{className:t.pagination,children:[e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonPrevious,d<=1&&t.pageNavButtonHidden]),onClick:()=>F(d-1),disabled:d<=1,"aria-label":"Forrige side",content:"Forrige",iconLeft:e.jsx(we,{})}),e.jsx("div",{className:t.pageList,children:pe.map(a=>a==="..."?e.jsx("span",{className:t.pageEllipsis,children:"..."},`ellipsis-${a}`):e.jsx("button",{type:"button",className:I([t.pageNumber,a===d&&t.pageNumberActive]),onClick:()=>F(Number(a)),"aria-current":a===d?"page":void 0,children:a},a))}),e.jsx(te,{type:"button",color:"neutral",noMargin:!0,className:I([t.pageNavButtonNext,d>=u&&t.pageNavButtonHidden]),onClick:()=>F(d+1),disabled:d>=u,"aria-label":"Neste side",content:"Neste",iconRight:e.jsx(he,{})})]})})]})};try{k.displayName="Table",k.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingAriaLabel:{defaultValue:null,description:"",name:"loadingAriaLabel",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}},selectionType:{defaultValue:null,description:"",name:"selectionType",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},selectionLabel:{defaultValue:{value:"Velg rad"},description:"",name:"selectionLabel",required:!1,type:{name:"string"}},selectedRowId:{defaultValue:null,description:"",name:"selectedRowId",required:!1,type:{name:"React.Key"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(row: T) => void"}},selectedRowIds:{defaultValue:null,description:"",name:"selectedRowIds",required:!1,type:{name:"React.Key[]"}},onSelectMany:{defaultValue:null,description:"",name:"onSelectMany",required:!1,type:{name:"(rows: T[]) => void"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"(row: T) => void"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"",name:"defaultPage",required:!1,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"(page: number) => void"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number) => void"}}}}}catch{}const oa={title:"Primitives/Table",component:k,tags:["autodocs"]},v=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],se=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"},{id:6,name:"Frank",age:30,city:"New York"},{id:7,name:"George",age:24,city:"London"},{id:8,name:"Hannah",age:35,city:"Paris"},{id:9,name:"Isaac",age:29,city:"New York"},{id:10,name:"James",age:22,city:"London"},{id:11,name:"Katie",age:30,city:"New York"},{id:12,name:"Liam",age:24,city:"London"},{id:13,name:"Mia",age:35,city:"Paris"},{id:14,name:"Noah",age:29,city:"New York"},{id:15,name:"Olivia",age:22,city:"London"},{id:16,name:"Patrick",age:30,city:"New York"},{id:17,name:"Quinn",age:24,city:"London"},{id:18,name:"Ryan",age:35,city:"Paris"},{id:19,name:"Sarah",age:29,city:"New York"},{id:20,name:"Thomas",age:22,city:"London"},{id:21,name:"Uma",age:30,city:"New York"},{id:22,name:"Victor",age:24,city:"London"},{id:23,name:"William",age:35,city:"Paris"},{id:24,name:"Xavier",age:29,city:"New York"},{id:25,name:"Yvonne",age:22,city:"London"},{id:26,name:"Zachary",age:30,city:"New York"}],S=[{key:"id",label:"ID",sortable:!0,accessor:n=>n.id},{key:"name",label:"Name",sortable:!0,accessor:n=>n.name},{key:"age",label:"Age",sortable:!0,accessor:n=>n.age},{key:"city",label:"City",sortable:!0,accessor:n=>n.city}],V={args:{columns:S,data:v}},P={args:{columns:S.map(n=>({...n,sortable:!1})),data:v}},T={args:{columns:S,data:se,loading:!0,pageSize:10,pageSizeOptions:[5,10,15]}},B={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:n=>n.name,render:n=>e.jsx("strong",{children:n.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:n=>n.age,render:n=>e.jsxs("em",{children:[n.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:n=>n.city}],data:v}},q={render:n=>{const[s,f]=c.useState();return e.jsx(k,{...n,selectionType:"single",selectedRowId:s,onSelect:g=>f(g.id),onRowClick:g=>f(g.id)})},args:{columns:S,data:v,getRowId:n=>n.id}},D={render:n=>{const[s,f]=c.useState([]);return e.jsx(k,{...n,selectionType:"multiple",selectedRowIds:s.map(g=>g.id),onSelectMany:f})},args:{columns:S,data:v,getRowId:n=>n.id}},Y={render:n=>{const[s,f]=c.useState();return e.jsxs(e.Fragment,{children:[e.jsx(k,{...n,onRowClick:g=>f(g.name)}),e.jsxs("p",{style:{marginTop:12},children:["Sist klikket rad: ",e.jsx("strong",{children:s??"Ingen"})]})]})},args:{columns:S,data:v}},z={args:{columns:S,data:se,pageSize:10}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData
  }
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleDataBig,
    loading: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 15]
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const ia=["Default","NoSorting","Loading","CustomRender","SingleSelect","MultiSelect","RowClick","Paginated"];export{B as CustomRender,V as Default,T as Loading,D as MultiSelect,P as NoSorting,z as Paginated,Y as RowClick,q as SingleSelect,ia as __namedExportsOrder,oa as default};
