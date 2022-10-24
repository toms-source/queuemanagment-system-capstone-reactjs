import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GenerateForm = () => {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };
  const qln = () => {
    navigate("/generate-qln-success");
  };
  return (
    <div className="form">
      <h1>Generate Queue Line number</h1>
      <form action="" className="newform">
        <div className="input-transactions">
          <label htmlFor="Transaction">
            Transaction <span className="req">*</span>
          </label>
          <select name="transactions" id="transactions" required={require}>
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

        <div className="input-email">
          <label htmlFor="Email" className="label">
            Email<span className="req">*</span>
          </label>
          <input type="email" required placeholder="Ex. Juan Cruz@yahoo.com" />
        </div>

        <div className="input-name">
          <label htmlFor="Name" className="label">
            Name<span className="req">*</span>
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
          <motion.button
            type="button"
            className="submit"
            onClick={qln}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default GenerateForm;
