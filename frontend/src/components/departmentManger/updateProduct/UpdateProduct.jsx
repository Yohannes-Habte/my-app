import { useState } from 'react';
import './UpdateProduct.scss';
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
  // Local state variables
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [productImages, setProductImages] = useState('');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState();
  const [tag, setTag] = useState();
  const [agree, setAgree] = useState(false);

  return (
    <section className="update-product-wrapper">
      <h2 className="update-product--title"> Update Product</h2>
      <form action="" className="update-product-form">
        <div className="inputs-wrapper">
          {/* Prodauct Name */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'productName'}
              id={'productName'}
              autoComplete="productName"
              value={productName}
              placeholder="Enter Product Name"
              className="input-field"
            />

            <label htmlFor={'productName'} className="input-label">
              Product Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Product Description */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'description'}
              id={'description'}
              autoComplete="description"
              value={description}
              placeholder="Enter Description"
              className="input-field"
            />

            <label htmlFor={'description'} className="input-label">
              Product Description
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Original Price */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'originalPrice'}
              id={'originalPrice'}
              autoComplete="originalPrice"
              value={originalPrice}
              placeholder="Enter Original Price"
              className="input-field"
            />

            <label htmlFor={'originalPrice'} className="input-label">
              Original Price
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Discounted  Price */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'originalPrice'}
              id={'originalPrice'}
              autoComplete="originalPrice"
              value={discountPrice}
              placeholder="Enter Original Price"
              className="input-field"
            />

            <label htmlFor={'discountPrice'} className="input-label">
              Original Price
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Product Images */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="file"
              name={'eventImages'}
              id={'eventImages'}
              autoComplete="eventImages"
              value={productImages}
              className="input-field"
            />

            <label htmlFor={'discountPrice'} className="input-label">
              Product Images
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Stock */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="number"
              name={'stock'}
              id={'stock'}
              autoComplete="stock"
              value={stock}
              className="input-field"
            />

            <label htmlFor={'stock'} className="input-label">
              Stock
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Product Tag */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <input
              type="text"
              name={'tag'}
              id={'tag'}
              autoComplete="tag"
              value={tag}
              placeholder="Enter Course Name"
              className="input-field"
            />

            <label htmlFor={'tag'} className="input-label">
              Product Tag
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Department */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <select name="department" id="department" value={department}>
              <option value="Default">Select a Category</option>
              <option value="education">Education Department</option>
              <option value="shopping">Shopping Department</option>
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Department
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Select Category */}
          <div className="input-container">
            <span className="icon"> {} </span>
            <select name="category" id="category" value={category}>
              <option value="Default">Select a Category</option>
              <option value="education">Leadership</option>
              <option value="shopping"> Online Marketing</option>
              <option value="education">Ecommerce Platforms</option>
              <option value="education"> Web & Software Development</option>
              <option value="education"> Research </option>
              <option value="education"> Books </option>
              <option value="education"> Clothes </option>
              <option value="education"> Foods </option>
            </select>

            <label htmlFor={'firstName'} className="input-label">
              Select Category
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>

        {/* Consent */}
        <div className="input-consent">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={agree}
            className="consent-checkbox"
          />
          <label htmlFor="agree" className="accept">
            I accept
          </label>

          <Link className={'terms-of-user'}> Terms of Use</Link>
        </div>

        <button className="update-product-btn">Submit</button>
      </form>
    </section>
  );
};

export default UpdateProduct;
