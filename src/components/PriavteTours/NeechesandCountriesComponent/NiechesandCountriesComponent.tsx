import React from "react";
import NiechesandCoutriesCard from "@/components/PriavteTours/NiechesandCoutriesCard/NiechesandCoutriesCard";

import PotraitIcon from "@/components/svg/PrivateTours/potraitIcon";
import BuildingIcon from "@/components/svg/PrivateTours/buildingIcon";
import CraftsIcon from "@/components/svg/PrivateTours/craftsIcon";
import PhotographyIcon from "@/components/svg/PrivateTours/photographyIcon";
import WellnessIcon from "@/components/svg/PrivateTours/welnessIcon";
import YogaIcon from "@/components/svg/PrivateTours/yogaIcon";
import HikingIcon from "@/components/svg/PrivateTours/hikingIcon";
import BikingIcon from "@/components/svg/PrivateTours/bikingIcon";
import MarathonIcon from "@/components/svg/PrivateTours/marathonIcon";
import FoodIcon from "@/components/svg/PrivateTours/foodIcon";
import HistoryIcon from "@/components/svg/PrivateTours/historyIcon";
import SightseeingIcon from "@/components/svg/PrivateTours/sightSeeingIcon";

import IndiaIcon from "@/components/svg/PrivateTours/Flags/India";
import VietnamIcon from "@/components/svg/PrivateTours/Flags/Vietnam";
import ThailandIcon from "@/components/svg/PrivateTours/Flags/Thailand";
import CambodiaIcon from "@/components/svg/PrivateTours/Flags/Cambodia";
import NepalIcon from "@/components/svg/PrivateTours/Flags/Nepal";
import MoroccoIcon from "@/components/svg/PrivateTours/Flags/Morocoo";
import MauritaniaIcon from "@/components/svg/PrivateTours/Flags/Mauritania";
import EgyptIcon from "@/components/svg/PrivateTours/Flags/Egypt";
import MexicoIcon from "@/components/svg/PrivateTours/Flags/Mexico";
import PeruIcon from "@/components/svg/PrivateTours/Flags/Peru";
import EcuadorIcon from "@/components/svg/PrivateTours/Flags/Ecuador";
import RomaniaIcon from "@/components/svg/PrivateTours/Flags/Romania";
import PortugalIcon from "@/components/svg/PrivateTours/Flags/Portugal";
import SpainIcon from "@/components/svg/PrivateTours/Flags/Spain";
import IcelandIcon from "@/components/svg/PrivateTours/Flags/Iceland";
import BosniaIcon from "@/components/svg/PrivateTours/Flags/Bosnia";
import MontenegroIcon from "@/components/svg/PrivateTours/Flags/Montenegro";
import GeorgiaIcon from "@/components/svg/PrivateTours/Flags/Georgia";
import ArmeniaIcon from "@/components/svg/PrivateTours/Flags/Armenia";
import TurkeyIcon from "@/components/svg/PrivateTours/Flags/Turkey";
import GreeceIcon from "@/components/svg/PrivateTours/Flags/Greece";
import IraqIcon from "@/components/svg/PrivateTours/Flags/Iraq";
import JordanIcon from "@/components/svg/PrivateTours/Flags/Jordan";
import KyrgyzstanIcon from "@/components/svg/PrivateTours/Flags/Kyrgyzstan";
import UzbekistanIcon from "@/components/svg/PrivateTours/Flags/Uzbekistan";
import TajikistanIcon from "@/components/svg/PrivateTours/Flags/Tajikistan";
import TurkmenistanIcon from "@/components/svg/PrivateTours/Flags/Turkmenistan";

interface CardData {
    icon: React.ElementType;
    heading: string;
}

interface Props {
    componentFor: "niches" | "countries";
}

