import{r as u,j as r}from"./iframe-BHtDog0D.js";import"./preload-helper-PPVm8Dsz.js";const T="_table_19a1d_1",k="_thButton_19a1d_30",D="_sortable_19a1d_41",C="_label_19a1d_51",I="_sortIndicators_19a1d_55",$="_sortArrow_19a1d_62",B="_activeArrow_19a1d_65",E="_evenRow_19a1d_69",K="_oddRow_19a1d_72",c={table:T,thButton:k,sortable:D,label:C,sortIndicators:I,sortArrow:$,activeArrow:B,evenRow:E,oddRow:K},_=({columns:e,data:l,caption:h,getRowId:v})=>{const[s,b]=u.useState(null);u.useEffect(()=>{const a=e.find(t=>t.sortable);b(a?{headerKey:a.key,direction:"asc"}:null)},[e]);const w=u.useMemo(()=>{const a=new Map;for(const t of e)a.set(t.key,t);return a},[e]),S=u.useMemo(()=>{if(!s)return l;const a=w.get(s.headerKey);if(!a)return l;const t=a.sortAccessor??a.accessor;if(!t)return l;const n=[...l];return n.sort((y,d)=>{const o=t(y),i=t(d);if(o==null||i==null)return 0;if(typeof o=="number"&&typeof i=="number")return s.direction==="asc"?o-i:i-o;if(o instanceof Date&&i instanceof Date)return s.direction==="asc"?o.getTime()-i.getTime():i.getTime()-o.getTime();const x=String(o),A=String(i);return s.direction==="asc"?x.localeCompare(A,void 0,{numeric:!0}):A.localeCompare(x,void 0,{numeric:!0})}),n},[l,s,w]),N=a=>{b(t=>!t||t.headerKey!==a?{headerKey:a,direction:"asc"}:{headerKey:a,direction:t.direction==="asc"?"desc":"asc"})},R=(a,t)=>{if(t)return s?.headerKey!==a?"none":s.direction==="asc"?"ascending":"descending"};return r.jsxs("table",{className:c.table,children:[h&&r.jsx("caption",{children:h}),r.jsx("thead",{children:r.jsx("tr",{children:e.map(({key:a,label:t,sortable:n,ariaLabel:y})=>{const d=s?.headerKey===a,o=d&&s.direction==="asc",i=d&&s.direction==="desc";return r.jsx("th",{"aria-sort":R(a,n),children:r.jsxs("button",{type:"button",className:`${c.thButton} ${n?c.sortable:""}`,onClick:n?()=>N(a):void 0,disabled:!n,"aria-label":n?`${y??t}: sort ${d&&o?"descending":"ascending"}`:void 0,children:[r.jsx("span",{className:c.label,children:t}),n&&r.jsxs("span",{className:c.sortIndicators,"aria-hidden":"true",children:[r.jsx("span",{className:`${c.sortArrow} ${o?c.activeArrow:""}`,children:"▲"}),r.jsx("span",{className:`${c.sortArrow} ${i?c.activeArrow:""}`,children:"▼"})]})]})},a)})})}),r.jsx("tbody",{children:S.map((a,t)=>r.jsx("tr",{className:t%2===0?c.evenRow:c.oddRow,children:e.map(n=>r.jsx("td",{children:n.render?n.render(a):String(n.accessor?.(a)??"")},n.key))},v?.(a,t)))})]})};try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"(row: T, index: number) => React.Key"}}}}}catch{}const L={title:"Example/Table",component:_,tags:["autodocs"]},f=[{id:1,name:"Alice",age:30,city:"New York"},{id:2,name:"Bob",age:24,city:"London"},{id:3,name:"Charlie",age:35,city:"Paris"},{id:4,name:"David",age:29,city:"New York"},{id:5,name:"Eve",age:22,city:"London"}],j=[{key:"id",label:"ID",sortable:!0,accessor:e=>e.id},{key:"name",label:"Name",sortable:!0,accessor:e=>e.name},{key:"age",label:"Age",sortable:!0,accessor:e=>e.age},{key:"city",label:"City",sortable:!0,accessor:e=>e.city}],m={args:{columns:j,data:f,caption:"A simple sortable table of people"}},p={args:{columns:j.map(e=>({...e,sortable:!1})),data:f,caption:"A table without sorting"}},g={args:{columns:[{key:"name",label:"Full Name",sortable:!0,accessor:e=>e.name,render:e=>r.jsx("strong",{children:e.name})},{key:"age",label:"Age in Years",sortable:!0,accessor:e=>e.age,render:e=>r.jsxs("em",{children:[e.age," years old"]})},{key:"city",label:"Location",sortable:!0,accessor:e=>e.city}],data:f,caption:"Table with custom cell rendering"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    data: sampleData,
    caption: 'A simple sortable table of people'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(col => ({
      ...col,
      sortable: false
    })),
    data: sampleData,
    caption: 'A table without sorting'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      label: 'Full Name',
      sortable: true,
      accessor: p => p.name,
      render: p => <strong>{p.name}</strong>
    }, {
      key: 'age',
      label: 'Age in Years',
      sortable: true,
      accessor: p => p.age,
      render: p => <em>{p.age} years old</em>
    }, {
      key: 'city',
      label: 'Location',
      sortable: true,
      accessor: p => p.city
    }],
    data: sampleData,
    caption: 'Table with custom cell rendering'
  }
}`,...g.parameters?.docs?.source}}};const Y=["Default","NoSorting","CustomRender"];export{g as CustomRender,m as Default,p as NoSorting,Y as __namedExportsOrder,L as default};
