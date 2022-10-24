import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserLock as AdminPortal } from "react-icons/fa";
import Logo from "../Image/seal.png";

const Landing = () => {
  const navigate = useNavigate();
  const adminAuth = () => {
    navigate("/admin");
  };
  const GenerateQLN = () => {
    navigate("/generate-qln");
  };

  return (
    <div className="landing">
      <div className="wrapper">
        <div className="access">
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

        <div className="content">
          <div className="bgPup"></div>

          <div className="buttons">
            <div className="floatingLogo">
              <img src={Logo} alt="" />
            </div>
            <h2>Office of Academic Head Program</h2>
            <motion.button
              className="generate"
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
        <div className="tables">
          <h2>QUEUELINE HERE</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
