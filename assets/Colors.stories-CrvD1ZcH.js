import{j as e,a as n,b as i}from"./iframe-BSgnUm1r.js";import"./preload-helper-PPVm8Dsz.js";const d="_page_w990t_1",m="_group_w990t_9",u="_groupTitle_w990t_15",g="_grid_w990t_21",y="_card_w990t_27",p="_swatch_w990t_33",v="_label_w990t_39",h="_value_w990t_44",s={page:d,group:m,groupTitle:u,grid:g,card:y,swatch:p,label:v,value:h},b=n.dibk,c=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/[-_]+/g," ").replace(/\s+/g," ").trim(),N=[{title:"Backgrounds",colors:["backgroundDefault","backgroundSecondary","backgroundInfo"]},{title:"Text & Forms",colors:["defaultText","defaultContrastText","headingText","formElement"]},{title:"Brand",colors:["primary","primaryLight","primaryXLight","primaryContrast","secondary","secondaryLight","border","focus"]},{title:"Status",colors:["success","successLight","successXLight","warning","warningLight","warningXLight","error","errorLight","errorXLight"]}],k=[{title:"Palette: Green",colors:["green-50","green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900"]},{title:"Palette: Blue",colors:["blue-50","blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900"]},{title:"Palette: Sky",colors:["sky-50","sky-100","sky-200","sky-300","sky-400","sky-500","sky-600","sky-700","sky-800","sky-900"]},{title:"Palette: Amber",colors:["amber-50","amber-100","amber-200","amber-300","amber-400","amber-500","amber-600","amber-700","amber-800","amber-900"]},{title:"Palette: Red",colors:["red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900"]},{title:"Palette: Warm Gray",colors:["warm-gray-25","warm-gray-50","warm-gray-100","warm-gray-200","warm-gray-300","warm-gray-400","warm-gray-500","warm-gray-600","warm-gray-700","warm-gray-800","warm-gray-900"]}],x={title:"Preset/Colors",tags:["autodocs"]},t={render:()=>e.jsxs("div",{className:s.page,children:[N.map(r=>e.jsxs("section",{className:s.group,children:[e.jsx("h2",{className:s.groupTitle,children:r.title}),e.jsx("div",{className:s.grid,children:r.colors.map(a=>{const l=(b.colors??{})[a];return l?e.jsxs("div",{className:s.card,children:[e.jsx("div",{className:s.swatch,style:{backgroundColor:l}}),e.jsx("div",{className:s.label,children:c(a)}),e.jsx("div",{className:s.value,children:l})]},a):null})})]},r.title)),k.map(r=>e.jsxs("section",{className:s.group,children:[e.jsx("h2",{className:s.groupTitle,children:r.title}),e.jsx("div",{className:s.grid,children:r.colors.map(a=>{const o=`color-${a}`,l=i[o];return l?e.jsxs("div",{className:s.card,children:[e.jsx("div",{className:s.swatch,style:{backgroundColor:l}}),e.jsx("div",{className:s.label,children:c(a)}),e.jsx("div",{className:s.value,children:l})]},a):null})})]},r.title))]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.page}>
      {semanticGroups.map(group => <section key={group.title} className={styles.group}>
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
      {paletteGroups.map(group => <section key={group.title} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <div className={styles.grid}>
            {group.colors.map(colorName => {
          const tokenKey = \`color-\${colorName}\` as keyof typeof colorTokens;
          const value = colorTokens[tokenKey];
          if (!value) return null;
          return <div key={colorName} className={styles.card}>
                  <div className={styles.swatch} style={{
              backgroundColor: value
            }} />
                  <div className={styles.label}>{prettyName(colorName)}</div>
                  <div className={styles.value}>{value}</div>
                </div>;
        })}
          </div>
        </section>)}
    </div>
}`,...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,x as default};
