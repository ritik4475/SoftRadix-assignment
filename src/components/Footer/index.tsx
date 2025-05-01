import Instagram from "@/assets/instagram.png";
import Tiktok from "@/assets/tiktok.png";
import Twitter from "@/assets/twitter.png";
import Facebook from "@/assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1B2D] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-3xl font-semibold tracking-wide">
            GIFT<span className="font-light">LIST</span>
          </h2>
          <p className=" text-white mt-2 font-medium">Gifting made easy.</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-20">
            <img src={Twitter} alt="Twitter" className="w-5 h-5" />
            <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            <img src={Tiktok} alt="TikTok" className="w-5 h-5" />
            <img src={Instagram} alt="Instagram" className="w-5 h-5" />
          </div>

          <p className="text-xs font-medium text-white mt-4">
            © 2022 Giftlist, All rights Reserved
          </p>
        </div>

        {/* About Giftlist */}
        <div>
          <h3 className="font-semibold mb-2 text-lg">About Giftlist</h3>
          <ul className="space-y-1 text-sm text-white gap-3 grid">
            <li>How it works</li>
            <li>About Us</li>
            <li>Browser Extensions</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2 text-lg">Help</h3>
          <ul className="space-y-1 text-sm text-white gap-3 grid">
            <li>Disclaimer</li>
            <li>Privacy policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-start items-start gap-3">
          <button className="w-[60%] border border-white rounded-md px-4 py-2 font-bold bg-white text-[#1C1B2D] transition">
            Log in
          </button>
          <button className="w-[60%] bg-[#50BCD9] text-white rounded-md px-4 py-2 font-bold hover:bg-[#3ca4bd] transition">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
