import clientPromise from "../../../lib/mongodb";

export default async function (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");

    const parts = await db
      .collection("parts")
      .find({})
      //    .sort({ metacritic: -1 })
      //    .limit(10)
      .toArray();

    res.json(parts);
  } catch (e) {
    console.error(e);
  }
}
