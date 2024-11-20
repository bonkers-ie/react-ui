import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    colorPrimary: '#56c55d',
    colorSecondary: 'rgba(86, 197, 93, 0.9)',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'silver',
    appBorderRadius: 4,

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: '#56c55d',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'Bonkers-UI Design System',
    brandUrl: 'https://github.com/bonkers-ie/bonkers-ui',
    brandImage: 'https://web-assets.bonkers.ie/packs/static/logo/bonkers_logo-279f0cff5a9b71e3059a.svg',
});