const NichesCardDetails: CardData[] = [
    { icon: PotraitIcon, heading: "Portrait Photography" },
    { icon: BuildingIcon, heading: "Abandoned Building" },
    { icon: CraftsIcon, heading: "Textiles / Crafts" },
    { icon: PhotographyIcon, heading: "Photography Workshops" },
    { icon: WellnessIcon, heading: "Wellness / Spa" },
    { icon: YogaIcon, heading: "Yoga / Meditational Retreats" },
    { icon: HikingIcon, heading: "Adventure / Hiking" },
    { icon: BikingIcon, heading: "Biking" },
    { icon: MarathonIcon, heading: "Marathon / Running" },
    { icon: FoodIcon, heading: "Food / Drink" },
    { icon: HistoryIcon, heading: "Cultural / History Focused" },
    { icon: SightseeingIcon, heading: "General Sightseeing" },
];

const CountriesCardDetails: CardData[] = [
    { icon: IndiaIcon, heading: "India" },
    { icon: VietnamIcon, heading: "Vietnam" },
    { icon: ThailandIcon, heading: "Thailand" },
    { icon: CambodiaIcon, heading: "Cambodia" },
    { icon: NepalIcon, heading: "Nepal" },
    { icon: MoroccoIcon, heading: "Morocco" },
    { icon: MauritaniaIcon, heading: "Mauritania" },
    { icon: EgyptIcon, heading: "Egypt" },
    { icon: MexicoIcon, heading: "Mexico" },
    { icon: PeruIcon, heading: "Peru" },
    { icon: EcuadorIcon, heading: "Ecuador" },
    { icon: RomaniaIcon, heading: "Romania" },
    { icon: PortugalIcon, heading: "Portugal" },
    { icon: SpainIcon, heading: "Spain" },
    { icon: IcelandIcon, heading: "Iceland" },
    { icon: BosniaIcon, heading: "Bosnia" },
    { icon: MontenegroIcon, heading: "Montenegro" },
    { icon: GeorgiaIcon, heading: "Georgia" },
    { icon: ArmeniaIcon, heading: "Armenia" },
    { icon: TurkeyIcon, heading: "Turkey" },
    { icon: GreeceIcon, heading: "Greece" },
    { icon: IraqIcon, heading: "Iraq" },
    { icon: JordanIcon, heading: "Jordan" },
    { icon: KyrgyzstanIcon, heading: "Kyrgyzstan" },
    { icon: UzbekistanIcon, heading: "Uzbekistan" },
    { icon: TajikistanIcon, heading: "Tajikistan" },
    { icon: TurkmenistanIcon, heading: "Turkmenistan" },
];

export default function NichesAndCountries({ componentFor }: Props) {
    const cardData = componentFor === "niches" ? NichesCardDetails : CountriesCardDetails;
    const title = componentFor === "niches" ? "Niches" : "Countries";
    const description =
        componentFor === "niches"
            ? "Some of the niches that we've organized private tours around include:"
            : "Some of the countries that we've organized private tours around include:";

    return (
        <section className="max-w-[1760px] mx-auto px-4 sm:px-6 md:px-12 lg:px-8 xl:px-12 2xl:!px-[80px] my-12 lg:my-20">
            <div className="w-full flex flex-col items-center gap-6 xl:gap-[80px]">
                {/* Title Section matching reference structure */}
                <div className="w-full flex justify-start lg:justify-center items-center text-left lg:text-center font-inter max-w-[850px] mx-auto">
                    <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] lg:leading-[50.5px] uppercase text-black">
                        {title}
                        <span className="block font-normal text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed text-gray-600 capitalize mt-2">
                            {description}
                        </span>
                    </h2>
                </div>

                {/* Responsive layout with Flex Wrap Centering */}
                <div className="relative z-10 w-full flex flex-wrap justify-center gap-3 sm:gap-5 lg:gap-6 2xl:gap-[20px]">
                    {cardData.map((item) => (
                        <div
                            key={item.heading}
                            className={
                                componentFor === "countries"
                                    ? "flex justify-center w-[calc(50%-6px)] sm:w-[calc(33.333%-13.33px)] md:w-[calc(25%-15px)] lg:w-[calc(20%-19.2px)] xl:w-[calc(16.666%-20px)] 2xl:w-[calc(16.666%-16.67px)]"
                                    : "flex justify-center w-[calc(50%-6px)] sm:w-[calc(33.333%-13.33px)] lg:w-[calc(25%-18px)] 2xl:w-[calc(25%-15px)]"
                            }
                        >
                            <NiechesandCoutriesCard icon={item.icon} heading={item.heading} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}