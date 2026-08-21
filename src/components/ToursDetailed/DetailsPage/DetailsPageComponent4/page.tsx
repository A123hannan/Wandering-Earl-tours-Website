import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col gap-[16px] p-[24px] items-start w-full bg-white">
            <p className="font-[400] text-[20px] leading-[28px] tracking-[0%] text-dark">Calling all foodies and travel enthusiasts! This trip is a chance to embark on a culinary adventure through Southeast Asia, where you’ll be immersed in the traditional food culture of each location, while also exploring some of the wonderful sights.</p>
            <p className="font-[400] text-[20px] leading-[28px] tracking-[0%] text-dark">Our journey will take us through Bangkok, Ayutthaya, Kuala Lumpur, the Cameron Highlands and Singapore. You’ll discover the secrets of traditional tea plantations and meet local chefs who serve up dishes that will remain etched in your memory forever. You’ll indulge in the explosion of flavors and spices at sprawling markets and enjoy the absolute best street food on the planet. There will be a variety of excellent restaurant experiences, a cooking class and trips to famous local eateries that few visitors ever reach.</p>
            <p className="font-[400] text-[20px] leading-[28px] tracking-[0%] text-dark">Throughout the tour, you’ll be in the company of like-minded travelers who share your passion for adventure and culinary exploration. This food tour is an exclusive opportunity to experience Southeast Asia through food, leaving you with a newfound appreciation for the rich culture and gastronomy of this captivating region of the world!</p>
        </div>
    );
}
