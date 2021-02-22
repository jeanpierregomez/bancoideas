import FormRegister from "../../components/FormRegisterLogin/FormRegister";
import FooterTwo from "../../components/Layout/FooterTwo/FooterTwo";
import Nav from "../../components/Layout/Nav/Nav";
import "../login/index.css";

export default function login () {
    return (
        <>
            <header className="h-login-signup"><Nav /></header>
            <main className="main-login-signup">
                <FormRegister />
                <video src="/image/videologin.mp4" autoPlay="1" loop></video>
            </main>
            <FooterTwo />
        </>
    );
}