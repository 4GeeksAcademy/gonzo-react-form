import React, { useState } from "react";

export const Form = () => {

    const [listaCompra, setListaCompra] = useState('')
    const [arrayCompra, setArraycompra] = useState([])

    const handleChange = (event) => {
        setListaCompra(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (listaCompra.trim() !== '') {
            setArraycompra([...arrayCompra, listaCompra]);
            setListaCompra('');
        }

    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="listacompra" className="form-label">Lista de la compra</label>
                    <input type="text" className="form-control" id="listacompra" value={listaCompra} aria-describedby="emailHelp" placeholder="Escribe un producto" onChange={handleChange} />
                </div>
                <ul>
                    {arrayCompra.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div id="total" className="form-text">Productos: {arrayCompra.length}</div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}