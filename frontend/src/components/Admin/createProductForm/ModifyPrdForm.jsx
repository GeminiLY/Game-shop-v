import React, { useState, useEffect } from "react";
import "./formStyle.css";
import axios from "axios";
import { useLocation} from 'react-router-dom';

function CreateProductForm() {

    const location = useLocation()
    const { id } = location.state
    const idd =id;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get("http://localhost:8000/category/get");
      setCategories(response.data);
    }
    fetchCategories();
  }, []);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetchAllProdData();
  }, []);
  const fetchAllProdData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products/get");
      const prod = response.data.map((prod) => ({
        id: prod.id,
        name: prod.name,
        des: prod.description,
        stock: prod.stock,
        price: prod.price,
      }));
      setProductData(prod);
    } catch (e) {
      console.log(e);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
   /* prod_category: [],*/
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://127.0.0.1:8000/products/${idd}/update",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        description: "",
        stock: 0,
        price: 0,
      /*  prod_category: [],*/
      });
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the product.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
/*
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      prod_category: [...formData.prod_category, value],
    });
  };

  const handleRemoveCategory = (category) => {
    setFormData({
      ...formData,
      prod_category: formData.prod_category.filter((c) => c !== category),
    });
  };*/

  return (
    <section>
    <div class="col-lg-12"><h1>Manage my product info</h1></div>
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={e.name}
            placeholder={e.name}
            onChange={handleInputChange}
          />
        </div>))}
        {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={e.des}
            placeholder={e.des}
            onChange={handleInputChange}
          />
        </div>))}
        {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
                <label>Current stock: {e.stock}</label>
            ))}
        <div className="form-group">
          {/*<label htmlFor="stock">Stock</label>*/ }
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
          />
        </div>
        {productData.filter((e) =>{
              return e.id === idd ? e : null;
            }).map((e) => (
                <label>Current price: {e.price}</label>))}
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>{/*}
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <select
            className="form-control"
            id="categories"
            onChange={handleCategoryChange}
          >
            <option value="">-- Select a category --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
            
          </select>*/}{/*
          {formData.prod_category.length > 0 && (
            <div className="selected-categories">
              {formData.prod_category.map((category) => (
                <span key={category} className="selected-category">
                  {category.name}
                  <button
                    type="button"
                    className="close"
                    aria-label="Remove category"
                    onClick={() => handleRemoveCategory(category)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </span>
              ))}
            </div>
              )}
        </div>*/}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
    </section>
  );
}

export default CreateProductForm;
