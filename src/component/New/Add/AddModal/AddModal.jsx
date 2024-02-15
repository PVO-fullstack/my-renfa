"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { StorageTable } from "../../Storage/StorageTable/StorageTable";
import style from "./AddModal.module.scss";
import { useDispatch } from "react-redux";
import { createAdds } from "@/apiService/apiAdd";

export const AddModal = ({ close }) => {
  const [adds, setAdds] = useState();
  const [count, setCount] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const newAdd = localStorage.getItem("newAdd");
    if (newAdd) {
      setAdds(JSON.parse(newAdd));
    }
  }, []);

  const handleGetCount = (data) => {
    setCount(data);
  };

  const handleSave = () => {
    const addLS = localStorage.getItem("newAdd");
    if (addLS) {
      const newAdd = JSON.parse(addLS);
      const partId = newAdd.map((el) => {
        return { id: el._id, ordered: el.count };
      });
      dispatch(createAdds({ partId }));
    }
    localStorage.removeItem("newAdd");
    close();
  };

  return (
    <Modal>
      <div className={style.conteiner}>
        <button onClick={close}>close</button>
        <StorageTable get={handleGetCount} modal={true} parts={adds} />
        <button onClick={handleSave}>Зберегти</button>
      </div>
      {/* <ul>{adds && adds.map((item) => <li>{item._id}</li>)}</ul> */}
    </Modal>
  );
};
