import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface RowData {
  id: number;
  name: string;
  // Add other properties here
}

interface SelectionProps {
  data: RowData[];
  onCancel: (selectedRows: RowData[]) => void;
  onCreate: (selectedRows: RowData[]) => void;
}

const Selection: React.FC<SelectionProps> = ({ data, onCancel, onCreate }) => {
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);

  const handleRowSelected = React.useCallback(
    (state: { selectedRows: React.SetStateAction<RowData[]> }) => {
      setSelectedRows(state.selectedRows);
    },
    []
  );

  console.log(data);

  const handleCancel = () => {
    console.log("cancel", selectedRows);
    onCancel(selectedRows);
  };

  const handleCreate = () => {
    console.log("create", selectedRows);
    onCreate(selectedRows);
  };

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
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        selectableRowsHighlight
        onSelectedRowsChange={handleRowSelected}
      />
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default Selection;
