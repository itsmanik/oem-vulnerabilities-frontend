import { TabNav, Box, Text } from "@radix-ui/themes";
import classes from "./Tabs.module.css";
import All from "../Content/All/All";
import Vulnerabilities from "../Content/Vulnerabilities/Vulnerabilities";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <div className="mb-4">
      <TabNav.Root>
        <TabNav.Link asChild active={location.pathname === "/"}>
          <Link to="/">All</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={location.pathname === "/vulnerabilities"}>
          <Link to="/vulnerabilities">Vulnerabilities</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={location.pathname === "/advisories"}>
          <Link to="/advisories">Advisories</Link>
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
};
export default Main;
