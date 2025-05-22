import HeroCarousel from "@/components/Home/HeroCarousel";
import HomeAbout from "@/components/Home/HomeAbout";

export default function Home() {
  return (
    <div className="">
      {/* Carousel */}
      <HeroCarousel />

      {/* About part */}
      <HomeAbout />
    </div>
  );
}
