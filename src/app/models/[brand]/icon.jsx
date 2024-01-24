import { ImageResponse } from "next/server";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function icon({ params }) {
  console.log("model", params.brand);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: "10px",
        }}
      >
        PVO
      </div>
    ),
    size
  );
}
