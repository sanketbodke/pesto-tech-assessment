import {useSelector} from "react-redux";

const currentUser = () => {
    const user = useSelector((state) => state.user)

    return {
        user
    }
}
export default currentUser;