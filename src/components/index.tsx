import { useGetData } from './useGetData';
import List from './List';

const fetchProducts = async () => {
    return [
        { id: 1, name: 'Laptop A', type: 'Laptop', attribute1: 'Value1', attribute2: 'Value2' },
        { id: 2, name: 'Monitor B', type: 'Monitor', attribute1: 'Value3', attribute2: 'Value4' },
    ];
};

const App = () => {
    const { data, isLoading, isError, error } = useGetData(fetchProducts);
    return <List data={data} isLoading={isLoading} isError={isError} error={error} />;
};

export default App;