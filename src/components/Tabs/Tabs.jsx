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
        <TabNav.Link asChild active={location.pathname === "/vulns/all"}>
          <Link to="/vulns/all">All</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={location.pathname === "/vulns/vulnerabilities"}>
          <Link to="/vulns/vulnerabilities">Vulnerabilities</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={location.pathname === "/vulns/advisories"}>
          <Link to="/vulns/advisories">Advisories</Link>
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
};
export default Main;
