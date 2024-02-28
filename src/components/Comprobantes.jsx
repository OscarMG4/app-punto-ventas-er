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
    <div className="container mx-auto p-8 overflow-x-auto">
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">Error: {error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md text-lg">
            <thead>
              <tr className="bg-[#330846] text-white">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Código Sunat</th>
                <th className="py-3 px-6 text-left">Nombre</th>
                <th className="py-3 px-6 text-left">Abreviatura</th>
                <th className="py-3 px-6 text-left">Venta</th>
                <th className="py-3 px-6 text-left">Compra</th>
                <th className="py-3 px-6 text-left">Facturación Electrónica</th>
              </tr>
            </thead>
            <tbody>
              {comprobantes.map((comprobante) => (
                <tr key={comprobante.id} className="border-b border-gray-300">
                  <td className="py-3 px-6 text-left">{comprobante.id}</td>
                  <td className="py-3 px-6 text-left">{comprobante.codsunat}</td>
                  <td className="py-3 px-6 text-left">{comprobante.nombre}</td>
                  <td className="py-3 px-6 text-left">{comprobante.abreviatura}</td>
                  <td className="py-3 px-6 text-left">{comprobante.venta ? 'Sí' : 'No'}</td>
                  <td className="py-3 px-6 text-left">{comprobante.compra ? 'Sí' : 'No'}</td>
                  <td className="py-3 px-6 text-left">{comprobante.facturacion_electronica ? 'Sí' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Comprobantes;
