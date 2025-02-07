import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { columns, data } from './makeData';

const Example = () => {
  const table = useMantineReactTable({
    columns,
    data,
    enableRowNumbers: true,
    rowNumberMode: 'static', //default
  });

  return <MantineReactTable table={table} />;
};

export default Example;
