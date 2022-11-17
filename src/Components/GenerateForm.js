import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GenerateForm = () => {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };
  const qln = () => {
    navigate("/generateSuccess");
  };

  const colorReq = {
    color: "red",
  };
  return (
    <div className="form">
      <h1>Generate Queue Line number</h1>
      <form action="" className="newform">
        <div className="transactions">
          <label htmlFor="transaction">
            Transaction <span style={colorReq}>*</span>
          </label>
          <select name="transactions" id="transactions" required>
            <option value="" disabled selected hidden>
              Head of Academic Transactions
            </option>
            <option value="1">Accreditation of Subjects</option>
            <option value="2">Adding/Changing of Subjects</option>
            <option value="3">Overload</option>
            <option value="4">Online request for petition</option>
            <option value="5">Cross-Enrollment</option>
          </select>
        </div>

        <div className="email">
          <label htmlFor="Email" className="label">
            Email<span style={colorReq}>*</span>
          </label>
          <input type="email" required placeholder="Ex. Juan Cruz@yahoo.com" />
        </div>

        <div className="input-name">
          <label htmlFor="Name" className="label">
            Name<span style={colorReq}>*</span>
          </label>
          <input type="text" required placeholder="Ex. Juan Cruz" />
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
          <button
            type="submit"
            className="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerateForm;
