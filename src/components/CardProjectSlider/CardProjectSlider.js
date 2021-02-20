import "./CardProjectSlider.css"

export default function CardProjectSlider ({ project }) {
    return (
        <div data-aos="fade-up" className="s-sp__div">
            <figure className="s-sp__fig">
                <img className="s-sp__fig--img" src={project.image}/>
                <figcaption className="s-sp__figcap">
                    <h2 className="s-sp__figcap--h2">{project.title}</h2>
                    <p className="s-sp__figcap--p">{project.description}</p>
                    <a className="s-sp__figcap--a" href="#">Ver más</a>
                </figcaption>
            </figure>
        </div>
    );
}