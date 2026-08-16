import React from "react";
import TourSection from "@/components/TourSection/tourSection";
import AboutImgComponent from "@/components/About/aboutImgComponent/aboutImgComponent";
import ComapnyReviewSection from "@/components/CompanyReviewSection/companyReviewSection";
import ContactSection from "@/components/About/ContactSection2/contactSection2";
import TeamIntro from "@/components/About/TeamIntro/teamIntro";
import { teamData } from "@/data/teamData";
export default function page() {
    return (
        <div className="">
            <AboutImgComponent page="/about" />

            <div className="page-container ">
                <ComapnyReviewSection page="/about" />
            </div>
            <ContactSection />
            <TeamIntro />
            <div className="page-container ">
                <TourSection />
            </div>
        </div>
    );
}
