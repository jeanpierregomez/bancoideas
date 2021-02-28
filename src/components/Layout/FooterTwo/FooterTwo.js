import "./FooterTwo.css";
import { Link, Route } from "wouter";

export default function FooterTwo () {
    return (
        <footer className="f__login-signup">
            <ul className="f-ls__ul">
            <a href="" target="_blank">
                <li className="f-ls__ul--li">
                    <i className="fab fa-instagram"></i>
                </li>
            </a>
            <a href="" target="_blank">
                <li className="f-ls__ul--li">
                    <i className="fab fa-facebook-f"></i>
                </li>
            </a>
            <a href="" target="_blank">
                <li className="f-ls__ul--li">
                    <i className="fab fa-twitter"></i>
                </li>
            </a>
            <a href="" target="_blank">
                <li className="f-ls__ul--li">
                    <i className="fab fa-youtube"></i>
                </li>
            </a>
            </ul>
            <a className="f__login-signup--a" href="#">TERMINOS Y CONDICIONES</a>
            <p className="f__login-signup--p">COPYRIGHT © 2020 IDEAS BANK </p>
        </footer>
    );
}