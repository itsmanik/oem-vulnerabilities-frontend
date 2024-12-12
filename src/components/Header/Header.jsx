import { Heading, Text } from "@radix-ui/themes";
import SearchBox from "../UI/SearchBox";

const Header = ({ onSearch }) => {
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
      <SearchBox onSearch={ onSearch }/>
    </>
  );
};
export default Header;
