import { Routes, Route } from "react-router-dom";

import "./Css/App.css";
import Landing from "./Pages/Landing";
import AdminLogin from "./Pages/AdminLogin";
import MainDB from "./Pages/MainDB";
import AnnouncementDB from "./Pages/AnnouncementDB";
import ShareAViewDB from "./Pages/ShareAViewDB";
import History from "./Pages/HistoryDB";
import GenerateQLN from "./Pages/GenerateQLN";
import Qln from "./Pages/Qln";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/generate-qln" element={<GenerateQLN />} />
        <Route path="/generate-qln-success" element={<Qln />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/main" element={<MainDB />} />
        <Route path="/announcement" element={<AnnouncementDB />} />
        <Route path="/share-a-view" element={<ShareAViewDB />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
