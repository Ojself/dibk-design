import type { Meta, StoryObj } from '@storybook/react-vite';

import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';
import CheckBoxList, {
  type CheckBoxListProps,
} from '../components/CheckBoxList';
import CheckBoxListItem from '../components/CheckBoxListItem';

type ExtendedArgs = CheckBoxListProps & { theme?: ThemeProps };

const meta: Meta<typeof CheckBoxList> = {
  title: 'Example/CheckBoxList',
  component: CheckBoxList,
  argTypes: {},
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const { theme, ...rest } = context.args as ExtendedArgs;
      return (
        <ThemeProvider theme={theme}>
          <Story args={rest} />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Shared children for all stories */
const checkboxes = (
  <>
    <CheckBoxListItem
      onChange={() => console.log('onchange')}
      checked
      name="checkboxlist"
      id="checkboxList-listItem-1"
    >
      Label for checked checkbox
    </CheckBoxListItem>
    <CheckBoxListItem
      onChange={() => console.log('onchange')}
      name="checkboxlist"
      id="checkboxList-listItem-2"
    >
      Label for unchecked checkbox
    </CheckBoxListItem>
  </>
);

export const Default: Story = {
  args: {
    legend: 'Default checkbox list',
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};

export const Required: Story = {
  args: {
    legend: 'Required checkbox list',
    required: true,
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};

export const Compact: Story = {
  args: {
    legend: 'Compact checkbox list',
    compact: true,
  },
  render: (args) => <CheckBoxList {...args}>{checkboxes}</CheckBoxList>,
};
