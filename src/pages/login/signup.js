import FormSignup from "../../components/FormLogin/FormSignup";
import Login from "../../components/Layout/Login/Login";

export default function signin() {
	return <Login content={FormSignup}></Login>;
}
