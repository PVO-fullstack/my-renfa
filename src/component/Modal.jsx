import css from "./Modal.module.css";

export const Modal = ({ src, onClose }) => {
  const kurs = 40;

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleOnClickBtn = () => {
    const partList = [];
    const isLocalStorage = localStorage.getItem("part");
    if (isLocalStorage) {
      const getLS = JSON.parse(localStorage.getItem("part"));
      partList.push(...getLS, src);
      localStorage.setItem("part", JSON.stringify(partList));
      return;
    }
    partList.push(src);
    localStorage.setItem("part", JSON.stringify(partList));
  };

  return (
    <div onClick={handleOverlayClick} className={css.Overlay}>
      <div className={css.Modal}>
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "700px",
            maxHeight: "90vh",
            backgroundColor: "white",
          }}
        >
          <p style={{ textAlign: "center" }}>Каталожний номер: {src.Articul}</p>
          <p style={{ textAlign: "center" }}>Назва: {src.Part_Name}</p>
          <img
            style={{
              display: "block",
              margin: "auto",
              maxHeight: "250px",
              maxWidth: "350px",
              padding: "10px",
            }}
            src={src.Img}
            alt=""
          />
          <p style={{ textAlign: "center" }}>Опис: {src.Description}</p>
          <p style={{ textAlign: "center" }}>Ціна: {src.Price * kurs} грн</p>
          <p style={{ textAlign: "center" }}>Наявність: {src.Quantity} шт.</p>
          <p style={{ textAlign: "center" }}>Виробник: {src.Country}</p>
          <button
            onClick={handleOnClickBtn}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            type="button"
          >
            Додати до корзини
          </button>
        </div>
      </div>
    </div>
  );
};
