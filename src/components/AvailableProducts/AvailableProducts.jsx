import React from 'react';
import Cards from '../ProductCards/Cards';
const AvailableProducts = ({ProductsData,selectedProducts,setSelectedProducts}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-[#ffffff] p-5 rounded-2xl'>
            {
                ProductsData.map((products,ind) => {
                        return <Cards key={ind} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} products={products}></Cards>
                    })
            }
        </div>
    );
};

export default AvailableProducts;