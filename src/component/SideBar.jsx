import Link from "next/link";
import model from "../data/model.json";

export const SideBar = () => {
  return (
    <ul
      style={{
        position: "fixed",
        top: "60px",
        zIndex: "2",
        listStyle: "none",
        padding: "0",
        backgroundColor: "inheryt",
        minWidth: "300px",
        marginLeft: "30px",
      }}
    >
      {model.map((item) => (
        <Link
          key={item.Brend}
          // href={"/models/MG"}

          href={{
            pathname: `/models/[car]`,
            query: { car: item.Brend },
          }}
        >
          <li
            style={{
              backgroundColor: "rgb(64 224 208 / 41%)",
              textAlign: "center",
              border: "2px solid red",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ height: "40px", margin: "10px" }}
              src={item.logo}
              alt=""
            />
            <p
              style={{
                fontSize: "40px",
                margin: "10px",
                width: "100px",
                color: "white",
              }}
            >
              {item.Brend}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
};
