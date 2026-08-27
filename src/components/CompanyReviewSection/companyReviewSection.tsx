"use client";

import React from "react";
import ImageContainer from "@/components/CompanyReviewSection/ImageContainer/imageContainer";
import { stylesData } from "@/data/OurStlye/ourStyle";

interface Props {
  page: string;
}

export default function CompanyReviewSection({ page }: Props) {
  return (
    <div className="w-full page-container px-4 sm:px-6 lg:px-8 xl:px-12">
      {page === "/about" && (
        <div className="relative top-[-40px] sm:top-[-80px] lg:top-[-120px] xl:top-[-150px] flex flex-col min-[1280px]:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-20 lg:mb-0">
          <div className="w-full min-[1280px]:w-1/2 flex justify-center min-[1280px]:justify-end shrink-0">
            <ImageContainer containerNumber={1} />
          </div>
          <div className="w-full min-[1280px]:flex-1 flex flex-col items-start justify-start">
            <p className="font-[500] text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark">
              Our team at Wandering Earl Tours has a strong desire to bring rich
              cultural connections around the world to people who would appreciate
              them the most. And we hold this mission at the core of everything we
              do.
            </p>
            <p className="font-[500] text-base sm:text-lg lg:text-[19px] xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-4 sm:mt-5 xl:mt-6">
              Focused, purposeful and incredibly rewarding trips are the goal, and
              each member of our team brings their own insights, skills and
              enthusiasm to the table. When combined, our goal is achieved, with
              unique Wandering Earl Tours that we are all genuinely excited to
              offer!
            </p>
          </div>
        </div>
      )}

      {page === "/ourStyle" &&
        stylesData.map((styleData: any, i: number) => {
          // Use item index fallback if styleData.index is zero-based or missing
          const itemIndex = styleData?.index ?? i;
          const isEven = itemIndex % 2 === 0;

          return (
            <div
              key={styleData.index ?? i}
              className={`relative top-[-40px] sm:top-[-80px] lg:top-[-120px] xl:top-[-150px] flex flex-col items-center gap-8 lg:gap-12 xl:gap-30 mb-12 sm:mb-[120px] last:mb-0 ${isEven ? "min-[1280px]:flex-row-reverse" : "min-[1280px]:flex-row"
                }`}
            >
              <div
                className={`w-full min-[1280px]:w-1/2 flex justify-center shrink-0 max-w-[614px] ${isEven ? "min-[1280px]:justify-end" : "min-[1280px]:justify-start"
                  }`}
              >
                <ImageContainer
                  containerNumber={itemIndex + 2}
                  imageSources={styleData.imageSources}
                />
              </div>
              <div className="w-full min-[1280px]:flex-1 min-w-0 flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8 max-w-[1362px]">
                <div className="flex flex-col">
                  <p className="font-[700] text-[28px] sm:text-[36px] md:text-[40px] xl:text-[49px] leading-[110%] uppercase text-accent">
                    {styleData?.title1}
                  </p>
                  <p className="font-[700] text-[28px] sm:text-[36px] md:text-[40px] xl:text-[49px] leading-[110%] uppercase text-dark">
                    {styleData?.title2}
                  </p>
                </div>
                <div className="flex flex-col">
                  {styleData?.description1 && (
                    <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                      {styleData?.description1}
                    </p>
                  )}
                  {styleData?.description2 && (
                    <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                      {styleData?.description2}
                    </p>
                  )}
                  {styleData?.description3 && (
                    <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                      {styleData?.description3}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

      {page === "/privateTours" && (
        <div className="relative top-[-40px] sm:top-[-80px] lg:top-[-120px] xl:top-[-150px] flex flex-col min-[1280px]:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-20 lg:mb-32">
          <div className="max-w-full w-full min-[1280px]:w-1/2 flex justify-center min-[1280px]:justify-end shrink-0">
            <ImageContainer containerNumber={4} />
          </div>
          <div className="w-full min-[1280px]:flex-1 min-w-0 flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col">
              <p className="font-[700] text-[28px] sm:text-[36px] md:text-[40px] xl:text-[49px] leading-[110%] uppercase text-accent">
                private tours
              </p>
              <p className="font-[700] text-[28px] sm:text-[36px] md:text-[40px] xl:text-[49px] leading-[110%] uppercase text-dark">
                perfectly crfted
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                Whether you’re a group of friends, a photography organization, a textile club, abandoned building enthusiasts, or anything in between, we’ll create a magical private tour for your group
              </p>
              <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                Unlike tour operators that use the exact same itinerary over and over again, we ensure that every trip is 100% unique. We want to learn about your specific interests, goals, budget and more in order to carefully craft and customize every aspect of the trip in a way that will suit your group perfectly. We choose the ideal route, best lodgings, most rewarding activities, tastiest restaurants, and more, that will all lead to the most extraordinary trip possible.
              </p>
              <p className="font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed sm:leading-8 xl:leading-[36px] text-dark mt-3 sm:mt-5">
                Since 2013, we’ve offered our highly-regarded, excellent value trips to dozens of groups in dozens of countries around the world.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}