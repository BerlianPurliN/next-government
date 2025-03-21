"use client";

import { useEffect, useState } from "react";
import Card from "../components/ui/card";


const Country = () => {
    const [countries, setCountries] = useState([]); // Menyimpan data negara

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/country") // Ambil data dari API
            .then((res) => res.json()) // Ubah data ke format JSON
            .then((data) => setCountries(data.data || data)) // Simpan data ke state
    }, []);

    return (
        <>
        
            <h1>Daftar Negara</h1>
            
            <ul>
                {countries.map((country: any) => (
                    <Card>
                    <li key={country.id}>
                        <strong>Nama:</strong> {country.name} <br />
                        <strong>Kode:</strong> {country.code} <br />
                        <strong>Telepon:</strong> {country.phonecode}
                    </li>
                    </Card>
                ))}
            </ul>
        
        </>
    );
};

export default Country;
