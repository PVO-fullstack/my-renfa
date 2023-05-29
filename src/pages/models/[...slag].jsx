import Layout from "@/app/layout";
import { Modal } from "@/component/Modal";
import { Part } from "@/component/Part";
import { PartsList } from "@/component/PartsList";
import { useState } from "react";

export default function Parts() {
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);
  const [part, setPart] = useState([]);

  const openModal = (index) => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);

  const getParts = (parts) => {
    setPart(parts);
  };

  console.log("part", part);

  return (
    <Layout>
      {/* <PartsList /> */}
      {/* <Part /> */}
      <Part openModal={openModal} getAllParts={getParts} />
      {showModal && <Modal src={part[activeImgIdx]} onClose={closeModal} />}
    </Layout>
  );
}

//   return (
//     <Layout>
//     </Layout>
//   );
// }
