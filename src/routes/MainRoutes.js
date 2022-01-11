import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Random from "../pages/Random";
import Alkoholfrei from "../pages/Alkholfrei";
import SearchPage from "../pages/SearchPage";

const MainRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<List />} />
        <Route path="/alkoholfrei" element={<Alkoholfrei />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search/:drinks" element={<SearchPage />} />
        <Route path="/:category/:drinkName/*" element={<Detail />} />
      </Routes>
    </Layout>
  );
};

export default MainRoutes;
