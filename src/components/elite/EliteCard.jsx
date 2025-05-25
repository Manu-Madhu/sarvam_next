import { API_BASE_URL } from "@/utils/endPoints";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EliteCard = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full h-[370px] border border-[#eee] border-t-[#eeeeee] overflow-hidden hover:border-b-primary hover:border-b-4 ease-in-out duration-300">
      <Link href={`/elite-products/${data.seo_urlink}`} title={data.ctl_name}>
        <div className="h-[75%] flex items-center justify-center p-4">
          <Image
            src={`${API_BASE_URL}/elite/thumbnail/${data.img_image}` || ""}
            alt={data.ctl_name}
            title={data.ctl_name}
            width={1280}
            height={720}
            className="object-contain h-full"
          />
        </div>
        <div className="bg-[#eee] font-sans text-[16px] font-semibold p-3 h-full leading-5">
          <h2>
            {data.ctl_name.split("").slice(0, 50)}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default EliteCard;
