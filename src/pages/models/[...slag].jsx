import Layout from "@/app/layout";
import { Modal } from "@/component/Modal";
import { OnePart } from "@/component/OnePart";
import { Part } from "@/component/Part";
import { PartsList } from "@/component/PartsList";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Parts() {
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);
  const [part, setPart] = useState([]);
  const router = useRouter();
  const model = router.query.slag;
  console.log("Model", model);

  const openModal = (index) => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);

  const getParts = (parts) => {
    setPart(parts);
  };

  const onePart = part.filter((item) => item.Articul === model[2]);
  console.log("part", onePart);
  // console.log(activeImgIdx)

  return (
    <>
      <Head>
        <title>{`${onePart[0].Description} ${onePart[0].Articul}`}</title>
        <meta
          name="description"
          content={`${onePart[0].Description} ${onePart[0].Articul}`}
          key="desc"
        />
      </Head>
      {/* <PartsList /> */}
      {/* <Part /> */}

      {model && model.length < 3 ? (
        <Part openModal={openModal} getAllParts={getParts} />
      ) : (
        <OnePart />
      )}
      {/* {showModal && <Modal src={part[activeImgIdx]} onClose={closeModal} />} */}
    </>
  );
}

//   return (
//     <Layout>
//     </Layout>
//   );
// }
