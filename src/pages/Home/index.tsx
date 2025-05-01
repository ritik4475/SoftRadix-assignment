import Stars from "@/assets/stars.png";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  // Show/hide button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-">
      <div className="md:mt-20 mt-10 md:w-[900px] mx-auto">
        <p className="text-2xl font-bold mx-2 md:mx-0">
          <span className="bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] bg-clip-text text-transparent">
            GENIE
          </span>
          : AI Gift Ideas
        </p>
        <p className="flex items-center gap-2 border border-gray-300 rounded-md md:p-4 p-3 mx-2 md:mx-0 mt-4">
          <p className="md:max-w-[900px] w-full truncate md:text-lg text-gray-500">
            Recommend birthday gift ideas for my 55 year old mother. She likes
            pickleball, gardening, and a stiff cocktail. Keep it under $100.
          </p>
          <img
            src={Stars}
            alt="stars"
            className="bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] p-2 rounded-full w-10 h-10"
          />
        </p>
        <p className="mt-3 text-gray-500 md:text-sm text-xs mx-2 md:mx-0">
          Not liking these suggestion? Try again with more details or
          <span className="text-[#50BCD9]"> get help from Genie.</span>
        </p>
        <hr className="my-10 text-gray-300 md:mx-16 mx-5" />
        <div className="mx-2 md:mx-0">
          <div className="flex justify-between mb-3">
            <p className="ml-3 md:text-2xl text-lg font-bold">
              1. Beauty gift basket
            </p>
            <p className="flex gap-2 items-center  text-sm md:text-[16px] font-medium text-[#50BCD9]">
              See more <FaArrowRightLong className="mt-1" />
            </p>
          </div>
          <Products />
          <div className="flex justify-between mb-3">
            <p className="ml-3 md:text-2xl text-lg font-bold">
              2. Title here
            </p>
            <p className="flex gap-2 items-center  text-sm md:text-[16px] font-medium text-[#50BCD9]">
              See more <FaArrowRightLong className="mt-1" />
            </p>
          </div>
          <Products />
          <div className="flex justify-between mb-3">
            <p className="ml-3 md:text-2xl text-lg font-bold">
              3. Title here
            </p>
            <p className="flex gap-2 items-center  text-sm md:text-[16px] font-medium text-[#50BCD9]">
              See more <FaArrowRightLong className="mt-1" />
            </p>
          </div>
          <Products />
          <div className="flex justify-between mb-3">
            <p className="ml-3 md:text-2xl text-lg font-bold">
              4. Title here
            </p>
            <p className="flex gap-2 items-center  text-sm md:text-[16px] font-medium text-[#50BCD9]">
              See more <FaArrowRightLong className="mt-1" />
            </p>
          </div>
          <Products />
        </div>
        {showButton && (
          <button
            onClick={scrollToTop}
            className=" fixed bg-[#50BCD9] text-white bottom-20 right-1/6 p-2 rounded-full cursor-pointer"
          >
            <IoIosArrowUp size={30} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
