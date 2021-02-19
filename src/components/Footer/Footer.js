import "./Footer.css";

export default function Footer () {
    return (
        <footer className="f">
            <div className="f__content">
                <img src="f__content--img"/>
                <div className="f__div">
                    <ul className="f__ul">
                        <li className="f__ul--li"><i class="fab fa-instagram"></i></li>
                        <li className="f__ul--li"><i class="fab fa-facebook-f"></i></li>
                        <li className="f__ul--li"><i class="fab fa-twitter"></i></li>
                        <li className="f__ul--li"><i class="fab fa-youtube"></i></li>
                    </ul>
                    <a className="f__div--a" href="#">TERMINOS Y CONDICIONES</a>
                    <p className="f__div--p">COPYRIGHT © 2020 IDEAS BANK </p>
                </div>
            </div>
        </footer>
    );
}