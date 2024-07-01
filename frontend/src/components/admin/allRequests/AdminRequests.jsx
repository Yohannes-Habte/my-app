import { useState } from 'react';
import "./AdminRequests.scss"
import AddRequest from '../../forms/requestForm/AddRequest';

const AdminRequests = () => {
  const [openRequest, setOpenRequest] = useState(false);
  return (
    <article className="admin-requests-wrapper">
      <h2 className="admin-requests-title"> Requests</h2>

      <aside className="add-admin-request-wrapper">
        <h3 className="add-admin-request-title">Add New Request</h3>
        <button
          onClick={() => setOpenRequest(true)}
          className="add-admin-request-btn"
        >
          Add Request
        </button>
      </aside>
      <hr />

      <section className="admin-requests-wrapper">
        <h2 className="feedback"> Request Messages </h2>
      </section>

      {openRequest && <AddRequest setOpenRequest={setOpenRequest} />}
    </article>
  );
};

export default AdminRequests;
