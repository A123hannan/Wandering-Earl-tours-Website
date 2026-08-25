import React from "react";

export default function WhatsIncludedSection() {
    const includedItems = [
        "Wandering Earl Tours Expert Tour Leader",
        "Small group (maximum 12 participants)",
        "Accommodation (11 nights – 3*/4* hotels and a guesthouse)",
        "Transportation within Southeast Asia (vans, public transportation and flights)",
        "Local English-speaking guides",
        "All mentioned activities and entrance fees",
        "Breakfast every day, 7 lunches and 10 dinners",
        "Water throughout the trip",
        "Gratuities at hotels/included meals",
        "All airport transfers",
    ];

    const notIncludedItems = [
        "Flights to/from Bangkok and Singapore",
        "Passport/visa fees",
        "Meals and activities not mentioned",
        "Travel insurance (mandatory)",
        "Other gratuities",
    ];

    return (
        <div id="whats-included" className="w-full max-w-[1038px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
                {/* Included Card */}
                <div className="bg-white rounded-[20px] border border-gray-200 p-5 sm:p-7 md:p-8 shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)] flex flex-col gap-5">
                    <div className="flex items-center gap-2.5 text-primary pb-3 border-b border-gray-100">
                        <div className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-[17px] sm:text-[19px] font-bold tracking-wide uppercase">
                            What's Included
                        </h3>
                    </div>

                    <ul className="space-y-3.5 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-gray-700">
                        {includedItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Not Included Card */}
                <div className="bg-white rounded-[20px] border border-gray-200 p-5 sm:p-7 md:p-8 shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)] flex flex-col gap-5">
                    <div className="flex items-center gap-2.5 text-accent pb-3 border-b border-gray-100">
                        <div className="h-7 w-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-[17px] sm:text-[19px] font-bold tracking-wide uppercase text-accent">
                            Not Included
                        </h3>
                    </div>

                    <ul className="space-y-3.5 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-gray-700">
                        {notIncludedItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="h-2 w-2 rounded-full bg-red-400 shrink-0 mt-2" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
