import { useEffect, useState } from "react";
import chargeFinishedProjects from "../../data/DataFinishedProjects";
import CardProject from "../CardProject/CardProject";
import "./ProjectList.css";

export default function ProjectList() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		setProjects(chargeFinishedProjects);
	}, []);
	return (
		<div className="m-pl__list">
			{projects.map((project, index) => (
				<CardProject project={project} color="t-white"></CardProject>
			))}
		</div>
	);
}
