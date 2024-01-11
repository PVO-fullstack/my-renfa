// import clientPromise from "../../../lib/mongodb";
// import { NextResponse } from "next/server";

// export async function POST() {
//   const client = await clientPromise;
//   const db = client.db("parts_list");
//   const res = await axios.post
//   const data = await res.json();

//   return NextResponse.json(data);
// }

// import clientPromise from "../../../lib/mongodb";
// import axios from "axios";

// export default async function (req, res) {
//   try {
//     if (req.method === "POST") {
//       const client = await clientPromise;
//       const db = client.db("parts_list");

//       const parts = await db.insertMany({ ...req.body });

//       res.json(parts);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }
