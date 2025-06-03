// stories/RadioButtonList.stories.tsx

import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import RadioButtonList, {
  type RadioButtonListProps,
} from '../components/RadioButtonList';
import RadioButtonListItem from '../components/RadioButtonListItem';

type ExtendedArgs = RadioButtonListProps & { theme?: ThemeProps };

const meta: Meta<typeof RadioButtonList> = {
  title: 'Example/RadioButtonList',
  component: RadioButtonList,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { theme, ...rest } = context.args as ExtendedArgs;
      return (
        <ThemeProvider theme={theme}>
          <Story args={rest}>{sharedChildren}</Story>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sharedChildren = (
  <>
    <RadioButtonListItem
      onChange={() => console.log('onchange')}
      inputValue="value 1"
      name="radio-button-list-list-item"
      id="radioButtonList-listItem-1"
      checked
    >
      Checked radio button
    </RadioButtonListItem>
    <RadioButtonListItem
      onChange={() => console.log('onchange')}
      inputValue="value 2"
      name="radio-button-list-list-item"
      id="radioButtonList-listItem-2"
    >
      Unchecked radio button
    </RadioButtonListItem>
  </>
);

export const Default: Story = {
  args: { legend: 'Default radio button list' },
};

export const Required: Story = {
  args: { legend: 'Required radio button list', required: true },
};

export const Compact: Story = {
  args: { legend: 'Compact radio button list', compact: true },
};
