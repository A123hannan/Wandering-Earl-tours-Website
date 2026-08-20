import TourHero from "@/components/Tours/ToursHeroComponent/toursHeroComponent";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TourHero
                imgSrc="/images/toursDetailed/heroImage.png"
                title="SE Asia Culinary Journey (2024)"
            />

            <main>{children}</main>
        </>
    );
}