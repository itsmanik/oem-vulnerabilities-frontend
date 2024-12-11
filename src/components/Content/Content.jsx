import Tabs from "../Tabs/Tabs";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import All from "../Content/All/All";
import Vulnerabilities from "./Vulnerabilities/Vulnerabilities";
import Advisories from "./Advisories/Advisories";

const DynamicContent = ({ allData }) => {
  const { vulns } = useParams();


  if (vulns === "all") return <All data={allData} />;
  if (vulns === "vulnerabilities") return <Vulnerabilities data={allData} />;
  if (vulns === "advisories") return <Advisories data={allData} />;

  return <div>Not Found</div>;
};

const Content = ({ allData }) => {

    console.log("Content jsx",allData);
  return (
    <>
      <Tabs />
      <Routes>
        <Route path=":vulns" element={<DynamicContent allData={allData} />} />
        <Route path="" element={<Navigate to="all" replace />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default Content;
