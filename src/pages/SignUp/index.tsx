import TellUs from "./components/TellUs";
import { useState } from "react";
import HelpUs from "./components/HelpUs";

const SignUp = () => {
  const [tab, setTab] = useState("tellUs");

  return (
    <div className=" mt-12">
      <div className="mx-auto md:grid justify-center w-full">
          {tab === "tellUs" ? (
            <TellUs handleTab={() => setTab("helpUs")} />
          ) : (
            <HelpUs handleTab={() => setTab("tellUs")} />
          )}
      </div>
    </div>
  );
};

export default SignUp;
