import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export function ProductCard({ id, title, image, price }: Product) {
  return (
    <div className="w-64 rounded-xl border border-black/10 p-4 transition hover:shadow dark:border-white/10">
      <Image src={image} alt={title} width={100} height={40} />
      <h2 className="text-sm font-medium text-black dark:text-white">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">${price}</p>
    </div>
  );
}
