import { getPartById } from "@/apiService/apiParts";
import { ImageResponse } from "next/server";
// import style from "./opengraph-image.module.scss";

export const contentType = "image/webp";

// export default async function og({ params }) {
//   const id = params.part;
//   const onePart = await getPartById(id);

//   return new ImageResponse(
//     (
//       <div className={style.conteiner}>
//         <img src={onePart.Img} alt={onePart.Articul} />
//         <div className={style.dir}></div>
//         <div className={style.text_conteiner}>
//           <p className={style.text}>{onePart.Part_Name}</p>
//         </div>
//       </div>
//     ),
//     size
//   );
// }

export const runtime = "edge";

export const alt = "Renfa";
export const size = {
  width: 1200,
  height: 630,
};

export default async function og({ params }) {
  const id = params.part;
  const onePart = await getPartById(id);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={onePart?.Img} alt={onePart?.Articul} />
        <div
          style={{
            position: "absolute",
            display: "flex",
            backgroundColor: "black",
            opacity: 0.5,
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "10px",
            width: "100%",
          }}
        >
          <p style={{ color: "blue", fontSize: "40px", display: "flex" }}>
            {onePart.Articul}
          </p>
          <p
            style={{
              color: "red",
              fontSize: "40px",
              display: "flex",
              marginLeft: "70px",
            }}
          >
            {onePart.Part_Name} {onePart.Brand}
            {onePart.Model[0]}
          </p>
        </div>
      </div>
    ),
    // <div
    //   style={{
    //     fontSize: 48,
    //     background: "white",
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {onePart.Articul}
    // </div>
    {
      ...size,
    }
  );
}
