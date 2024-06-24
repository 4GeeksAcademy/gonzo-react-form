import React, { useState } from "react";

// Definición del componente Form
export const Form = () => {
    // useState para manejar el estado de listaCompra (producto actual) y arrayCompra (lista de productos)
    const [listaCompra, setListaCompra] = useState('');
    const [arrayCompra, setArrayCompra] = useState([]);

    // Función que maneja el cambio en el input de texto
    const handleChange = (event) => {
        setListaCompra(event.target.value); // Actualiza el estado de listaCompra con el valor del input
    };

    // Función que maneja el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
        setArrayCompra([]); // Vacía la lista de productos
    };

    // Función que maneja la adición de un nuevo producto cuando se presiona "Enter"
    const handleAddItem = (event) => {
        if (event.key === 'Enter') { // Verifica si la tecla presionada es "Enter"
            event.preventDefault(); // Previene el comportamiento por defecto del input (enviar el formulario)
            if (listaCompra.trim() !== '') { // Verifica que el input no esté vacío
                setArrayCompra([...arrayCompra, listaCompra]); // Añade el nuevo producto a la lista de productos
                setListaCompra(''); // Vacía el input de texto
            }
        }
    };

    // Función que maneja la eliminación de un producto específico
    const handleDelete = (index) => {
        const newArray = arrayCompra.filter((_, i) => i !== index); // Crea una nueva lista excluyendo el producto en la posición index
        setArrayCompra(newArray); // Actualiza la lista de productos
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="listacompra" className="form-label">Lista de la compra</label>
                    <input
                        type="text"
                        className="form-control"
                        id="listacompra"
                        value={listaCompra} // Asocia el valor del input con el estado listaCompra
                        placeholder="Escribe un producto"
                        onChange={handleChange} // Llama a handleChange cuando el valor del input cambia
                        onKeyPress={handleAddItem} // Llama a handleAddItem cuando se presiona una tecla
                    />
                </div>
                <ul>
                    {arrayCompra.map((item, index) => (
                        <li key={index} className="list-item">
                            {item}
                            <button
                                type="button"
                                className="btn btn-danger delete-button"
                                onClick={() => handleDelete(index)} // Llama a handleDelete con el índice del producto a eliminar
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <div id="total" className="form-text">Productos: {arrayCompra.length}</div>
                <button type="submit" className="btn btn-primary">Vaciar lista</button> {/* El botón submit vacía la lista de productos */}
            </form>
        </div>
    );
};
