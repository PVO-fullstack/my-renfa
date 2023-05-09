import model from "../data/model.json";

export const ModelList = () => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none",
      }}
    >
      {model.map((item) => (
        <li key={item.Brend} style={{ textAlign: "center" }}>
          <img style={{ height: "100px" }} src={item.logo} alt="" />
          <p style={{ fontSize: "40px", margin: "0" }}>{item.Brend}</p>
        </li>
      ))}
    </ul>
  );
};
