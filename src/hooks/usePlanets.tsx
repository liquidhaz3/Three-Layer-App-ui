import { useQuery } from '@tanstack/react-query';

const fetchPlanets = async () => {
    const response = await fetch('http://localhost:8080/api/planets');
    if (!response.ok) {
        throw new Error('Błąd pobierania danych');
    }
    return response.json();
};

export function useGetPlanetList() {
    return useQuery({
        queryKey: ['planets'],
        queryFn: fetchPlanets
    });
}