import React from 'react'
import PastMainComponent from '@/components/PastTours/MainComponent/pastandContactMainComponent'
import ReviewSection from '@/components/ReviewSection/reviewSection'
import ImageContainer from '@/components/PastTours/PhotoGallery/photoGallery'
import ContactPortion from '@/components/PastTours/ContactPortion/contactPortion'

export default function page() {
    return (
        <div className=''>
            <PastMainComponent page='/pastTours' />
            <ImageContainer />
            {/* <p className='text-primary text-[48px]'>Comming soon....</p> */}
            <div className='bg-[linear-gradient(180deg,#ffffff_0%,rgba(30,54,92,0.1)_30%,rgba(30,54,92,0.4)_35%,rgba(30,54,92,0.67)_40%,rgba(30,54,92,0.9)_45%,#1e365c_50%,#1e365c_100%)]'>
                <div className='page-container'>
                    <ReviewSection />
                </div>
                <div className="pb-[60px] sm:pb-[5px] lg:pb-[10px]">
                    <ContactPortion
                        variant="dark"
                        title="IF YOU HAVE ANY QUESTIONS, SIMPLY GET IN TOUCH. WE'RE HERE TO HELP AND WE ALWAYS REPLY QUICKLY."
                    />
                </div>
            </div>
        </div>
    )
}