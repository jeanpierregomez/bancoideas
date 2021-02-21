import "./Nav.css";
import { Link, Route } from "wouter";

export default function Nav() {
  return (
    <nav className="h__nav">
      <figure className="h__fig">
        <img className="h__fig--img" src="/image/logo.png" />
      </figure>
      <ul className="h__ul">
        <li className="h__ul--li">
          <a className="h__li--a" href="">
            Buscar
          </a>
        </li>
        <li className="h__ul--li">
          <Link href="/signup">
            <a className="h__li--a">
              Registrarse
            </a>
          </Link>
        </li>
        <li className="h__ul--li">
          <Link href="/login">
            <a className="h__li--a" href="">
              Iniciar sesión
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
