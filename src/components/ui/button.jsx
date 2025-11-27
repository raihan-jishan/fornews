import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({label}) => {
  return (
    <Link to={'/'} className='p-4 px-5 text-white rounded-full bg-black font-medium capitalize hover:bg-black/90'>{label}</Link>
  )
}

export default Button;