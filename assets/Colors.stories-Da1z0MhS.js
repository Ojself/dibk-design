import{j as e,c}from"./iframe-tujtW6Px.js";import"./preload-helper-PPVm8Dsz.js";const m="_page_w990t_1",o="_group_w990t_9",u="_groupTitle_w990t_15",i="_grid_w990t_21",d="_card_w990t_27",v="_swatch_w990t_33",g="_label_w990t_39",y="_value_w990t_44",a={page:m,group:o,groupTitle:u,grid:i,card:d,swatch:v,label:g,value:y},p=c.dibk,n=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/[-_]+/g," ").replace(/\s+/g," ").trim(),b=[{title:"Backgrounds",colors:["backgroundDefault","backgroundSecondary"]},{title:"Text & Forms",colors:["defaultText","defaultContrastText","headingText","formElement"]},{title:"Brand",colors:["primary","primaryLight","primaryXLight","primaryContrast","secondary","secondaryLight","border","focus"]},{title:"Status",colors:["success","successLight","successXLight","warning","warningLight","warningXLight","error","errorLight","errorXLight"]}],f=[{title:"Palette: Green",colors:[{name:"green-50",value:"#f1fae3"},{name:"green-100",value:"#cbebb0"},{name:"green-200",value:"#85de59"},{name:"green-300",value:"#5bcc35"},{name:"green-400",value:"#52b033"},{name:"green-500",value:"#389929"},{name:"green-600",value:"#1a8714"},{name:"green-700",value:"#147a0c"},{name:"green-800",value:"#086100"},{name:"green-900",value:"#065200"}]},{title:"Palette: Blue",colors:[{name:"blue-50",value:"#ebf4fa"},{name:"blue-100",value:"#c7e0f2"},{name:"blue-200",value:"#acd4e8"},{name:"blue-300",value:"#89bad6"},{name:"blue-400",value:"#4499c7"},{name:"blue-500",value:"#1e7db2"},{name:"blue-600",value:"#006491"},{name:"blue-700",value:"#005275"},{name:"blue-800",value:"#004563"},{name:"blue-900",value:"#003045"}]},{title:"Palette: Sky",colors:[{name:"sky-50",value:"#ebf3ff"},{name:"sky-100",value:"#c2e2ff"},{name:"sky-200",value:"#80c3ff"},{name:"sky-300",value:"#4899e0"},{name:"sky-400",value:"#1e82db"},{name:"sky-500",value:"#0a76d6"},{name:"sky-600",value:"#0a6cc4"},{name:"sky-700",value:"#005cad"},{name:"sky-800",value:"#004c8f"},{name:"sky-900",value:"#003361"}]},{title:"Palette: Amber",colors:[{name:"amber-50",value:"#fff8db"},{name:"amber-100",value:"#ffe969"},{name:"amber-200",value:"#ffa100"},{name:"amber-300",value:"#e07000"},{name:"amber-400",value:"#d46a00"},{name:"amber-500",value:"#c76300"},{name:"amber-600",value:"#b85c00"},{name:"amber-700",value:"#9e4f00"},{name:"amber-800",value:"#7d3800"},{name:"amber-900",value:"#5c2900"}]},{title:"Palette: Red",colors:[{name:"red-50",value:"#fcecebcc"},{name:"red-100",value:"#ffc5c2"},{name:"red-200",value:"#ffaca6"},{name:"red-300",value:"#f58078"},{name:"red-400",value:"#f55e56"},{name:"red-500",value:"#f53b3b"},{name:"red-600",value:"#eb1a1a"},{name:"red-700",value:"#db0000"},{name:"red-800",value:"#ad0000"},{name:"red-900",value:"#730000"}]},{title:"Palette: Warm Gray",colors:[{name:"warm-gray-25",value:"#F7F5F5"},{name:"warm-gray-50",value:"#f5eeed"},{name:"warm-gray-100",value:"#e5ddda"},{name:"warm-gray-200",value:"#d7ccca"},{name:"warm-gray-300",value:"#b0a6a4"},{name:"warm-gray-400",value:"#998b8b"},{name:"warm-gray-500",value:"#8a7b78"},{name:"warm-gray-600",value:"#7a6c69"},{name:"warm-gray-700",value:"#5c4d4a"},{name:"warm-gray-800",value:"#3b2f29"},{name:"warm-gray-900",value:"#1a0505"}]},{title:"Palette: Accent",colors:[{name:"white",value:"#ffffff"},{name:"purple-500",value:"#9747ff"}]}],_={title:"Preset/Colors",tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:a.page,children:[b.map(l=>e.jsxs("section",{className:a.group,children:[e.jsx("h2",{className:a.groupTitle,children:l.title}),e.jsx("div",{className:a.grid,children:l.colors.map(s=>{const t=(p.colors??{})[s];return t?e.jsxs("div",{className:a.card,children:[e.jsx("div",{className:a.swatch,style:{backgroundColor:t}}),e.jsx("div",{className:a.label,children:n(s)}),e.jsx("div",{className:a.value,children:t})]},s):null})})]},l.title)),f.map(l=>e.jsxs("section",{className:a.group,children:[e.jsx("h2",{className:a.groupTitle,children:l.title}),e.jsx("div",{className:a.grid,children:l.colors.map(s=>e.jsxs("div",{className:a.card,children:[e.jsx("div",{className:a.swatch,style:{backgroundColor:s.value}}),e.jsx("div",{className:a.label,children:n(s.name)}),e.jsx("div",{className:a.value,children:s.value})]},s.name))})]},l.title))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
            {group.colors.map(color => <div key={color.name} className={styles.card}>
                <div className={styles.swatch} style={{
            backgroundColor: color.value
          }} />
                <div className={styles.label}>{prettyName(color.name)}</div>
                <div className={styles.value}>{color.value}</div>
              </div>)}
          </div>
        </section>)}
    </div>
}`,...r.parameters?.docs?.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,_ as default};
