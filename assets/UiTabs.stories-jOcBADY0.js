import{j as a}from"./jsx-runtime-C6qLVRqm.js";import{r as p}from"./index-C2WPW1L7.js";import{c as s}from"./index-BmPQVgn-.js";const i=({tabs:r,tabsModel:n,onTabChange:o})=>a.jsx("ul",{className:s("ui-tabs","grid","grid-flow-col","rounded-full","bg-secondary-alt-200","p-[2px]"),children:r.map(e=>a.jsx("li",{className:s("rounded-full","text-center",n===e&&"bg-white"),children:a.jsxs("label",{className:s("block","cursor-pointer","px-md","py-xxs"),children:[a.jsx("input",{className:s("absolute","appearance-none"),type:"radio",value:e,checked:n===e,onChange:()=>o(e)}),a.jsx("span",{className:s("font-bold","text-xs"),children:e})]})},e))});i.__docgenInfo={description:"",methods:[],displayName:"UiTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabsModel:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""}}};const x={title:"Components/UiTabs",component:i,argTypes:{tabs:{control:"object"},tabsModel:{control:"text"},onTabChange:{control:"text"}},args:{tabs:["Tab1","Tab2","Tab3"],tabsModel:"Tab1",onTabChange:()=>{}}},t={render:({tabs:r})=>{const[n,o]=p.useState(r[0]||""),e=u=>o(u);return a.jsxs("div",{children:[a.jsx(i,{tabsModel:n,tabs:r,onTabChange:e}),a.jsx("br",{}),n]})}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    tabs
  }: {
    tabs: string[];
  }) => {
    const [value1, setValue1] = useState(tabs[0] || "");
    const handleChange1 = (val: string) => setValue1(val);
    return <div>

                <UiTabs tabsModel={value1} tabs={tabs} onTabChange={handleChange1} />
                <br />
                {value1}

            </div>;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Primary"];export{t as Primary,h as __namedExportsOrder,x as default};
