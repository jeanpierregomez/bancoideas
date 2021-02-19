import { useState } from "react"
import chargeFinishedProjects from "../../data/DataFinishedProjects";
import "./SliderProjects.css";
import CardProjectSlider from "../CardProjectSlider/CardProjectSlider"

export default function SliderProjects () {
    
    const [finishedProjects, setFinishedProjects] = useState(chargeFinishedProjects);
    return (
        <section className="s-sp">
            <article className="s-sp__art">
                <div className="s-sp__ico">
                    <i class="fas fa-caret-left"></i>
                </div>
                {
                    <a href="#"><CardProjectSlider project={finishedProjects[0]} /></a>                    
                }
                <div className="s-sp__ico s-sp__ico-two">
                    <i class="fas fa-caret-right"></i>
                </div>
            </article>
        </section>
    );
}