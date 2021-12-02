import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login_wrapper">
      <div className="login_heading">
        <h3>Login to your account</h3>
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
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="documents"
              id="name"
              placeholder="Type password"
            />
          </div>
        </div>
        <div className="row">
          <div className="save_button">
            <button type="button" className="publish">
              Login to continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
