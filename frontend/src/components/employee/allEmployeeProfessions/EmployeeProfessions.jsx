import React, { useState } from 'react'
import "./EmployeeProfessions.scss"
import AddProfession from '../addProfession/AddProfession';
import ReactIcons from '../../reactIcons/ReactIcons';

const EmployeeProfessions = () => {
  // Global Variables
  const { closeIcon, trashIcon } = ReactIcons();

  // Local state variables
  const [openProfession, setOpenProfession] = useState(false);
  return (
    <section className="employee-professions-wrapper">
      <h2 className="employee-professions-title">Employee Employers' Addresses</h2>
      <article className="add-employee-profession">
        <h3 className="add--profession-title"> Add Employer Address </h3>
        <button
          onClick={() => setOpenProfession(true)}
          className="add-profession-btn"
        >
          Add Employer Address
        </button>
      </article>

      <section className="profession-list-container">
        {/* Table addresses */}
        <table className="table-professions">
          <thead className="table-head">
            <tr className="head-row">
              <th className="head-cell"> Address Type</th>
              <th className="head-cell"> Address </th>
              <th className="head-cell"> Zip Code</th>
              <th className="head-cell"> City</th>
              <th className="head-cell"> State</th>
              <th className="head-cell"> Country</th>
              <th className="head-cell"> Phone </th>
              <th className="head-cell"> Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="body-row">
              <td className="body-cell"> {'address.addressType'} </td>
              <td className="body-cell"> {'address.address'} </td>
              <td className="body-cell">
                {/* {address.address1} {address.zipCode} */}
              </td>
              <td className="body-cell"> {'address.city'}</td>
              <td className="body-cell"> {'address.state'}</td>
              <td className="body-cell"> {'address.country'}</td>
              <td className="body-cell"> {'currentUser.phone'} </td>
              <td className="body-cell">
                <span className="delete-icon"> {trashIcon} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {openProfession && <AddProfession setOpenProfession={setOpenProfession} />}
    </section>
  )
}

export default EmployeeProfessions