import React, { useEffect, useState } from "react";
import Table from "../ui/table";
import TableCell from "../ui/table-cell";
import { ICar } from "@/lib/types";

interface StepsProps {
  carDetail: ICar;
}

const RejectedOffer: React.FC<StepsProps> = ({ carDetail }) => {
  const { currency, id: carId, sale_price } = carDetail;

  const [openTable, setOpenTable] = useState("close");
  const [offers, setOffer] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    setOpenTable((pre) => (pre == "close" ? "open" : "close"));
  }

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_OUR_API}/offer-list/${carId}`
        );

        if (!response.ok) {
          throw new Error("Can't get rejected offers");
        }

        const { offers } = await response.json();
        setOffer(Object.entries(offers));
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (offers?.length == 0 || error) return null;

  return (
    <div className=" border border-gray-100  rounded-md">
      <button
        onClick={handleClick}
        className=" flex justify-between p-4 items-center w-full"
      >
        <p className=" font-semibold">View rejected offers</p>
        <span className=" text-3xl block">
          {openTable == "close" ? "+" : "-"}
        </span>
      </button>
      {openTable == "open" && (
        <div className={`px-4`}>
          <Table columns="md:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr]">
            <Table.Header>
              <TableCell>user</TableCell>
              <TableCell>amount ({currency})</TableCell>
              <TableCell classes=" hidden md:block">Difference (%)</TableCell>
            </Table.Header>

            <Table.Body>
              {offers.map((offer: any, idx: number) => (
                <RowTable
                  offer={offer}
                  key={idx}
                  salePrice={sale_price}
                  currency={currency}
                />
              ))}
              <Table.Row>
                <TableCell>seller asking</TableCell>
                <TableCell classes="font-semibold">
                  {sale_price.toLocaleString()}
                </TableCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};

export default RejectedOffer;

function RowTable({ offer, currency, salePrice }: any) {
  const differ = ((offer[1] / salePrice) * 100 - 100).toFixed(0);

  return (
    <Table.Row>
      <TableCell>{offer[0]}</TableCell>
      <TableCell classes="font-semibold">{offer[1].toLocaleString()}</TableCell>
      <TableCell classes=" hidden md:block">{differ}%</TableCell>
    </Table.Row>
  );
}
