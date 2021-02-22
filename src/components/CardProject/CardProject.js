import "./CardProject.css"

export default function CardProject ({ project }) {
    return (
        <figure className="s-fp__fig">
            <img className="s-fp__fig--img" src={project.image} />
            <figcaption className="s-fp__figcaption">
                <p className="">Enero 2, 2021</p>
                <h2 className="s-fp__figcaption--h2">{project.title}</h2>
            </figcaption>
        </figure>
    );
}