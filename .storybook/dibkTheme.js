import { create } from '@storybook/theming';
import dibkLogo from '../src/assets/svg/dibk-logo-mobile.svg'

export default create({
  base: 'light',
  brandTitle: 'DIBK design',
  brandUrl: 'https://dibk.no/',
  brandImage: dibkLogo,
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',

  colorPrimary: '#072938',
});