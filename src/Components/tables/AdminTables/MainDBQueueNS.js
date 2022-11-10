import React from "react";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";

const actionBtn = {
  margin: "4px 8px",
  padding: "0 10px",
  borderRadius: "5px",
  fontSize: "1.1rem",
};
export default function MainDBQueueNS() {
  return (
    <div>
      <Table striped bordered className="text-center">
        <thead style={{ backgroundColor: "#800000", color: "white" }}>
          <tr>
            <th>Queue Line Number</th>
            <th>Transactions</th>
            <th>Name</th>
            <th>Email</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          <tr>
            <td>11</td>
            <td>Change Subject</td>
            <td>Gerwin Crstobal</td>
            <td>GerwinCrstobal@mail.com</td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-success"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Complete
              </motion.button>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Overload</td>
            <td>Mar jhun Aquino</td>
            <td>MarjhunAquino@mail.com</td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-success"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Complete
              </motion.button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
