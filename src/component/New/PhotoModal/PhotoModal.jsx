"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../../PartModal.module.css";
import { useGetPartByIdQuery } from "@/apiService/apiPartsRTK";
import Image from "next/image";

export const PhotoModal = (show, handleClose, id) => {
  const { data: part } = useGetPartByIdQuery(id);

  return (
    <>
      {/* {part && ( */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {/* <Button
          onClick={() => {
              setIsPart(!isPart);
          }}
        >
          {!isPart ? "Part" : "IMG"}
        </Button> */}

          <Form
          //   onSubmit={handleSubmit}
          >
            <>
              <Form.Group
                style={{ display: "flex" }}
                className="mb-3"
                controlId="Img"
              >
                <Form.Label className={css.label}>Img</Form.Label>
                <Form.Control
                  type="file"
                  name="Img"
                  //   onChange={handleChangeImg}
                />
              </Form.Group>
              {part && (
                <Image
                  src={part.Img}
                  alt={part.Part_Name}
                  width={100}
                  height={100}
                >
                  {part.Part_Name}
                </Image>
              )}
              <Button
                //   onClick={handleChangeImgBtn}
                variant="primary"
                type="submit"
              >
                Змінити фото
              </Button>
            </>
          </Form>
        </Modal.Body>
      </Modal>
      {/* )} */}
    </>
  );
};
