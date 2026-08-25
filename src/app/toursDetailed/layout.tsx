import TourHero from "@/components/Tours/ToursHeroComponent/toursHeroComponent";
import ReservanceCard from "@/components/ToursDetailed/ReservanceCard/reservanceCard"
import TourSection from "@/components/TourSection/tourSection";
import ToursDetailedNavbar from "@/components/ToursDetailed/ToursDetailedNavbar/toursDetailedNavbar"
export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TourHero imgSrc="/images/toursDetailed/heroImage.png" title="SE Asia Culinary Journey (2024)" />

            <main className="relative top-[-70px] z-50 max-w-[1760px] mx-auto flex flex-col lg:flex-row gap-[129px] mb-[70px]">
                <div className="flex flex-col gap-[40px]">
                    <ToursDetailedNavbar />
                    <div className="max-w-[1038px]">
                        {children}
                    </div>
                </div>
                <ReservanceCard />
            </main>

            <div className="mx-auto max-w-[1760px] px-[3rem] 2xl:px-[1rem]">
                <TourSection cols={4} limit={4} titleContent="Related Tours" page="/toursDetailed" />
            </div>
        </>

    );
}