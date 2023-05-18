import parts from "../data/350.json";
import css from "./Part.module.css";

// const partsList = JSON.parse(parts);

export const Part = ({ openModal }) => {
  const kurs = 40;

  return (
    <ul className={css.ImageGallery}>
      {parts.map((part, index) => (
        <li className={css.ImageGalleryItem} key={part.Articul}>
          <a
            onClick={(e) => {
              e.preventDefault();
              openModal(index);
            }}
            href={part.Img}
          >
            <p
              style={{
                color: "black",
                height: "40px",
                textAlign: "center",
                padding: "0 10px",
              }}
            >
              {part.Part_Name}
            </p>
            <img
              className={css.ImageGalleryItem_image}
              src={part.Img}
              alt={part.Description}
            />
            <p style={{ color: "black", textAlign: "center" }}>
              Ціна: {part.Price * kurs} грн
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};
