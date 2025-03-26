import React from 'react';
import List from './List';
import {useGetProductsList} from "../hooks/useProducts.tsx";


const ProductList: React.FC = () => {
    const { data, isLoading, isError} = useGetProductsList();

    console.log(data, "data");

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Product List</h1>
                <List data={data} isLoading={isLoading} isError={isError}/>
            </div>
        </div>
    );
};

export default ProductList;