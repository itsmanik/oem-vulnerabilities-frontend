import { Table } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

const Advisories = ({ allData }) => {
    const advisoriesData = [
        {
            date: "2023-10-01",
            advisory: "Security Update",
            severity: "High",
            description: "Critical security update for system vulnerabilities.",
            link: "https://example.com/security-update"
        },
        {
            date: "2023-09-15",
            advisory: "Maintenance Notice",
            severity: "Medium",
            description: "Scheduled maintenance on the server.",
            link: "https://example.com/maintenance-notice"
        },
        {
            date: "2023-08-30",
            advisory: "Feature Release",
            severity: "Low",
            description: "New feature release for the application.",
            link: "https://example.com/feature-release"
        }
    ];
    return (
        <>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Advisory</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Severity</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Link</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {advisoriesData.map((advisory, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Text size={"1"}>{advisory.date}</Text>
                            </Table.Cell>
                            <Table.Cell>
                                <Text size={"1"}>{advisory.advisory}</Text>
                            </Table.Cell>
                            <Table.Cell>
                                <Text size={"1"}>{advisory.severity}</Text>
                            </Table.Cell>
                            <Table.Cell>
                                <Text size={"1"}>{advisory.description}</Text>
                            </Table.Cell>
                            <Table.Cell>
                                <Text size={"1"} className="text-blue-500">
                                    <a href={advisory.link}>More Info</a>
                                </Text>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    );
};

export default Advisories;