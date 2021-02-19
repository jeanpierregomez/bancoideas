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
				<div className="s-sp__ico">
					<i className="fas fa-caret-left"></i>
				</div>
				{<CardProjectSlider project={finishedProjects[0]} />}
				<div className="s-sp__ico s-sp__ico-two">
					<i className="fas fa-caret-right"></i>
				</div>
			</article>
		</section>
	);
}
