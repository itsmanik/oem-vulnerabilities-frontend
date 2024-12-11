import Tabs from "../Tabs/Tabs";
import { Route, Routes, useParams, Navigate } from "react-router-dom";
import All from "../Content/All/All";
import IT from "./IT/IT";
import OT from "./OT/OT";

const DynamicContent = ({ allData }) => {
  console.log(allData)
  const { vulns } = useParams();
  if (vulns === "all") return <All data={allData} />;
  if (vulns === "it") return <IT data={allData} />;
  if (vulns === "ot") return <OT data={allData} />;

  return <div>Not Found</div>;
};

const Content = ({ allData }) => {
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
