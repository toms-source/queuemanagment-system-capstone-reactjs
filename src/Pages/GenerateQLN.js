import React from "react";
import "../Css/GenerateQLN.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GenerateQLN = () => {
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };
  const qln = () => {
    navigate("/generate-qln-success");
  };
  return (
    <div className="Generateqln">
      <div className="headings"></div>
      <div className="content">
        <div className="title">Generate Queue Line Number Form</div>
        <div className="body">
          <form className="GenerateQLNModalfrm" action="">
            <div className="input-transactions">
              <label htmlFor="transactions" className="label">
                transactions<span className="req">*</span>
              </label>
              {/* <input type="text" required placeholder="Change Section" /> */}

              <select
                name="transactions"
                id="transactions"
                required={require}
                // value={}
              >
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
              <input
                type="email"
                required
                placeholder="Ex. Juan Cruz@yahoo.com"
                // value={}
              />
            </div>

            <div className="input-name">
              <label htmlFor="Name" className="label">
                Name<span className="req">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Ex. Juan Cruz"
                // value={}
              />
            </div>

            <div className="generateQLNbtn">
              <motion.button
                type="button"
                // onClick={props.Onclose}
                onClick={cancel}
                className="cancel"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="button" //yung type gagawin ko muna type="button". Pero type=submit dapat yan
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
      </div>
    </div>
  );
};

export default GenerateQLN;
