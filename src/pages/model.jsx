import Layout from "@/app/layout";
// import { CarsList } from "@/component/CarsList";
import { ModelList } from "@/component/ModelList";
import { Part } from "@/component/Part";
import { SideBar } from "@/component/SideBar";

// import { useRouter } from "next/router";

export default function Model() {
  // const router = useRouter();
  // console.log(router);
  return (
    <Layout>
      {/* < style={{ textAlign: "center", paddingTop: "100px" }}> */}
      {/* <ModelList /> */}
      {/* <SideBar /> */}
      <Part />
      {/* <CarsList /> */}
      {/* </> */}
    </Layout>
  );
}
