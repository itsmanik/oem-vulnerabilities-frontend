import Tabs from "../Tabs/Tabs";
import { Route, Routes } from "react-router-dom";
import All from "../Content/All/All"
import Vulnerabilities from "./Vulnerabilities/Vulnerabilities";

const Content = () => {
  return (
    <>
      <Tabs />
      <Routes>
        <Route path="/">
          <Route path="" element={<All />} />
          <Route path="vulnerabilities" element={<Vulnerabilities />} />
        </Route>
      </Routes>
    </>
  );
};
export default Content;
