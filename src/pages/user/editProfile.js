import Footer from "../../components/Layout/Footer/Footer";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import Profile from "../../components/Layout/Profile/Profile";
import EditProfile from "../../components/User/Forms/EditProfile";

export default function editProfile() {
	return (
		<>
			<MainHeader></MainHeader>
			<Profile content={EditProfile}></Profile>
			<Footer></Footer>
		</>
	);
}
