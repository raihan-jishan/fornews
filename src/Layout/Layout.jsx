import Routes from "../Routes/Routes.jsx";
import BottomSlider from "../components/BottomSlider/BottomSlider.jsx";
import Nav from "../components/Nav/Nav.jsx";
const Layout = ({ Children }) => {
  return (
    <div>
     <div className="sticky top-0">
     <Nav />
      <BottomSlider /> 
     </div>
      <Routes />
      {Children}
    </div>
  );
};

export default Layout;
