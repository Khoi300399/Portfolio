import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);
