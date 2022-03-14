import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from "react-icons/ai";


const Navigation = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <header className='justify-center items-center'>
    <nav className=" relative flex flex-row justify-between items-center px-6 md:px-12 lg:px-56 mt-3  md:mt-16">

        <div className='flex'>
        <p className="w-10 h-10 rounded-full text-center justify-center items-center text-whitex font-bold bg-golden text-2xl">B</p>
            <h2 className='font-sans text-blue text-2xl font-semibold pl-2'>eBike</h2>
        </div>

        <ul className='hidden lg:flex flex-1 flex-row items-end justify-end gap-14 font-sans text-xl text-gray-light active:text-gray-dark'>
            <li ><a href='#product'>Product</a></li>
            <li><a href='#category'>Bike Type</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#testimonial'>Testimonial</a></li>
            <li><a href='#contact'>Contact</a></li>
           

        </ul>
        <div className="flex lg:hidden flex-1 justify-end text-2xl">
            <GiHamburgerMenu className="cursor-pointer w-10 h-10" onClick={() => setToggleMenu(true)} />
            {toggleMenu && (

                <div
                    className="fixed top-0 bottom-0 right-0 p-4 w-3/4 h-screen bg-gray-dark flex flex-col z-40">

                    <AiOutlineCloseCircle className="absolute cursor-pointer w-10 h-10 right-0 mx-8 my-4"
                        onClick={() => setToggleMenu(false)
                        } />
                    <ul className='flex justify-start items-start flex-col my-12 font-semibold text-3xl'>
                        <li className='cursor-pointer m-4'><a href='#product'>Product</a></li>
                        <li className='cursor-pointer m-4'><a href='#category'>Bike Type</a></li>
                        <li className='cursor-pointer m-4'><a href='#about'>About Us</a></li>
                        <li className='cursor-pointer m-4'><a href='#testimonial'>Testimonial</a></li>
                        <li className='cursor-pointer m-4'><a href="#contact">Contact</a></li>
                        
                    </ul>
                </div>
            )}
        </div>
    </nav>
</header>
  )
}

export default Navigation