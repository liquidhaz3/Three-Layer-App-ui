import { useGetPlanetList } from '../hooks/usePlanets';

export default function PlanetsList() {
    const { data, error, isLoading } = useGetPlanetList();

    if (isLoading) return <p>Ładowanie...</p>;
    if (error) return <p>Błąd: {error.message}</p>;

    console.log(data, 'data');
    return (
        <div className="text-black w-screen">
            <h1 className="text-xl font-bold">Lista Planet</h1>
            <ul className="mt-4">
                {data.map((planet) => (
                    <li key={planet.id} className="py-2 border-b">{planet.name}</li>
                ))}
            </ul>
        </div>
    );
}