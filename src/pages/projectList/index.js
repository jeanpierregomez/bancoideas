import Footer from "../../components/Layout/Footer/Footer";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./index.css";

export default function index() {
	return (
		<>
			<MainHeader></MainHeader>
			<main className="m-pl">
				<section className="m-pl__s">
					<article className="m-pl__h">
						<h1 className="m-pl__h--h1">Lista de proyectos</h1>
						<div className="m-pl__search">
							<input
								className="m-pl__search--input"
								placeholder="Buscar proyecto"
							/>
							<button className="m-pl__search--btn">Categorías</button>
						</div>
					</article>
					<ProjectList></ProjectList>
					<article className="m-pl__pag">
						<button className="m-pl__pag--btn">Anterior</button>
						<button className="m-pl__pag--btn">1</button>
						<button className="m-pl__pag--btn">2</button>
						<button className="m-pl__pag--btn">3</button>
						<button className="m-pl__pag--btn">4</button>
						<button className="m-pl__pag--btn">5</button>
						<button className="m-pl__pag--btn">Siguiente</button>
					</article>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}
