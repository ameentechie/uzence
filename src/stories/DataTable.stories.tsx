import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../components/DataTable';
import type { Column } from '../components/DataTable';

type Row = { id: number; name: string; age: number; email: string };
const columns: Column<Row>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];
const data: Row[] = [
  { id: 1, name: 'Alice', age: 28, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 34, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
];

const meta: Meta<typeof DataTable<Row>> = {
  title: 'Components/DataTable',
  component: DataTable,
  args: {
    columns,
    data,
  },
};
export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {};
export const Loading: Story = {
  args: { loading: true },
};
export const Empty: Story = {
  args: { data: [] },
};
export const Selectable: Story = {
  args: { selectable: true },
};
