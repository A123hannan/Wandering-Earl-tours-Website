import React from "react";
import Toursection from "@/components/TourSection/tourSection";
import AboutImgComponent from "@/components/About/aboutImgComponent/aboutImgComponent";
import TeamReviewSection from "@/components/About/TeamReviewSection/teamReviewSection";
import ContactSection from "@/components/About/ContactSection2/contactSection2";
import TeamIntro from "@/components/About/TeamIntro/teamIntro";
import { teamData } from "@/data/teamData";
export default function page() {
    return (
        <div className="">
            <AboutImgComponent />

            <div className="page-container ">
                <TeamReviewSection />
            </div>
            <ContactSection />
            <TeamIntro />
            <div className="page-container ">
                <Toursection />
            </div>
        </div>
    );
}
