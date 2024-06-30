import React, { useState } from 'react'
import "./EmployeeFeedbacks.scss"
import AddFeedback from '../../forms/feedbackForm/AddFeedback';

const EmployeeFeedbacks = () => {
  const [openFeedback, setOpendFeedback] = useState(false);
  return (
   
  
    <article className="department-todos-wrapper">
      <h2 className="department-todos-title"> Department X Feedbacks</h2>
  
      <aside className="add-department-todo-wrapper">
        <h3 className="add-department-todo-title">Add New Feedback</h3>
        <button
          onClick={() => setOpendFeedback(true)}
          className="add-department-todo-btn"
        >
          Add Feedback
        </button>
      </aside>
      <hr />
  
      <section>
        <h2 className="feedback"> Feedback Messages </h2>
      </section>
  
      {openFeedback && <AddFeedback setOpendFeedback={setOpendFeedback} />}
    </article>
  )
}

export default EmployeeFeedbacks