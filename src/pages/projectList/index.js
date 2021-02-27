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
					<ProjectList></ProjectList>
				</section>
				<section className="m-pl__s"></section>
			</main>
			<Footer></Footer>
		</>
	);
}
