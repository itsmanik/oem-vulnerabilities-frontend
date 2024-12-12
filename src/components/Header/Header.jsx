import { Heading, Text } from "@radix-ui/themes";
import SearchBox from "../UI/SearchBox";

const Header = ({ onSearch, onSortChange }) => {
  return (
    <>
      <Heading className="pb-1">Security Update Guide</Heading>
      <hr className="pb-3" />
      <Text size={"2"}>
        The Microsoft Security Response Center (MSRC) investigates all reports
        of security vulnerabilities affecting Microsoft products and services,
        and provides the information here as part of the ongoing effort to help
        you manage security risks and help keep your systems protected.
      </Text>
      <div className="flex text-xs items-center gap-4 mt-4">
        <SearchBox onSearch={onSearch} />
        <select
          className="border rounded translate-y-1 px-3 py-2 "
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