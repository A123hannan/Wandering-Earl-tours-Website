import { getTourById } from "@/data/getTour";
import { redirect, notFound } from "next/navigation";
import CheckoutForm from "./CheckoutForm";
import CheckoutCard from "@/components/Checkout/CheckoutCard/page";

export default async function CheckoutPage({
    searchParams,
}: {
    searchParams: Promise<{ id?: string; option?: string; payment?: string; guests?: string }>;
}) {
    const { id, option, payment, guests } = await searchParams;

    const tour = getTourById(id);
    if (!tour) {
        notFound();
    }

    if (!option) {
        redirect(`/tours/${id}`);
    }

    const guestCount = Number(guests) || 1;
    const pricePerPerson = option === "single_supplement" ? 4445 : 3798;
    const totalPrice = pricePerPerson * guestCount;
    const depositAmount = 500 * guestCount;

    return (
        <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-8 xl:px-10 py-[60px] flex flex-col gap-10">
            {/* Top Header Section */}
            <div className="flex flex-col gap-6 w-full max-w-[1038px] xl:max-w-none mx-auto">
                <h1 className="font-black text-[56px] text-dark leading-none tracking-tight uppercase">
                    Checkout
                </h1>
                <hr className="w-full border-t border-gray-200" />
            </div>

            {/* Main Content Grid */}
            <div className="flex flex-col-reverse xl:flex-row justify-between items-start gap-10 xl:gap-[129px] w-full">
                {/* Left Form Container */}
                <div className="w-full xl:max-w-[1038px] flex-1">
                    <CheckoutForm
                        tourHeading={tour.heading}
                        guestCount={guestCount}
                        option={option ?? "shared"}
                        payment={payment ?? "full"}
                        totalPrice={totalPrice}
                        depositAmount={depositAmount}
                    />
                </div>

                {/* Right Card Container with equal spacing */}
                <div className="w-full xl:max-w-[593px] max-xl:max-w-[1038px] min-xl:pr-[40px] mx-auto shrink-0 xl:sticky xl:top-33 ">
                    <CheckoutCard
                        tourHeading={tour.heading}
                        guestCount={guestCount}
                        option={option ?? "shared"}
                        payment={payment ?? "full"}
                        totalPrice={totalPrice}
                        depositAmount={depositAmount}
                    />
                </div>
            </div>
        </div>
    );
}