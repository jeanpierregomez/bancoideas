import "./Forms.css";
export default function FormProjects() {
	return (
		<main className="main-form">
			<section className="main-form__s">
				<form className="main-form__form">
					<h1 className="main-form__form--h1">Registrar un Proyecto</h1>
					<input
						className="main-form__form--inp"
						name="title"
						placeholder="Título"
					></input>
					<input
						className="main-form__form--inp"
						name="resume"
						placeholder="Resumen"
					></input>
					<input
						className="main-form__form--inp"
						name="duration"
						placeholder="Duración (en meses)"
						type="number"
						max="48"
					></input>
					<input
						className="main-form__form--inp"
						name="uri_repository"
						placeholder="Enlace repositorio"
					></input>
					<button className="main-form__form--submit">Registrar</button>
					<button className="main-form__form--secondary">Cancelar</button>
				</form>
			</section>
		</main>
	);
}
