import currentUser from "../../../utils/currentUser.js";

const usePersonalDetails = () => {
    const {
        user
    } = currentUser()

    const userName = user.currentUser.data.data.user.username;
    const email = user.currentUser.data.data.user.email;

    return {
        userName,
        email
    }
}
export default usePersonalDetails;