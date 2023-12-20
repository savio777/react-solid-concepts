// SOLID - DIP (Dependency Inversion Principle)

"use client";

import { useCallback, useEffect, useState } from "react";
import apiProductsMock from "@/utils/apiProductsMock";
import getAllProducts from "@/utils/productsRequests/getAllProducts";

type ILoadProductList = {
  getAllProducts: () => Promise<IProduct[]>;
};

type IProductsProps = {
  loadProductList: ILoadProductList;
};

const Products = ({ loadProductList }: IProductsProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = useCallback(async () => {
    const response = await loadProductList.getAllProducts();

    setProducts(response);
  }, [loadProductList]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <h2>Lista</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1>Produtos</h1>

      <Products
        loadProductList={{
          getAllProducts,
        }}
      />
    </main>
  );
}
