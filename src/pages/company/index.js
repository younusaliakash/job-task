import React, { useState } from "react";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { suppliers } from "../../helper/fakadata";
import CustomModal from "../../components/modal/modal";

const Index = () => {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
    console.log(e);
  };
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    openModal();
  };
  const [action, setAction] = useState(false);
  const handleAction = () => {
    setAction(!action);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="supplier_page">
        <div className="content">
          <div className="page_heading">
            <div className="title">
              <h4>Suppliers</h4>
            </div>
            <div className="right_menu">
              <div className="filter">
                <button type="button">
                  <BsFilter />
                  <span>Filter</span>
                </button>
              </div>
              <div className="add_item">
                <button type="button" onClick={() => handleToggle(!toggle)}>
                  <AiOutlinePlus style={{ marginRight: "10px" }} />
                  <span>Add Suppliers</span>
                  <MdArrowDropDown style={{ marginLeft: "15px" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="data_container">
            <div className="container_heading">
              <div className="search_box">
                <form onSubmit={handleSubmit}>
                  <div className="form">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search using keyword or tags"
                      className="search"
                      autoComplete="off"
                    />
                    <span>
                      <FiSearch />
                    </span>
                  </div>
                </form>
              </div>
              <div className="show_entries">
                <select name="entries">
                  <option value="Show 10 Entries">Show 10 Entries</option>
                  <option value="Show 20 Entries">Show 20 Entries</option>
                  <option value="Show 30 Entries">Show 30 Entries</option>
                  <option value="Show 40 Entries">Show 40 Entries</option>
                  <option value="Show 50 Entries">Show 50 Entries</option>
                </select>
              </div>
            </div>
            <div className="table_data">
              <table>
                <tr>
                  <th>ID</th>
                  <th>Category Name</th>
                  <th>Country</th>
                  <th>Main Contract</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Tags</th>
                </tr>
                <tbody>
                  {suppliers.map((data, index) => (
                    <tr key={index + 1}>
                      <td>{data.userId}</td>
                      <td style={{ color: "#2170ff" }}>{data.item_name}</td>
                      <td>
                        <img
                          src={data.image_upload}
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "8px",
                          }}
                          alt=""
                        />
                      </td>
                      <td>{data.category}</td>
                      <td>{data.manufacturer}</td>
                      <td>{data.model}</td>
                      <td>{data.unit}</td>
                      <td>
                        <div className="status_field">
                          <div className="status_dropdown">
                            <div
                              className="status"
                              onClick={() => handleShow(data.userId)}
                            >
                              <span>{data.status}</span>{" "}
                              <MdArrowDropDown
                                style={{ marginRight: "10px" }}
                              />
                            </div>
                            <div
                              className="status_panel"
                              style={{ display: `${show ? "block" : "none"}` }}
                            >
                              <li>Active</li>
                              <li>Inactive</li>
                            </div>
                          </div>
                          <div
                            className="action"
                            onClick={() => handleAction(!action)}
                          >
                            <BsThreeDots fontSize={18} />
                            <div
                              className="action_panel"
                              style={{
                                display: `${action ? "block" : "none"}`,
                              }}
                            >
                              <li>Edit Item</li>
                              <li>view Attachments</li>
                              <li>Delete</li>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        width="390px"
      >
        <div className="modal_heading">
          <h3>Add Supplier</h3>
          <span onClick={closeModal}>X</span>
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
            <div className="cancel_button">
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
            <div className="save_button">
              <button type="button" className="publish">
                Add Supplier
              </button>
            </div>
          </div>
        </form>
      </CustomModal>
    </>
  );
};

export default Index;
