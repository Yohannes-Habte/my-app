import React, { useState } from 'react'
import "./FinanceMgtFeedbacks.scss"
import AddFeedback from '../../forms/feedbackForm/AddFeedback';

const FinanceMgtFeedbacks = () => {
  const [openFeedback, setOpendFeedback] = useState(false);
  return (
    <article className="cfo-feedbacks-wrapper">
      <h2 className="cfo-feedbacks-title"> Addmin Feedbacks</h2>

      <aside className="add-cfo-feedback-wrapper">
        <h3 className="add-cfo-feedback-title">Add New Feedback</h3>
        <button
          onClick={() => setOpendFeedback(true)}
          className="add-cfo-feedback-btn"
        >
          Add Feedback
        </button>
      </aside>
      <hr />

      <section className="cfo-feedbacks-container">
        <h2 className="department-feedbacks-title"> CEO Messages </h2>
      </section>

      {openFeedback && <AddFeedback setOpendFeedback={setOpendFeedback} />}
    </article>
  );
};

export default FinanceMgtFeedbacks