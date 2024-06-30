import React, { useState } from 'react';
import "./HodFeedbacks.scss"
import AddFeedback from '../../forms/feedbackForm/AddFeedback';

const HodFeedbacks = () => {
  const [openFeedback, setOpendFeedback] = useState(false);
  return (
    <article className="department-feedbacks-wrapper">
      <h2 className="department-feedbacks-title"> Department X Feedbacks</h2>

      <aside className="add-department-feedback-wrapper">
        <h3 className="add-department-feedback-title">Add New Feedback</h3>
        <button
          onClick={() => setOpendFeedback(true)}
          className="add-department-feedback-btn"
        >
          Add Feedback
        </button>
      </aside>
      <hr />

      <section className='department-feedbacks-wrapper'>
        <h2 className="department-feedbacks-title"> Feedback Messages </h2>
      </section>

      {openFeedback && <AddFeedback setOpendFeedback={setOpendFeedback} />}
    </article>
  );
};

export default HodFeedbacks;
