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
            <main className="relative top-[-70px] z-50 max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10 xl:gap-16 2xl:gap-[129px] mb-[70px]">
                <div className="flex flex-col gap-[30px] sm:gap-[40px] flex-1 min-w-0 w-full max-w-[1038px]">
                    <ToursDetailedNavbar />
                    <div className="w-full min-w-0 max-w-[1038px]">
                        {children}
                    </div>
                </div>
                <div className="w-full lg:w-[450px] xl:w-[500px] 2xl:w-[593px] shrink-0">
                    <ReservanceCard />
                </div>
            </main>

            <div className="mx-auto max-w-[1760px] px-[3rem] 2xl:px-[1rem]">
                <TourSection cols={4} limit={4} titleContent="Related Tours" page="/tours" />
            </div>
        </>
    );
}