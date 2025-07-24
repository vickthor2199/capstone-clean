import products from "@/lib/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <div className="p-6 text-red-500">Product not found.</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mb-4"
      />
      <p className="text-xl mb-2">{product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}
