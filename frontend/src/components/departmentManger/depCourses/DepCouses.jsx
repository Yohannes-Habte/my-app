import React, { useState } from 'react';
import './DepCouses.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AddCourse from '../newCourse/AddCourse';

const DepCouses = () => {
  // Local state variable
  const [open, setOpen] = useState(false);

  // Parishioners header
  const columns = [
    { field: 'id', headerName: 'User ID', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 100 },
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'maritalStatus', headerName: 'Status', width: 100 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 100 },
    { field: 'street', headerName: 'Street Name', type: 'number', width: 100 },
    { field: 'zipCode', headerName: 'Zip Code', width: 100 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'country', headerName: 'Country', width: 100 },
    { field: 'role', headerName: 'Role', width: 100 },
    {
      field: 'action',
      headerName: 'Action',
      width: 70,
      renderCell: (params) => {
        return <div className="action-wrapper"></div>;
      },
    },
  ];

  const rows = [];
  return (
    <section className="department-courses-wrapper">
      <h2 className="department-courses-title"> Department X Courses</h2>

      <aside className="add-department-course-wrapper">
        <h3 className="add-department-course-title">Add New Course</h3>
        <button
          onClick={() => setOpen(true)}
          className="add-department-course-btn"
        >
          Add Course
        </button>
      </aside>
      <DataGrid
        // Rows
        rows={rows}
        // Columns
        columns={columns}
        // Initial state
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // Create search bar
        slots={{ toolbar: GridToolbar }}
        // Search a specific user
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // Page size optons
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        //
      />

      {open && <AddCourse setOpen={setOpen} />}
    </section>
  );
};

export default DepCouses;
