import TourHero from "@/components/Tours/ToursHeroComponent/toursHeroComponent";
import ReservanceCard from "@/components/ToursDetailed/ReservanceCard/reservanceCard";
import TourSection from "@/components/TourSection/tourSection";
import ToursDetailedNavbar from "@/components/ToursDetailed/ToursDetailedNavbar/toursDetailedNavbar";
import { getTourById } from "@/data/getTour";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const tour = getTourById(id);

    return (
        <>
            {/* <TourHero
                imgSrc={tour?.imgSrc || "/images/toursDetailed/heroImage.png"}
                title={tour?.heading || "SE Asia Culinary Journey (2024)"}
            /> */}
            <TourHero
                imgSrc={"/images/toursDetailed/heroImage.png"}
                title={tour?.heading || "SE Asia Culinary Journey (2024)"}
            />
            <main className="relative -mt-[50px] sm:-mt-[70px] md:-mt-[90px] lg:-mt-[110px] 2xl:-mt-[130px] z-40 max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between gap-8 sm:gap-10 lg:gap-12 2xl:gap-[50px] 3xl:gap-[100px] mb-[60px] sm:mb-[80px] lg:mb-[100px]">
                <div className="flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] flex-1 min-w-0 w-full max-w-[1038px] mx-auto 2xl:mx-0">
                    <ToursDetailedNavbar />
                    <div className="w-full min-w-0 max-w-[1038px]">
                        {children}
                    </div>
                </div>
                <div className="w-full max-w-[593px] mx-auto 2xl:mx-0 2xl:w-[480px] 3xl:w-[593px] shrink-0">
                    <ReservanceCard />
                </div>
            </main>

            <div className="mx-auto max-w-[1760px] px-[3rem] 2xl:px-[1rem] pb-12 sm:pb-20">
                <TourSection cols={4} limit={4} titleContent="Related Tours" page="/toursDetailed" />
            </div>
        </>
    );
}