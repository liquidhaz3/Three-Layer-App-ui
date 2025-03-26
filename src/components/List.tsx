import ListItem from './ListItem';
import {ListProps} from "../types/ProductTypes.tsx";

const List = ({ data, isLoading, isError}: ListProps) => {

    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
    if (isError) return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong>Error:</strong>!</div>;

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">List</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                        <ListItem key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default List;