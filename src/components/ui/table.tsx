import { createContext, FC, useContext } from "react";

interface TableProps {
  columns: string;
}

const defaultValue = {
  columns: "",
};

const tableContext = createContext<TableProps>(defaultValue);

function Table({ children, columns }: any) {
  return (
    <tableContext.Provider value={{ columns }}>
      <div role="table" className="  bg-white">
        {children}
      </div>
    </tableContext.Provider>
  );
}

function Header({ children }: any) {
  const { columns } = useContext(tableContext);
  return (
    <div
      role="row"
      className={`${columns} grid   text-gray-500 border-b px-2 tracking-wider text-main`}
    >
      {children}
    </div>
  );
}
function Row({ children }: any) {
  const { columns } = useContext(tableContext);
  return (
    <div
      role="row"
      className={`border-b-gray-10 grid ${columns} border-b px-2`}
    >
      {children}
    </div>
  );
}

function Body({ children }: any) {
  return <div>{children}</div>;
}

function Footer({ children }: any) {
  return (
    <div className=" bg-gray-50 px-8 py-2  tracking-wider ">{children}</div>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
export default Table;
