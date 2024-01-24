import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

export default async function (req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("parts_list");
    // db.collection("parts").createIndex({ Part_Name: "text" });
    // db.collection("parts").createIndex({
    //   Part_Name: "text",
    //   default_language: "ru",
    // });
    const { id } = req.query;
    // console.log(id);
    // const modelParts = await db.parts.aggregate([
    //   {
    //     $project: {
    //       returnObject: {
    //         $regexFindAll: { input: "$Part_Name", regex: /Фильтр/ },
    //       },
    //     },
    //   },
    // ]);

    const modelParts = await db
      .collection("parts")
      .findOne({ _id: new ObjectId(id) });

    // const modelParts = await db
    //   .collection("parts")
    //   .find({ Articul: articul })

    // .find({ $regex: /articul/ })
    // .toArray();

    // console.log("first", modelParts);
    res.json(modelParts);
  } catch (e) {
    console.error(e);
  }
}
