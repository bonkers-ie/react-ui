import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{R as x}from"./index-C2WPW1L7.js";import{c as d}from"./index-BmPQVgn-.js";import{U as g,d as u,c as O,E as _}from"./UiTypography-CwEUejbJ.js";import{U as C,E}from"./UiIcon-CQO6a-go.js";import"./index-JoFrltcn.js";var c=(r=>(r.SINGLE="SINGLE",r.MULTI="MULTI",r))(c||{});const y=x.createContext(null),w=({children:r,type:n=c.SINGLE,defaultValue:t,handleTrigger:o})=>{const[s,U]=x.useState(t||[]),R={openItems:s,type:n,handleTrigger:a=>{a&&(n===c.SINGLE?U(s!=null&&s.includes(a)?[]:[a]):U(l=>l!=null&&l.includes(a)?l.filter(b=>b!==a):[...l||[],a]),o&&o(a))}};return e.jsx(y.Provider,{value:R,children:r})},S=({children:r,id:n})=>{const{openItems:t,handleTrigger:o}=f(),s=t==null?void 0:t.includes(n);return e.jsx(y.Provider,{value:{id:n,isOpen:s,handleTrigger:()=>o(n)},children:r})},f=()=>{const r=x.useContext(y);if(!r)throw new Error("useAccordionContext must be used within an <Accordion /> component");return r};w.__docgenInfo={description:"",methods:[],displayName:"UiAccordionProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"EAccordionType"},description:"",defaultValue:{value:"EAccordionType.SINGLE",computed:!0}},handleTrigger:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};S.__docgenInfo={description:"",methods:[],displayName:"UiAccordionItemProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const h=({children:r,className:n,...t})=>e.jsx("div",{className:d("ui-accordion w-full",n),children:e.jsx(w,{...t,children:r})});h.__docgenInfo={description:"",methods:[],displayName:"UiAccordion",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"EAccordionType"},description:""},handleTrigger:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const i=({children:r,id:n,className:t,...o})=>e.jsx(S,{id:n,children:e.jsx("div",{className:d("ui-accordion-item",t),...o,children:r})}),M=({children:r,className:n})=>{const{handleTrigger:t,isOpen:o}=f(),s=()=>x.isValidElement(r)?r:typeof r=="function"?r(o):r;return e.jsx("header",{role:"button",className:d("cursor-pointer",n),onClick:()=>t(),children:s()})},D=({children:r,className:n})=>{const{isOpen:t}=f();return e.jsx("div",{className:d("grid transition-all duration-300 ease-in-out",t?"grid-rows-[1fr]":"grid-rows-[0fr]",n),children:e.jsx("div",{className:"overflow-hidden",children:r})})};i.Trigger=M;i.Content=D;i.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{  children, className }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
	children,
	className
}`,optional:!1,type:null}],returns:null}],displayName:"UiAccordionItem"};const V={title:"Components/UiAccordion",component:h,argTypes:{defaultValue:{description:"The array of values to be opened by default, must match the id of the accordion item",control:{type:"text"}},type:{options:[c.SINGLE,c.MULTI],description:"The type of accordion, single open or multiple open at once",control:{type:"radio"}},handleTrigger:{description:"The function to be called when an accordion item is clicked"},children:{description:"The child content of the accordion"}},args:{defaultValue:[],type:c.SINGLE,children:"Content",handleTrigger:r=>{console.log(`Item: ${r}`)}}},m={render:r=>e.jsxs(h,{className:"col-auto flex flex-col justify-start gap-xs",...r,children:[e.jsxs(i,{className:"overflow-hidden rounded bg-secondary-alt-200",id:"section1",children:[e.jsx(i.Trigger,{className:"flex flex-row items-center justify-between px-sm py-xs",children:n=>e.jsxs(e.Fragment,{children:[e.jsx(g,{color:u.PRIMARY,children:"Item"}),e.jsx("div",{className:d("transition","text-primary-700",n?"rotate-180":"rotate-0"),children:e.jsx(C,{name:["far","face-smile"],size:E.XS})})]})}),e.jsx(i.Content,{children:e.jsx(g,{className:"bg-secondary-alt-300 p-md",color:u.SECONDARY,children:"Content for Item"})})]}),e.jsxs(i,{id:"section2",children:[e.jsx(i.Trigger,{children:"Unstyled Item"}),e.jsx(i.Content,{children:"Content for Unstyled Item"})]})]})},p={render:()=>e.jsx(h,{children:e.jsxs(i,{id:"user-image",children:[e.jsx(i.Trigger,{className:"rounded-md bg-secondary-alt-200 px-xs py-xxs",children:r=>e.jsxs("div",{className:"flex flex-row items-center gap-sm",children:[e.jsx("div",{className:"max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400",children:e.jsx("img",{src:"https://i.pravatar.cc?img=12",alt:"avatar"})}),e.jsxs("div",{className:"grid w-full",children:[e.jsx(g,{lineHeight:!0,weight:O.SEMI_BOLD,color:u.SECONDARY_500,children:"Ms Jane Doe"}),e.jsx(g,{lineHeight:!0,size:_.SM,color:u.SECONDARY_400,children:"jane.doe@bonkers.ie"})]}),e.jsx("div",{className:d("transition h-fit mr-sm text-secondary-500",r?"rotate-180":""),children:e.jsx(C,{name:["fas","chevron-down"],size:E.SM})})]})}),e.jsx(i.Content,{className:"px-sm py-xs",children:"Content"})]})})};var I,N,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return <UiAccordion className="col-auto flex flex-col justify-start gap-xs" {...args}>
                <UiAccordionItem className="overflow-hidden rounded bg-secondary-alt-200" id="section1">
                    <UiAccordionItem.Trigger className="flex flex-row items-center justify-between px-sm py-xs">
                        {isOpen => <>
                                <UiTypography color={EColors.PRIMARY}>Item</UiTypography>
                                {<div className={cx("transition", "text-primary-700", isOpen ? "rotate-180" : "rotate-0")}>
                                        <UiIcon name={["far", "face-smile"]} size={ESize.XS} />
                                    </div>}
                            </>}
                    </UiAccordionItem.Trigger>
                    <UiAccordionItem.Content>
                        <UiTypography className="bg-secondary-alt-300 p-md" color={EColors.SECONDARY}>Content for Item</UiTypography>
                    </UiAccordionItem.Content>
                </UiAccordionItem>

                <UiAccordionItem id="section2">
                    <UiAccordionItem.Trigger>Unstyled Item</UiAccordionItem.Trigger>
                    <UiAccordionItem.Content>
                        Content for Unstyled Item
                    </UiAccordionItem.Content>
                </UiAccordionItem>
            </UiAccordion>;
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var v,j,A;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <UiAccordion>
                <UiAccordionItem id="user-image">
                    <UiAccordionItem.Trigger className='rounded-md bg-secondary-alt-200 px-xs py-xxs'>
                        {isOpen => <div className="flex flex-row items-center gap-sm">
                                    <div className="max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400">
                                        <img src="https://i.pravatar.cc?img=12" alt="avatar" />
                                    </div>
                                    <div className='grid w-full'>
                                        <UiTypography lineHeight weight={ETextWeight.SEMI_BOLD} color={EColors.SECONDARY_500}>
                                            {"Ms Jane Doe"}
                                        </UiTypography>
                                        <UiTypography lineHeight size={ETypographySizes.SM} color={EColors.SECONDARY_400}>
                                            {"jane.doe@bonkers.ie"}
                                        </UiTypography>

                                    </div>

                                    <div className={cx("transition h-fit mr-sm text-secondary-500", isOpen ? "rotate-180" : "")}>
                                        <UiIcon name={["fas", "chevron-down"]} size={ESize.SM} />
                                    </div>
                                </div>}
                    </UiAccordionItem.Trigger>
                    <UiAccordionItem.Content className="px-sm py-xs">
                        {"Content"}
                    </UiAccordionItem.Content>
                </UiAccordionItem>
            </UiAccordion>;
  }
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const B=["Basic","Details"];export{m as Basic,p as Details,B as __namedExportsOrder,V as default};
