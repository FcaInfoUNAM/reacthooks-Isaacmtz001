import { useEffect, useState } from "react";

function ProductDescription() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="p-8">
      {product ? (
        <div className="bg-white shadow-lg p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <img src={product.image} alt={product.title} className="h-48 mx-auto mb-4" />
          <p className="mb-2">{product.description}</p>
          <p className="text-green-600 font-bold text-lg">${product.price}</p>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ProductDescription;
