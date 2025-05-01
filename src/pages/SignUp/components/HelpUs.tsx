import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Stars from "@/assets/stars.png";
import Loading from "@/assets/loading.png";
import Gift from "@/assets/gift.png";
import { useNavigate } from "react-router-dom";

const options = [
  "Thoughtful",
  "Practical",
  "Funny",
  "Romantic",
  "Sentimental",
  "Entertaining",
];

const HelpUs = ({ handleTab }: { handleTab: () => void }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selected, setSelected] = useState("");
  const [occasion, setOccasion] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const price = ["USD", "50"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!occasion || !selected || !selectedPrice || !country) {
      setError("You need to answer all questions before continuing.");
      return;
    }

    setLoading(true);
    setError("");
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
       navigate("/gifts");
      }, 5000);
    }
  }, [loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-20 bg-white text-center mx-4 md:mx-0">
        <div>
          <img
            src={Loading}
            width={100}
            alt="loading"
            className="mx-auto mb-4"
          />
          <div className="md:text-3xl text-2xl font-semibold mb-4">
            Generating Gift Ideas...
          </div>
          <div className="md:text-lg">
            Hang tight. Our AI-Powered Genie is generating gift ideas. This can
            take about 5–10 seconds.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 md:w-[450px] mx-4 md:mx-0">
      <div className="flex justify-center">
        <img src={Gift} alt="img" className="w-20 h-20" />
      </div>
      <div className="md:text-3xl text-xl mt-2 md:mt-3 font-semibold text-center">
        Help us find the right gift!
      </div>
      <form className="md:mt-5 mt-3" onSubmit={handleSubmit}>
        <div className="grid">
          <label className="font-semibold text-sm mb-1">
            What's the occasion?
          </label>
          <input
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-[#50BCD9]"
            placeholder="Occasion"
            autoFocus
          />
        </div>

        <div className="grid mt-3">
          <label className="font-semibold text-sm mb-1">
            What type of gift would you like?
          </label>
          <div className="flex gap-2 items-center">
            <div className="w-full max-w-md">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-left focus:outline-none focus:border-[#50BCD9]">
                    <span className="block truncate">
                      {selected || "Select option"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 shadow-lg focus:outline-none">
                    {options.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className={({ active }) =>
                          `cursor-default select-none py-3 px-4 ${
                            idx < options?.length - 1 &&
                            "border-b border-gray-200"
                          } ${active ? "bg-gray-100" : "text-gray-900"}`
                        }
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
        </div>

        <div className="grid mt-4">
          <label className="font-semibold text-sm mb-1">
            What’s the maximum you’re willing to spend?
          </label>
          <div className="flex gap-3">
            {price.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setSelectedPrice(item)}
                className={`flex items-center gap-2 px-10 py-2 rounded-md border text-sm font-
                  ${
                    selectedPrice === item
                      ? " border-[#50BCD9] font-bold"
                      : " border-gray-300"
                  }
                  transition`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid mt-4">
          <label className="font-semibold text-sm mb-1">
            What country should we return the results for?
          </label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-[#50BCD9]"
            placeholder="Country"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            onClick={handleTab}
            className="border border-gray-300 rounded-md bg-gray-50 text-[#0F7B9B] font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#50BCD9] to-[#F14DFF] py-2.5 px-3 font-bold md:text-sm text-[11px] text-white tracking-wide rounded-md flex gap-1.5 items-center justify-center"
          >
            <img src={Stars} className="w-4 h-4" alt="stars" />
            Generate Gift Ideas
          </button>
        </div>
      </form>
      {error && (
        <div className="flex justify-center mt-5">
          <div className="text-red-500 text-sm mt-2">{error}</div>
        </div>
      )}
      <div className="flex justify-center mt-4 mb-5">
        <p className="text-gray-500">Step 2 / 2</p>
      </div>
    </div>
  );
};

export default HelpUs;
