export type Product = {
    id: number;
    name: string;
    type: string;
    attribute1: string;
    attribute2: string;
    size?: string;
    resolution?: string;
}

export type ListProps = {
    data: Product[];
    isLoading: boolean;
    isError: boolean;
    error?: Error;
}
