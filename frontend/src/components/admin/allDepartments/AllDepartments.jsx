import { useState } from 'react';
import './AllDepartments.scss';
import NewDepartment from '../createDepartment/NewDepartment';

const AllDepartments = () => {
  // Local state variable
  const [open, setOpen] = useState(false);

  return (
    <article className="departments-wrapper">
      <h2 className="departments-title"> All Departments </h2>

      <section className="add-department-wrapper">
        <h3 className="add-department-title">Add New Department</h3>
        <button onClick={() => setOpen(true)} className="add-department-btn">
          Add Department
        </button>
      </section>
      <hr />

      <section className="department-wrapper">
        <h3 className="department-title"> Department Name</h3>
        <p className="department-description"> Department Description</p>
        <p className="department-keywords">Department Keywords</p>
      </section>

      {open && <NewDepartment setOpen={setOpen} />}
    </article>
  );
};

export default AllDepartments;
