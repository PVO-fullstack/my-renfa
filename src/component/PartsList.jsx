import cars from "../data/cars.json";
import { useRouter } from "next/router";

export const PartsList = () => {
  const router = useRouter();
  const model = router.query.slag;
  let parts = [];
  if (model) {
    // model.splice(0, 1);
    parts = cars.filter((car) => car.Model.toString() === model[1]);
  }
  console.log(parts);

  return (
    <div style={{ flex: "auto" }}>
      <h2 style={{ textAlign: "center" }}>{model}</h2>
      {/* <ul style={{ textAlign: "center" }}> */}
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                color: "blue",
                padding: "5px",
                fontSize: "25px",
              }}
            >
              Articul
            </th>
            <th
              style={{
                border: "1px solid black",
                color: "blue",
                padding: "5px",
                fontSize: "25px",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid black",
                color: "blue",
                padding: "5px",
                fontSize: "25px",
              }}
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {parts.map((item) => (
            // <li style={{ display: "flex", gap: "20px" }} key={item.Code}>
            <tr key={item.Code}>
              <td
                style={{
                  border: "1px solid black",
                  // backgroundColor: "#aac8e3",
                  color: "blue",
                  fontSize: "15px",
                  padding: "5px",
                }}
              >
                {item.Articul}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  // backgroundColor: "#3e912b",
                  color: "blue",
                  fontSize: "20px",
                  padding: "5px",
                }}
              >
                {item.Name}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  // backgroundColor: "#aac8e3",
                  color: "blue",
                  fontSize: "20px",
                  padding: "5px",
                }}
              >
                {item.price_usd}
              </td>
            </tr>

            // </li>
          ))}
        </tbody>
      </table>
      {/* </ul> */}
    </div>
  );
};
