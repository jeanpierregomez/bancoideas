import "./Forms.css";

export default function EditProfile() {
	const handleKeyDown = (e) => {
		setTimeout(function () {
			e.target.style.cssText = "height:auto; padding:0";
			e.target.style.cssText = "height:" + e.target.scrollHeight + "px";
		}, 0);
	};
	return (
		<form className="main-profile__form">
			<div className="main-profile__form-flex">
				<h2 className="main-profile__form--h2">Registrar proyecto</h2>
				<div className="main-profile__steps">
					<div className="main-profile__steps--step active-step"></div>
					<div className="main-profile__steps--step"></div>
				</div>
			</div>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Título</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Duración</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Repositorio</p>
				<input className="main-profile__lbl--input"></input>
			</label>
			<label className="main-profile__lbl">
				<p className="main-profile__lbl--p">Descripción</p>
				<textarea
					className="main-profile__lbl--txt"
					onKeyDown={handleKeyDown}
				></textarea>
			</label>
			<button className="main-profile__form--btn">Editar</button>
		</form>
	);
}
