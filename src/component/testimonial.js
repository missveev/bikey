import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import reviews from '../container/testimonialData'

const Testimonial = () => {
    return (
        <section className='relative py-28  justify-center items-center px-4 md:px-16 lg:px-56 z-10' id="testimonial">
            <div className='bg-golden rounded-xl shadow-xl py-6'>
                <h3 className='text-4xl font-semibold  py-2 text-center text-whitex'>What our customers are saying</h3>
                <Swiper pagination={true} modules={[Pagination]} className="w-full h-full md:w-3/4 md:h-3/4 text-whitex mySwiper" >
                    {reviews.map((review) => (
                        <SwiperSlide className='flex flex-col lg:flex-row justify-between gap-10 items-center bg-golden mb-3 w-1/2  rounded-lg p-8' key={review.id}>
                            <div className='flex flex-col w-full h-full justify-center items-center '>
                                <img src={review.imgUrl} className="w-40 h-40 rounded-full border-4 border-whitex mb-4 object-cover" alt="userprofile" />

                                <h4 className='text-lg'>{review.username}</h4>
                                <h5 className='text-md'>{review.hobby}</h5>
                            </div>
                            <div className='flex flex-col justify-around items-start text-left text-whitex'>
                                <p className='text-xl'>{review.feedBack}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default Testimonial