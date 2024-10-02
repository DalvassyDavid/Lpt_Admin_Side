import React from "react";
import Plot from "react-plotly.js";

const ProgressStyle = (props) => {
  const progressStyleChange = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "75px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),\n    conic-gradient(${props.progresscolor}, rgb(211, 211, 211) 0)`,
  };

  return (
    <div style={progressStyleChange}>
      <progress
        value="55"
        min="0"
        max="100"
        style={{ visibility: "hidden", height: 0, width: 0 }}
      ></progress>
      {props.progresspercentage}
    </div>
  );
};
const Graph = () => {
  // Sample data for the chart
  const xValues = [1, 2, 3, 4, 5];
  const yValues = [2, 3, 2, 4, 5];

  const xValues2 = [2, 3, 2, 4, 5];
  const yValue2 = [1, 2, 3, 4, 5];

  return (
    <Plot
      data={[
        {
          x: xValues,
          xValues2,
          y: yValues,
          yValue2,
          type: "line", // Defines the chart type
          mode: "lines+markers", // Visualization mode
          marker: { color: "blue" }, // Marker properties
        },
      ]}
      layout={{ width: 700, height: 440, title: "A Simple Line Chart" }}
    />
  );
};

function Emptypage() {
  return (
    <div
      style={{
        marginLeft: "60px",
        textAlign: "center",
        marginTop: "150px",
        top: "0px",
      }}
    >
      <h1>
        This page is empty
        <br />
      </h1>
      <h4>Please click view/edit button to view data</h4>
      <h4 style={{ color: "white" }}>Maintain high level of confidentiality</h4>
    </div>
  );
}

function TableForData_Header(props) {
  return (
    <div>
      <table
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          width: "100%",
          fontSize: "14px",
        }}
      >
        <tbody>
          <tr
            style={{
              position: "absolute",
              backgroundColor: "#1b1e5b",
              height: "25px",
              borderRadius: "1px",
            }}
          >
            <th style={{ color: "white", width: "50px" }}>{props.column_1}</th>
            <th style={{ color: "white", width: "158px", textAlign: "left" }}>
              {props.column_2}
            </th>
            <th style={{ color: "white", width: "140px", textAlign: "left" }}>
              {props.column_3}
            </th>
            <th style={{ color: "white", width: "140px", textAlign: "left" }}>
              {props.column_4}
            </th>
            <th style={{ color: "white", width: "90px", textAlign: "left" }}>
              View/Edit
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TableForData_Body(props) {
  return (
    <table
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        borderCollapse: "collapse",
        width: "100%",
        fontSize: "14px",
        marginLeft: "1px",
      }}
    >
      <tbody>
        <tr>
          <th style={{ color: "#1b1e5b", width: "50px", textAlign: "center" }}>
            {props.ID}
          </th>
          <th
            style={{
              color: "#1b1e5b",
              maxWidth: "140px",
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth:"140px"
            }}
          >
            {props.LINK}
          </th>
          <th style={{ color: "#1b1e5b", width: "140px", textAlign: "left" }}>
            {props.DATEADDED}
          </th>

          <th
            style={{
              color: "#1b1e5b",
              width: "140px",
              textAlign: "left",
              maxWidth: "140px",
              textAlign: "left",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth:"140px"
            }}
          >
            {props.TITLE}
          </th>
          <th style={{ color: "#1b1e5b", width: "90px", textAlign: "left" }}>
            <button
              className="serial-view"
              style={{ width: "60px" }}
              onClick={props.onclickfunction}
            >
              View
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export {
  ProgressStyle,
  Graph,
  Emptypage,
  TableForData_Header,
  TableForData_Body,
};
