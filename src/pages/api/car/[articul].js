import clientPromise from "../../../../lib/mongodb";

export default async function (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    const { articul, page, limit, brend, model } = req.query;
    const skip = (page - 1) * limit;
    let regexp = new RegExp(`${articul}`, "ig");
    let regexpName = new RegExp(`${model}`, "ig");
    let regexpArticul = new RegExp(`${brend}`, "ig");

    let parts = [];
    let count = 0;

    parts = await db
      .collection("parts")
      // .find({ Articul: { $regex: regexp } }, { skip, limit })
      .find(
        { Brand: brend, Model: model, Description: { $regex: regexp } },
        { skip, limit }
      )
      .limit(parseInt(limit))
      .skip(skip)
      .toArray();

    count = await db
      .collection("parts")
      .find(
        { Brand: brend, Model: model, Description: { $regex: regexp } },
        { skip, limit }
      )
      .count();

    if (parts.length === 0) {
      parts = await db
        .collection("parts")
        .find(
          { Brand: brend, Description: { $regex: regexpName } },
          { skip, limit }
        )
        .limit(parseInt(limit))
        .skip(skip)
        .toArray();

      count = await db
        .collection("parts")
        .find(
          { Brand: brend, Description: { $regex: regexpName } },
          { skip, limit }
        )
        .count();
      // res.json({ parts: parts, count: count });
      // return;
    }
    if (parts.length === 0) {
      parts = await db
        .collection("parts")
        .find({ Description: { $regex: regexpArticul } }, { skip, limit })
        .limit(parseInt(limit))
        .skip(skip)
        .toArray();

      count = await db
        .collection("parts")
        .find({ Description: { $regex: regexpArticul } }, { skip, limit })
        .count();
      // res.json({ parts: parts, count: count });
      // return;
    }
    res.json({ modelParts: parts, count: count });
  } catch (e) {
    console.error(e);
  }
}
