import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{U as c,E as a,a as o}from"./UiAccordionItem.base-Dxb-H-VQ.js";import{U as t,E as s,a as u,b as I}from"./UiTypography-Dl3m25sY.js";import{U as h,E as y}from"./UiIcon-CQO6a-go.js";import"./index-C2WPW1L7.js";import{c as f}from"./index-BmPQVgn-.js";import"./index-JoFrltcn.js";const S={title:"Components/UiAccordion",component:c,argTypes:{defaultValue:{description:"The array of values to be opened by default, must match the id of the accordion item",control:{type:"text"}},type:{options:[a.SINGLE,a.MULTI],description:"The type of accordion, single open or multiple open at once",control:{type:"radio"}},handleTrigger:{description:"The function to be called when an accordion item is clicked"},children:{description:"The child content of the accordion"}},args:{defaultValue:[],type:a.SINGLE,children:"Content",handleTrigger:r=>{console.log(`Item: ${r}`)}}},i={render:r=>e.jsxs(c,{className:"col-auto flex flex-col justify-start gap-xs",...r,children:[e.jsxs(o,{className:"overflow-hidden rounded bg-secondary-alt-200",id:"section1",children:[e.jsx(o.Trigger,{className:"flex flex-row items-center justify-between px-sm py-xs",children:U=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:s.PRIMARY,children:"Item"}),e.jsx("div",{className:f("transition","text-primary-700",U?"rotate-180":"rotate-0"),children:e.jsx(h,{name:["far","face-smile"],size:y.XS})})]})}),e.jsx(o.Content,{children:e.jsx(t,{className:"bg-secondary-alt-300 p-md",color:s.SECONDARY,children:"Content for Item"})})]}),e.jsxs(o,{id:"section2",children:[e.jsx(o.Trigger,{children:"Unstyled Item"}),e.jsx(o.Content,{children:"Content for Unstyled Item"})]})]})},n={render:()=>e.jsx(c,{children:e.jsxs(o,{id:"user-image",children:[e.jsx(o.Trigger,{className:"rounded-md bg-secondary-alt-200 px-xs py-xxs",children:r=>e.jsxs("div",{className:"flex flex-row items-center gap-sm",children:[e.jsx("div",{className:"max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400",children:e.jsx("img",{src:"https://i.pravatar.cc?img=12",alt:"avatar"})}),e.jsxs("div",{className:"grid w-full",children:[e.jsx(t,{lineHeight:!0,weight:u.SEMI_BOLD,color:s.SECONDARY_500,children:"Ms Jane Doe"}),e.jsx(t,{lineHeight:!0,size:I.SM,color:s.SECONDARY_400,children:"jane.doe@bonkers.ie"})]}),e.jsx("div",{className:f("transition h-fit mr-sm text-secondary-500",r?"rotate-180":""),children:e.jsx(h,{name:["fas","chevron-down"],size:y.SM})})]})}),e.jsx(o.Content,{className:"px-sm py-xs",children:"Content"})]})})};var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,x,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const w=["Basic","Details"];export{i as Basic,n as Details,w as __namedExportsOrder,S as default};
