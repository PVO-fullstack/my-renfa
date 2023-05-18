import { useState } from "react";
import Layout from "@/app/layout";
// import { CarsList } from "@/component/CarsList";
import { ModelList } from "@/component/ModelList";
import { Part } from "@/component/Part";
import { SideBar } from "@/component/SideBar";
import { Modal } from "@/component/modal";
import parts from "../data/350.json";

// import { useRouter } from "next/router";

export default function Model() {
  // const [partsList, setPartsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(null);

  // const baza = () => {
  //   setPartsList(JSON.parse(parts));
  // };

  const openModal = (index) => {
    setShowModal(true);
    setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);
  // const router = useRouter();
  // console.log(router);
  return (
    <Layout>
      {/* < style={{ textAlign: "center", paddingTop: "100px" }}> */}
      {/* <ModelList /> */}
      {/* <SideBar /> */}
      <Part openModal={openModal} />
      {showModal && <Modal src={parts[activeImgIdx]} onClose={closeModal} />}
      {/* <CarsList /> */}
      {/* </> */}
    </Layout>
  );
}
