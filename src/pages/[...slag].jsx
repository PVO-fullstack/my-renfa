// import Layout from "@/app/layout";
// import { Modal } from "@/component/Modal";
// import { OnePart } from "@/component/New/OnePart/OnePart";
// import { PartList } from "@/component/PartList/PartList";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function Parts() {
//   const [showModal, setShowModal] = useState(false);
//   const [activeImgIdx, setActiveImgIdx] = useState(null);
//   const [part, setPart] = useState([]);
//   const [model, setModel] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const modelName = router.query.slag;
//     console.log("modelName", modelName);
//     setModel(modelName);
//   }, [router.query.slag]);

//   console.log("Model", model);

//   const openModal = (index) => {
//     setShowModal(true);
//     setActiveImgIdx(index);
//   };

//   const closeModal = () => setShowModal(false);

//   const getParts = (parts) => {
//     setPart(parts);
//   };

//   const onePart = part.filter((item) => item.Articul === model[2]);
//   console.log("part", onePart);
//   // console.log(activeImgIdx)

//   return (
//     <>
//       {/* <PartsList /> */}
//       {/* <Part /> */}
//       Hello
//       {model && model.length < 3 ? (
//         <>
//           <Head>
//             <title>{`Автомобіль ${model[0]}`}</title>
//             <meta
//               name="description"
//               content={`Запчастини до автомобіля ${model[0]}`}
//               key="desc"
//             />
//           </Head>
//           <PartList openModal={openModal} getAllParts={getParts} />
//         </>
//       ) : (
//         <>
//           <Head>
//             <title>{`${onePart[0].Description} ${onePart[0].Articul}`}</title>
//             <meta
//               name="description"
//               content={`${onePart[0].Description} ${onePart[0].Articul}`}
//               key="desc"
//             />
//           </Head>
//           <OnePart />
//         </>
//       )}
//       {/* {showModal && <Modal src={part[activeImgIdx]} onClose={closeModal} />} */}
//     </>
//   );
// }

//   return (
//     <Layout>
//     </Layout>
//   );
// }
