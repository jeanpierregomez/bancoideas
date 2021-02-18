import RoundBtn from "../RoundBtn/RoundBtn";
import './Header.css';

export default function Header () {
    return (
        <header className="h" style={{ backgroundImage: "url(/image/banner.jpg)" }}>
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
            <section className="s-header">
                <article className="s-header__art">
                    <h1 className="s-header__art--h1">Banco de ideas</h1>
                    <p className="s-header__art--p">
                    <b>Lorem, ipsum</b> dolor sit amet consectetur adipisicing elit. Quaerat tenetur blanditiis odio veritatis sunt tempora sit corrupti cumque aut vitae, fugit a voluptas sint, aliquam debitis reiciendis porro eos provident?
                    </p>
                    <div className="s-header__div">
                        <RoundBtn type="white" text="Botón blanco" />
                        <RoundBtn type="black" text="Botón negro" />
                    </div>            
                </article>
            </section>
        </header>
    ); 
} 