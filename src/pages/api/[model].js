import { useRouter } from "next/router";
import clientPromise from "../../../lib/mongodb";


export default async (req, res) => {
  
//   const router = useRouter();
//   const brand = router.query.slag;

// console.log(router);
// console.log(brand)

   try {
       const client = await clientPromise;
       const db = client.db("parts_list");
       const { model } = req.query
       console.log(model)
       const modelParts = await db
           .collection("parts")
           .find({Model: model})
        //    .sort({ metacritic: -1 })
        //    .limit(10)
           .toArray();

       res.json(modelParts);
   } catch (e) {
       console.error(e);
   }
};