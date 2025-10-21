import { create } from 'storybook/theming';
import dibkLogo from '../src/assets/svg/dibk-logo-mobile.svg';

const dibkTheme = create({
  base: 'light',
  brandTitle: 'DIBK design',
  brandUrl: 'https://dibk.no/',
  brandImage: dibkLogo,
  brandTarget: '_self',

  // Typography
  fontBase: '"PP Mori", sans-serif',
  // fontSize: '16px',

  // Colors
  colorPrimary: '#072938',
});

export default dibkTheme;
