import HeroCarousel from "./HeroCarousel";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="flex justify-center md:py-4 px-6 md:px-20">
      <div className="flex flex-col lg:justify-center items-center lg:flex-row gap-16">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center md:text-start leading-[20px] md:text-7xl md:leading-[72px] font-bold tracking-[-1.2px] text-primary">
            Unleash the Power of <span className="text-secondary">FrugL</span>
          </h1>

          <p className="mt-6 text-center md:text-start text-md md:text-2xl text-body font-light">
            Paste any product Amazon URL and let us do the rest. We'll notify
            you when prices drop, items go out of stock, or when there's a
            significant discount!
          </p>
          <SearchBar />
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;