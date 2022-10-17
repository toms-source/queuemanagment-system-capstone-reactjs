import React from "react";

const NowServingtbl = () => {
  return (
    <div className="hello">
      <h3>Now Serving...</h3>
      <table
        class="table table-borderless table-striped"
        style={{ width: "800px", borderRadius: "10px" }}
      >
        <thead style={{ backgroundColor: "yellow" }}>
          <tr>
            <th scope="col">QLN</th>
            <th scope="col">Transaction</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "white" }}>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
        </tbody>
      </table>

      <h3>Queue Line...</h3>
      <table
        class="table table-borderless table-striped"
        style={{ width: "800px" }}
      >
        <thead style={{ backgroundColor: "#800000", color: "white" }}>
          <tr>
            <th scope="col">QLN</th>
            <th scope="col">Transaction</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "white" }}>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NowServingtbl;
