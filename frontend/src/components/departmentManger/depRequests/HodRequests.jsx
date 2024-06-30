import React, { useState } from 'react';
import './HodRequests.scss';
import AddRequest from '../../forms/requestForm/AddRequest';

const HodRequests = () => {
  const [openRequest, setOpendRequest] = useState(false);
  return (
    <article className="department-requests-wrapper">
      <h2 className="department-requests-title"> Department X Reuests</h2>

      <aside className="add-department-request-wrapper">
        <h3 className="add-department-request-title">Add New Request</h3>
        <button
          onClick={() => setOpendRequest(true)}
          className="add-department-request-btn"
        >
          Add Request
        </button>
      </aside>
      <hr />

      <section className="department-requests-wrapper">
        <h2 className="feedback"> Request Messages </h2>
      </section>

      {openRequest && <AddRequest setOpendRequest={setOpendRequest} />}
    </article>
  );
};

export default HodRequests;
