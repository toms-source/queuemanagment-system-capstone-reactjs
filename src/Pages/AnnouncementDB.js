import React from "react";
import Sidepanel from "../Components/Sidepanel";
import { useNavigate } from "react-router-dom";
import "../Css/AnnouncementDB.css";
import { AiOutlinePoweroff } from "react-icons/ai";
import { motion } from "framer-motion";

const AnnouncementDB = () => {
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/admin");
  };
  return (
    <div className="Announcement-content">
      <Sidepanel />

      <div className="mainContent">
        <div className="title">
          <h1>Announcement Dashboard</h1>
        </div>
        <div className="form">
          <form action="">
            <label htmlFor="announcement"></label>
            <textarea name="announce" className="txtAnnouncement"></textarea>
            <div className="btnAnnounce">
              <motion.button
                type="button" // yung type neto is submit
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Announce
              </motion.button>
            </div>
          </form>
        </div>
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

export default AnnouncementDB;
