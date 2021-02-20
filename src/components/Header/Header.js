import RoundBtn from "../RoundBtn/RoundBtn";
import './Header.css';
import Nav from "../Layout/Nav/Nav";

export default function Header () {
    return (
        <header className="h">
            <Nav />
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
            <video src="/image/video.mp4" autoplay="1"></video>
        </header>
    ); 
} 