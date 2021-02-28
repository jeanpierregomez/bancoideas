import "./Nav.css";
import { Link, Route } from "wouter";
import { useState } from "react";
import InputSearch from "../InputSearch/InputSearch";

export default function Nav() {
	const [isSearch, setIsSearch] = useState(false);
	const handleSearch = () => {
		setIsSearch(true);
	};
	return (
		<nav className="h__nav">
			<figure className="h__fig">
				<Link href="/">
					<img className="h__fig--img" src="/image/logo.png" alt="ideasbank" />
				</Link>
			</figure>
			{isSearch ? (
				<InputSearch setIsSearch={setIsSearch}></InputSearch>
			) : (
				<ul className="h__ul">
					<li className="h__ul--li" onClick={handleSearch}>
						<p className="h__li--a" href="">
							Buscar
						</p>
					</li>
					<li className="h__ul--li">
						<Link href="/signup">
							<p className="h__li--a">Registrarse</p>
						</Link>
					</li>
					<li className="h__ul--li">
						<Link href="/login">
							<p className="h__li--a" href="">
								Iniciar sesión
							</p>
						</Link>
					</li>
					<li className="h__ul--li">
						<Link href="/project-list">
							<p className="h__li--a" href="">
								Proyectos
							</p>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
}
