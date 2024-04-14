import React from "react";
import { Route, Routes } from "react-router-dom";
import path from "./utils/path.js";
import {
  AboutUs,
  Home,
  OurAgents,
  Properties,
  PublicLayout,
  Search,
} from "./pages/public/index.jsx";
import { Modal } from "./components/index.jsx";
import { useAppStore } from "./store/useAppStore.jsx";

const App = () => {
  const { isShowModal } = useAppStore();
  return (
    <div className="">
      {isShowModal && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT_US} element={<AboutUs />} />
          <Route path={path.SEARCH} element={<Search />} />
          <Route path={path.PROPERTIES} element={<Properties />} />
          <Route path={path.OUR_AGENTS} element={<OurAgents />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
