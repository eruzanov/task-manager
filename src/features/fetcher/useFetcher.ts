import { useCallback, useState } from "react";
import { API_URL } from "./constants";

export const useFetcher = <T>() => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [data, setData] = useState<T>();

    const query = useCallback(async (path: string) => {
        setLoading(true);
        const response = await fetch(`${API_URL}/${path}`);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }, []);

    const create = useCallback(async <P>(path: string, payload: P) => {
        setLoading(true);
            setError(false);
            try {
                const response = await fetch(`${API_URL}/${path}`, {
                    method: "post",
                    body: JSON.stringify(payload),
                });
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
    }, [])

    const update = useCallback(
        async <T extends { id?: unknown }>(path: string, payload: T) => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(`${API_URL}/${path}`, {
                    method: "put",
                    body: JSON.stringify(payload),
                });
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        },
        []
    );

    return { data, isLoading, error, query, create, update };
};
