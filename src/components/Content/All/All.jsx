import React, { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import axiosInstance from "../../../axios";

const All = ({ data }) => {
  console.log(data);

  
  return (
    <Table.Root>
      {/* Table header */}
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Release</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Platform</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Impact</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Max Security</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Article</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Download</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Build Number</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Details</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      {/* Table body */}
      <Table.Body>
        {Array.isArray(data) && data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Text size={"1"}>{item.published_date}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"}>{item.product_name}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"}>{item.oem_name}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"}>{item.severity_level}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"}>-</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"} className="text-blue-500">
                <a href="">{item.mitigation_strategy}</a>
              </Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"} className="text-blue-500">
                <a href="">-</a>
              </Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"}>{item.unique_id}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text size={"1"} className="text-blue-500">
                <a href="">{item.vulnerability}</a>
              </Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default All;
