import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorBox from '../components/ErrorBox';
import Header from '../components/Header';

const meta: Meta<typeof ErrorBox> = {
  title: 'Example/ErrorBox',
  component: ErrorBox,
  argTypes: {
    type: { control: 'radio', options: ['warning', 'error'] },
    fullScreen: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const render: Story['render'] = (args) => <ErrorBox {...args} />;

export const Default: Story = {
  args: {
    children: (
      <>
        <Header size={2}>
          Du kan ikke signere erklæringen før alle opplysningene er fylt ut:
        </Header>
        <ul>
          <li>
            Du må krysse av for at foretaket erklærer ansvar i henhold til plan-
            og bygningsloven.
          </li>
          <li>
            Du må fylle ut mobil- eller telefonnummeret til kontaktpersonen.
          </li>
        </ul>
      </>    ),
  },
  render,
};