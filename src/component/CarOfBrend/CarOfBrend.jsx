import { Brand } from "../Brand/Brand";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import { BrandLayout } from "../New/BrandLayout/BrandLayout";

export const CarOfBrend = ({ brand }) => {
  let brandName = {};

  const takeBrand = async () => {
    switch (brand) {
      case "MG":
        brandName = mg;
        break;
      case "Chery":
        brandName = chery;
        break;
      case "Geely":
        brandName = geely;
        break;
      case "FAW":
        brandName = faw;
        break;
      case "JAC":
        brandName = jac;
        break;
      default:
        brandName = {};
    }
  };

  takeBrand();

  return (
    <>
      {brandName.title && (
        <BrandLayout open={brandName.title}>
          <Brand title={brandName.title} data={brandName.cars} />
        </BrandLayout>
      )}
    </>
  );
};
