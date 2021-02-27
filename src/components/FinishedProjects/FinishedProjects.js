import { useEffect, useState } from "react";
import chargeFinishedProjects from "../../data/DataFinishedProjects";
import CardProject from "../CardProject/CardProject";
import "./FinishedProjects.css";

export default function FinishedProjects() {
	const [finishedProjects, setFinishedProjects] = useState([]);

	useEffect(() => {
		setFinishedProjects(chargeFinishedProjects);
	}, []);

	return (
		<section className="s-fp">
			<article className="s-fp__art">
				<div className="s-fp__div">
					<h1 className="s-fp__div--h1">
						Proyectos desarrollados con ayuda de Banco de ideas
					</h1>
					<p className="s-fp__div--p">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh
					</p>
				</div>
				<a className="s-fp__art--a" href="">
					<i className="fas fa-plus"></i>
				</a>
			</article>
			<article className="s-fp__art nueva-clase">
				{finishedProjects.map((project, index) => {
					if (index < 3) return <CardProject project={project} />;
				})}
			</article>
		</section>
	);
}
