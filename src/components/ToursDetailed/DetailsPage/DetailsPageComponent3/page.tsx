import React from "react";
import Image from "next/image";
import { noodleIcon } from "@/assets/icons";
import { foodCartIcon } from "@/assets/icons";
import { twinTowerIcon } from "@/assets/icons";
import { templeIcon } from "@/assets/icons";
import { mountainIcon } from "@/assets/icons";
import { cattleIcon } from "@/assets/icons";
const cardData = [
    {
        id: 1,
        icon: noodleIcon,
        description: "Spoil yourself with the delicious cuisine of Singapore, with its Chinese, Indian, Malaysian and Indonesian influences"
    },
    {
        id: 2,
        icon: foodCartIcon,
        description: "Dive deep into the incredible food markets of Bangkok"
    },
    {
        id: 3,
        icon: twinTowerIcon,
        description: "Get ready for the vast foodie scene of Kuala Lumpur, with some of the best food in the world"
    },
    {
        id: 4,
        icon: templeIcon,
        description: "Travel back in time through the ancient city of Ayutthaya"
    },
    {
        id: 5,
        icon: mountainIcon,
        description: "Enjoy time exploring the gorgeous Cameron Highlands of Malaysia"
    },
    {
        id: 6,
        icon: cattleIcon,
        description: "Visit a tea plantation to learn about the process of making the finest teas"
    },

]
import CardOfComponent3 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent3/cardOfComponent3/page";
export default function Page() {
    return (
        <div className="gap-4 sm:gap-[20px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cardData.map((card, index) => (
                <CardOfComponent3 key={index} Icon={card.icon} description={card.description} />
            ))}
        </div>
    );
}
