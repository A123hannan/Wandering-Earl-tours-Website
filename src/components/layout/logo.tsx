import React from "react";
import Image from "next/image";
export default function logo({ className }: { className?: string }) {
  return (
    <div className={`${className ? className : "bg-transparent"} `}>
      <Image
        src="/images/logoImage1.png"
        height={74}
        width={255}
        alt="logo"
        className=" w-[140px]
    sm:w-[180px]
    md:w-[220px]
    lg:w-[255px]
    h-auto"
      />
    </div>
  );
}
