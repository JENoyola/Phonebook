
import { useUserModel } from "../../model/user/useUserModel";

export default function useUserDataController() {
 
    const {userData} = useUserModel()


    return {
        userData
    }
}
