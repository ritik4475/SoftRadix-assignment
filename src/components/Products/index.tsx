import Img1 from "@/assets/Image + Line (1).png";
import Img2 from "@/assets/Image + Line (2).png";
import Img3 from "@/assets/Image + Line (3).png";
import Img4 from "@/assets/Image + Line (4).png";
import Img5 from "@/assets/Image + Line.png";
import { FaStar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";

interface ProductProp {
  id: number;
  image: string;
  status: string;
  price: number;
  discount: number;
  title: string;
}

const productList: ProductProp[] = [
  {
    id: 1,
    image: Img1,
    status: "",
    price: 530,
    discount: 0,
    title: "Beautiful bouquet",
  },
  {
    id: 2,
    image: Img2,
    status: "Top Pick",
    price: 530,
    discount: 0,
    title: "Beautiful bouquet",
  },
  {
    id: 3,
    image: Img3,
    status: "Lower price",
    price: 530,
    discount: 0,
    title: "Beautiful bouquet",
  },
  {
    id: 4,
    image: Img4,
    status: "",
    price: 530,
    discount: 0,
    title: "Beautiful bouquet",
  },
  {
    id: 5,
    image: Img5,
    status: "Sale",
    price: 530,
    discount: 250,
    title: "Beautiful bouquet",
  },
];

const Products = () => {
  return (
    <div className="mb-16">
      <div className="flex gap-3 md:w-full sm:w-[320px] overflow-x-scroll md:overflow-hidden">
        {productList?.map((item) => {
          return (
            <div key={item?.id}>
              <div className="border border-gray-300 rounded-md relative w-[170px]">
                <img src={item?.image} className="rounded-md" alt="images" />
                <div className="p-2 bg-gray-50 rounded-b-md">
                  <p className="text-xs font-semibold text-[#0F7B9B]">
                    1000 and 1 flowers
                  </p>
                  <p className="my-2 font-semibold">{item?.title}</p>
                  <div className="flex gap-1 mt-7">
                    <div className="text-[#FFA31A] text-sm flex gap-1 items-center">
                      <p className="text-xs">4.6</p>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 text-xs">(1,000)</p>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <p
                      className={`bg-gray-200 w-fit px-1 font-bold rounded-md border border-gray-300 ${
                        item?.discount > 0 && "line-through decoration-red-500"
                      }`}
                    >
                      <span className="text-gray-400 mr-1">$</span>
                      {item?.price}
                    </p>
                    <p className="font-extrabold text-red-500 ">
                      {item?.discount > 0 && `$${item?.discount}`}
                    </p>
                  </div>
                  <div className="text-xs mt-2">Typical range: $100-$600</div>
                  <div
                    className={`absolute top-2 left-3 text-white font-medium px-2 py-1 text-xs rounded-md ${
                      item?.status === "Sale" && "bg-red-500"
                    } ${item?.status === "Top Pick" && "bg-[#56C984]"} ${
                      item?.status === "Lower price" && "bg-[#1E90D6]"
                    }`}
                  >
                    {item?.status}
                  </div>
                  <button title="Add to cart" className="absolute top-2 right-3 cursor-pointer">
                    <FiPlusCircle className="text-[#50BCD9]" size={20} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
