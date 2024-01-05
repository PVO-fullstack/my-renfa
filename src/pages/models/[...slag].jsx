import { PartListComponent } from "@/component/New/PartList/PartListComponent";
import { OnePart } from "@/component/New/OnePart/OnePart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Parts() {
  const [part, setPart] = useState([]);
  const [model, setModel] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const modelName = await router.query.slag;
      console.log("modelName", modelName);
      setModel(modelName);
    };
    getData();
  }, [router.query.slag]);

  console.log("Model", model);

  const getParts = (parts) => {
    setPart(parts);
  };

  return (
    <>
      {model && model.length < 3 ? (
        <PartListComponent modelName={model} getParts={getParts} />
      ) : (
        <OnePart />
      )}
    </>
  );
}
