export type TUiAccordionInfoDropdown = {
    children: React.ReactNode;
    id?: string;
    title: string;
    postfix?: (isOpen?: boolean) => React.ReactNode;
    prefix?: (isOpen?: boolean) => React.ReactNode;
};
export declare const UiAccordionInfoDropdown: ({ children, id, title, postfix, prefix }: TUiAccordionInfoDropdown) => import("react").JSX.Element;
