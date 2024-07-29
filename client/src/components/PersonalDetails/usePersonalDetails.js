import {useSelector} from "react-redux";

const usePersonalDetails = () => {
    const user = useSelector((state) => state.user)

    const userName = user.currentUser.data.data.user.username;
    const email = user.currentUser.data.data.user.email;

    return {
        userName,
        email
    }
}
export default usePersonalDetails;