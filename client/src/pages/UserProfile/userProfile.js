import currentUser from "../../../utils/currentUser.js";

const useProfile = () => {
    const  {
        user
    } = currentUser()

    const userName = user.currentUser.data.data.user.username;
    const firstLetterOfUserName = userName[0]

    return {
        firstLetterOfUserName
    }
}

export default useProfile