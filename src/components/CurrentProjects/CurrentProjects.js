import { useEffect, useState } from "react";
import chargeFinishedProjects from "../../data/DataFinishedProjects";
import CardProjectFull from "../CardProjectFull/CardProjectFull";
import "./CurrentProjects.css";

export default function CurrentProjects() {
	const [finishedProjects, setFinishedProjects] = useState([]);

	useEffect(() => {
		setFinishedProjects(chargeFinishedProjects);
	}, []);

	return (
		<section className="s-cp">
			<article className="s-cp__art">
				<h1 className="s-cp__h1">Proyectos en ejecución</h1>
				{finishedProjects.map((project, index) => {
					if (index <= 1)
						return <a href="" key={index}><CardProjectFull project={project} /></a>;
				})}
			</article>
		</section>
	);
}
