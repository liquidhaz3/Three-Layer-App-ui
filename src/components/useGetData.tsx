import { useState, useEffect } from 'react';

export const useGetData = (fetchFunction: () => Promise<any[]>) => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        fetchFunction()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setError(err);
                setIsLoading(false);
            });
    }, [fetchFunction]);

    return { data, isLoading, isError, error };
};
