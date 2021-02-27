import "./CardProject.css";

export default function CardProject({ project, color = "t-black" }) {
	return (
		<figure className="s-fp__fig">
			<img className="s-fp__fig--img" src={project.image} alt={project.image} />
			<figcaption className="s-fp__figcaption">
				<p className={color}>Enero 2, 2021</p>
				<h2 className={`s-fp__figcaption--h2 ${color}`}>{project.title}</h2>
			</figcaption>
		</figure>
	);
}
