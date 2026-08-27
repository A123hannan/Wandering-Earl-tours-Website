import React from 'react'
import Image from 'next/image'

function TourSpecs() {
    return (
        <div className=' flex flex-col min-[1200px]:flex-row max-[1200px]:gap-[10px]'>
            {/* LEFT BLOCK */}
            <div className='relative w-full min-[1200px]:w-1/2 min-h-[600px] sm:min-h-[700px] lg:h-[800px] 2xl:h-[960px] flex flex-col max-[1200px]:rounded-[24px] overflow-hidden justify-end pt-[120px] pb-[40px] px-[24px] sm:pb-[60px] sm:px-[48px] lg:pb-[80px] lg:px-[60px] 2xl:p-0'>
                <Image src="/images/OurStyles/TourSpecs/b1.jpg" alt="tourSpecs1" fill className="object-cover" />
                <div className='relative 2xl:absolute 2xl:bottom-[60px] 2xl:left-[80px] 2xl:right-[80px] z-10 flex flex-col gap-[20px] md:gap-[24px] lg:gap-[28px] 2xl:gap-[30px]'>
                    <p className='font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] 2xl:text-[40px] leading-[110%] tracking-[0%] text-white uppercase'>
                        No &nbsp; <span className='text-accent'>Cookie cutter</span> &nbsp;Trips Big
                    </p>
                    <p className='font-[500] text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[36px] tracking-[0%] text-white'>
                        We make a point of handcrafting every trip we offer, which is why we can say with pride that no two tours we offer are the same. Every time we sit down to make an itinerary for a tour, we build it from the ground up. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.
                    </p>
                    <p className='font-[500] text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[36px] tracking-[0%] text-white'>
                        We also allow for flexibility on the spot, so if we see something fantastic happening (ever been to an Indian wedding?) we can stop and join in the fun without worrying that we’ll be “off-schedule.”
                    </p>
                    <p className='font-[500] text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[36px] tracking-[0%] text-white'>
                        It’s for these reasons that we don’t make contracts with hotels, restaurants, and tourist sites like so many other operators. We want to have the freedom to offer the absolute best trip, and we want to make sure it’s not just what you expected, but so much more.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C00_0%,#1E365C00_0%,#1E365C1F_12%,#1E365CD9_85%,#1E365C_100%)]" />
            </div>

            {/* RIGHT BLOCK */}
            <div className='relative w-full min-[1200px]:w-1/2 min-h-[500px] sm:min-h-[600px] lg:h-[800px] 2xl:h-[960px] flex flex-col max-[1200px]:rounded-[24px]  overflow-hidden justify-end pt-[120px] pb-[40px] px-[24px] sm:pb-[60px] sm:px-[48px] lg:pb-[80px] lg:px-[60px] 2xl:p-0'>
                <Image src="/images/OurStyles/TourSpecs/b2.jpg" alt="tourSpecs1" fill className="object-cover" />
                <div className='relative 2xl:absolute 2xl:bottom-[60px] 2xl:left-[80px] 2xl:right-[80px] z-10 flex flex-col gap-[20px] md:gap-[28px] lg:gap-[32px] 2xl:gap-[40px]'>
                    <p className='font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] 2xl:text-[40px] leading-[110%] tracking-[0%] text-white'>
                        Safety
                    </p>
                    <p className='font-[500] text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[36px] tracking-[0%] text-white'>
                        Safety is not something we take lightly. When you travel with Wandering Earl Tours, you can be confident that the safety of every traveler, every team member and the local populations is our top priority…always.
                    </p>
                    <p className='font-[500] text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] 2xl:leading-[36px] tracking-[0%] text-white'>
                        Every tour is led by one of our amazing Expert Tour Leaders who is there to ensure your trip runs smoothly and safely. These leaders are with you throughout your experience and are highly skilled in handling all kinds of situations. They also work side by side with our fantastic team of local contacts who offer a level of expertise that ensures any situation can be handled quickly and properly.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C00_0%,#1E365C00_0%,#1E365C1F_12%,#1E365CD9_85%,#1E365C_100%)]" />
            </div>
        </div>
    )
}

export default TourSpecs