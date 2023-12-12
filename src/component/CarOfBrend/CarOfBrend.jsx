import { useRouter } from "next/router";
import css from "./CarOfBrend.module.scss";
import { Brand } from "../Brand/Brand";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";

export const CarOfBrend = () => {
  const router = useRouter();
  const brand = router.query.slag;

  return (
    <div className={css.carList}>
      {brand === "Chery" && <Brand title={"Chery"} data={chery} />}
      {brand === "MG" && <Brand title={"MG"} data={mg} />}
      {brand === "Geely" && <Brand title={"Geely"} data={geely} />}
      {brand === "FAW" && <Brand title={"FAW"} data={faw} />}
      {brand === "JAC" && <Brand title={"JAC"} data={jac} />}
    </div>
  );
};
