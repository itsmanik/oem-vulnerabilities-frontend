import { Table } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

const Advisories = ({ data }) => {
  const advisoriesData = [
    {
      date: "2023-10-01",
      advisory: "Security Update",
      severity: "High",
      description: "Critical security update for system vulnerabilities.",
      link: "https://example.com/security-update",
    },
    {
      date: "2023-09-15",
      advisory: "Maintenance Notice",
      severity: "Medium",
      description: "Scheduled maintenance on the server.",
      link: "https://example.com/maintenance-notice",
    },
    {
      date: "2023-08-30",
      advisory: "Feature Release",
      severity: "Low",
      description: "New feature release for the application.",
      link: "https://example.com/feature-release",
    },
  ];
  return (
    <>
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
            if (item.is_it === false) {
              return (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Text size={"1"}>{item.product_name_version}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"1"}>{item.vulnerability}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"1"}>{item.published_date}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"1"}>{item.vendor}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"1"}>{item.severity_level}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size={"1"} className="text-blue-500">
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

export default Advisories;
