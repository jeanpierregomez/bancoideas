import FormRegister from "../../components/FormRegisterLogin/FormRegister";
import Nav from "../../components/Layout/Nav/Nav";
import "../login/index.css";
import "../login/footer.css";

export default function login () {
    return (
        <>
            <header className="h-login-signup"><Nav /></header>
            <main className="main-login-signup"><FormRegister /></main>
            <footer className="f__login-signup">
            <ul className="f-ls__ul">
            <a href="">
                <li className="f-ls__ul--li">
                <i className="fab fa-instagram"></i>
                </li>
            </a>
            <a href="">
                <li className="f-ls__ul--li">
                <i className="fab fa-facebook-f"></i>
                </li>
            </a>
            <a href="">
                <li className="f-ls__ul--li">
                <i className="fab fa-twitter"></i>
                </li>
            </a>
            <a href="">
                <li className="f-ls__ul--li">
                <i className="fab fa-youtube"></i>
                </li>
            </a>
            </ul>
            <a className="f__login-signup--a" href="#">TERMINOS Y CONDICIONES</a>
            <p className="f__login-signup--p">COPYRIGHT © 2020 IDEAS BANK </p>
        </footer>
        </>
    );
}