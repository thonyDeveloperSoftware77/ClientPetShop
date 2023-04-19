import Image from 'next/image'
import logo from '../public/img/logo.png';

export default function navbar({page}) {
    return (
        <nav  className={page === 1 ? 'NavHome' : 'NavSections'}>
            <ul>
                <div className='boxDiv'>
                    <li>
                        <Image src={logo} alt="logo" />
                    </li>
                </div>
                <div className={page === 1 ? 'boxNavHome' : 'boxNavSections'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/productos">Productos</a>
                    </li>
                    <li >
                        <a href="/productos">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </div>

            </ul>
        </nav>
    )
}