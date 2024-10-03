'use client'
import styles from './ShopPage.module.css'
import ProductsGrid from '@/app/components/ProductsGrid/ProductsGrid';
import { useState } from 'react';

const ShopPage = () => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className='flex'>
      <div className={`${styles["contenedor-busqueda"]} mr-10 `}>
        <div className={`${styles["contenedor-secciones"]} `}>
          <div className='flex flex-col'>
            <p>Mascota</p>
            <button >Perro Adulto</button>
            <button >Gato Adulto</button>
            <button >Perro Cachorro</button>
            <button >Gato Cachorro</button>
          </div>
          <div className='flex flex-col'>
            <p>Categoria</p>
            <button onClick={() => handleCategoryChange('Comida')}>Comida</button>
            <button onClick={() => handleCategoryChange('Higiene')}>Higiene</button>
            <button onClick={() => handleCategoryChange('Juguetes')}>Juguetes</button>
          </div>
          <div className='flex flex-col'>
            <p>Marcas</p>
            <button >Pedigree</button>
            <button >Whiska</button>
            <button >Royal</button>
            <button >Otros</button>
          </div>
        </div>
      </div>
      <ProductsGrid category={category} />
    </div>
  );
};

export default ShopPage;