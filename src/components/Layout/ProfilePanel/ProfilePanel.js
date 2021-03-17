import "./ProfilePanel.css";

export default function ProfilePanel() {
	return (
		<article className="a-panel">
			<h2 className="a-panel--h2">Panel de control</h2>
			<ul className="a-panel__ul">
				<li>Perfil</li>
				<li>Registrar proyecto</li>
				<li>Registrar docente</li>
				<li>Registrar asignación</li>
				<li>Registrar estado</li>
				<li>Registrar línea</li>
				<li>Registrar estudiante</li>
			</ul>
		</article>
	);
}
