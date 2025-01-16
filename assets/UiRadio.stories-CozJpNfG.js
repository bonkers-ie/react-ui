import{j as a}from"./jsx-runtime-C6qLVRqm.js";import{R as h}from"./index-C2WPW1L7.js";import{U as n}from"./UiRadio-iVfs-Uks.js";import{E as r}from"./align-CojEiJiX.js";import"./index-BmPQVgn-.js";const C={title:"Components/UiRadio",component:n,argTypes:{justify:{control:{type:"select"},options:Object.values(r),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},children:{control:{type:"text"}}},args:{children:"Some text",onChange:e=>console.log(`Value updated to ${e}`),justify:r.START,invertOrder:!1,disabled:!1}},o={render:e=>{const[l,u]=h.useState("value_3"),t=s=>{u(s),e.onChange(s)};return a.jsxs("div",{className:"grid gap-xxs",children:[a.jsx(n,{...e,name:"radio",value:"value_1",checked:l==="value_1",onChange:t}),a.jsx(n,{...e,name:"radio",value:"value_2",checked:l==="value_2",onChange:t}),a.jsx(n,{...e,name:"radio",value:"value_3",checked:l==="value_3",onChange:t}),a.jsx(n,{...e,name:"radio",value:"value_4",checked:l==="value_4",onChange:t})]})}};var d,c,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = React.useState<string>("value_3");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      args.onChange(value);
    };
    return <div className="grid gap-xxs">
                <UiRadio {...args} name="radio" value="value_1" checked={selectedValue === "value_1"} onChange={handleChange} />
                <UiRadio {...args} name="radio" value="value_2" checked={selectedValue === "value_2"} onChange={handleChange} />
                <UiRadio {...args} name="radio" value="value_3" checked={selectedValue === "value_3"} onChange={handleChange} />
                <UiRadio {...args} name="radio" value="value_4" checked={selectedValue === "value_4"} onChange={handleChange} />
            </div>;
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,C as default};
