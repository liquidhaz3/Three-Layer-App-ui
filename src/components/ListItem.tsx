import React from "react";
import {Product} from "../types/ProductTypes.tsx";

interface ListItemProps {
    item: Product;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return (
        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">Type: {item.type}</p>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.type === 'Laptop' ? 'bg-blue-100 text-blue-800' :
                        item.type === 'Monitor' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                }`}>
                    {item.type}
                </span>
            </div>
        </div>
    );
};

export default ListItem;