"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutoStackRowProps {
  /** On wide screens, reverse the order (image left, text right) */
  reverse?: boolean;
  /** Classes for the outer wrapper (spacing, top offset, margins, etc.) */
  className?: string;
  /** Classes for the text column */
  textClassName?: string;
  /** Classes for the image column */
  imageClassName?: string;
  textContent: React.ReactNode;
  imageContent: React.ReactNode;
}

/**
 * Lays text + image side by side (like flex-col lg:flex-row) but falls back
 * to a stacked flex-col layout at ANY screen size once the text block's
 * rendered height exceeds the image block's height. This prevents the text
 * from "outgrowing" the image and leaving an awkward gap next to it.
 */
export default function AutoStackRow({
  reverse = false,
  className = "",
  textClassName = "",
  imageClassName = "",
  textContent,
  imageContent,
}: AutoStackRowProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [stack, setStack] = useState(false);

  useEffect(() => {
    const checkHeights = () => {
      if (!textRef.current || !imageRef.current) return;
      const textHeight = textRef.current.scrollHeight;
      const imageHeight = imageRef.current.scrollHeight;
      setStack(textHeight > imageHeight);
    };

    // initial check (fonts/images may still be loading, so re-check on load too)
    checkHeights();
    window.addEventListener("load", checkHeights);
    window.addEventListener("resize", checkHeights);

    const resizeObserver = new ResizeObserver(checkHeights);
    if (textRef.current) resizeObserver.observe(textRef.current);
    if (imageRef.current) resizeObserver.observe(imageRef.current);

    return () => {
      window.removeEventListener("load", checkHeights);
      window.removeEventListener("resize", checkHeights);
      resizeObserver.disconnect();
    };
  }, []);

  const directionClass = stack
    ? "flex-col"
    : `flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`;

  return (
    <div className={`flex ${directionClass} ${className}`}>
      <div ref={textRef} className={textClassName}>
        {textContent}
      </div>
      <div ref={imageRef} className={imageClassName}>
        {imageContent}
      </div>
    </div>
  );
}