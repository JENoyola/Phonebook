import { useSelector } from "react-redux";


export function useUserModel() {

    const userData = useSelector((state) => state.user); 


    return {
        userData
    }
}