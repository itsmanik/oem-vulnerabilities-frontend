import { Heading, Text } from "@radix-ui/themes";
import SearchBox from "../UI/SearchBox";

const Header = ({ onSearch, onSortChange }) => {
  return (
    <>
      <Heading className="pb-2">Vulnerability Report</Heading>
      <hr className="pb-3" />
      <Text size={"3"}>
      Welcome to the Vulnerability Report page, where we provide a detailed overview of all critical and high-severity vulnerabilities identified in IT and OT equipment. This comprehensive list is sourced directly from official OEM platforms and other relevant web sources, ensuring accurate and timely information. Each entry includes key details such as vulnerability descriptions, severity levels, and recommended mitigation strategies to help organizations address potential risks effectively.
      </Text>
      <div className="flex text-xs items-center gap-4 mt-4 text-gray-500">
        <SearchBox onSearch={onSearch} />
        <select
          className="border rounded translate-y-1 px-3 py-2"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="" className="">Sort by...</option>
          <option value="severity">Severity Level</option>
          <option value="vendor">Vendor</option>
          <option value="publishedDate">Published Date</option>
          <option value="name">Name</option>
        </select>
      </div>
    </>
  );
};

export default Header;