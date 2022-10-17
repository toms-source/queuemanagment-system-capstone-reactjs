import { Link } from "react-router-dom";
import "../Css/Sidepanel.css";
import Logo from "../Image/seal.png";
import { BsMegaphone } from "react-icons/bs";
import { MdOutlineScreenShare } from "react-icons/md";
import { AiOutlineHistory, AiOutlineDatabase } from "react-icons/ai";
// import { VscSignOut } from "react-icons/vsc";

const Sidepanel = () => {
  const shareAView = () => {
    window.open("/share-a-view");
  };

  return (
    <div className="panel">
      <div className="content">
        <div className="header-sec">
          <h1 className="logo">
            <img src={Logo} alt="" className="sidepanelLogo" />
          </h1>
        </div>

        {/* navigations */}
        <div className="navigate">
          <div className="adminDb link">
            <Link to={"/main"} className="linktxt">
              <AiOutlineDatabase className="navicon" />

              <label className="navtxt">Dashboard</label>
            </Link>
          </div>

          <div className="adminAnnouncement link">
            <Link to={"/announcement"} className="linktxt">
              <BsMegaphone className="navicon" />

              <label className="navtxt">Announcement</label>
            </Link>
          </div>

          <div className="adminHistory link">
            <Link to={"/history"} className="linktxt">
              <AiOutlineHistory className="navicon" />

              <label className="navtxt">History</label>
            </Link>
          </div>

          <div className="adminShareAView link">
            <Link onClick={shareAView} className="linktxt">
              <MdOutlineScreenShare className="navicon" />

              <label className="navtxt">Share a View</label>
            </Link>
          </div>

          {/* <div className="adminSignOut link">
            <Link to={"/"} className="linktxt">
              <abbr title="Sign Out">
                <VscSignOut className="navicon" />
              </abbr>
              <label className="navtxt">Sign Out</label>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
