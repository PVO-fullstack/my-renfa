import cars from "../data/cars.json";
import { useRouter } from "next/router";
import css from "./PartsList.module.css";

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
      <h2 style={{ textAlign: "center", color: "black" }}>{model}</h2>
      {/* <ul style={{ textAlign: "center" }}> */}
      <table className={css.partsTable}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "rgb(64 224 208 / 41%)",
                border: "1px solid red",
                color: "black",
                padding: "5px",
                fontSize: "25px",
              }}
            >
              Articul
            </th>
            <th
              style={{
                backgroundColor: "rgb(64 224 208 / 41%)",
                border: "1px solid red",
                color: "black",
                padding: "5px",
                fontSize: "25px",
              }}
            >
              Name
            </th>
            <th
              style={{
                backgroundColor: "rgb(64 224 208 / 41%)",
                border: "1px solid red",
                color: "black",
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
                  border: "1px solid red",
                  backgroundColor: "rgb(255 254 22 / 41%)",
                  color: "black",
                  fontSize: "15px",
                  padding: "5px",
                }}
              >
                {item.Articul}
              </td>
              <td
                style={{
                  border: "1px solid red",
                  backgroundColor: "rgb(255 254 22 / 41%)",
                  color: "black",
                  fontSize: "20px",
                  padding: "5px",
                }}
              >
                {item.Name}
              </td>
              <td
                style={{
                  border: "1px solid red",
                  backgroundColor: "rgb(255 254 22 / 41%)",
                  color: "black",
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
