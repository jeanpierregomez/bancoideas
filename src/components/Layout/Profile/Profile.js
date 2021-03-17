import "./Profile.css";
import ProfilePanel from "../ProfilePanel/ProfilePanel";

export default function Profile({ content }) {
	return (
		<main className="main">
			<div className="content">
				<main className="main-profile">
					<img
						className="main-profile--img"
						alt="Imagen de perfil"
						src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					></img>
					<section className="main-profile__s">
						<article className="main-profile__art">{content()}</article>
						<ProfilePanel></ProfilePanel>
					</section>
				</main>
			</div>
		</main>
	);
}
