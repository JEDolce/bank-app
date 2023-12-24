import React from 'react'

const Button = ({ styles }) => {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] transition duration-250 ease-out hover:ease-in hover:text-[#5d5a5c] hover:bg-black hover:translate-x-2`}>
            Get Started
        </button>
    )
}

export default Button