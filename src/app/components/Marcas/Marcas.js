import Image from 'next/image';
import styles from '@/app/components/Secciones/Secciones.module.css'
const Marcas = () => {
  return (
   
  <div className='flex justify-around p-10 border-solid border-b-2  mb-8'  >
  <Image
      src={`/imgs/products/whiskas.png`}
      width={150}
      height={0}
      alt='hero'
      className={styles.imagen}
    />
    <Image
      src={`/imgs/products/purina.png`}
      width={150}
      height={0}
      alt='hero'
      className={styles.imagen}
    />
    <Image
      src={`/imgs/products/royal.png`}
      width={150}
      height={0}
      alt='hero'
      className={styles.imagen}
    />
    <Image
      src={`/imgs/products/pedigree.png`}
      width={150}
      height={0}
      alt='hero'
      className={styles.imagen}
    />
  </div>
 
  );
};

export default Marcas;
