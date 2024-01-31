import { CarOfBrend } from "@/component/CarOfBrend/CarOfBrend";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.brand;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Запчастини на автомобілі ${id}`,
    keywords:
      (id === "MG" &&
        "Morris, Garages, MG, Morris Garages MG, запчасти, автозапчасти,  Morris Garages MG 3, Morris Garages MG 350, Morris Garages MG 5, Morris Garages MG 550, Morris Garages MG 6, Morris Garages MG 750, Morris Garages MG 3SW, автомобили morris garages mg, MG HS, MG ZS, запчастини, купити, запчастини мг, Запчасти MG 350, аксессуары MG 350, детали MG 350, купить запчасти MG 350, найти запчасти MG 350, Запчасти мж 350, аксессуары мж 350, детали мж 350, купить запчасти мж 350, заказать запчасти мж 350 ") ||
      (id === "FAW" &&
        "Фав, запчасти фав, куплю запчасти фав,  faw, запчасть faw, запчасть китайский грузовик, двигатель faw, стартер фав, фав 3252, фав 1011, фав 1031, фав 1041, фав 1047, фав 1051, фав 61, фав, 3312, фав 6371, автозапчасти для фав, запчастини на фав, faw x40, faw x80, faw b30, фав б30, фав х40, фав х80") ||
      (id === "Chery" &&
        "Chery (Чери), Автозапчасти для АВТО, Автозапчасти, Chery, купить запчасти на чери, запчасти, автозапчасти, Двигатель, Кузов, Оптика, Трансмиссия, Шасси, Электрика,  автозапчастина, магазини автозапчастин, інтернет магазин автозапчастин, автозапчасти ") ||
      (id === "Geely" &&
        "GEELY, Джили, купить запчасти на джили, запчасти джили, запчасть китайский, запчасть авто, запчасти джили ск, запчасть авто, купить запчасть, запчасти Geely Emgrand, автозапчасти Джили Эмгранд EC7, джили фс, джили мк, джили сл, ") ||
      (id === "JAC" &&
        "купить запчасти на джак, запчасти на jac, каталог запчасть, запчасть, купить запчасти на джак, фара, двигатель, кузов, автомагазин, запчасти погрузчики jac, купить запчасти +на jac,"),
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default function ModelsList({ params, searchParams }) {
  return (
    <div>
      <CarOfBrend brand={params.brand} />;
    </div>
  );
}
