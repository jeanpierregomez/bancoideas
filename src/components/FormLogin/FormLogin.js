export default function FormLogin() {
	return (
		<section className="s-fl">
			<h1 className="s-fl--h1">Registro de</h1>
			<h1 className="s-fl--h1">Usuario</h1>
			<form className="s-fl__form">
				<div className="s-fl__div">
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="text"
							id=""
							placeholder=""
						></input>
					</label>
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="text"
							id=""
							placeholder=""
						></input>
					</label>
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="email"
							id=""
							placeholder=""
						></input>
					</label>
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="password"
							id=""
							placeholder=""
						></input>
					</label>
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="phone"
							id=""
							placeholder=""
						></input>
					</label>
					<label className="s-fl__lbl" for="">
						<input
							className="s-fl__lbl--inp"
							type="text"
							id=""
							placeholder=""
						></input>
					</label>
				</div>
				<div className="s-fl__div">
					<button className="s-fl__div--btn" type="button">
						Registrar
					</button>
					<a className="s-fl__div--a" href="/#">
						Ya tengo cuenta.
					</a>
				</div>
			</form>
		</section>
	);
}
