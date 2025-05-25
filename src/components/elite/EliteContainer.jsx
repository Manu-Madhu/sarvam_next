"use client";
import React, { useEffect, useState } from "react";
import EliteCard from "./EliteCard";
import Pagination from "../common/Pagination";
import { getAllEliteData } from "@/service/api";

const EliteContainer = () => {
  const [eliteData, setEliteData] = useState(null);
  const [skip, setSkip] = useState(0);
  const [lmt, setLmt ]= useState(16)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllEliteData(skip,lmt);
      console.log("Fetched Elite Data:", data);
      if (data) setEliteData(data?.data);
    };
    fetchData();
  }, []);
  
  return (
    <main>
      {/* Card login */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        {
            eliteData?.map((item)=>(
                <div key={item.slno} className="mb-5">
                  <EliteCard data={item} />
                </div>
            ))
        }
      </div>

      {/* Pagination Part */}
      <Pagination />
    </main>
  );
};

export default EliteContainer;
