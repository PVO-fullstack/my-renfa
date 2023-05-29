// import { useState } from "react";
import Layout from "@/app/layout";
// import { ModelList } from "@/component/ModelList";
// import { Part } from "@/component/Part";
// import { SideBar } from "@/component/SideBar";
// import { Modal } from "@/component/Modal";
// // import parts from "../data/350.json";

export default function Model() {
  //   const [showModal, setShowModal] = useState(false);
  //   const [activeImgIdx, setActiveImgIdx] = useState(null);
  //   const [part, setPart] = useState([]);

  //   const openModal = (index) => {
  //     setShowModal(true);
  //     setActiveImgIdx(index);
  //   };

  //   const getParts = (parts) => {
  //     setPart(parts);
  //   };

  //   const closeModal = () => setShowModal(false);
  return (
    <Layout>
      <div>Model</div>
      {/* <Part openModal={openModal} getAllParts={getParts} />
      {showModal && <Modal src={part[activeImgIdx]} onClose={closeModal} />} */}
    </Layout>
  );
}
