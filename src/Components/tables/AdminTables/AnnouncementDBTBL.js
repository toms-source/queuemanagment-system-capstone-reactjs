import React from "react";
import { Table } from "react-bootstrap";
import { motion } from "framer-motion";

export default function AnnouncementDBTBL() {
  return (
    <div>
      <Table striped bordered>
        <thead
          className="text-center"
          style={{ backgroundColor: "#800000", color: "white" }}
        >
          <tr>
            <th>Announcements</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          <tr>
            <td>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              facere.
            </td>
            <td>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                // style={actionBtn}
              >
                delete
              </motion.button>
            </td>
          </tr>
          <tr>
            <td>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              excepturi adipisci facilis deleniti mollitia ducimus?
            </td>

            <td>
              <motion.button
                type="button"
                className="transaction btn btn-danger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                // style={actionBtn}
              >
                delete
              </motion.button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
