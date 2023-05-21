export const OrderList = () => {
  const partList = JSON.parse(localStorage.getItem("part"));

  return (
    <div>
      {partList.map((part) => (
        <li key={part.Articul}>{part.Part_Name}</li>
      ))}
    </div>
  );
};
