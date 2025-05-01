import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Stars from "@/assets/stars.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-200 bg-gray-100 py-3 px-5 md:px-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="font-medium text-3xl cursor-pointer">
          GIFT<span className="font-normal">LIST</span>
        </button>

        {/* Desktop Menu */}
        <div className="md:flex gap-10 text-[15px] font-semibold items-center hidden">
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] py-2 px-3 text-white tracking-wide rounded-md flex gap-1.5 items-center"
          >
            <img src={Stars} className="w-4 h-4" alt="stars" />
            AI Gift Ideas
          </button>
          <p>Lists</p>
          <p>Gift Exchange</p>
          <p>Shops</p>
          <p>Occasions</p>
          <p>Ecards</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>

        <div className="md:flex gap-10 text-sm font-semibold items-center hidden">
          <p>Login</p>
          <button className="bg-[#101A34] text-white py-2 px-5 rounded-md cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden mt-1">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 text-sm font-semibold">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-2 bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] text-white px-4 py-2 rounded-md"
          >
            <img src={Stars} className="w-4 h-4" alt="stars" />
            AI Gift Ideas
          </button>
          <p>Lists</p>
          <p>Gift Exchange</p>
          <p>Shops</p>
          <p>Occasions</p>
          <p>Ecards</p>
          <p>Blog</p>
          <p>FAQ</p>
          <hr />
          <p>Login</p>
          <button className="bg-[#101A34] text-white w-full py-2 rounded-md">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
