import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Css/AdminLogin.css";
import Logo from "../Image/seal.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const mainDbAccess = () => {
    navigate("/main");
  };

  return (
    <div className="adminLogin-content">
      <div className="admnleft">
        <div>
          <motion.img
            src={Logo}
            alt=""
            className="adminLoginLogo"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15 }}
          />
        </div>
        <div className="adminLoginTitle">
          <div>queue</div>
          <div>management</div>
          <div>system</div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "300",
              marginLeft: "40px",
              textTransform: "lowercase",
            }}
          >
            admin
          </div>
        </div>
      </div>

      <div className="admnright">
        <form action="" className="admnLoginfrm">
          <h3>log in</h3>
          <div className="admintxtfields">
            <input
              type="text"
              placeholder="Username"
              id="username"
              maxlength="20"
              required
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              maxlength="20"
              required
            />
          </div>
          <div className="btn">
            <motion.button
              type="button"
              className="cancel"
              id="cancelbtn"
              onClick={home}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="button" //yung type gagawin ko muna type="button". Pero type=submit dapat yan
              className="submit"
              id="submitbtn"
              onClick={mainDbAccess}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
