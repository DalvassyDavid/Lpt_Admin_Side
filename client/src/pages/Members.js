import { useEffect, useState } from "react";
import "../App.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

import NewMember from "../Reusables/NewMember";
import { TableForData_Body, TableForData_Header } from "../Reusables/Functions";

function Members(props) {
  const { id } = useParams();

  const [members, setMembers] = useState([]);
  const [eachMember, setEachMember] = useState([]);

  const [viewAddMemberPage, setviewAddMemberPage] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/members`)
      .then((res) => setMembers(res.data));
  }, [members]);
  
  const handleClick = (id) => {
    setviewAddMemberPage(false);
    axios
      .get(`http://localhost:8000/members/${id}`)
      .then((res) => setEachMember(res.data[0]));
  };

  //Handle close button

  const handleViewAddMemberPage = () => {
    setviewAddMemberPage(true);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setEachMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div>
      <div className="dashboard-main-page">
        <div className="dashboard-main-page-left">
        <TableForData_Header
          column_1={"NO."}
          column_2={"NAME"}
          column_3={"STAFF NO"}
          column_4={"POSITION"}
           />
          <div>
            <br />
            
            <div style={{border:"solid 1px grey"}}></div>
            <div style={{border:"solid 1px grey"}}></div>
            <div style={{border:"solid 1px grey"}}></div>
            {members?.map((item) => {
              return (
                <>
                  <TableForData_Body
                    ID={item.ID}
                    LINK={item.NAME}
                    DATEADDED={item.STAFFNUMBER}
                    TITLE={item.POSITION}
                    onclickfunction={(id) => handleClick(item.ID)}
                  />
                  <div style={{border:"solid 1px grey"}}></div>
                </>
              );
            })}
          </div>
        </div>
        <div className="dashboard-main-page-right">
          {viewAddMemberPage ? (
            <NewMember />
          ) : (
            <div>
              {/* Right Side */}

              <div
                style={{
                  textAlign: "center",
                  border: "solid",
                  fontWeight: "bold",
                  backgroundColor: "rgb(0, 197, 0)",
                  color: "white",
                  padding: "7px",
                  position: "absolute",
                  width: "32.6%",
                  borderRadius: "5px",
                }}
              >
                {" "}
                Details form
              </div>
              <br />
              <br />
              <div>
                <div className="form-style-7">
                  <ul>
                    <li>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        maxLength="100"
                        value={eachMember.NAME}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter member's full name</span>
                    </li>
                    <li>
                      <label htmlFor="email">Staff Number</label>
                      <input
                        type="text"
                        name="staffNumber"
                        maxLength="100"
                        value={eachMember.STAFFNUMBER}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter Staff No</span>
                    </li>
                    <li>
                      <label htmlFor="url">Position</label>
                      <input
                        type="text"
                        name="position"
                        maxLength="100"
                        value={eachMember.POSITION}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter a title</span>
                    </li>
                    <li>
                      <label htmlFor="bio">Email</label>
                      <input
                        type="text"
                        name="email"
                        maxLength="100"
                        value={eachMember.EMAIL}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter a valid email address</span>
                    </li>
                    <li style={{ height: "110px", textAlign: "center" }}>
                      <label htmlFor="bio">Image</label>
                      <input
                        type="image"
                        alt="Loading...."
                        src={eachMember.PHOTO}
                        maxLength="100"
                        onChange={(e) => handleChange(e)}
                        style={{ width: "120px" }}
                      />
                      <span>
                        <button> Upload a new passport photo</button>
                      </span>
                    </li>
                    <li>
                      <div style={{ display: "flex" }}>
                        <div>
                          <button
                            className="button_for_save_edit_close"
                            style={{
                              backgroundColor: "#0095ff",
                            }}
                            onClick={(id) => handleSubmit(id)}
                          >
                            Edit
                          </button>
                        </div>
                        <div style={{ padding: "20px" }}></div>
                        <div>
                          <button
                            className="button_for_save_edit_close"
                            style={{
                              backgroundColor: "green",
                            }}
                            onClick={(id) => handleSubmit(id)}
                          >
                            Save
                          </button>
                        </div>
                        <div style={{ padding: "20px" }}></div>
                        <div>
                          <button
                            className="button_for_save_edit_close"
                            style={{
                              backgroundColor: "red",
                            }}
                            onClick={() => handleViewAddMemberPage()}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className="navbar_adduser_button"
        onClick={() => handleViewAddMemberPage()}
      >
        Add Member
      </button>
    </div>
  );
}

export default Members;
