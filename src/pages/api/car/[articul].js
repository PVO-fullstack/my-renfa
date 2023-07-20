import clientPromise from "../../../../lib/mongodb";


export default async (req, res) => {
  
   try {
       const client = await clientPromise;
       const db = client.db("parts_list");
       const { articul } = req.query
       console.log(articul)
      const modelParts = await db
           .collection("parts")
           .find({Articul: articul})
           .toArray();

       res.json(modelParts);
   } catch (e) {
       console.error(e);
   }
};