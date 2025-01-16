import{j as g}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{c as h}from"./index-BmPQVgn-.js";var r=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.ERROR="error",e.WARNING="warning",e.PRIMARY_OVERLAY="primary-overlay",e.SECONDARY_OVERLAY="secondary-overlay",e.ERROR_OVERLAY="error-overlay",e.WARNING_OVERLAY="warning-overlay",e.LINK="link",e))(r||{}),t=(e=>(e.DEFAULT="default",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e))(t||{}),a=(e=>(e.DEFAULT="default",e.BOLD="bold",e))(a||{});const R="_UiButton_1dpbh_1",y={UiButton:R},x={[r.PRIMARY]:`
		text-white
		bg-primary

		hover:bg-primary-600
		active:bg-primary-700
		disabled:bg-primary-300
	`,[r.SECONDARY]:`
		bg-secondary
		text-white

		hover:bg-secondary-600
		active:bg-secondary-700
		disabled:bg-secondary-300
	`,[r.ERROR]:`
		bg-error
		text-white

		hover:bg-error-600
		active:bg-error-700
		disabled:bg-error-300
	`,[r.WARNING]:`
		bg-warning
		text-white

		hover:bg-warning-600
		active:bg-warning-700
		disabled:bg-warning-300
	`,[r.PRIMARY_OVERLAY]:`
		border
		border-primary
		text-primary

		hover:border-transparent
		hover:bg-primary-600
		hover:text-white

		active:border-transparent
		active:bg-primary-700
		active:text-white

		disabled:border-primary-300
		disabled:text-primary-300
	`,[r.SECONDARY_OVERLAY]:`
		border
		border-secondary
		text-secondary
		hover:border-transparent
		hover:bg-secondary-600

		hover:text-white
		active:border-transparent
		active:bg-secondary-700

		active:text-white
		disabled:border-secondary-300
		disabled:text-secondary-300
	`,[r.ERROR_OVERLAY]:`
		border border-error
		text-error

		hover:border-transparent
		hover:bg-error-600
		hover:text-white

		active:border-transparent
		active:bg-error-700
		active:text-white

		disabled:border-error-300
		disabled:text-error-300
	`,[r.WARNING_OVERLAY]:`
		border
		border-warning
		text-warning

		hover:border-transparent
		hover:bg-warning-600
		hover:text-white

		active:border-transparent
		active:bg-warning-700
		active:text-white

		disabled:border-warning-300
		disabled:text-warning-300
	`,[r.LINK]:`
		text-accent-alt

		hover:text-accent-alt-600
		active:text-accent-alt-700
		disabled:text-accent-alt-300
	`},A={[t.SMALL]:"px-md py-xxs",[t.MEDIUM]:"p-sm",[t.LARGE]:"p-md",[t.DEFAULT]:"px-md py-sm"},w={[a.DEFAULT]:"font-medium",[a.BOLD]:"font-bold"},l=({kind:e=r.PRIMARY,size:c=t.DEFAULT,fullWidth:p=!1,disabled:i=!1,children:b,weight:u=a.BOLD,onClick:m,...v})=>g.jsx("button",{...v,onClick:m,className:h(y.UiButton,"text-base","touch-manipulation","whitespace-nowrap","rounded-xl","leading-none",x[e],A[c],w[u],{"w-full":p,"pointer-events-none":i}),disabled:i,children:b});l.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{kind:{required:!1,tsType:{name:"EButtonTypes"},description:"",defaultValue:{value:"EButtonTypes.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"EButtonSizes"},description:"",defaultValue:{value:"EButtonSizes.DEFAULT",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},weight:{required:!1,tsType:{name:"EButtonWeight"},description:"",defaultValue:{value:"EButtonWeight.BOLD",computed:!0}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const E={title:"Components/UiButton",component:l,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"Button Type"},size:{control:{type:"select"},options:Object.values(t),description:"Button Size"},fullWidth:{control:{type:"boolean"},description:"Button Width Full"},disabled:{control:{type:"boolean"},description:"Button Disabled"},weight:{control:{type:"select"},options:Object.values(a),description:"Button Weight"},children:{control:{type:"text"},description:"Text or component"}},args:{children:"Button",kind:r.PRIMARY,size:t.DEFAULT,fullWidth:!1,disabled:!1,weight:a.BOLD}},o={};var n,d,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const D=["Primary"];export{o as Primary,D as __namedExportsOrder,E as default};
