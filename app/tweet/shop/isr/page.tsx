import { API_URL } from "@/constants";
import { type Product, ProductCard } from "@/components/ProductCard";
export default async function ShopPage() {
  const response = await fetch(API_URL, {
    next: { revalidate: 300 },
  });
  const products = (await response.json()) as Product[];

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
}
