import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import "./index.css"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/gifts" element={<Home />} />
        <Route path="/" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
