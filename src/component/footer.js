import React from 'react'

const Footer = () => {
    return (
        <section className='relative px-0 md:px-16 lg:px-28 pt-24 w-full justify-center items-center bg-golden'>
            <div className='flex flex-col justify-center items-center px-10 md:px-16 lg:px-56'>
                <div className='flex flex-col-reverse md:flex-row justify-between mb-6 gap-12 text-golden text-l font-bold list-none'>
                    <div className='flex flex-col justify-center text-center item-center sm:w-full md:w-1/2'>
                        <div className='flex justify-center items-center'>
                            <p className="w-10 h-10 rounded-full text-center justify-center items-center bg-whitex font-bold text-golden text-2xl">B</p>
                            <h2 className='font-sans text-whitex text-2xl font-semibold pl-2'>eBike</h2>
                        </div>
                        <p className=' text-whitex font-normal text-xl mt-6'>Dummy text progressive, and affordable healthcare,
                        accessible on
                        mobile and online for
                        everyone.</p>
                        <p className='text-whitex font-normal text-lg mt-6'>eBike 2021. All right reserved.</p>
                                
                    </div>
                    <div className='grid grid-cols-1 text-whitex md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 justify-start items-start text-center md:text-left text-2xl md:text-lg'>
                                
                                <div className='cursor-pointer'>
                                    <h1>Company</h1>
                                    <div className="flex flex-col items-left font-normal mt-6 lg:mt-6 ">
                                        <li>Product</li>
                                        <li>Bike Type</li>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                    </div>
                                </div>
                                <div className='cursor-pointer'>
                                    <h1>Help</h1>
                                    <div className="flex flex-col items-left font-normal mt-6 lg:mt-6 ">
                                        <li>Quality</li>
                                        <li>Help</li>
                                        <li>Share</li>
                                        <li>Career</li>
                                    </div>
                                </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer