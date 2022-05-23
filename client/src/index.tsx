import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Company from "./components/Company";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/company" element={<Company />} />
    </Routes>
  </Router>
);
