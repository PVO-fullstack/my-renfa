import { useState } from "react";
import Layout from "@/app/layout";
import { ModelList } from "@/component/ModelList";
import { Part } from "@/component/Part";
import { SideBar } from "@/component/SideBar";
import { Modal } from "@/component/Modal";
import parts from "../data/350.json";

export default function Model() {
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);

  const openModal = (index) => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);
  return (
    <Layout>
      <Part openModal={openModal} />
      {showModal && <Modal src={parts[activeImgIdx]} onClose={closeModal} />}
    </Layout>
  );
}
