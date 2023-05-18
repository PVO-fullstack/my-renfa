import css from "./Modal.module.css";

export const Modal = ({ src, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
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
          <p style={{ textAlign: "center" }}>Каталожеий номер: {src.Articul}</p>
          <p style={{ textAlign: "center" }}>Назва: {src.Part_Name}</p>
          <img
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "350px",
              padding: "10px",
            }}
            src={src.Img}
            alt=""
          />
          <p style={{ textAlign: "center" }}>Опис: {src.Description}</p>
          <p style={{ textAlign: "center" }}>Ціна: {src.Price} грн</p>
          <p style={{ textAlign: "center" }}>Наявність: {src.In_stock}</p>
          <p style={{ textAlign: "center" }}>Виробник: {src.Country}</p>
        </div>
      </div>
    </div>
  );
};
