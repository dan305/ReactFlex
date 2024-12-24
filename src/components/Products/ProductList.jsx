import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

export const products = [
  { id: 1, title: 'Producto 1', price: '$10', description: 'Descripción del producto 1', thumbnail:'https://via.placeholder.com/150', category:'CPU' },
  { id: 2, title: 'Producto 2', price: '$20', description: 'Descripción del producto 2', thumbnail:'https://via.placeholder.com/150', category:'RAM' },
  { id: 3, title: 'Producto 3', price: '$30', description: 'Descripción del producto 3', thumbnail:'https://via.placeholder.com/150', category:'VGA' },
  { id: 4, title: 'Producto 4', price: '$15', description: 'Descripción del producto 4', thumbnail:'https://via.placeholder.com/150', category:'CPU' },
  { id: 5, title: 'Producto 5', price: '$25', description: 'Descripción del producto 5', thumbnail:'https://via.placeholder.com/150', category:'RAM' },
  { id: 6, title: 'Producto 6', price: '$35', description: 'Descripción del producto 6', thumbnail:'https://via.placeholder.com/150', category:'VGA' },
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleProductDetails = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = products.filter(p => p.category === selectedCategory);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4">
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={() => handleCategoryChange(null)}>Mostrar todos</button>
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={() => handleCategoryChange('CPU')}>CPU</button>
          <button type="button" className="btn btn-outline-secondary mr-2" onClick={() => handleCategoryChange('RAM')}>RAM</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => handleCategoryChange('VGA')}>VGA</button>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard
              product={product}
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id}
              onDetails={() => handleProductDetails(product.id)}
            />
          </div>
        ))}
      </div>
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default ProductList;