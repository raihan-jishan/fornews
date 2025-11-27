import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/news";
import Story from "./pages/story";
import CategoryPage from "./pages/category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
       <Route path="/stories" element={<Story />} />
         <Route path="/category/:name" element={<CategoryPage />} />
    </Routes>
  );
}
export default App;
