import React from "react";
import Image from "next/image";
export default function contactSection2() {
  return (
    <div className="bg-accent w-full pl-[80px] ">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-start">
          <p className="mb-[40px] font-[900] text-[48px] leading-[100%] tracking-[0%] uppercase text-white">
            Our Global family
          </p>
          <p className="mb-[40px] font-[500] text-[20px] leading-[36px] tracking-[0%] text-white">
            Our team also consists of our incredible travel partners, friends
            and endless local contacts in every country where we operate. These
            wonderful people work extremely hard to help us create and run our
            unique trips. We could not do this without all of them as it takes
            such a dedicated and global team to create our rewarding travel
            experiences!
          </p>
          <button className="px-[30px] pt-[15px] pb-[15px] rounded-[30px] bg-primary text-white hover:bg-accent">
            Contact us
          </button>
        </div>
        <div className="relative w-[1125px] h-[580px] aspect-[1125/580]">
          <Image
            src="/images/About/contactSection.jpg"
            fill
            alt="BG"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
