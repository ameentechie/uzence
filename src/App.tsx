import React from 'react';
import './App.css';
import InputField from './components/InputField';
import DataTable from './components/DataTable';

type Row = { id: number; name: string; age: number; email: string };
const columns: { key: string; title: string; dataIndex: keyof Row; sortable?: boolean }[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];
const data = [
  { id: 1, name: 'Alice', age: 28, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 34, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
];

function App() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-10">
      <section>
        <h1 className="text-2xl font-bold mb-4">InputField Demo</h1>
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          helperText="This will be your public username."
          variant="outlined"
          size="md"
          clearable
          style={{ maxWidth: 400 }}
        />
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">DataTable Demo</h1>
        <DataTable columns={columns} data={data} selectable />
      </section>
    </div>
  );
}

export default App;
