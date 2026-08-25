// import React from "react";
// import Image from "next/image";
// export default function cart() {
//   return (
//     <div className=" relative h-[40px] w-[40px] border border-[#D6D6D64D] rounded-[39px] bg-[#FFFFFF33]  ">
//       <div className="absolute  top-[10px] left-[10.98px] ">
//         <Image src="/svg/bucket.svg" height={18} width={18.05} alt="cart" />
//       </div>
//       <div className="h-[12px] w-[12px] absolute top-[8px] left-[24px] bg-[#4dbfb0] rounded-full"></div>
//       <div className="absolute top-[10px] left-[26px] h-[8px] w-[8px] bg-[#E9482B] rounded-full"></div>
//     </div>
//   );
// }
import React from "react";
import Image from "next/image";
export default function cart() {
  return (
    // <div className="flex items-center justify-center relative h-[40px] w-[40px] border border-[#D6D6D64D] rounded-[39px] bg-[#FFFFFF33]  ">
    //   <div className="absolute  top-[10px] left-[10.98px] ">
    //   <Image src="/svg/bucket.svg" height={18} width={18.05} alt="cart"  />
    //   </div>
    //   <div className="h-[12px] w-[12px] absolute top-[8px] left-[24px] bg-[#4dbfb0] rounded-full"></div>
    //   <div className="absolute top-[10px] left-[26px] h-[8px] w-[8px] bg-[#E9482B] rounded-full"></div>
    // </div>
    <div className="relative h-[40px] w-[40px] rounded-[30px] border-[1px] bg-[#FFFFFF33] border-[#D6D6D64D] flex items-center justify-center cursor-pointer">
      <img src={"/svg/bucket.svg"} alt="Cart" />
      <div className="h-[12px] w-[12px] absolute top-[8px] left-[24px] bg-[#4dbfb0] rounded-full flex items-center justify-center">
        <div className=" h-[8px] w-[8px] bg-[#E9482B] rounded-full"></div>
      </div>
    </div>
  );
}
