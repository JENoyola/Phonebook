import { useSelector } from "react-redux";



function setInitUserModel() {

    const UserData = useSelector((state) => state.user)

    return {
        UserData
    }

}

export default setInitUserModel;