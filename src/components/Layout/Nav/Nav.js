import './Nav.css';

export default function Nav ( ){
    return (
        <nav className="h__nav">
            <figure className="h__fig">
                <img className="h__fig--img" src="/image/logo.png" />
            </figure>
            <ul className="h__ul">
                <li className="h__ul--li">
                    <a className="h__li--a" href="">Buscar</a>
                </li>
                <li className="h__ul--li">
                    <a className="h__li--a" href="">Registrar</a>
                </li>
                <li className="h__ul--li">
                    <a className="h__li--a" href="">Iniciar sesión</a>
                </li>
            </ul>
        </nav>
    );
}