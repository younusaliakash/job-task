import React, { useState } from "react";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { data } from "../../helper/fakadata";

const Index = () => {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
    console.log(e);
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
                  <li>New Item</li>
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
    </>
  );
};

export default Index;
