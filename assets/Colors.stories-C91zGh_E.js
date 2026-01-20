import{j as s,c}from"./iframe-Ds9AI08K.js";import"./preload-helper-PPVm8Dsz.js";const l="_page_w990t_1",n="_group_w990t_9",i="_groupTitle_w990t_15",d="_grid_w990t_21",u="_card_w990t_27",g="_swatch_w990t_33",m="_label_w990t_39",p="_value_w990t_44",e={page:l,group:n,groupTitle:i,grid:d,card:u,swatch:g,label:m,value:p},y=c.dibk,h=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim(),v=[{title:"Backgrounds",colors:["bodyBackground","defaultBackground","secondaryBackground"]},{title:"Text & Forms",colors:["defaultText","headingText","primaryText","formElement"]},{title:"Brand",colors:["primary","primaryLight","primaryXLight","primaryContrast","secondary","secondaryLight","secondaryXLight","secondaryContrast","border","focus"]},{title:"Status",colors:["success","successLight","successXLight","warning","warningLight","warningXLight","error","errorLight","errorXLight"]}],x={title:"Preset/Colors",tags:["autodocs"]},t={render:()=>s.jsx("div",{className:e.page,children:v.map(r=>s.jsxs("section",{className:e.group,children:[s.jsx("h2",{className:e.groupTitle,children:r.title}),s.jsx("div",{className:e.grid,children:r.colors.map(a=>{const o=(y.colors??{})[a];return o?s.jsxs("div",{className:e.card,children:[s.jsx("div",{className:e.swatch,style:{backgroundColor:o}}),s.jsx("div",{className:e.label,children:h(a)}),s.jsx("div",{className:e.value,children:o})]},a):null})})]},r.title))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.page}>
      {colorGroups.map(group => <section key={group.title} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <div className={styles.grid}>
            {group.colors.map(colorKey => {
          const colors = theme.colors ?? {};
          const value = colors[colorKey as keyof typeof colors];
          if (!value) return null;
          return <div key={colorKey} className={styles.card}>
                  <div className={styles.swatch} style={{
              backgroundColor: value
            }} />
                  <div className={styles.label}>{prettyName(colorKey)}</div>
                  <div className={styles.value}>{value}</div>
                </div>;
        })}
          </div>
        </section>)}
    </div>
}`,...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,x as default};
