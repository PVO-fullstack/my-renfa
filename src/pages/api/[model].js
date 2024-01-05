import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { model } = req.query;
    const modelParts = await db
      .collection("parts")
      .find({ Model: model })
      .sort({ Part_Name: 1 })
      .limit(6)
      .toArray();

    res.json(modelParts);
  } catch (e) {
    console.error(e);
  }
};
