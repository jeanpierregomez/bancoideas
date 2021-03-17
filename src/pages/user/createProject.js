import Footer from "../../components/Layout/Footer/Footer";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import Profile from "../../components/Layout/Profile/Profile";
import CreateProject from "../../components/User/Forms/CreateProject";

export default function createProject() {
	return (
		<>
			<MainHeader></MainHeader>
			<Profile content={CreateProject}></Profile>
			<Footer></Footer>
		</>
	);
}
