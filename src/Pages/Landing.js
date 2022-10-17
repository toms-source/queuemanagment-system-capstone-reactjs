// import React, { useState } from "react";
import "../Css/Landing.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserLock as AdminPortal } from "react-icons/fa";
import Logo from "../Image/seal.png";
import Line from "../Image/undraw_wait_in_line_o2aq.svg";
// import NowServingtbl from "../Components/NowServingtbl";
// import GenerateQLNModal from "../Components/GenerateQLNModal";
// import GenerateQLN from "../Pages/GenerateQLN";

const Landing = () => {
  // const [show, toShow] = useState(false);
  const navigate = useNavigate();
  const adminAuth = () => {
    navigate("/admin");
  };
  const GenerateQLN = () => {
    navigate("/generate-qln");
  };

  // const showModal = () => {
  //   toShow(true);
  // };
  // const closeModal = () => {
  //   toShow(false);
  // };
  return (
    <div className="landing">
      {/* <GenerateQLNModal Onclose={closeModal} show={show} /> */}

      <div className="header">
        <div className="logo">
          <motion.img
            src={Logo}
            alt="PUPLogo"
            className="landingLogo"
            animate={{ scale: [1, 2, 2, 1.5, 1], rotate: [0, 0, 270, 270, 0] }}
          />
          <div className="pup">
            <div>pupsmb</div>
            <div>qms portal</div>
          </div>
        </div>
        <motion.div
          className="admin"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <abbr title="Admin Access">
            <AdminPortal onClick={adminAuth} />
          </abbr>
        </motion.div>
      </div>

      <div className="body-section">
        <div className="body">
          <div className="element">
            <div className="tagline">
              <h2>Office of Academic Head Program</h2>
            </div>
            <div className="buttons">
              <motion.button
                className="generate"
                // onClick={showModal}
                onClick={GenerateQLN}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Generate Queue Line Number
              </motion.button>

              <motion.button
                type="button"
                className="transaction"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View My Transaction
              </motion.button>
            </div>
          </div>
          <img src={Line} alt="" className="imgLine" />
        </div>
        <div className="table"></div>
      </div>
      {/* <div className="elements">
          <div className="tagline">be patient, be updated, be inline</div>

          <div className="buttons">
            <motion.button
              className="generate"
              // onClick={showModal}
              onClick={GenerateQLN}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Generate Queue Line Number
            </motion.button>

            <motion.button
              type="button"
              className="transaction"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View My Transaction
            </motion.button>
          </div>
          {/* <div className="data">
            <NowServingtbl />
          </div> 
        </div> */}
    </div>
  );
};

export default Landing;
