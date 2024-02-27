import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comprobantes = () => {
    const [comprobantes, setComprobantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComprobantes = async () => {
            try {
                const response = await axios.get('http://localhost/apiPuntoVentas/comprobantes');
                //console.log('Response from API:', response.data);
                setComprobantes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comprobantes:', error);
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchComprobantes();
    }, []);

    return (
        <div className="container">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Código Sunat</th>
                            <th>Nombre</th>
                            <th>Abreviatura</th>
                            <th>Venta</th>
                            <th>Compra</th>
                            <th>Facturacion Electronica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comprobantes.map((comprobantes) => (
                            <tr key={comprobantes.id}>
                                <td>{comprobantes.id}</td>
                                <td>{comprobantes.codsunat}</td>
                                <td>{comprobantes.nombre}</td>
                                <td>{comprobantes.abreviatura}</td>
                                <td>{comprobantes.venta ? 'Sí' : 'No'}</td>
                                <td>{comprobantes.compra ? 'Sí' : 'No'}</td>
                                <td>{comprobantes.facturacion_electronica ? 'Sí' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Comprobantes;
