import React from "react";
import Image from "next/image";

interface props {
  containerNumber: number;
}
export default function ImageContainer({ containerNumber }: props) {
  return (
    <div className="relative">
      {containerNumber === 1 ? (
        <>
          {/* c1 - stairs photo */}
          <div className="absolute top-0 left-0 w-[317px] h-[411px] rounded-[24px] overflow-hidden z-10">
            <Image
              src="/images/About/Container/Container1/c1.jpg"
              fill
              alt="c1"
              className="object-cover"
            />
          </div>

          {/* c2 - temple photo, white bordered card */}
          <div className="absolute top-[37px] right-[10px] w-[297px] h-[223px] rounded-[24px] border-[16px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-30">
            <Image
              src="/images/About/Container/Container1/c2.jpg"
              fill
              alt="c2"
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* c3 - car photo */}
          <div className="absolute top-[209px] right-1 w-[574px] h-[364px] rounded-[24px] border-t-[20px] border-l-[20px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-20">
            <Image
              src="/images/About/Container/Container1/c3.jpg"
              fill
              alt="c3"
              className="object-cover"
            />
          </div>
        </>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
}