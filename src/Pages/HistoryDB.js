import React from "react";
import Sidepanel from "../Components/Sidepanel";
import { motion } from "framer-motion";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../Css/HistoryDB.css";
const HistoryDB = () => {
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/admin");
  };

  return (
    <div className="history-content">
      <Sidepanel />

      <div className="mainContent">
        <h1>History Dashboard</h1>
      </div>
      <motion.div
        className="sign-outbtn"
        whileHover={{ scale: 1.4, rotate: -360 }}
        whileTap={{ scale: 0.9 }}
        onClick={signOut}
      >
        <AiOutlinePoweroff />
      </motion.div>
    </div>
  );
};

export default HistoryDB;
