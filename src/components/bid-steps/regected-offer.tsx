import React, { useState } from "react";
import Table from "../ui/table";
import TableCell from "../ui/table-cell";

export default function RegectedOffer({ carId }: any) {
  const [openTable, setOpenTable] = useState("close");

  const table_hight = openTable == "close" ? "h-0" : "h-[224px]";

  function handleClick() {
    setOpenTable((pre) => (pre == "close" ? "open" : "close"));
  }

  return (
    <div className=" border border-gray-100 p-4 rounded-md">
      <div className=" flex justify-between items-center">
        <p>View rejected offers</p>
        <button onClick={handleClick} className=" text-3xl">
          {openTable == "close" ? "+" : "-"}
        </button>
      </div>
      <div
        className={`overflow-x-scroll regected transition-all duration-500 ${table_hight}`}
      >
        <div className="min-w-[480px] ">
          <Table columns="grid-cols-[1fr_1fr_1fr]">
            <Table.Header>
              <TableCell>user</TableCell>
              <TableCell>amount</TableCell>
              <TableCell>Difference (%)</TableCell>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <TableCell>+2011****5784</TableCell>
                <TableCell>AED 539000</TableCell>
                <TableCell>-10.2%</TableCell>
              </Table.Row>
              <Table.Row>
                <TableCell>+2011****5784</TableCell>
                <TableCell>AED 539000</TableCell>
                <TableCell>-10.2%</TableCell>
              </Table.Row>
              <Table.Row>
                <TableCell>+2011****5784</TableCell>
                <TableCell>AED 539000</TableCell>
                <TableCell>-10.2%</TableCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
