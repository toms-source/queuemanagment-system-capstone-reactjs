import React from "react";
import "../Css/GenerateQLNModal.css";
import { motion } from "framer-motion";

const GenerateQLNModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Generate Queue Line Number Form</h3>
        </div>

        <div className="modal-body">
          <form className="GenerateQLNModalfrm" action="">
            <div className="input-transactions">
              <label htmlFor="transactions" className="label">
                transactions<span className="req">*</span>
              </label>
              <input type="text" required placeholder="Change Section" />
            </div>

            <div className="input-email">
              <label htmlFor="Email" className="label">
                Email<span className="req">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Ex. Juan Cruz@yahoo.com"
              />
            </div>

            <div className="input-name">
              <label htmlFor="Name" className="label">
                Name<span className="req">*</span>
              </label>
              <input type="text" required placeholder="Ex. Juan Cruz" />
            </div>

            <div className="input-SN">
              <label htmlFor="Student-Number" className="label">
                Student Number
              </label>
              <input type="text" placeholder="Ex. 2017-01234-SM-0" />
            </div>

            <div className="input-YN">
              <label htmlFor="yearSection" className="label">
                Year & Section
              </label>
              <input type="text" placeholder="BSENTREP 3-2" />
            </div>

            <div className="generateQLNbtn">
              <motion.button
                type="button"
                onClick={props.Onclose}
                className="cancel"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit" //yung type gagawin ko muna type="button". Pero type=submit dapat yan
                className="submit"
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

export default GenerateQLNModal;
