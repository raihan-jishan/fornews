import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <App />
    </SkeletonTheme>
  </BrowserRouter>
);
