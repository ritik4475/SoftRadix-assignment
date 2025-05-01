import { useState } from "react";
import Gift from "@/assets/gift.png";

const TellUs = ({ handleTab }: { handleTab: () => void }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [interests, setInterests] = useState("");
  const [error, setError] = useState("");

  const genders = ["Female", "Male", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age || !selectedGender || !interests) {
      setError("You need to answer all questions before continuing.");
      return;
    }

    setError("");
    handleTab();
  };

  return (
    <div className="md:mx-0 mx-4">
      <div className="flex justify-center">
        <img src={Gift} alt="img" className="w-20 h-20" />
      </div>
      <div className="md:text-3xl text-xl mt-2 md:mt-3 text-center font-semibold">
        Tell us about your gift recipient
      </div>
      <form className="md:mt-5 mt-3" onSubmit={handleSubmit}>
        <div className="grid">
          <label className="font-semibold text-sm mb-1">
            Who are you buying for?
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-[#50BCD9]"
            placeholder="Name"
            autoFocus
          />
        </div>

        <div className="grid mt-3">
          <label className="font-semibold text-sm mb-1">
            How old are they?
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-[#50BCD9] w-22 text-center"
              placeholder="Age"
            />
            <p>years old</p>
          </div>
        </div>

        <div className="grid mt-4">
          <label className="font-semibold text-sm mb-1">
            They identify as:
          </label>
          <div className="flex gap-3">
            {genders.map((gender) => (
              <button
                type="button"
                key={gender}
                onClick={() => setSelectedGender(gender)}
                className={`flex items-center gap-2 md:px-10 px-3 py-2 rounded-md border text-sm transition
                  ${
                    selectedGender === gender
                      ? "border-[#50BCD9] font-bold"
                      : "bg-gray-50 border-gray-300"
                  }`}
              >
                <p
                  className={`border-2 px-1 py-0 rounded-full h-4 w-4 ${
                    selectedGender === gender
                      ? "border-[#50BCD9]"
                      : "border-gray-300"
                  }`}
                ></p>
                {gender}
              </button>
            ))}
          </div>
        </div>

        <div className="grid mt-4">
          <label className="font-semibold text-sm mb-1">
            What do they like to do? Be specific!
          </label>
          <textarea
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-[#50BCD9]"
            placeholder="Enter interests and hobbies"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            type="button"
            className="border border-gray-300 rounded-md bg-gray-50 text-[#0F7B9B] font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-[#50BCD9] py-2 px-3 text-white tracking-wide rounded-md flex gap-1.5 items-center justify-center"
          >
            Continue
          </button>
        </div>
      </form>
      {error && (
        <div className="flex justify-center mt-5">
          <div className="text-red-500 text-sm mt-2">{error}</div>
        </div>
      )}
      <div className="flex justify-center mt-4 mb-5">
        <p className="text-gray-500">Step 1 / 2</p>
      </div>
    </div>
  );
};

export default TellUs;
