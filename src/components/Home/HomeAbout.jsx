import Image from "next/image";
import React from "react";
import ContainerWrapper from "../common/ui/ContainerWrapper";
import Button from "../common/ui/Button";
import TitlePart from "../common/ui/TitlePart";

const HomeAbout = () => {
  return (
    <ContainerWrapper className="h-full p-3 flex flex-col my-14 overflow-hidden relative">
      {/* heading section */}
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-[18px] font-[600] font-sans text-primary">
          About Sarvam
        </h2>
        <h3 className="font-sans font-[600] text-[26px] md:text-[30px] text-center leading-8 mt-2 ">
          Largest Safety Equipment Supplier In India
        </h3>
      </section>

      {/*Content part  */}
      <section className="flex w-full h-full flex-col md:flex-row mt-10 md:mt-14 gap-5 xl:gap-20">
        <div className="w-full h-[300px] md:h-[450px] md:w-[70%] relative flex ">
          <Image
            src={"/assets/img/about_img01.jpg"}
            width={780}
            height={780}
            className="w-[300px] md:w-[400px] h-fit md:h-[350px] rounded-xl object-cover hover:z-10 "
            alt="Sarvam_about_img1"
            title="Sarvam_about_img"
          />
          <Image
            src={"/assets/img/about_img02.jpg"}
            width={780}
            height={780}
            className="w-[250px] md:w-[390px] md:h-[290px] absolute bottom-0 right-0 rounded-xl object-cover"
            alt="Sarvam_about_img2"
            title="Sarvam_about_img2"
          />
        </div>
        <div className=" w-full h-full space-y-5 md:space-y-8 max-w-2xl mx-auto md:px-4 sm:px-6 lg:pl-8 ">
          <p className="text-[16px] font-sans font-medium pt-2 leading-7 ">
            {`Sarvam Safety Equipment Private Limited epitomizes the wholeness of
            our core competencies, which complements our name, which is a
            Sanskrit term that means "all" or "complete." Our manpower, service,
            excellence, and infrastructure are all our assets. We have been able
            to uphold our fiery passion and excellence thanks to our Sarvamites.`}
          </p>
          <div>
            {/* <Image src={""}  className="" alt="" title="" /> */}
            <div>
              <h4 className="text-[18px] font-sans font-[600]">
                Trusted Channel Partners
              </h4>
              <p className="text-[15px] font-sans font-[500] pt-2 leading-6">
                {`Delivering safety for over a decade. We are reputed sellers of
                safety products, ensuring protection with confidence.`}
              </p>
            </div>
          </div>
          <div className="pb-5">
            {/* <Image src={""} className="" alt="" title="" /> */}
            <div>
              <h4 className="text-[18px] font-sans font-[600]">
                Trusted Channel Partners
              </h4>
              <p className="text-[15px] font-sans font-[500] pt-2 leading-6">
                {`Delivering safety for over a decade. We are reputed sellers of
                safety products, ensuring protection with confidence.`}
              </p>
            </div>
          </div>

          <Button text={"Discover More"} className={""} link={"/"} />
        </div>
      </section>

      {/* Our Suppliers */}
      <div className="w-full h-full bg-primary/25 mt-14 rounded-xl p-5 lg:p-10">
        {/* Common Title component */}
        <TitlePart
          className={"pt-10"}
          title={"Our Suppliers"}
          subTitle={"Our Topmost Safety Equipment Manufacturers"}
        />

        {/* Carousel */}
      </div>
    </ContainerWrapper>
  );
};

export default HomeAbout;
