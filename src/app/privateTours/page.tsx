import React from 'react'
import AboutImgComponent from "@/components/About/HeroComponent/HeroComponent";
import ContactSection from "@/components/ContactSection/contactSection";
import ComapnyReviewSection from "@/components/CompanyReviewSection/companyReviewSection";
import ReviewSection from '@/components/ReviewSection/reviewSection'
import NichesandCountiresComponent from "@/components/PriavteTours/NeechesandCountriesComponent/NiechesandCountriesComponent"
export default function page() {
    return (
        <div className=''>
            <AboutImgComponent page="/privateTours" />
            <div className=''>
                <ComapnyReviewSection page="/privateTours" />

            </div>
            <NichesandCountiresComponent componentFor="niches" />
            <NichesandCountiresComponent componentFor="countries" />
            <div className='page-container'>
                <ReviewSection />
            </div>
            <div className="w-full flex justify-center mt-[40px] sm:mt-[70px] md:mt-[95px] lg:mt-[115px] 2xl:mt-[140px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] 2xl:px-[80px]">
                <div className="w-full max-w-[1920px]">
                    <ContactSection />
                </div>
            </div>
        </div>
    )
}