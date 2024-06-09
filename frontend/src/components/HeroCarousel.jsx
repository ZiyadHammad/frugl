import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const heroImages = [
  { url: "/assets/images/hero-1.svg", alt: "smart watch" },
  { url: "/assets/images/hero-2.svg", alt: "bag" },
  { url: "/assets/images/hero-3.svg", alt: "lamp" },
  { url: "/assets/images/hero-4.svg", alt: "air fryer" },
  { url: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <div
    className="relative px-10 
       pt-20 pb-5 max-w-[300px] max-h-[400px] md:max-w-[500px] md:max-h-[700px] 
      w-full bg-[#F2F4F7] rounded-[30px] mx-auto"
    >
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    > 
      {heroImages.map((image) => (
        <img
          key={image.alt}
          src={image.url}
          alt={image.alt}
          className="object-contain max-h-80 max-w-40 md:max-w-60 md:max-h-100 lg:max-w-none lg:max-h-none"
        />
      ))}
      </Carousel>

      <img
        src='/assets/icons/hand-drawn-arrow.svg'
        alt="arrow"
        className="hidden xl:block absolute -bottom-5 -left-[15%] z-0 min-h-60 min-w-60"
      />
      </div>
  );
};

export default HeroCarousel;