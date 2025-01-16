import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{R as o}from"./index-C2WPW1L7.js";import{c as f}from"./index-BmPQVgn-.js";import{U as m,E as h,d as C}from"./UiTypography-C2q7YAkM.js";const j="_UiSelect_3uv47_1",R={UiSelect:j},c=({children:t,heading:a,subLabel:r,disabled:s,onChange:n,placeholder:d,postfixIcon:p,...i})=>{const[y,b]=o.useState(i.value||i.defaultValue||""),S=o.useCallback(u=>{b(u.target.value),n==null||n(u)},[n]);return e.jsxs("div",{children:[a?e.jsx(m,{size:h.MD,className:"mb-xxs",children:a}):null,e.jsxs("div",{className:f(R.UiSelect,"relative","rounded-xl","border","hover:border-secondary-alt-700",s?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:["border-secondary-alt-500","bg-white"]),children:[e.jsxs("select",{...i,className:`m-0
					w-full
					cursor-pointer
					appearance-none
					border-0
					bg-transparent
					p-sm
					italic
					text-secondary-alt
					outline-0
					`,disabled:s,value:y,onChange:S,children:[d?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:d}):null,t]}),e.jsx("div",{className:"absolute right-sm top-1/2 -translate-y-1/2",children:p||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),r?e.jsx(m,{size:h.SM,color:C.SECONDARY_ALT,className:"mt-xxs",children:r}):null]})};c.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const U={title:"Components/UiSelect",component:c,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},value:{control:{type:"text"},description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",value:"",onChange:t=>console.log(t.target.value)}},l={render:t=>{const[a,r]=o.useState(t.value),s=n=>{r(n.target.value)};return e.jsx(o.Fragment,{children:e.jsxs(c,{...t,value:a,onChange:s,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})})}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    };
    return <React.Fragment>
                <UiSelect {...args} value={value} onChange={handleChange}>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </UiSelect>
            </React.Fragment>;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const N=["Primary"];export{l as Primary,N as __namedExportsOrder,U as default};
