
import { ReactComponent as Shape } from "../assets/Vector.svg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../container/styleswiper.css"

// import required modules
import { Pagination } from "swiper";

import products from "../container/bikeData";
import othertypes from "../container/otherType";

const Service = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const {current} = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 500;
        } else {
            current.scrollLeft += 500;
        }
    };
    return (
        <><Shape className='absolute left-0 w-3/4 md:w-2/6' />
            <section className='relative py-16 z-10 justify-center items-center' id="category">
            <div className="flex flex-1 flex-row relative ml-4 md:ml-16 lg:ml-56 max-w-full">
                <div className="flex overflow-x-scroll justify-between w-max gap-10 scrollbar-hide" ref={scrollRef}>
                    {products.map((product) => (
                        
                            <div key={product.id} className='flex flex-col group px-4 w-full py-2 relative bg-whitex shadow-xl rounded-xl p6-6'>
                                <h3 className="text-xl md:text-3xl text-left font-semibold pb-2 "><a href={product.href}>  <span aria-hidden="true" className="absolute inset-0" />{product.title}</a></h3>
                                <div className="w-80 min-h-80  p-6 overflow-hidden items-center justify-center group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img src={product.imgUrl} className="w-56 h-full object-center lg:w-full lg:h-full"

                                        alt={product.imgAlt} />
                                </div>
                                <hr className='text-gray-light' />
                                <div className='flex flex-col'>
                                    <h3>Price</h3>
                                    <div className='flex flex-row justify-between items-center gap-14'>
                                        <p className="text-xl">{product.price}</p>
                                        <button className='btn flex items-end justify-end rounded-full font-semibold bg-golden px-6 py-2'>Order</button>
                                    </div>
                                </div>
                            </div>
                        
                    ))}
                </div>
                </div>


                <div className="flex justify-center md:justify-end items-end gap-6 py-4 mr-16 ">
                    <BsArrowLeftShort className="bg-golden text-gray-dark w-10 h-10 rounded-full cursor-pointer font-xl" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="bg-golden text-gray-dark w-10 h-10 rounded-full cursor-pointer font-xl" onClick={() => scroll('right')} />

                </div>

                <div className='flex flex-col py-10 ml-4 md:ml-16 lg:ml-56'>
                    <h2 className='text-2xl font-semibold'>Other Types of Bikes</h2>
                    <div className='flex flex-row justify-between gap-10'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            
                            className="flex flex-row justify-between gap-10 mySwiper"
                        >
                            {othertypes.map((othertype) => (
                                <SwiperSlide key={othertype.id} className='flex flex-col px-4  py-10 relative bg-whitex shadow-xl w-72 rounded-xl pb-6'>
                        
                                        <div className="w-full min-h-80 overflow-hidden group-hover:opacity-75  lg:aspect-none">
                                                <img src={othertype.imgUrl} className="w-full h-full object-center"
                                                    alt={othertype.imgAlt} />
                                            </div>
                                        <h3 className="text-xl md:text-3xl lg:text-xl text-center pt-6 "><a href={othertype.href}>  <span aria-hidden="true" className="absolute inset-0" />{othertype.title}</a></h3>
                                    
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Service