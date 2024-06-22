 
import { Route, Routes as Router } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import { Account, ContactUs, Home } from '../utils/index';
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home /> } />
      <Route path="/aboutus" element={<AboutUs /> }/> 
      <Route path="/account" element={<Account /> } />
      <Route path="/contactus" element={<ContactUs /> } />
    </Router>
  );
};

export default Routes;
