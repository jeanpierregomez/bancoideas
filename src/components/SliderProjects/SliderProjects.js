import { useState } from "react";
import chargeFinishedProjects from "../../data/DataFinishedProjects";
import "./SliderProjects.css";
import CardProjectSlider from "../CardProjectSlider/CardProjectSlider";

export default function SliderProjects() {
	const [finishedProjects, setFinishedProjects] = useState(
		chargeFinishedProjects
	);
	return (
		<section className="s-sp">
			<article className="s-sp__art">
			{/* data-aos="fade-right" */}
				<i  class="fas fa-caret-square-left"></i>
				{<CardProjectSlider project={finishedProjects[0]} />}
				<i  class="fas fa-caret-square-right"></i>
				{/* data-aos="fade-left" */}
			</article>
		</section>
	);
}
