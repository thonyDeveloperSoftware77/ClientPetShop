import { productsProps} from '../models/Product';
//Obtener todos los productos
export const getData = async () => {
    const res = await fetch('http://localhost:5086/api/Products')
    const data: productsProps= await res.json()
    return data;
}