import{j as e}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{c as f}from"./index-BmPQVgn-.js";import{U as p,b as T,a as o,E as y}from"./UiTypography-Dl3m25sY.js";var R=(t=>(t.SECONDARY="secondary",t))(R||{}),r=(t=>(t.DEFAULT="default",t.SECONDARY="secondary",t.SECONDARY_INVERTED="secondary-inverted",t))(r||{});const b={[r.DEFAULT]:"",[r.SECONDARY]:"[&>tr:nth-child(odd)>td]:bg-secondary-alt-200",[r.SECONDARY_INVERTED]:"[&>tr:nth-child(even)>td]:bg-secondary-alt-200"},m=({kind:t=r.SECONDARY_INVERTED,header:s,children:a,...n})=>e.jsxs("table",{...n,children:[s&&e.jsx("thead",{children:s}),e.jsx("tbody",{className:f("rounded-xl",b[t]),children:a})]});m.__docgenInfo={description:"",methods:[],displayName:"UiTable",props:{kind:{required:!1,tsType:{name:"ETableKind"},description:"",defaultValue:{value:"ETableKind.SECONDARY_INVERTED",computed:!0}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=({kind:t,children:s,...a})=>e.jsx("tr",{className:f("text-center","[&>td:last-of-type]:rounded-r-xxs","[&>td:last-of-type]:text-right","[&>td:first-of-type]:text-left","[&>td:first-of-type]:rounded-l-xxs",{"bg-secondary-alt-200":t===R.SECONDARY}),...a,children:s});h.__docgenInfo={description:"",methods:[],displayName:"UiTableRow",props:{kind:{required:!1,tsType:{name:"ERowKind"},description:""}}};const l=({align:t,subText:s,weight:a,children:n,...c})=>e.jsx("td",{...c,children:e.jsxs(p,{tag:"div",size:T.SM,align:t,weight:a,className:"p-sm",children:[n,s?e.jsx(p,{tag:"div",size:T.XXS,weight:o.SEMI_BOLD,color:y.PRIMARY_ALT_700,className:`flex flex-col gap-xxxs ${n?"pt-sm":""}`,children:s}):null]})});l.__docgenInfo={description:"",methods:[],displayName:"UiTableCell",props:{align:{required:!1,tsType:{name:"ETextAlign"},description:""},subText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},weight:{required:!1,tsType:{name:"ETextWeight"},description:""}}};const w={title:"Components/UiTable",component:m,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The row kind"}},args:{kind:r.DEFAULT}},d={render:t=>{const s={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},a=[s,s,s,s,s,{...s,extraText:!0}],n=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"23.620 cent x"}),e.jsx("p",{children:"4,200 kWh"})]}),c=e.jsx(h,{children:["Header 1","Header 2","Header 3"].map((i,x)=>e.jsx(l,{weight:o.SEMI_BOLD,children:e.jsx(p,{tag:"div",size:T.MD,color:y.PRIMARY_ALT_700,children:i})},x))});return e.jsx(m,{className:"w-full",kind:t.kind,header:c,children:a.map((i,x)=>e.jsxs(h,{children:[e.jsx(l,{weight:o.SEMI_BOLD,children:i.text1}),e.jsx(l,{children:i.text2}),e.jsx(l,{weight:o.SEMI_BOLD,subText:i.extraText&&n,children:i.text3})]},x))})}};var u,E,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const defaultList = {
      text1: "some text",
      text2: "some text2",
      text3: "some text3",
      extraText: false
    };
    const list = [defaultList, defaultList, defaultList, defaultList, defaultList, {
      ...defaultList,
      extraText: true
    }];
    const subText = <>
                <p>23.620 cent x</p>
                <p>4,200 kWh</p>
            </>;
    const head = <UiTableRow>
                {["Header 1", "Header 2", "Header 3"].map((header, index) => <UiTableCell key={index} weight={ETextWeight.SEMI_BOLD}>
                        <UiTypography tag="div" size={ETypographySizes.MD} color={EColors.PRIMARY_ALT_700}>
                            {header}
                        </UiTypography>
                    </UiTableCell>)}
            </UiTableRow>;
    return <UiTable className="w-full" kind={args.kind} header={head}>
                {list.map((row, index) => <UiTableRow key={index}>
                        <UiTableCell weight={ETextWeight.SEMI_BOLD}>
                            {row.text1}
                        </UiTableCell>
                        <UiTableCell>
                            {row.text2}
                        </UiTableCell>

                        <UiTableCell weight={ETextWeight.SEMI_BOLD} subText={row.extraText && subText}>
                            {row.text3}
                        </UiTableCell>
                    </UiTableRow>)}
            </UiTable>;
  }
}`,...(g=(E=d.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const C=["Primary"];export{d as Primary,C as __namedExportsOrder,w as default};
