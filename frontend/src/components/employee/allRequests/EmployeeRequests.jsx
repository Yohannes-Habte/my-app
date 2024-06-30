import React, { useState } from 'react';
import "./EmployeeRequests.scss"
import AddRequest from '../../forms/requestForm/AddRequest';

const EmployeeRequests = () => {
  const [openRequest, setOpendRequest] = useState(false);
  return (
    <article className="department-todos-wrapper">
      <h2 className="department-todos-title"> Department X Reuests</h2>

      <aside className="add-department-todo-wrapper">
        <h3 className="add-department-todo-title">Add New Request</h3>
        <button
          onClick={() => setOpendRequest(true)}
          className="add-department-todo-btn"
        >
          Add Request
        </button>
      </aside>
      <hr />

      <section>
        <h2 className="feedback"> Request Messages </h2>
      </section>

      {openRequest && <AddRequest setOpendRequest={setOpendRequest} />}
    </article>
  );
};

export default EmployeeRequests;