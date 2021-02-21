import "./FormRegisterLogin.css"

export default function FormRegister() {
	return (
		<section className="s-fl">
			<h1 className="s-fl--h1">Registro de</h1>
			<h1 className="s-fl--h1">Usuario</h1>
			<form className="s-fl__form">
				<div className="s-fl__div">
					<input
						className="s-fl__div--input"
						type="text"
						id="name"
						placeholder="Nombre"
					></input>
					<input
						className="s-fl__div--input"
						type="text"
						id="lastname"
						placeholder="Apellidos"
					></input>
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
					<input
						className="s-fl__div--input"
						type="phone"
						id="phone"
						placeholder="Teléfono"
					></input>
					<input
						className="s-fl__div--input"
						type="text"
						id="codestudent"
						placeholder="Código estudiante"
					></input>
				</div>
				<div className="s-fl__div">
					<button className="s-fl__div--btn" type="button">Registrar</button>
					<a className="s-fl__div--a" href="/#">Ya tengo cuenta.</a>
				</div>
			</form>
		</section>
	);
}
