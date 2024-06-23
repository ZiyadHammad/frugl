import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="py-4 md:py-10 flex justify-center lg:py-4 px-6 md:px-20">
      <div className="flex flex-col lg:justify-center items-center lg:flex-row gap-16 lg:gap-16">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl text-center leading-[20px] font-bold tracking-[-1.2px] text-primary lg:text-7xl lg:leading-[72px] lg:text-start">
            Unleash the Power of <span className="text-secondary inline-block mt-4 md:mt-0">FrugL</span>
          </h1>

          <p className="mt-6 text-center lg:text-start text-xl text-body font-light md:px-10 lg:px-0 lg:text-2xl">
            Paste any product Amazon URL and let us do the rest. We'll notify
            you when prices drop, items go out of stock, or when there's a
            significant discount!
          </p>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;