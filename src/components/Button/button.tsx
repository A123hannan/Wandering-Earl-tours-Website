import React from "react";
type buttonProps = {
  text: string;
  className?: string;
  textprop: string;
};
export default function button({ text, className, textprop }: buttonProps) {
  return (
    <div className={`${className}`}>
      <button className={`${textprop}`}>{text}</button>
    </div>
  );
}
