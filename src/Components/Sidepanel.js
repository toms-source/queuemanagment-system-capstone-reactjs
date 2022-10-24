import { Link } from "react-router-dom";
import Logo from "../Image/seal.png";
import { BsMegaphone } from "react-icons/bs";
import { MdOutlineScreenShare } from "react-icons/md";
import { AiOutlineHistory, AiOutlineDatabase } from "react-icons/ai";

const Sidepanel = () => {
  const shareAView = () => {
    window.open("/share-a-view");
  };

  return (
    <div className="panel">
      <div className="content">
        <div className="header">
          <h1 className="logo">
            <img src={Logo} alt="" className="sidepanelLogo" />
          </h1>
        </div>

        {/* navigations */}
        <div className="navigate">
          <div className="dashboard link">
            <Link to={"/main"} className="linktxt">
              <AiOutlineDatabase className="navicon" />

              <label className="navtxt">Dashboard</label>
            </Link>
          </div>

          <div className="Announcement link">
            <Link to={"/announcement"} className="linktxt">
              <BsMegaphone className="navicon" />

              <label className="navtxt">Announcement</label>
            </Link>
          </div>

          <div className="History link">
            <Link to={"/history"} className="linktxt">
              <AiOutlineHistory className="navicon" />

              <label className="navtxt">History</label>
            </Link>
          </div>

          <div className="ShareAView link">
            <Link onClick={shareAView} className="linktxt">
              <MdOutlineScreenShare className="navicon" />

              <label className="navtxt">Share a View</label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
