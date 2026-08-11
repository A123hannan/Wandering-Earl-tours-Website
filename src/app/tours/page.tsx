import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="relative">
      {/* <div className="relative w-full "> */}
        <Image
          src="/images/Tours/BgImage.png"
          alt="Background Image"
          fill
          priority
          className="object-cover "
        />
        {/* Overlay */}
        <div className="bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.3)_30%,#1E365C_100%)] absolute inset-0 " />
      {/* </div> */}
    </div>
  );
}
