import React from "react";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";

const actionBtn = {
  margin: "4px 8px",
  padding: "0 10px",
  borderRadius: "5px",
  fontSize: "1.1rem",
};
export default function MainDBQueueQL() {
  return (
    <div>
      <Table striped bordered className="text-center">
        <thead style={{ backgroundColor: "#FFD700" }}>
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
            <td>13</td>
            <td>Change Subject</td>
            <td>Hannah Rafael</td>
            <td>hannahrafael@mail.com</td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Admit
              </motion.button>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Deny
              </motion.button>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Overload</td>
            <td>Vincent Dela Cruz</td>
            <td>vincentDelaCruz@mail.com</td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Admit
              </motion.button>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Deny
              </motion.button>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>Cross Enrolment</td>
            <td>Juan Delacruz</td>
            <td>Juandc@mail.com</td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Admit
              </motion.button>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={actionBtn}
              >
                Deny
              </motion.button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
