import { getAllProductsDB } from "@/app/actions"
import Image from "next/image";
const About = async () => {

  const products = await getAllProductsDB();
  console.log(products);

  return (
    <div>
      <div  className="flex ">
      <Image
      src={"/imgs/dogandcat.jpg"} 
      alt="dogandcat"
      width={500}
      height={400}
      />
      <div>
      <h1 className="text-4xl font-bold mb-5">Nuestra misión</h1>
      <p className="w-3/4 mb-6">En PetLove, nos apasiona mejorar la vida de tus mascotas. Nuestro objetivo es ser tu aliado de confianza para proporcionar todo lo que necesitas para mantener a tus perros y gatos felices, saludables y llenos de amor.
Nuestros Valores:
</p>
<ul className="w-3/4 ">
 <li className="mb-3 font-medium" >Amor por las mascotas ❤️: Entendemos que tus mascotas son parte de tu familia y nos comprometemos a brindarles el mejor cuidado posible.</li>
 <li  className="mb-3 font-medium">Calidad y confianza 🤝: Ofrecemos productos de alta calidad y seleccionados cuidadosamente para satisfacer las necesidades de tus mascotas.</li>
 <li  className="mb-3 font-medium">Compromiso con la comunidad 💪: Nos esforzamos por ser una fuerza positiva en nuestra comunidad, apoyando a organizaciones que protegen y cuidan a los animales.</li>
</ul>
      </div>
</div>
    </div>
  )
}

export default About