import React from "react";

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right" | "up" | "down";
  color?: string;
  size?: number | string;
  strokeWidth?: number;
}

export default function ChevronIcon({
  direction = "left",
  color = "#8F8F8F",
  size = 25,
  strokeWidth = 2,
  className = "",
  style,
  ...props
}: ChevronIconProps) {
  // Map directions to rotation angles
  const rotationMap = {
    left: 0,
    up: 90,
    right: 180,
    down: 270,
  };

  const rotation = rotationMap[direction];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.2s ease, stroke 0.2s ease", // Smooth animation when props change
        ...style,
      }}
      {...props}
    >
      <path
        d="M10 1L1 12.5L10 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}