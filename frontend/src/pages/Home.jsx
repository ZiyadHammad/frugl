import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import About from '../components/About'

const Home = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
        <>
          <Hero />
         <About />
        </>
  );
};

export default Home;