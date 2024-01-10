import { PartListComponent } from "@/component/New/PartList/PartListComponent";
import { OnePart } from "@/component/New/OnePart/OnePart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Parts({ params }) {
  const [part, setPart] = useState([]);
  const [model, setModel] = useState([]);
  const router = useRouter();

  // console.log("params", params.slag);

  useEffect(() => {
    const getData = async () => {
      const modelName = await router.query.slag;
      console.log("modelName", modelName);
      await setModel(modelName);
    };
    getData();
  }, [router.query.slag]);

  return (
    <>
      {model && model.length < 3 ? (
        <PartListComponent />
      ) : (
        model && <OnePart part={model[2]} />
      )}
    </>
  );
}
