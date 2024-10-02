import { useEffect, useState } from "react";
import "../App.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import NewEventNews from "../Reusables/NewEventNews";
import { TableForData_Body, TableForData_Header } from "../Reusables/Functions";

function NewsEdit(props) {
  const { id } = useParams();

  const [Events, setEvents] = useState([]);
  const [eachEvent, setEachEvent] = useState([]);

  const [viewAddEventPage, setviewAddEventPage] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/events`)
      .then((res) => setEvents(res.data));
  }, [Events]);
  
  const handleClick = (id) => {
    setviewAddEventPage(false);
    axios
      .get(`http://localhost:8000/events/${id}`)
      .then((res) => setEachEvent(res.data[0]));
  };

  //Handle close button

  const handleViewAddEventPage = () => {
    setviewAddEventPage(true);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setEachEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};
  console.log(eachEvent)

  return (
    <div>
      <div className="dashboard-main-page">
        <div className="dashboard-main-page-left">
        <TableForData_Header
          column_1={"NO."}
          column_2={"OCCASSION"}
          column_3={"DATE"}
          column_4={"TITLE"}
           />
          <div>
            
            <br />
            <div style={{border:"solid 1px grey"}}></div>
            <div style={{border:"solid 1px grey"}}></div>
            <div style={{border:"solid 1px grey"}}></div>
            {Events?.map((item) => {
              return (
                <>
                  <TableForData_Body
                    ID={item.ID}
                    LINK={item.OCCASSION}
                    DATEADDED={item.DATE}
                    TITLE={item.TITLE}
                    onclickfunction={(id) => handleClick(item.ID)}
                  />
                  <div style={{border:"solid 1px grey"}}></div>
                </>
              );
            })}
          </div>
        </div>
        <div className="dashboard-main-page-right">
          {viewAddEventPage ? (
            <NewEventNews />
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
                      <label htmlFor="name">Occassion/News</label>
                      <input
                        type="text"
                        name="name"
                        maxLength="100"
                        value={eachEvent.OCCASSION}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter Occassion/News</span>
                    </li>
                    <li>
                      <label htmlFor="email">Date</label>
                      <input
                        type="text"
                        name="staffNumber"
                        maxLength="100"
                        value={eachEvent.DATE}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter Date</span>
                    </li>
                    <li>
                      <label htmlFor="url">Title</label>
                      <input
                        type="text"
                        name="position"
                        maxLength="100"
                        value={eachEvent.TITLE}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter a title</span>
                    </li>
                    <li>
                      <label htmlFor="url">Description</label>
                      <input
                        type="text"
                        name="position"
                        maxLength="100"
                        value={eachEvent.DESCRIPTION}
                        onChange={(e) => handleChange(e)}
                      />
                      <span>Enter a title</span>
                    </li>
                    
                    <li style={{ height: "110px", textAlign: "center" }}>
                      <label htmlFor="bio">Image</label>
                      <input
                        type="image"
                        alt="Loading...."
                        src={eachEvent.IMAGE}
                        maxLength="100"
                        onChange={(e) => handleChange(e)}
                        style={{ width: "120px" }}
                      />
                      <span>
                        <button> Upload a new image/photo</button>
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
                            onClick={() => handleViewAddEventPage()}
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
        onClick={() => handleViewAddEventPage()}
      >
        Add Event/Occassion
      </button>
    </div>
  );
}

export default NewsEdit;
