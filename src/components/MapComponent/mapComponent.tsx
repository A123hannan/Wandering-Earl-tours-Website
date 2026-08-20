// import React from "react";
// import MapPosition from "@/components/MapPosition/mapPosition";

// const MapPositionDetails = [
//   { name: "Africa", left: "22.5%", top: "32.2%" },
//   { name: "Korea", left: "28.9%", top: "61.35%" },
//   { name: "United Kingdom", left: "53.5%", top: "15%" },
//   { name: "India", left: "69.6%", top: "31%" },
//   { name: "USA", left: "58.6%", top: "65.3%" },
//   { name: "China", left: "83.9%", top: "19.6%" },
//   { name: "Russia", left: "84.5%", top: "65.4%" },
// ];

// export default function CountryMap() {
//   return (
//     <div className="relative z-0 w-full overflow-hidden 2xl:overflow-visible">
//       {/* Background gradient blur - purely decorative, safe to keep absolute/inset */}
//       <div
//         className="absolute -top-[100px] sm:-top-[120px] md:-top-[160px] 2xl:-top-[80px]
//         -left-[60px] sm:-left-[60px] md:-left-[100px] 2xl:-left-[160px]
//         -right-[60px] sm:-right-[60px] md:-right-[100px] 2xl:-right-[160px]
//         -bottom-[100px] sm:-bottom-[120px] md:-bottom-[160px] 2xl:-bottom-[80px]
//         bg-[linear-gradient(180deg,rgba(120,150,190,0)_0%,rgba(75,105,150,0.4)_12%,#1E365C_25%,#1E365C_75%,rgba(75,105,150,0.4)_88%,rgba(120,150,190,0)_100%)]
//         2xl:bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,#1E365C_20%,#1E365C_80%,rgba(30,54,92,0)_100%)]
//         blur-[60px] pointer-events-none z-0"
//       />

//       <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 2xl:pt-[77px] pb-16 sm:pb-24 2xl:pb-[125px] flex flex-col gap-10 sm:gap-14 md:gap-20 2xl:gap-[80px]">
//         {/* Title */}
//         <div className="pt-8 sm:pt-16 md:pt-24 2xl:pt-[151px] px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-[377px] text-center">
//           <p className="font-inter font-black text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] text-center uppercase leading-tight sm:leading-snug 2xl:leading-[58px] text-white">
//             countries where we are offering tours{" "}
//             <span className="text-[#E9482B] block sm:inline">each year</span>
//           </p>
//         </div>

//         {/* Map — the padding lives HERE, outside the aspect-ratio box, so it
//             never distorts the coordinate system the pins are measured against */}
//         <div className="px-4 sm:px-8 md:px-12 2xl:px-[79.98px] pb-4 sm:pb-8 2xl:pb-0">
//           <div className="relative w-full aspect-[1761/699]">
//             <img
//               src="/svg/Maps.svg"
//               alt="Map"
//               className="w-full h-full object-fill block"
//             />

//             {MapPositionDetails.map((position) => (
//               <MapPosition
//                 key={position.name}
//                 name={position.name}
//                 left={position.left}
//                 top={position.top}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import MapPosition from "@/components/MapComponent/MapPositionPin/mapPositionPin";

const MapPositionDetails = [
  { name: "Africa", left: "22.5%", top: "32.2%" },
  { name: "Korea", left: "28.9%", top: "61.35%" },
  { name: "United Kingdom", left: "53.5%", top: "15%" },
  { name: "India", left: "69.6%", top: "31%" },
  { name: "USA", left: "58.6%", top: "65.3%" },
  { name: "China", left: "83.9%", top: "19.6%" },
  { name: "Russia", left: "84.5%", top: "65.4%" },
];

export default function CountryMap() {
  return (
    <div className="relative z-0 w-full overflow-visible">
      {/* Background gradient blur - purely decorative.

          IMPORTANT: this box is sized to match the container almost exactly
          (tiny inset, just enough for a soft ambient bleed at the very edge).
          The top/bottom fade you see is NOT from the blur — it comes from
          the gradient's own color stops (0% transparent -> 20% solid ->
          80% solid -> 100% transparent). Those stops are always relative to
          THIS box's own height, so if the box is stretched much taller than
          the visible container (e.g. a big negative inset), the transparent
          0-20% / 80-100% zones land outside the visible area entirely and
          all you see on screen is the flat solid middle — a hard edge, not
          a fade. Keeping the box ~the same size as the container is what
          keeps the fade itself inside the visible viewport. */}
      <div
        className="absolute -inset-x-[2%] -inset-y-[3%]
        bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,#1E365C_20%,#1E365C_80%,rgba(30,54,92,0)_100%)]
        blur-[20px] pointer-events-none z-0"
      />

      <div className="relative z-10 pt-12 sm:pt-16 md:pt-20 2xl:pt-[77px] pb-16 sm:pb-24 2xl:pb-[125px] flex flex-col gap-10 sm:gap-14 md:gap-20 2xl:gap-[80px]">
        {/* Title */}
        <div className="pt-8 sm:pt-16 md:pt-24 2xl:pt-[151px] px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-[377px] text-center">
          <p className="font-inter font-black text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] text-center uppercase leading-tight sm:leading-snug 2xl:leading-[58px] text-white">
            countries where we are offering tours{" "}
            <span className="text-[#E9482B] block sm:inline">each year</span>
          </p>
        </div>

        {/* Map — the padding lives HERE, outside the aspect-ratio box, so it
            never distorts the coordinate system the pins are measured against */}
        <div className="px-4 sm:px-8 md:px-12 2xl:px-[79.98px] pb-4 sm:pb-8 2xl:pb-0">
          <div className="relative w-full aspect-[1761/699]">
            <img
              src="/svg/Maps.svg"
              alt="Map"
              className="w-full h-full object-fill block"
            />

            {MapPositionDetails.map((position) => (
              <MapPosition
                key={position.name}
                name={position.name}
                left={position.left}
                top={position.top}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
