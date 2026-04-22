import{j as e,a as m,b as i}from"./iframe-DKsr8upr.js";import"./preload-helper-PPVm8Dsz.js";const d="_page_1ng05_1",u="_group_1ng05_9",g="_groupTitle_1ng05_15",y="_grid_1ng05_21",p="_card_1ng05_27",v="_swatch_1ng05_33",k="_label_1ng05_39",N="_value_1ng05_44",h="_token_1ng05_49",s={page:d,group:u,groupTitle:g,grid:y,card:p,swatch:v,label:k,value:N,token:h},b=m.dibk,c=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/[-_]+/g," ").replace(/\s+/g," ").trim(),_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/_/g,"-").toLowerCase(),x=a=>{const r=`color-${_(a)}`;return r in i?`--${r}`:void 0},w=[{title:"Backgrounds",colors:["backgroundDefault","backgroundSecondary","backgroundInfo"]},{title:"Text & Forms",colors:["defaultText","defaultContrastText","headingText","formElement"]},{title:"Brand",colors:["primary","primaryLight","primaryXLight","primaryContrast","secondary","secondaryLight","border","focus"]},{title:"Status",colors:["success","successLight","successXLight","warning","warningLight","warningXLight","error","errorLight","errorXLight"]}],j=[{title:"Palette: Green",colors:["green-50","green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900"]},{title:"Palette: Blue",colors:["blue-50","blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900"]},{title:"Palette: Sky",colors:["sky-50","sky-100","sky-200","sky-300","sky-400","sky-500","sky-600","sky-700","sky-800","sky-900"]},{title:"Palette: Amber",colors:["amber-50","amber-100","amber-200","amber-300","amber-400","amber-500","amber-600","amber-700","amber-800","amber-900"]},{title:"Palette: Red",colors:["red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900"]},{title:"Palette: Warm Gray",colors:["warm-gray-25","warm-gray-50","warm-gray-100","warm-gray-200","warm-gray-300","warm-gray-400","warm-gray-500","warm-gray-600","warm-gray-700","warm-gray-800","warm-gray-900"]}],L={title:"Preset/Colors",tags:["autodocs"]},o={render:()=>e.jsxs("div",{className:s.page,children:[w.map(a=>e.jsxs("section",{className:s.group,children:[e.jsx("h2",{className:s.groupTitle,children:a.title}),e.jsx("div",{className:s.grid,children:a.colors.map(r=>{const t=(b.colors??{})[r];if(!t)return null;const l=x(r);return e.jsxs("div",{className:s.card,children:[e.jsx("div",{className:s.swatch,style:{backgroundColor:t}}),e.jsx("div",{className:s.label,children:c(r)}),l?e.jsx("div",{className:s.token,children:l}):null,e.jsx("div",{className:s.value,children:t})]},r)})})]},a.title)),j.map(a=>e.jsxs("section",{className:s.group,children:[e.jsx("h2",{className:s.groupTitle,children:a.title}),e.jsx("div",{className:s.grid,children:a.colors.map(r=>{const n=`color-${r}`,t=i[n];if(!t)return null;const l=`--${n}`;return e.jsxs("div",{className:s.card,children:[e.jsx("div",{className:s.swatch,style:{backgroundColor:t}}),e.jsx("div",{className:s.label,children:c(r)}),e.jsx("div",{className:s.token,children:l}),e.jsx("div",{className:s.value,children:t})]},r)})})]},a.title))]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.page}>
      {semanticGroups.map(group => <section key={group.title} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <div className={styles.grid}>
            {group.colors.map(colorKey => {
          const colors = theme.colors ?? {};
          const value = colors[colorKey as keyof typeof colors];
          if (!value) return null;
          const tokenName = getTokenNameFromSemanticKey(colorKey);
          return <div key={colorKey} className={styles.card}>
                  <div className={styles.swatch} style={{
              backgroundColor: value
            }} />
                  <div className={styles.label}>{prettyName(colorKey)}</div>
                  {tokenName ? <div className={styles.token}>{tokenName}</div> : null}
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
          const tokenName = \`--\${tokenKey}\`;
          return <div key={colorName} className={styles.card}>
                  <div className={styles.swatch} style={{
              backgroundColor: value
            }} />
                  <div className={styles.label}>{prettyName(colorName)}</div>
                  <div className={styles.token}>{tokenName}</div>
                  <div className={styles.value}>{value}</div>
                </div>;
        })}
          </div>
        </section>)}
    </div>
}`,...o.parameters?.docs?.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,L as default};
