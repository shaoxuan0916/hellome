import { NextPage } from 'next'
import React from 'react'

interface IButtonProps{
    text: string
}

const Button: NextPage<IButtonProps> = ({text}) => {
  return (
    <div className='w-full'>
        <button className='bg-primary flex justify-center py-2 rounded-md cursor-pointer hover:bg-primaryHover'>
            <p className='text-[#fff] text-xl font-semibold'>{text}</p>
        </button>
    </div>
  )
}

export default Button