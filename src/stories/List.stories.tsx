import type { Meta, StoryObj } from '@storybook/react-vite';

import List, { type ListProps } from '../components/List';
import ListItem from '../components/ListItem';
import ThemeProvider from '../components/ThemeProvider';
import type { ThemeProps } from '../components/Theme';

type ExtendedArgs = ListProps & { theme?: ThemeProps };

const meta: Meta<typeof List> = {
  title: 'Example/List',
  component: List,
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

const listItems = (
  <>
    <ListItem>item 1</ListItem>
    <ListItem>item 2</ListItem>
    <ListItem>item 3</ListItem>
  </>
);

const listItemsWithSubItems = (
  <>
    <ListItem>item 1</ListItem>
    <ListItem>
      item 2
      <List>
        <ListItem>subitem 1</ListItem>
        <ListItem>subitem 2</ListItem>
      </List>
    </ListItem>
    <ListItem>item 3</ListItem>
  </>
);

export const Ordered: Story = {
  args: {
    children: listItems,
    ordered: true,
  },
};

export const Unordered: Story = {
  args: {
    children: listItems,
  },
};

export const UnorderedSquareStyled: Story = {
  args: {
    children: listItems,
    listStyle: 'square',
  },
};

export const UnorderedUnstyled: Story = {
  args: {
    children: listItems,
    listStyle: 'none',
  },
};

export const UnorderedListWithSubItems: Story = {
  args: {
    children: listItemsWithSubItems,
  },
};
