import Image from 'next/image';
import styles from './HomeHero.module.css'
import Link from 'next/link';

const HomeHero = () => {
  return (
    <div >
    
    <div className='relative'>
  <Image
    src={`/imgs/dog-hero.jpg`}
    width={2000}
    height={2000}
    style={{ width: '1920px', height: '500px'}} 
    alt='hero'
  />
  <div className={`${styles["texto-absolute"]} `}> 
    <h1>Lo mejor para tus mascotas</h1> 
    <p>Aprovechá los descuentos con transferencia!</p> 

    <button> <Link href={`/shop`}>Shop</Link></button>
  </div>
</div>
  

  </div>
  );
};

export default HomeHero;
