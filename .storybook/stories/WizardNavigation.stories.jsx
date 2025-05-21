// Dependencies
import React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

// Components
import WizardNavigation from '@/components/WizardNavigation';
import ThemeProvider from '@/components/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/WizardNavigation',
  component: WizardNavigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    activeStepId: {
      control: 'select',
      options: [
        'SignIn',
        'AvailableReportees',
        'Import',
        'NextProcessCategory',
        'Receipt',
      ],
    },
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate = (args) => (
  <ThemeProvider theme={args.theme}>
    <WizardNavigation {...args} />
  </ThemeProvider>
);
const WithLinksTemplate = (args) => (
  <ThemeProvider theme={args.theme}>
    <BrowserRouter>
      <WizardNavigation {...args} linkComponent={RouterLink} />
    </BrowserRouter>
  </ThemeProvider>
);

export const Default = DefaultTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  steps: {
    SignIn: {
      id: 'SignIn',
      name: 'Start',
      finished: true,
      hasErrors: false,
    },
    AvailableReportees: {
      id: 'AvailableReportees',
      name: 'Velg hvem du representerer',
      finished: true,
      hasErrors: false,
    },
    Import: {
      id: 'Import',
      name: 'Importer fil fra ByggSøk',
      finished: false,
      hasErrors: true,
    },
    NextProcessCategory: {
      id: 'NextProcessCategory',
      name: 'Velg søknadstype',
      finished: false,
      hasErrors: false,
    },
    Receipt: {
      id: 'Receipt',
      name: 'Velg søknadssystem',
      finished: false,
      hasErrors: false,
    },
  },
  activeStepId: 'NextProcessCategory',
};

export const WithLinks = WithLinksTemplate.bind({});
WithLinks.args = {
  steps: {
    SignIn: {
      id: 'SignIn',
      name: 'Start',
      finished: true,
      hasErrors: false,
      link: { pathname: 'SignIn', search: window.location.search },
    },
    AvailableReportees: {
      id: 'AvailableReportees',
      name: 'Velg hvem du representerer',
      finished: true,
      hasErrors: false,
      link: { pathname: 'AvailableReportees', search: window.location.search },
    },
    Import: {
      id: 'Import',
      name: 'Importer fil fra ByggSøk',
      finished: false,
      hasErrors: true,
      link: { pathname: 'Import', search: window.location.search },
    },
    NextProcessCategory: {
      id: 'NextProcessCategory',
      name: 'Velg søknadstype',
      finished: false,
      hasErrors: false,
      link: { pathname: 'NextProcessCategory', search: window.location.search },
    },
    Receipt: {
      id: 'Receipt',
      name: 'Velg søknadssystem',
      finished: false,
      hasErrors: false,
      link: { pathname: 'Receipt', search: window.location.search },
    },
  },
  activeStepId: 'NextProcessCategory',
};
