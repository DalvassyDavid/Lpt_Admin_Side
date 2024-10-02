import "../App.css";
import { useState } from "react";
import "../App.scss";
import axios from "axios";
import SuccessFailMessage from "./SuccessFailMessage";
import admin_photo from "../images/adminphoto.jpeg";

function NewYouTube() {
  const successMessage = () => {
    return (
      <SuccessFailMessage
        handleOkAndClose={handleOkAndClose}
        tickorcross={"✔"}
        coloroftickorcross={"rgb(0, 197, 0)"}
        successorfailtext={"Success!"}
        colorofsuccessorfailtext={"rgb(0, 197, 0)"}
        successorfaildetailedmessage="Member has been added successfully!"
      />
    );
  };
  const failMessage = () => {
    return (
      <SuccessFailMessage
        handleOkAndClose={handleOkAndClose}
        tickorcross={"✘"}
        coloroftickorcross={"red"}
        successorfailtext={"Failed!"}
        colorofsuccessorfailtext={"red"}
        successorfaildetailedmessage="Error! Please make sure all details are correct and a photo added"
      />
    );
  };

  const [file, setFile] = useState(null);
  const [imagedisplayed, setimagedisplayed] = useState("");
  const [occassion, setoccassion] = useState("");
  const [date, setdate] = useState("");
  const [title, settitle] = useState("");
  
  const [viewSuccessMessage, setviewSuccessMessage] = useState({
    success: false,
    fail: false,
  });

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
    setimagedisplayed(event.target.files[0]);
  };
  const showImageToBeUploaded = () => {
    if (imagedisplayed === "") {
      return console.log("no image");
    } else {
      return URL.createObjectURL(imagedisplayed);
    }
  };

  const handleChangeOccassion = (event) => {
    const inputValue = event.target.value;
    if (inputValue.startsWith(" ")) {
      // Remove the leading space and update the input value
      setoccassion(inputValue.trimStart());
    } else {
      // Update the state with the valid input value
      setoccassion(inputValue);
    }
  };
  const handleChangedate = (event) => {
    setdate(event.target.value);
  };
  const handleChangetitle = (event) => {
    settitle(event.target.value);
  };
  
  const handleCreateNewMember = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("occassion", occassion);
    formData.append("date", date);
    formData.append("title", title);
    

   
      axios.post(`http://localhost:8000/addyoutubevideo`, formData).then((res) => {
        if (res.data === "fail") {
          setviewSuccessMessage({
            success: false,
            fail: true,
          });
          return;
        }
        if (res.data === "Success") {
          setviewSuccessMessage({
            success: true,
            fail: false,
          });
          return;
        }
      });
  };
  const handleOkAndClose = () => {
    setviewSuccessMessage(false);
    setFile(null);
    setoccassion("");
    setdate("");
    settitle("");
  };
  const handleDiscard = () => {
    setFile(null);
    setoccassion("");
    setdate("");
    settitle("");
  };
  return (
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
          date: "absolute",
          // width: "32.6%",
          borderRadius: "5px",
        }}
      >
        Add New Youtube Video
      </div>
      
      <div>
        <div className="form-style-7">
          <ul>
            <li>
              <label htmlFor="name">Link</label>
              <input
                type="text"
                name="occassion"
                maxLength="100"
                value={occassion}
                onChange={handleChangeOccassion}
              />
              <span>Enter Occassion/Event</span>
            </li>

            <li>
              <label htmlFor="url">Date</label>
              <input
                type="text"
                name="date"
                maxLength="15"
                value={date}
                onChange={handleChangedate}
                required
              />
              <span>Enter a date</span>
            </li>
            <li>
              <label htmlFor="bio">Title</label>
              <input
                type="text"
                name="title"
                maxLength="100"
                value={title}
                onChange={handleChangetitle}
              />
              <span>Enter a valid Title</span>
            </li>
            
            <li style={{ height: "123px", textAlign: "center" }}>
              <label htmlFor="imageupload">Image</label>
              <input
                type="file"
                name="file"
                onChange={handleChangeFile}
                style={{ width: "120px" }}
                accept=".jpg, .jpeg, .png"
              />
              <div style={{ paddingLeft: "105px" }}>
                {" "}
                <img
                  src={showImageToBeUploaded()}
                  style={{
                    height: "105px",
                    textAlign: "center",
                    width: "105px",
                    border: "solid",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </li>
            <li>
              <div style={{ display: "flex" }}>
                <div>
                  <button
                    className="button_for_save_member"
                    onClick={handleCreateNewMember}
                  >
                    Save Data
                  </button>
                </div>
                <div>
                  <button
                    className="button_for_discard_member"
                    onClick={() => handleDiscard()}
                  >
                    Discard
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {viewSuccessMessage.success == true
        ? successMessage()
        : viewSuccessMessage.fail == true
        ? failMessage()
        : ""}
    </div>
  );
}

export default NewYouTube;
