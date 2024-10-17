export default function TableCell({ children, classes = "" }: any) {
  return <div className={`px-2 py-4 capitalize ${classes}`}>{children}</div>;
}
