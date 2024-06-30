import  { useState } from 'react'
import "./AllCategories.scss"
import AddCategory from '../createCategory/AddCategory';

const AllCategories = () => {
    // Local state variable
    const [open, setOpen] = useState(false);

    return (
      <article className="categories-wrapper">
        <h2 className="categories-title"> All Categories </h2>
  
        <section className="add-category-wrapper">
          <h3 className="add-category-title">Add New Category</h3>
          <button onClick={() => setOpen(true)} className="add-category-btn">
            Add Category
          </button>
        </section>
        <hr />
  
        <section className="category-wrapper">
          <h3 className="category-title"> Category Name</h3>
          <p className="category-description"> Category Description</p>
          <p className="category-keywords">Category Keywords</p>
          <p className="category-department">Category Department</p>
        </section>
  
        {open && <AddCategory setOpen={setOpen} />}
      </article>
  )
}

export default AllCategories