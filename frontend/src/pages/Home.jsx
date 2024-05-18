import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <div className="w-full pt-20 bg-theme">
      <div className="w-full mx-auto max-w-10xl">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
