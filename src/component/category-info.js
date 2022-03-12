import React, { useEffect, useRef } from "react";
import { ReactComponent as Shapes } from "../assets/Vector2.svg";

import lottie from "lottie-web";

const CategoryInfo = () => {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../container/Rider lottie.json')
        })
    }, [])
    return (
        <>
        <Shapes className="absolute right-0"/>
            <section className='relative px-4 md:px-16 lg:px-56 z-10' id="category-info">
                <div className="flex flex-col lg:flex-row items-center gap-20  ">
                    <div className='flex flex-col group px-4 w-3/4 md:w-2/5 py-2 relative bg-whitex shadow-xl rounded-xl'>
                        <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none" ref={container} />
                        <hr className='text-gray-light' />
                        <div className='flex flex-col'>
                            <h3>Price</h3>
                            <div className='flex flex-row justify-between items-center gap-14'>
                                <p className="text-xl">$750</p>
                                <button className='btn flex items-end justify-end rounded-full font-semibold bg-golden px-6 py-2'>Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start sm:my-0 sm:mx-0 lg:my-32 z-10">
                        <h1 className='text-4xl font-semibold text-center text-blue lg:text-left mb-6'>Hybrid Bikes</h1>
                        <p className='text-l md:text-xl text-gray-light text-center lg:text-left mb-6 leading-8'>Dummy Text progressive, and affordable accessible on mobile and online
                            for every healthcare not just work. We take pride in the solutions we deliver</p>
                            <button className='btn flex flex-row rounded-full font-semibold border-2 border-golden text-golden px-3 py-2 md:px-6 md:py-2'>Learn More</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CategoryInfo;