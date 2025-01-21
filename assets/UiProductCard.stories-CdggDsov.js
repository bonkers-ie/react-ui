import{j as e}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{U as v,a as E}from"./UiPills-CzpjEIYG.js";import{U as c,E as m,c as U,b as p,d as x}from"./UiTypography-CwEUejbJ.js";import{U as n,E as o}from"./UiIcon-CQO6a-go.js";import"./index-BmPQVgn-.js";import"./index-JoFrltcn.js";const s=({badgeText:r,title:a,subtitle:l,header:N})=>e.jsxs("div",{className:`relative
			flex
			flex-col
			gap-sm
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			px-xs
			py-sm`,children:[r&&e.jsx("div",{className:"!absolute -top-xxs right-xs",children:e.jsx(v,{rounded:!0,kind:E.ACCENT_ALT,children:r})}),N,e.jsxs("div",{className:"grid gap-xxs",children:[e.jsx(c,{size:m.MD,weight:U.BOLD,align:p.LEFT,color:x.SECONDARY,lineHeight:!0,children:a}),e.jsx(c,{size:m.XS,align:p.LEFT,color:x.SECONDARY_400,lineHeight:!0,children:l})]})]});s.__docgenInfo={description:"",methods:[],displayName:"UiProductCard",props:{badgeText:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D={title:"Components/UiProductCard",component:s,argTypes:{title:{control:{type:"text"},description:"The title text"},subtitle:{control:{type:"text"},description:"The subtitle text"},header:{description:"The element to display in the header area of the card"},badgeText:{description:"The text or component displayed in the badge"}},args:{title:"This is a Title",subtitle:"This is a Subtitle",badgeText:"",header:null}},t={render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-smile"],size:o.LG})});return e.jsx(s,{...r,header:a})}},i={render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-angry"],size:o.MD})}),l=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-xxs text-white",children:e.jsx(n,{name:["far","face-meh"],size:o.LG})});return e.jsxs("div",{className:"grid w-[412px] grid-cols-2 gap-xs",children:[e.jsx(s,{...r,header:a}),e.jsx(s,{...r,header:l,badgeText:"UP TO €586 OFF"})]})}},d={args:{title:"This is a Titleajhs",subtitle:"This is a Subtitle uablobv",badgeText:"",header:null},render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-smile"],size:o.LG})});return e.jsx(s,{...r,header:a})}};var u,h,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const Header = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
            </div>;
    return <UiProductCard {...args} header={Header} />;
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,T,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const Header1 = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
            </div>;
    const Header2 = <div className="flex w-fit rounded-full bg-primary p-xxs text-white">
                <UiIcon name={["far", "face-meh"]} size={ESize.LG} />
            </div>;
    return <div className="grid w-[412px] grid-cols-2 gap-xs">
                <UiProductCard {...args} header={Header1} />
                <UiProductCard {...args} header={Header2} badgeText="UP TO €586 OFF" />
            </div>;
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,j,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "This is a Titleajhs",
    subtitle: "This is a Subtitle uablobv",
    badgeText: "",
    header: null
  },
  render: args => {
    const Header = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
            </div>;
    return <UiProductCard {...args} header={Header} />;
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const O=["Default","Variants","Test1"];export{t as Default,d as Test1,i as Variants,O as __namedExportsOrder,D as default};
