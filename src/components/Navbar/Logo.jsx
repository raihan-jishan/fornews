import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
       <h2 className='text-[2rem] p-2 m-2 font-semibold dark:text-white text-black'>fornews</h2> 
    </Link>
  )
}

export default Logo;