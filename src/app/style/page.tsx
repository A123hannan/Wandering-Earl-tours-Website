import React from "react";

export default function Page() {
  return <div>            {/* GRADIENT BELOW IMAGE */}
    <div
      className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px]"
      style={{
        background: `
            linear-gradient(
              360deg,
              #1E365C 0%,
              #334E70 10%,
              #58718E 22%,
              #8298AE 38%,
              #AEBECD 55%,
              #CFD9E3 70%,
              #E7ECF1 85%,
              #FFFFFF 100%
            )
          `,
      }}
    /></div>;
}
