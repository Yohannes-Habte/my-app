import  { useState } from 'react';
import './AdminFeedbacks.scss';
import AddFeedback from '../../forms/feedbackForm/AddFeedback';

const AdminFeedbacks = () => {
  const [openFeedback, setOpendFeedback] = useState(false);
  return (
    <article className="admin-feedbacks-wrapper">
      <h2 className="admin-feedbacks-title"> Addmin Feedbacks</h2>

      <aside className="add-admin-feedback-wrapper">
        <h3 className="add-admin-feedback-title">Add New Feedback</h3>
        <button
          onClick={() => setOpendFeedback(true)}
          className="add-admin-feedback-btn"
        >
          Add Feedback
        </button>
      </aside>
      <hr />

      <section className="admin-feedbacks-container">
        <h2 className="department-feedbacks-title"> CEO Messages </h2>
      </section>

      {openFeedback && <AddFeedback setOpendFeedback={setOpendFeedback} />}
    </article>
  );
};

export default AdminFeedbacks;
