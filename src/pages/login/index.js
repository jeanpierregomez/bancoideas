import FormLogin from "../../components/FormRegisterLogin/FormLogin";
import FooterTwo from "../../components/Layout/FooterTwo/FooterTwo";
import Nav from "../../components/Layout/Nav/Nav";
import "./index.css";

export default function index() {
  return (
    <>
      <header className="h-login-signup"><Nav /></header>
      <main className="main-login-signup">
        <FormLogin />
        <video src="/image/videologin.mp4" autoPlay="1" loop></video>
      </main>
      <FooterTwo />
    </>
  );
}
