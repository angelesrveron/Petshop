"use client";
import Image from 'next/image';
import { useAppContext } from "@/app/contexts/AppContext";
import styles from "./AddToCart.module.css";
//del appcontext necesito el handleaddtocart

const AddToCart = ({ name, price, id, image, }) => {
  const { handleAddToCart } = useAppContext();

  return (
    <div>
    <div className={`${styles["contenedor"]} `} >
   
    
      <button
        className={`${styles["button2"]} `}
        
      >
        <Image
          src={`/imgs/bag.png`}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "20px", height: "auto"}} // optional
          alt='button-shop'
          position='absolute'
        />
        Comprar ahora
      </button>
      <button
        className={`${styles["button1"]} `}
        onClick={() => handleAddToCart(name, price, image, id, 1)}
      >
        <Image
          src={`/imgs/cart-icon.svg`}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "30px", height: "auto" }} // optional
          alt='hero'
          position='absolute'
        />
        Agregar al carrito
      </button>
   
    </div>
   
  </div>

  );
};

export default AddToCart;
