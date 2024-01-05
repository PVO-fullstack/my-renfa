import clientPromise from "../../../../lib/mongodb";

export default async function (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { articul, limit = 6 } = req.query;
    // const {  } = req.query;
    const query = articul.split("page");
    // console.log("query", query);
    const page = query[1] || 1;
    const skip = (page - 1) * limit;
    // console.log(articul);
    // console.log(page);
    let regexp = new RegExp(`${query[0]}`, "ig");
    const modelParts = await db
      .collection("parts")
      .find({ Articul: articul }, "-createdAt -updatedAt", {
        skip,
        limit,
      })
      //   .find({ $text: { $search: "Фильтр" } })
      .toArray();

    // console.log(modelParts);

    if (modelParts.length === 0) {
      const parts = await db
        .collection("parts")
        // .find({ Articul: articul })
        // .find({ $text: { $search: articul } })
        // .find({ $text: { $search: regexp } })
        .find({ Part_Name: { $regex: regexp } })
        .limit(limit)
        .skip(skip)
        // .find({ $text: { $search: \ articul \ } })
        .toArray();

      const count = await db
        .collection("parts")
        .find({ Part_Name: { $regex: regexp } })
        .count();

      console.log("parts", parts);
      console.log("count", count);
      res.json({ parts: parts, count: count });
      return;
    }

    res.json(modelParts);
  } catch (e) {
    console.error(e);
  }
};
