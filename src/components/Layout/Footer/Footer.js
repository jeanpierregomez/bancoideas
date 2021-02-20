import "./Footer.css";

export default function Footer() {
	return (
		<footer className="f">
			<div className="f__content">
				<img className="f__content--img" src="image/logowhite.png" />
				<div className="f__div">
					<ul className="f__ul">
						<a href="">
							<li className="f__ul--li">
								<i className="fab fa-instagram"></i>
							</li>
						</a>
						<a href="">
							<li className="f__ul--li">
								<i className="fab fa-facebook-f"></i>
							</li>
						</a>
						<a href="">
							<li className="f__ul--li">
								<i className="fab fa-twitter"></i>
							</li>
						</a>
						<a href="">
							<li className="f__ul--li">
								<i className="fab fa-youtube"></i>
							</li>
						</a>
					</ul>
					<a className="f__div--a" href="#">
						TERMINOS Y CONDICIONES
					</a>
					<p className="f__div--p">COPYRIGHT © 2020 IDEAS BANK </p>
				</div>
			</div>
		</footer>
	);
}
