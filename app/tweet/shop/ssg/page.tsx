import { API_URL } from "@/constants";
import { type Product, ProductCard } from "@/components/ProductCard";
export default async function ShopSSGPage() {
  const response = await fetch(API_URL);
  const products = (await response.json()) as Product[];
  console.log(products); // Проверьте данные

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}
