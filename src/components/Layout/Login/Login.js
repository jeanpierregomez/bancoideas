import FooterTwo from "../FooterTwo/FooterTwo";
import MainHeader from "../MainHeader/MainHeader";
import "./Login.css";

export default function Login({ content }) {
	return (
		<>
			<MainHeader></MainHeader>
			<main className="main-login-signup">
				{content()}
				<video src="/image/videologin.mp4" autoPlay="1" loop></video>
			</main>
			<FooterTwo />
		</>
	);
}
