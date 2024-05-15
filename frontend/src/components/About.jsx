import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex flex-col py-40 items-center text-center">
      <h1 className="text-primary font-bold text-2xl  md:text-4xl mb-2 md:mb-4">
        Unlock savings effortlessly.
      </h1>

      <p className="max-w-[350px] md:max-w-[710px] text-md md:text-2xl text-body font-light">
        FrugL scours the web for you, tracking Amazon prices so you can save
        big. Paste any product URL, sit back, and get alerts straight to your
        inbox when prices drop.
      </p>

      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <Link
          href="/register"
          className="min-h-[56px] bg-secondary bg-custom-2 shadow-custom-2 px-20 py-4 rounded-[14px] transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
        >
          <div className="text-white font-spaceGrotesk font-5 text-medium">
            Get Started ➞
          </div>
        </Link>

        <Link
          href="#how"
          className="min-h-[56px] bg-primary bg-custom-1 shadow-custom-1 px-20 py-4 rounded-[14px] transition duration-400 ease-in-out hover:shadow-none hover:scale-95"
        >
          <div className="text-white font-spaceGrotesk font-5 text-medium ">
            Trending Products ➞
          </div>
        </Link>
      </div>
    </section>
  );
};

export default About;