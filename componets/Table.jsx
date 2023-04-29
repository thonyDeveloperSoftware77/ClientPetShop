
import { useEffect, useState } from "react";

export default function DataTable({ onDelete }) {
    const [product, setProduct] = useState([
        {
            id: "",
            nombre: "",
            descripcion: "",
            precio: ""
        }
    ]);
    const [total, setTotal] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        localStorage.getItem("product") &&
            setProduct(JSON.parse(localStorage.getItem("product")));
        setTotal(product.reduce((acc, item) => acc + item.precio, 0));

    }, [onDelete, product]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) =>
            Math.min(prevPage + 1, Math.ceil(product.length / itemsPerPage))
        );
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = product.slice(startIndex, endIndex);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.precio}</td>
                            <td>
                                <button onClick={() => onDelete(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <div style={{display: "flex"}}> 
                    <button onClick={handlePrevPage}>{"<"}</button>
                    <span style={{ textAlign:"center", marginLeft:"15px", marginRight:"15px"}}>Page {currentPage}</span>
                    <button onClick={handleNextPage}>{">"}</button>
                </div>

            </div>
            <div>
                <h1>Total de productos: {product.length}</h1>
                <h2>Total: ${total}</h2>
            </div>
        </div>
    );
}