import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
    const response = await fetch('http://localhost:8080/api/products');
    if (!response.ok) {
        throw new Error('Błąd pobierania danych');
    }
    return response.json();
};

export function useGetProductsList() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });
}