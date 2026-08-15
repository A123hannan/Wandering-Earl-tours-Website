import React from "react";
import AboutImgComponent from "@/components/About/aboutImgComponent/aboutImgComponent";
export default function page() {
  return (
    <div className="bg-white text-primary text-10 flex items-center justify-center h-screen">
      <AboutImgComponent page="/ourStyle" />
    </div>
  );
}
