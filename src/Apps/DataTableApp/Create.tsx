import React from "react";
import DataTable from "react-data-table-component";

interface RowData {
  id: number;
  name: string;
  // Add other properties here
}

interface CreateProps {
  selectedRows: RowData[];
}

const Create: React.FC<CreateProps> = ({ selectedRows }) => {
  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
    },
    // Add other columns here
  ];

  return (
    <div>
      <h2>Create Component</h2>
      <DataTable columns={columns} data={selectedRows} />
    </div>
  );
};

export default Create;
