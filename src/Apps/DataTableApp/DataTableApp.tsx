import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Selection from "./Selection";
import Cancel from "./Cancel";
import Create from "./Create";

interface RowData {
  id: number;
  name: string;
  // Add other properties here
}

const DataTableApp: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);
  const navigate = useNavigate();

  const data: RowData[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    // Add more data items
  ];

  const handleCancel = (selectedRows: RowData[]) => {
    // Handle navigation to Cancel component with selectedRows data
    // You can use a routing library or state management to achieve this
    setSelectedRows(selectedRows);
    navigate("cancel");
  };

  const handleCreate = (selectedRows: RowData[]) => {
    // Handle navigation to Create component with selectedRows data
    // You can use a routing library or state management to achieve this
    setSelectedRows(selectedRows);
    navigate("create");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Selection
              data={data}
              onCancel={handleCancel}
              onCreate={handleCreate}
            />
          }
        />

        <Route
          path="/cancel"
          element={<Cancel selectedRows={selectedRows} />}
        />
        {/* Render the Cancel component */}
        <Route
          path="/create"
          element={<Create selectedRows={selectedRows} />}
        />
        {/* Render the Create component */}
      </Routes>
    </div>
  );
};

export default DataTableApp;
