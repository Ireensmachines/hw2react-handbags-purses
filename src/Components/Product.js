


import React from 'react';

function Product({image, saletitle, description, price}) {
    return (
        <article className="product">
            <img src={image}
                 alt={saletitle}/>
            <span className={"product-nameRED"}>
                {saletitle}</span>
            <p className={"product-description"}>
                The {description} Bag
            </p>
            <h4 className={"price"}>
                € {price} .- </h4>
        </article>
    );
}

export default Product;


