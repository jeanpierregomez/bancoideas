import Footer from "../../components/Layout/Footer/Footer";
import Nav from "../../components/Layout/Nav/Nav";
import ProjectList from "../../components/ProjectList/ProjectList";
import "./index.css";

export default function index() {
	return (
		<>
			<Nav></Nav>
			<main className="m-pl">
				<section className="m-pl__s">
					<ProjectList></ProjectList>
				</section>
				<section className="m-pl__s"></section>
			</main>
			<Footer></Footer>
		</>
	);
}
