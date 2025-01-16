import{j as a}from"./jsx-runtime-C6qLVRqm.js";import{r as h}from"./index-C2WPW1L7.js";import{c as o}from"./index-BmPQVgn-.js";import{U as g}from"./UiRadio-iVfs-Uks.js";import"./align-CojEiJiX.js";const d=({children:e,disabled:n,subHeader:l,value:r,name:s,checked:i=!1,onChange:c})=>a.jsxs("label",{className:o("ui-radio-fancy","relative",{"pointer-events-none":n}),htmlFor:s+r,children:[a.jsx("input",{className:o(" absolute","appearance-none","peer"),id:s+r,type:"radio",value:r,checked:i,onChange:()=>c(r)}),a.jsxs("div",{className:o("box-border","size-full","cursor-pointer","rounded-lg","border-2","bg-white","peer-active:bg-secondary-alt-200","p-sm","peer-hover:border-primary-700","peer-focus:shadow-border-primary","flex","items-center","gap-sm","text-sm",{"border-secondary-alt-400":n&&!i,"border-primary-300":n&&i,"border-secondary-alt-600":!n&&!i,"border-primary-600":!n&&i}),children:[a.jsx("span",{className:"pointer-events-none",children:a.jsx(g,{disabled:n,value:r,name:s,onChange:()=>c(r),checked:i})}),a.jsxs("div",{className:"flex flex-col",children:[e,a.jsx("div",{className:"text-xs font-normal text-secondary-alt-400",children:l})]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"UiPlainRadio",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const C={title:"Components/UiPlainRadio",component:d,argTypes:{children:{control:{type:"text"},description:"RadioFancy Children"},disabled:{control:{type:"boolean"},description:"Radio disabled"},subHeader:{control:{type:"text"},description:"RadioFancy Children"}},args:{children:"Rural",disabled:!1,subHeader:"DG2 = Rural supply region",onChange:e=>console.log(e),checked:!1,value:"value",name:"Value"}},t={render:e=>{const[n,l]=h.useState("value1"),r=s=>{l(s),e.onChange&&e.onChange(s)};return a.jsxs("div",{children:[a.jsx(d,{disabled:e.disabled,name:"Value1",value:"value1",onChange:r,checked:n==="value1",children:e.children}),a.jsx("br",{}),a.jsx(d,{disabled:e.disabled,name:"Value2",value:"value2",onChange:r,checked:n==="value2",children:e.children,subHeader:e.subHeader})]})}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div>
                <UiPlainRadio disabled={args.disabled} name="Value1" value="value1" onChange={handleChange} checked={selectedValue === "value1"} children={args.children}>

                </UiPlainRadio>

                <br />

                <UiPlainRadio disabled={args.disabled} name="Value2" value="value2" onChange={handleChange} checked={selectedValue === "value2"} children={args.children} subHeader={args.subHeader}>

                </UiPlainRadio>
            </div>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Primary"];export{t as Primary,R as __namedExportsOrder,C as default};
