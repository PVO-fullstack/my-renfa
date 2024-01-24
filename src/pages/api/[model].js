import clientPromise from "../../../lib/mongodb";

export default async function (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { model, page, limit } = req.query;

    console.log("page", page, limit);

    const skip = (page - 1) * limit;
    const modelParts = await db
      .collection("parts")
      .find({ Model: model }, { skip, limit })
      .sort({ Part_Name: 1 })
      .limit(parseInt(limit))
      .skip(skip)
      .toArray();

    const count = await db
      .collection("parts")
      // .find()
      .countDocuments({ Model: model });

    res.json({ modelParts: modelParts, count: count });
  } catch (e) {
    console.error(e);
  }
}
