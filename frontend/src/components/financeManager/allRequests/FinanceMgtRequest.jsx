import React, { useState } from 'react'
import "./FinanceMgtRequest.scss"
import AddRequest from '../../forms/requestForm/AddRequest';

const FinanceMgtRequest = () => {
  const [openRequest, setOpendRequest] = useState(false);
  return (
    <article className="cfo-requests-wrapper">
      <h2 className="cfo-requests-title"> Reuests</h2>

      <aside className="add-cfo-request-wrapper">
        <h3 className="add-cfo-request-title">Add New Request</h3>
        <button
          onClick={() => setOpendRequest(true)}
          className="add-cfo-request-btn"
        >
          Add Request
        </button>
      </aside>
      <hr />

      <section className="cfo-requests-container">
        <h2 className="feedback"> Request Messages </h2>
      </section>

      {openRequest && <AddRequest setOpendRequest={setOpendRequest} />}
    </article>
  );
};

export default FinanceMgtRequest