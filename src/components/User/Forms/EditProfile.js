import "./Forms.css";

export default function EditProfile() {
	return (
		<form className="main-profile__form">
			<h2 className="main-profile__form--h2">Información</h2>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Nombre</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Correo electrónico</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Código</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<button className="main-profile__form--btn">Editar</button>
		</form>
	);
}
