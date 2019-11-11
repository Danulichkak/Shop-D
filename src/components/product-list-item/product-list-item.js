import React from 'react';
import './product-list-item.css'

const ProductListItem = ({product, onAddedToCart}) => {
    const {name, description, text, price, imageProd} = product;
    return (
            <div className = "product-list-block">
                <div className = "product-list-item">
                    <div className="image-product">
                        <img src={imageProd} alt = "image"/>
                    </div> 
                    <div className="product-details">
                        <span className="product-name">{name}</span>
                        <div className="product-discription">{description}</div>
                        <div className="product-price">{price}{text}</div>
                        <button
                        onClick ={onAddedToCart} 
                        className="btn btn-product add-to-cart">
                            до Кошика
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default ProductListItem;