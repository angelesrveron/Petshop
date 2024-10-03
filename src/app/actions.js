
import Product from '@/app/models/Product'
import dbConnect from '@/app/database/dbConnect'




export async function getAllProductsDB(category) {
  await dbConnect();
  try {
    const query = category ? { category: category } : {};
    const products = await Product.find(query).sort({ name: "asc" });
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}




export async function getOneProductDB(id) {
//siempre que usemos la base de datos llamar a dbconnect 
await dbConnect();
try {
  const product = await Product.findById(id)
  return {product: JSON.parse(JSON.stringify(product))}
} catch (error) {
  console.log(error);
  return null;
}

}


