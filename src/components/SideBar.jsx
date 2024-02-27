import React from "react";

const SideBar = () => {
    return (
        <div className="bg-[#330846] text-white h-screen w-72 p-6 shadow-2xl">
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white mr-3" />
                <h2 className="text-2xl font-semibold">ERTIVENT</h2>
            </div>
            <ul>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Inicio
                    </a>
                </li>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Ventas
                    </a>
                </li>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Inventarios
                    </a>
                </li>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Clientes
                    </a>
                </li>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Cajas
                    </a>
                </li>
                <li className="mb-4">
                    <a
                    href="#"
                    className="text-lg transition duration-300 ease-in-out hover:text-purple-500"
                    >
                    Configuración
                    </a>
                </li>
            </ul>
      </div>
    );
  };

export default SideBar;
