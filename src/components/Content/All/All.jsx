import React from "react";
import { Table } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import axiosInstance from "../../../axios";

const All = ({ data }) => {
  return (
    <Table.Root>
      {/* Table header */}
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

      {/* Table body */}
      <Table.Body>
        {Array.isArray(data) &&
          data.map((item, index) => (
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
          ))}
      </Table.Body>
    </Table.Root>
  );
};

export default All;
