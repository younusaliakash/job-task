import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_wrapper">
      <div className="login_heading">
        <h3>Add Supplier</h3>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="documents"
              id="name"
              placeholder="Type email"
            />
          </div>
        </div>
        <div className="row">
          <div className="form_group">
            <label htmlFor="company">Company</label>
            <br />
            <input
              type="text"
              name="documents"
              id="name"
              placeholder="Type company name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form_group">
            <label htmlFor="country">Country</label>
            <br />
            <select name="documents" id="name" value="Active">
              <option value="select country">Select Country</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form_group">
            <label htmlFor="category">Category</label>
            <br />
            <select name="documents" id="name" value="Active">
              <option value="select category">Select Category</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="save_button">
            <button type="button" className="publish">
              Add Supplier
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
