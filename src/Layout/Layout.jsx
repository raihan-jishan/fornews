 import { BottomDropdown, Bottomnavigation, Navbar } from '../utils/index';

const Layout = ({children}) => {
  return (
    <div className='dark:bg-black dark:text-white'>
       <div className=" sticky top-0">
       <Navbar />
        <Bottomnavigation /> 
       </div>
       <BottomDropdown /> 
        {children}
    </div>
  )
}

export default Layout;