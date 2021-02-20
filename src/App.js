import "./App.css";
import Index from "./pages/home/index";
import { useRef } from "react";

export default function App() {
	const cursor = useRef(null);

	window.addEventListener("mousemove", (e) => {
		cursor.current &&
			cursor.current.setAttribute(
				"style",
				"top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
			);
	});
	window.addEventListener("click", () => {
		cursor.current && cursor.current.classList.add("expand");
		setTimeout(() => {
			cursor.current && cursor.current.classList.remove("expand");
		}, 500);
	});
	return (
		<div className="App">
			<div className="cursor" ref={cursor}></div>
			<Index />
		</div>
	);
}
