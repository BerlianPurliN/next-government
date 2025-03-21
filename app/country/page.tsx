"use client";

import { useEffect, useState } from "react";
import Card from "../components/ui/card";

const base_url = "http://127.0.0.1:8000/api/country";

const Country = () => {
    const [countries, setCountries] = useState<any[]>([]); // Pastikan array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(base_url);
                const data = await response.json();
                // console.log("API Response:", data);
                if (Array.isArray(data)) {
                    setCountries(data);
                } else if (Array.isArray(data.data)) {
                    setCountries(data.data);
                } else {
                    throw new Error("Unexpected API response structure");
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1>Country List</h1>
            <Card>
                <ul>
                    {countries.map((country) => (
                        <li key={country.id}>
                            <p><strong>Name:</strong> {country.name}</p>
                            <p><strong>Code:</strong> {country.code}</p>
                            <p><strong>Phone Code:</strong> {country.phonecode}</p>
                        </li>
                    ))}
                </ul>
            </Card>
        </>
    );
};

export default Country;
