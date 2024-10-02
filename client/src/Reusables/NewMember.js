import "../App.css";
import { useState } from "react";
import "../App.scss";
import axios from "axios";
import SuccessFailMessage from "./SuccessFailMessage";


function NewMember() {
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
  const [names, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
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

  const handleChangeName = (event) => {
    const inputValue = event.target.value;
    if (inputValue.startsWith(" ")) {
      // Remove the leading space and update the input value
      setName(inputValue.trimStart());
    } else {
      // Update the state with the valid input value
      setName(inputValue);
    }
  };
  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCreateNewMember = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", names);
    formData.append("position", position);
    formData.append("email", email);

    const namePattern =
      /^(?!.*(?:^|\s)(?:\d|\W))(?!.*([a-zA-Z])\1{3})(?:(?:[a-zA-Z]{3,}\s+){1,}[a-zA-Z]{3,})$/;
    const positionPattern =
      /^(?!\s)(?!.*([a-zA-Z])\1{2})(?!^[\s]*$)[a-zA-Z\s-]+$/;
    const emailPattern =
      /^(?![^\s@]+@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(names)) {
      alert(
        "Invalid name. Ensure it has more than two names , each with more than 3 characters, no leading spaces or non-alphabetic characters, and no more than 3 consecutive identical characters."
      );
    } else if (!positionPattern.test(position)) {
      alert(
        "Invalid position entry. Ensure it does not start with a space or non-alphabetic character, is not blank, and does not contain three or more consecutive identical characters."
      );
    } else if (!emailPattern.test(email)) {
      alert(
        "Invalid email format. It should follow this format. example@email.com"
      );
    } else
      axios.post(`http://localhost:8000/createmember`, formData).then((res) => {
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
    setName("");
    setPosition("");
    setEmail("");
  };
  const handleDiscard = () => {
    setFile(null);
    setName("");
    setPosition("");
    setEmail("");
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
          position: "absolute",
          width: "32.6%",
          borderRadius: "5px",
        }}
      >
        {" "}
        New Member form
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
                value={names}
                onChange={handleChangeName}
              />
              <span>Enter member's full name</span>
            </li>
            {/* <li>
              <label htmlFor="staffNumber">Staff Number</label>
              <input
                type="text"
                name="staffNumber"
                maxLength="100"
                value={eachMember.staffNumber}
                onChange={(e) => handleChange(e)}
                
              />
              <span>Enter Staff No</span>
            </li> */}
            <li>
              <label htmlFor="url">Position</label>
              <input
                type="text"
                name="position"
                maxLength="15"
                value={position}
                onChange={handleChangePosition}
                required
              />
              <span>Enter a title</span>
            </li>
            <li>
              <label htmlFor="bio">Email</label>
              <input
                type="text"
                name="email"
                maxLength="100"
                value={email}
                onChange={handleChangeEmail}
              />
              <span>Enter a valid email address</span>
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

export default NewMember;
