import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EditTransactionform = () => {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };

  const colorReq = {
    color: "red",
  };
  const search = {
    width: "30px",
    margin: "10px",
    fontSize: "3px",
  };
  return (
    <div>
      <div className="editForm">
        <h1>Edit Transaction</h1>
        <form action="" className="newform">
          <div className="email">
            <label htmlFor="Email" className="label">
              Email<span style={colorReq}>*</span>
            </label>
            <input
              type="search"
              required
              placeholder="Ex. Juan Cruz@yahoo.com"
            />
            <span>
              <input type="submit" name="search" id="search" style={search} />
            </span>
          </div>
          <div className="transactions">
            <label htmlFor="transaction">
              Transaction <span style={colorReq}>*</span>
            </label>
            <select name="transactions" id="transactions">
              <option value="a" disabled selected hidden>
                Head of Academic Transactions
              </option>
              <option value="accreditation">Accreditation of Subjects</option>
              <option value="add-change-subjects">
                Adding/Changing of Subjects
              </option>
              <option value="overload">Overload</option>
              <option value="request">Online request for petition</option>
              <option value="cross-enrollment">Cross-Enrollment</option>
            </select>
          </div>

          <div className="input-name">
            <label htmlFor="Name" className="label">
              Name<span style={colorReq}>*</span>
            </label>
            <input type="text" placeholder="Ex. Juan Cruz" />
          </div>

          <div className="generateQLNbtn">
            <motion.button
              type="button"
              onClick={cancel}
              className="cancel"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Cancel
            </motion.button>

            <motion.button
              type="button"
              className="submit"
              // onClick={}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Update
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionform;
