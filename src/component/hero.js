import React from 'react'
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import { ReactComponent as Ellipse } from "../assets/ellipse.svg"
const Hero = () => {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../container/Header lottie.json')
        })
    }, [])
    return (
        <>
            <Ellipse className='pt-6'/>
            <section className='px-10 md:px-16 pb-6 lg:px-56' id="home">
                <div className=" container flex flex-col-reverse lg:flex-row justify-center items-center gap-12 ">
                    <div className="flex flex-1 flex-col items-center text-white lg:items-start sm:mx-0">
                        <h1 className='text-4xl md:text-5xl font-semibold text-center lg:text-left mb-6 text-blue' >Your Bike Electric Update</h1>
                        <p className='text-l md:text-2xl text-center lg:text-left mb-6 text-gray-light'> Dummy text progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>

                        <div className='flex flex-row justify-between items-center rounded-full h-14 w-full md:h-14 px-6 py-4 border border-bluish'>
                            <input type="text" className="font-xl" placeholder="Search Bike or anything" />
                            <button className='btn flex flex-row rounded-full font-semibold bg-golden px-6 py-3'>Find</button>

                        </div>
                    </div>
                    <div className='flex justify-center flex-1 sm:mb-0 md:mb-16 lg:mb-0 border-2 w-full h-full' ref={container} />
                </div>
            </section>
        </>
    )
}

export default Hero;