import "./FormLogin.css";

export default function FormSignin() {
	return (
		<section className="s-fl">
			<h1 className="s-fl--h1">Ingresa a</h1>
			<h1 className="s-fl--h1">Ideas bank</h1>
			<form className="s-fl__form">
				<div className="s-fl__div">
					<input
						className="s-fl__div--input"
						type="email"
						id="email"
						placeholder="Correo electrónico"
					></input>
					<input
						className="s-fl__div--input"
						type="password"
						id="password"
						placeholder="Contraseña"
					></input>
				</div>
				<div className="s-fl__div">
					<button className="s-fl__div--btn" type="button">
						Entrar
					</button>
					<a className="s-fl__div--a" href="/#">
						Recuperar contraseña.
					</a>
				</div>
			</form>
		</section>
	);
}
