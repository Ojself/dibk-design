import type { Meta, StoryObj } from '@storybook/react-vite';
import Table, { type TableColumn } from '../components/Table';

type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

const meta: Meta<typeof Table<Person>> = {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table<Person>>;

const sampleData: Person[] = [
  { id: 1, name: 'Alice', age: 30, city: 'New York' },
  { id: 2, name: 'Bob', age: 24, city: 'London' },
  { id: 3, name: 'Charlie', age: 35, city: 'Paris' },
  { id: 4, name: 'David', age: 29, city: 'New York' },
  { id: 5, name: 'Eve', age: 22, city: 'London' },
];

const columns: TableColumn<Person>[] = [
  {
    key: 'id',
    label: 'ID',
    sortable: true,
    accessor: (p) => p.id,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    accessor: (p) => p.name,
  },
  {
    key: 'age',
    label: 'Age',
    sortable: true,
    accessor: (p) => p.age,
  },
  {
    key: 'city',
    label: 'City',
    sortable: true,
    accessor: (p) => p.city,
  },
];

export const Default: Story = {
  args: {
    columns: columns,
    data: sampleData,
    caption: 'A simple sortable table of people',
  },
};

export const NoSorting: Story = {
  args: {
    columns: columns.map(col => ({ ...col, sortable: false })),
    data: sampleData,
    caption: 'A table without sorting',
  },
};

export const CustomRender: Story = {
  args: {
    columns: [
      {
        key: 'name',
        label: 'Full Name',
        sortable: true,
        accessor: (p) => p.name,
        render: (p) => <strong>{p.name}</strong>,
      },
      {
        key: 'age',
        label: 'Age in Years',
        sortable: true,
        accessor: (p) => p.age,
        render: (p) => <em>{p.age} years old</em>,
      },
      {
        key: 'city',
        label: 'Location',
        sortable: true,
        accessor: (p) => p.city,
      },
    ],
    data: sampleData,
    caption: 'Table with custom cell rendering',
  },
};


