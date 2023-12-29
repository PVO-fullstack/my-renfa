import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { articul } = req.query;
    console.log(articul);
    let regexp = new RegExp(`${articul}`, "ig");
    const modelParts = await db
      .collection("parts")
      .find({ Articul: articul })
      //   .find({ $text: { $search: "Фильтр" } })
      .toArray();

    if (modelParts.length === 0) {
      const parts = await db
        .collection("parts")
        // .find({ Articul: articul })
        // .find({ $text: { $search: articul } })
        // .find({ $text: { $search: regexp } })
        .find({ Part_Name: { $regex: regexp } })
        // .find({ $text: { $search: \ articul \ } })
        .toArray();
      res.json(parts);
      return;
    }

    res.json(modelParts);
  } catch (e) {
    console.error(e);
  }
};
