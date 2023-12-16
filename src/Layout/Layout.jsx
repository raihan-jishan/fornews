/* eslint-disable react/prop-types */
import Nav from "../components/Nav/Nav";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation.jsx"; 
const Layout = ({ children }) => {
  return (
    <div> 
      <div className="sticky top-0 bg-gray-50">
        <Nav />
        <BottomNavigation />
      </div>
      {children}
    </div>
  );
};

export default Layout;
