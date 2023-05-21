import { useEffect, useState } from "react";

export const OrderList = () => {
  const [partList, setPartList] = useState([]);

  useEffect(() => {
    const ls = localStorage.getItem("part");
    if (ls) {
      const partList = JSON.parse(ls);
      setPartList(partList);
    }
  }, []);

  return (
    <div>
      {partList.map((part) => (
        <li key={part.Articul}>{part.Part_Name}</li>
      ))}
    </div>
  );
};
