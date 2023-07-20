import Layout from "@/app/layout";
import { Modal } from "@/component/Modal";
import { OnePart } from "@/component/OnePart";
import { Part } from "@/component/Part";
import { PartsList } from "@/component/PartsList";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Parts() {
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);
  const [part, setPart] = useState([]);
  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  const openModal = (index) => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);

  const getParts = (parts) => {
    setPart(parts);
  };

  // console.log("part", part);
  // console.log(activeImgIdx)

  return (
    <>
      {/* <PartsList /> */}
      {/* <Part /> */}
      
      {model.length < 3 ? <Part openModal={openModal} getAllParts={getParts} /> : <OnePart/>}
      {/* {showModal && <Modal src={part[activeImgIdx]} onClose={closeModal} />} */}
    </>
  );
}

//   return (
//     <Layout>
//     </Layout>
//   );
// }
