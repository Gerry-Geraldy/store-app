import React, { useState, useEffect } from "react";
import { ElectronicProduct } from "../../data/product";

function ProductElectronic() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setData(ElectronicProduct);
      setIsLoading(false);
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  if (isLoading) {
    return <div>Loading data...</div>; // Display a loading indicator
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center gap-10">
          {data.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] mx-auto mb-4 object-cover rounded-lg"
              />
              <p>{product.name}</p>
              <p className="text-md font-sans uppercase text-green-500">
                {product.price}
              </p>
              <p>stock {product.stock}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductElectronic;
