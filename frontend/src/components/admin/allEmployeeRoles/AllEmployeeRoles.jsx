import  { useState } from 'react'
import "./AllEmployeeRoles.scss"
import AddEmployeeRole from '../createEmployeeRole/AddEmployeeRole';

const AllEmployeeRoles = () => {
  // Local state variable
  const [open, setOpen] = useState(false);

  return (
    <article className="employee-roles-wrapper">
      <h2 className="employee-roles-title"> All Employee Roles </h2>

      <section className="add-employee-role-wrapper">
        <h3 className="add-category-title">Add New Employee Role</h3>
        <button onClick={() => setOpen(true)} className="add-employee-role-btn">
          Add Employee Role
        </button>
      </section>
      <hr />

      <section className="employee-role-wrapper">
        <h3 className="employee-role-title"> Category Name</h3>
        <p className="employee-role-description"> Category Description</p>
        <p className="employee-role-keywords">Category Keywords</p>
        <p className="employee-role-department">Category Department</p>
      </section>

      {open && <AddEmployeeRole setOpen={setOpen} />}
    </article>
  )
}

export default AllEmployeeRoles