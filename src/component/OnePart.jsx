import { getOnePart } from '@/apiService/apiParts';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Modal } from './Modal';
import css from "./OnePart.module.css"

export const OnePart = () => {
const [onePart, setOnePart] = useState()
const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const model = router.query.slag;
    console.log("model", model);
    
    useEffect(() => {
        const getPart = async () =>{
       const part = await getOnePart(model[2])
setOnePart(part)     
        }
getPart()

    }, [model])

    const openModal = () => {
        setShowModal(true);
        // setActiveImgIdx(index);
      };
    
      const closeModal = () => setShowModal(false);

    console.log(onePart)
    
  return (
    <>
    {onePart && <div style={{marginLeft: "350px", paddingTop: "50px", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <img style={{borderRadius:"20px", border:"3px solid red"}} onClick={openModal} src={onePart[0].Img} width={300} alt={onePart[0].Part_Name}/>
<div style={{backgroundColor:"#d9cdcd78", padding:"20px", boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}>
<p className={css.text}>Назва: {onePart[0].Part_Name}</p>
        <p className={css.text}>Каталожний номер: {onePart[0].Articul} </p>
        <p className={css.text}>Країна виробник: {onePart[0].Country}</p>
        <p className={css.text}>Ціна: {Math.round(onePart[0].Price * 40)}, грн</p>
        <p className={css.text}>Встановлюється на автомобілі: {model[0]} {onePart[0].Model.join( )}</p>
</div>
    </div>}
    {showModal && <Modal src={onePart[0]} onClose={closeModal} />}
    </>
    )
  
}
