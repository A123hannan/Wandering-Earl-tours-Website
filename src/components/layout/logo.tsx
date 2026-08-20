import React from "react";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className ? className : "bg-transparent"}>
      <Image
        src="/images/logoImage1.png"
        height={74}
        width={255}
        alt="logo"
        className="w-[120px] sm:w-[120px] md:w-[120px] lg:w-[150px] xl:w-[210px]  2xl:w-[255px] min-[1800px]:w-[255px]  h-auto object-contain"
        priority
      />
    </div>
  );
}