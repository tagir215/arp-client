import React, { memo, useState, useEffect } from 'react'
import ProductCard from './ProductCard';

const ProductGrid = memo(({products, computerInfo, sortOption}) => {
    const [productsState, setProductsState] = useState([]);

    const icons = [
        "icon-motherboard.png",
        "icon-case.png",
        "icon-gpu.png",
        "icon-cpu.png",
        "icon-cooler.png",
        "icon-ram.png",
        "icon-ssd.png",
        "icon-power.png",
        "icon-fan.png",
        "icon-hard-drive.png",
    ];

    useEffect(()=>{
        const sortedProducts = [...products];
        if(sortOption===1){
            sortedProducts.sort((a,b)=>{
                return a.combinedPrice - b.combinedPrice;
            })
        }else if (sortOption===2){
            sortedProducts.sort((a,b)=>{
                return b.combinedPrice - a.combinedPrice;
            })
        }
        setProductsState(sortedProducts);
    },[sortOption,products])

    return (
        <ul className="flex flex-col items-center gap-4 max-w-screen-xl min-h-screen mb-20 mx-auto">
            {productsState.map((product, index) => {
                return <ProductCard key={index} product={product} computerInfo={computerInfo} icons={icons}/>
            })}
        </ul>
    )
})

export default ProductGrid