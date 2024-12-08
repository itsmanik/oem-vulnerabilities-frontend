import {
  Home,
  BriefcaseBusiness,
  MessageSquareMore,
  ChartColumnIncreasing,
  Telescope,
  Bell,
  CalendarDays,
  Users,
  Building2,
  MicVocal,
  LifeBuoy,
  User,
  Settings,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

const AsideNav = () => {
  return (
    <>
      <div className="flex fixed left-0 top-0 text-white">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" location="/" />
          <SidebarItem
            icon={<Telescope size={20} />}
            text="Export"
            location="/export"
          />
          <SidebarItem
            icon={<CalendarDays size={20} />}
            text="Vulnerabilities"
            location="/vulns"
          />
          <SidebarItem
            icon={<BriefcaseBusiness size={20} />}
            text="FAQ"
            location="/knowledge-base"
          />
          <SidebarItem
            icon={<Bell size={20} />}
            text="Tutorials"
            location="/tutorial"
            batch
          />
          <SidebarItem
            icon={<Users size={20} />}
            text="FeedBack"
            location="/feedback"
          />
          <SidebarItem
            icon={<MicVocal size={20} />}
            text="Report Vulnerability"
            location="/report"
          />
          <SidebarItem
            icon={<ChartColumnIncreasing size={20} />}
            text="Scraping Details"
            location="/scraper"
          />
          <SidebarItem
            icon={<MessageSquareMore size={20} />}
            text="Threads"
            location="/discussion"
            active={true}
          />
          <SidebarItem
            icon={<User size={20} />}
            text="Reported Vulnerabilities"
            location="/reported"
          />
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            location="/settings"
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            location="/tutorials"
          />
        </Sidebar>
      </div>
    </>
  );
};

export default AsideNav;
