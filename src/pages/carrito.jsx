import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../componets/Navbar';
import { useState, useEffect } from 'react';
import DataTable from '../../componets/Table';
export default function carrito() {

    const [product, setProduct] = useState([
        {
            id: "",
            nombre: "",
            descripcion: "",
            precio: "",
        },
    ]);

    useEffect(() => {
        localStorage.getItem("product") && setProduct(JSON.parse(localStorage.getItem("product")));
    }, []);

    const deleteProduct = (index) => {
        const newProductList = [...product];
        newProductList.splice(index, 1);
        setProduct(newProductList);
        localStorage.setItem("product", JSON.stringify(newProductList));
    };



    const notifyComprar = () => toast("Producto añadido al carrito!");
    return (
        <>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <ToastContainer />
                </div>

                <Navbar page={2} numCarrito={product.length} />
            </main>
            <div className='productSectionOne'>
                <center><h1>Pructos Añadidos al carrito</h1></center>


                <DataTable onDelete= {deleteProduct}/>

            </div>
        </>
    )

}