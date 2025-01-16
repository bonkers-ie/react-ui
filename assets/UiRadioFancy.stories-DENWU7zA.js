import{j as e}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{c as n}from"./index-BmPQVgn-.js";import{U as p,E as m}from"./UiIcon-CQO6a-go.js";import"./index-JoFrltcn.js";const s=({children:r,icon:d,disabled:a,subHeader:l})=>e.jsxs("label",{className:n("ui-radio-fancy","relative",{"pointer-events-none":a}),children:[e.jsx("input",{className:"group peer absolute appearance-none",type:"radio"}),e.jsxs("div",{className:n("box-border","size-full","cursor-pointer","rounded-lg","border-2","bg-white","p-sm","hover:border-primary-700","peer-focus:shadow-border-primary","peer-active:bg-secondary-alt-200","flex","items-center","gap-sm","text-sm",{"border-secondary-alt-400":a,"border-primary-600":!a}),children:[e.jsx("div",{className:n("relative","grid","size-fit","rounded-full","place-items-center","text-white","p-xxs",{"bg-primary-300":a,"bg-primary":!a}),children:d?e.jsx(p,{name:d,size:m.SM}):null}),e.jsxs("div",{className:"flex flex-col",children:[r,e.jsx("div",{className:"text-xs font-normal text-secondary-alt-400",children:l})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"UiRadioFancy",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"IconProp"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/UiRadioFancy",component:s,argTypes:{children:{control:{type:"text"},description:"RadioFancy Children"},disabled:{control:{type:"boolean"},description:"Radio disabled"},subHeader:{control:{type:"text"},description:"RadioFancy Children"}},args:{children:"Title",disabled:!1,subHeader:"DG2 = Rural supply region"}},i={render:r=>e.jsxs("div",{children:[e.jsx(s,{disabled:r.disabled,icon:["far","face-smile"],children:r.children}),e.jsx("br",{}),e.jsx(s,{disabled:r.disabled,icon:["far","face-smile"],subHeader:r.subHeader,children:r.children})]})};var o,t,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div>
            <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]}>
                {args.children}

            </UiRadioFancy>

            <br />

            <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]} subHeader={args.subHeader}>
                {args.children}

            </UiRadioFancy>
        </div>
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const g=["Primary"];export{i as Primary,g as __namedExportsOrder,h as default};
