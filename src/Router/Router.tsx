import { FC, ReactElement, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
const Portfolio = lazy(() => import("Pages/Portfolio"));

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />}></Route>
    </Routes>
  );
};

export default Router;
