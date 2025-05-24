"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getTeamData } from "@/service/api";
import { IMAGE_ENDPOINT } from "@/utils/endPoints";

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);

  const itemsPerView = 4;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await getTeamData();
        setTeamMembers(response?.data || []);
      } catch (error) {
        console.error("Failed to fetch team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary border-primary text-white shadow-lg cursor-pointer"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary border-primary text-white shadow-lg cursor-pointer"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {teamMembers.map(member => (
                <div key={member.tme_id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
                  <div className="transition-shadow duration-300 border-0">
                    <div className="md:p-3 text-center">
                      <div className="mb-6">
                        <div className="relative w-full h-54 mx-auto mb-4 overflow-hidden rounded-lg ">
                          <Image
                            src={member.tme_propic ? `${IMAGE_ENDPOINT}${member.tme_propic}` : "/placeholder.svg"}
                            alt={member.tme_name}
                            fill
                            className="object-cover hover:scale-110 ease-in-out duration-500"
                          />
                        </div>
                      </div>
                      <div className="md:space-y-1 font-sans text-start">
                        <h3 className="text-lg text-[15px] font-bold text-gray-900 leading-tight">
                          {member.tme_name}
                        </h3>
                        <p className="text-[#848484] text-[12px] font-medium">
                          {member.tme_designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
