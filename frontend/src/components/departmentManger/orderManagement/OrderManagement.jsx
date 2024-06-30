import React, { useState } from 'react';
import './OrderManagement.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderManagement = () => {
  // Local state variables for reviewing a product
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product Review handler
  const reviewHandler = async (e) => {
    e.preventDefault();
    try {
      const newProductReview = {
        user: 'currentUser',
        rating: rating,
        comment: comment,
        productId: selectedProduct?._id,
        orderId: 'id',
      };

      const { data } = await axios.put(
        `products/product/review`,
        newProductReview
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section>
      <h2> Order Management </h2>

      {/* Form for user to write comment for the order placed */}
      <form className="form">
        <div className="input-container">
          <textarea
            name="comment"
            id="comment"
            cols="20"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="How was your product? Write your feeling about it! (Optional)"
            className="text-area"
          ></textarea>
          <label htmlFor="comment" className="input-label">
            Write a comment
          </label>
          <span className="input-highlight"></span>
        </div>
        <button
          onClick={rating > 0 ? reviewHandler : null}
          className="comment-btn"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default OrderManagement;
