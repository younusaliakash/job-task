import React, { useState } from "react";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { data } from "../../helper/fakadata";
import CustomModal from "../../components/modal/modal";

const Index = () => {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
  };
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
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
      <div className="items_page">
        <div className="content">
          <div className="page_heading">
            <div className="title">
              <h4>Items</h4>
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
                  <span>Add Item</span>
                  <MdArrowDropDown style={{ marginLeft: "15px" }} />
                </button>
                <div
                  className="add_dropdown"
                  style={{ display: `${toggle ? "block" : "none"}` }}
                >
                  <li onClick={openModal}>New Item</li>
                  <li>Import Item</li>
                </div>
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Unit</th>
                  <th>Status</th>
                </tr>
                <tbody>
                  {data.map((data, index) => (
                    <tr key={index + 1}>
                      <td>{data.userId}</td>
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
                      <td style={{ color: "#2170ff" }}>{data.item_name}</td>
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
        width="600px"
      >
        <div className="modal_heading">
          <h3>Add Item</h3>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="form_group">
              <label htmlFor="itemname">Item Name</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type item name"
                className="input"
              />
            </div>
            <div className="form_group">
              <label htmlFor="manufacture">Manufacturer</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Manufacture name"
                className="input"
              />
            </div>
          </div>
          <div className="row">
            <div className="form_group">
              <label htmlFor="notes">Notes</label>
              <br />
              <textarea
                name="documents"
                id="name"
                cols="30"
                rows="6"
                placeholder="Write notes..."
                className="input"
              ></textarea>
            </div>
            <div className="form_group">
              <label htmlFor="unit">Unit</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type units"
                className="input"
              />
              <br />
              <br />
              <label htmlFor="status">Status</label>
              <br />
              <select
                name="documents"
                id="name"
                value="Active"
                className="input"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form_group">
              <label htmlFor="category">Category</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type category"
                className="input"
              />
            </div>
            <div className="form_group">
              <label htmlFor="model">Model</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type model"
                className="input"
              />
            </div>
          </div>
          <div className="row">
            <div className="form_group">
              <label htmlFor="groupname">Group Name</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type group name"
                className="input"
              />
            </div>
            <div className="form_group">
              <label htmlFor="tags">Tags</label>
              <br />
              <input
                type="text"
                name="documents"
                id="name"
                placeholder="Type tags"
                className="input"
              />
            </div>
          </div>
          <div className="row">
            <div className="cancel_button">
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
            <div className="save_button">
              <button type="button">Save as draft</button>
              <button type="button" className="publish">
                Publish
              </button>
            </div>
          </div>
        </form>
      </CustomModal>
    </>
  );
};

export default Index;
