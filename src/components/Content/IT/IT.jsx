import { Table } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

const Vulnerabilities = ({ data }) => {
  return (
    <>
      {console.log(data)}

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Product and Version</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Vulnerability</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Published Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Vendor</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Severity Level</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reference</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item, index) => {
            if (item.is_it === true) {
              return (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Text size={"2"}>{item.product_name_version}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"2"}>{item.vulnerability}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"2"}>{item.published_date}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"2"}>{item.vendor}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"2"}>{item.severity_level}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"2"} className="text-blue-500">
                      <a href="">{item.reference}</a>
                    </Text>
                  </Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table.Root>
    </>
  );
};
export default Vulnerabilities;
