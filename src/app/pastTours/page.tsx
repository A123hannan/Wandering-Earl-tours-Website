import React from 'react'
import PastMainComponent from '@/components/PastTours/MainComponent/pastMainComponent'
import ReviewSection from '@/components/ReviewSection/reviewSection'
import ImageContainer from '@/components/PastTours/ImageContainer/imageContiner'
import ContactPortion from '@/components/PastTours/ContactPortion/contactPortion'
export default function page() {
    return (
        <div className=''>
            <PastMainComponent />
            <ImageContainer />
            {/* <p className='text-primary text-[48px]'>Comming soon....</p> */}
            <div className='bg-[linear-gradient(180deg,#ffffff_0%,rgba(30,54,92,0.1)_30%,rgba(30,54,92,0.4)_35%,rgba(30,54,92,0.67)_40%,rgba(30,54,92,0.9)_45%,#1e365c_50%,#1e365c_100%'>
                <div className='page-container'>
                    <ReviewSection />
                </div>
                <ContactPortion />
            </div>
        </div>
    )
}