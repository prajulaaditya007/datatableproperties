import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { RootState } from "../redux/store";

const columns = [
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row: any) => row.username,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
];

const TableComponent: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);

  return (
    <DataTable
      title="Filtered Users"
      columns={columns}
      data={users}
      pagination
      highlightOnHover
      striped
    />
  );
};

export default TableComponent;
