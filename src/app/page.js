import ProductsGrid from '@/app/components/ProductsGrid/ProductsGrid.js';
import HomeHero from '@/app/components/Hero/HomeHero.js';
import Marcas from '@/app/components/Marcas/Marcas.js'
import Secciones from '@/app/components/Secciones/Secciones.js'
import BusquedaCategorias from '@/app/components/BusquedaCategorias/BusquedaCategorias';
import ProductosDestacados from '@/app/components/ProductosDestacados/ProductosDestacados';
export default function Home() {
  return (
    <div>
      <HomeHero />
      <Marcas />
      <BusquedaCategorias />
      <ProductosDestacados />
      <Secciones />
    </div>
  );
}
