import "./CardProjectFull.css"

export default function CardProjectFull ({ project }) {
    return (
        <figure className="s-cp__fig">
            <img className="s-cp__fig--img" src={project.image} />
            <figcaption className="s-cp__figcaption">
                <h2 className="s-cp__figcaption--h2">{project.title}</h2>
                <p className="s-cp__figcaption--p">{project.description}</p>
            </figcaption>
        </figure>
    );
}