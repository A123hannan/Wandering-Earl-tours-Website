import React from "react";
import Image from "next/image";

interface props {
  containerNumber: number;
  imageSources?: { imgSrc1: string; imgSrc2: string; imgSrc3: string };
}
export default function ImageContainer({ containerNumber, imageSources }: props) {
  return (
    <div className="relative">
      {containerNumber === 1 && (
        <div className="w-[310px] h-[287px] sm:w-[372px] sm:h-[344px] md:w-[465px] md:h-[430px] lg:w-[527px] lg:h-[487px] 2xl:w-[620px] 2xl:h-[573px]">
          <div
            className="relative origin-top-left scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] 2xl:scale-100"
            style={{ width: 620, height: 573 }}
          >
            <div className="absolute top-0 left-0 w-[317px] h-[411px] rounded-[24px] overflow-hidden z-10">
              <Image src="/images/About/Container/Container1/c1.jpg" fill alt="c1" className="object-cover" />
            </div>
            <div className="absolute top-[37px] right-[10px] w-[297px] h-[223px] rounded-[24px] border-[16px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-30">
              <Image src="/images/About/Container/Container1/c2.jpg" fill alt="c2" className="object-cover rounded-[8px]" />
            </div>
            <div className="absolute top-[209px] right-1 w-[574px] h-[364px] rounded-[24px] border-t-[20px] border-l-[20px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-20">
              <Image src="/images/About/Container/Container1/c3.jpg" fill alt="c3" className="object-cover" />
            </div>
          </div>
        </div>
      )}
      {containerNumber === 2 && (
        <div className="w-[310px] h-[287px] sm:w-[372px] sm:h-[344px] md:w-[465px] md:h-[430px] lg:w-[527px] lg:h-[487px] 2xl:w-[620px] 2xl:h-[573px]">
          <div
            className="relative origin-top-left scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] 2xl:scale-100"
            style={{ width: 620, height: 573 }}
          >
            <div className="absolute top-0 left-0 w-[297px] h-[563px] rounded-[24px] overflow-hidden z-10">
              <Image src={imageSources?.imgSrc1 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c1" className="object-cover" />
            </div>
            <div className="absolute top-[0] right-[30px] w-[317px] h-[223px] rounded-[24px] border-[16px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-30">
              <Image src={imageSources?.imgSrc2 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c2" className="object-cover rounded-[8px]" />
            </div>
            <div className="absolute bottom-0 right-1 w-[297px] h-[305px] rounded-[24px] overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-20">
              <Image src={imageSources?.imgSrc3 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c3" className="object-cover" />
            </div>
          </div>
        </div>
      )}
      {containerNumber === 3 && (
        <div className="w-[310px] h-[287px] sm:w-[372px] sm:h-[344px] md:w-[465px] md:h-[430px] lg:w-[527px] lg:h-[487px] 2xl:w-[620px] 2xl:h-[573px]">
          <div
            className="relative origin-top-left scale-[0.5] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] 2xl:scale-100"
            style={{ width: 620, height: 573 }}
          >
            <div className="absolute top-0 left-0 w-[614px] h-[319px] rounded-[24px] overflow-hidden z-10">
              <Image src={imageSources?.imgSrc1 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c1" className="object-cover" />
            </div>
            <div className="absolute top-[159px] right-0 w-[297px] h-[391px] rounded-[24px] border-[16px] border-white overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-30">
              <Image src={imageSources?.imgSrc2 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c2" className="object-cover rounded-[8px]" />
            </div>
            <div className="absolute left-0 bottom-5 w-[297px] h-[182px] rounded-[24px] overflow-hidden shadow-[-40px_30px_60px_0px_rgba(0,0,0,0.4)] z-20">
              <Image src={imageSources?.imgSrc3 ?? "/images/About/Container/Container1/c1.jpg"} fill alt="c3" className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}