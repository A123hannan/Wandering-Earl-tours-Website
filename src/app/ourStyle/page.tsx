import React from "react";
import AboutImgComponent from "@/components/About/HeroComponent/HeroComponent";
import ContactSection from "@/components/ContactSection/contactSection";
import TourSection from "@/components/TourSection/tourSection";
import ComapnyReviewSection from "@/components/CompanyReviewSection/companyReviewSection";
import TourSpecs from "@/components/ourStyles/TourSpecs/tourSpecs"
export default function page() {
  return (
    <div className="">
      <AboutImgComponent page="/ourStyle" />
      <div className="page-container ">
        <ComapnyReviewSection page="/ourStyle" />
      </div>
      <TourSpecs />
      <div className="w-full flex justify-center mt-[40px] 2xl:mt-[140px] 2xl:mb-[50px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] 2xl:px-[80px]">
        <div className="w-full max-w-[1920px]">
          <ContactSection />
        </div>
      </div>
      <div className="page-container ">
        <TourSection />
      </div>
    </div>
  );
}
