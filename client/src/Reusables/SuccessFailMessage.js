function SuccessFailMessage(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "absolute",
        top: "180px",
        // height:"200px",
        border: "solid",
        padding: "60px",
        borderRadius: "4px",
        left: "840px",
        borderColor: "white",
        height: "250px",
        borderWidth: "1px",
        boxShadow: "0 2px 3px #C8D0D8",
      }}
    >
      <div
        style={{
          borderRadius: "200px",
          height: "180px",
          width: "180px",
          background: "#F8FAF5",
          marginLeft: "30px",
          marginTop: "-50px",
        }}
      >
        <div
          style={{
            color: `${props.coloroftickorcross}`,
            fontSize: "100px",
            lineHeight: "170px",
            paddingLeft: "45px",
          }}
        >
          {props.tickorcross}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: `${props.colorofsuccessorfailtext}` }}>{props.successorfailtext}</h1>
        {props.successorfaildetailedmessage}
      </div>
      <br />
      <button className="button_for_ok" onClick={props.handleOkAndClose}>
        OK
      </button>
    </div>
  );
}

export default SuccessFailMessage;
