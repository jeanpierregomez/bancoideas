import "./App.css";
import editProfile from "./pages/user/editProfile";
import index from "./pages/home/index";
import signin from "./pages/login/signin";
import signup from "./pages/login/signup";
import projectList from "./pages/projectList/index";

import { useRef } from "react";
import { Route } from "wouter";
import createProject from "./pages/user/createProject";

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
			<Route path="/" component={index} />
			<Route path="/login" component={signin} />
			<Route path="/signup" component={signup} />
			<Route path="/project-list" component={projectList} />
			<Route path="/create-project" component={createProject} />
			<Route path="/edit-profile" component={editProfile} />
		</div>
	);
}
