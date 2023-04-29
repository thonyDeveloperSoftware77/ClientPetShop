import Image from 'next/image'
import logo from '../public/img/logo.png';
import { AiOutlineHome } from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineUserDelete} from 'react-icons/ai';
import {TiContacts} from 'react-icons/ti';
import { MdOutlineSell } from 'react-icons/md';

export default function navbar({page, numCarrito}) {
    return (
        <nav  className={page === 1 ? 'NavHome' : 'NavSections'}>
            <ul>
                <div className='boxDiv'>
                    <li>
                        <Image className='logo' src={logo} alt="logo" />
                    </li>
                </div>
                <div className={page === 1 ? 'boxNavHome' : 'boxNavSections'}>
                    <li>
                        <a style={{ textShadow: "2px 1px 3px #333"}} href="/"><AiOutlineHome/> Home</a>
                    </li>
                    <li>
                        <a style={{ textShadow: "2px 1px 3px #333"}}  href="/productos"> <MdOutlineSell/>Productos</a>
                    </li>
                    <li >
                        <a style={{ textShadow: "2px 1px 3px #333"}} href="/carrito"><AiOutlineShoppingCart/>Carrito
                        
                        
                        <span>-{numCarrito}</span>
                        </a>
                    </li>
                    <li >
                        <a style={{ textShadow: "2px 1px 3px #333"}}  href="/carrito"><AiOutlineUserDelete/>About</a>
                    </li>
                    <li>
                        <a style={{ textShadow: "2px 1px 3px #333"}}  href="/contact"><TiContacts/>Contact</a>
                    </li>
                </div>

            </ul>
        </nav>
    )
}