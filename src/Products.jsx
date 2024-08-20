
import React from 'react';
import './Products.css';

const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 100', image: '2,,, (1).webp' },
    { id: 2, name: 'Produto 2', price: 'R$ 150', image: '3,,, (1).jpg' },
    { id: 3, name: 'Produto 3', price: 'R$ 200', image: '1,,, (1).webp' },
    { id: 4, name: 'Produto 4', price: 'R$ 250', image: 'melhor-creme-para-cabelo-cacheado-2- (1).webp' },
];

const Products = () => {
    return (
        <section className="products">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="info">
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Products;
