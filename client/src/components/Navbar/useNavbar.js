import currentUser from "../../../utils/currentUser.js";

const useNavbar = () => {
    const {
        user
    } = currentUser()

    const userName = user.currentUser.data.data.user.username;

    return {
        userName
    }
}

export default useNavbar;