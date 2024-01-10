import clientPromise from "../../../../lib/mongodb";

export default async function (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { articul, page, limit } = req.query;
    const skip = (page - 1) * limit;
    let regexp = new RegExp(`${articul}`, "ig");
    const modelParts = await db
      .collection("parts")
      .find({ Articul: { $regex: regexp } }, { skip, limit })
      .limit(parseInt(limit))
      .skip(skip)
      .toArray();

    const count = await db
      .collection("parts")
      .find({ Articul: { $regex: regexp } })
      .count();

    if (modelParts.length === 0) {
      const parts = await db
        .collection("parts")
        .find({ Part_Name: { $regex: regexp } }, { skip, limit })
        .limit(parseInt(limit))
        .skip(skip)
        .toArray();

      const count = await db
        .collection("parts")
        .find({ Part_Name: { $regex: regexp } })
        .count();
      res.json({ parts: parts, count: count });
      return;
    }

    res.json({ modelParts: modelParts, count: count });
  } catch (e) {
    console.error(e);
  }
}
