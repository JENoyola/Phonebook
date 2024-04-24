import useLoginViewModel from "../../model/user/useLoginViewModel";
import { useUserModel } from "../../model/user/useUserModel";


function useLoginController() {
 
    const {userData} = useUserModel()
    const { LoginModel,LogoutModel } = useLoginViewModel()



    function onLogin(name:string) {
        LoginModel(name)
    }

    function onLogout() {
        LogoutModel()
    }

    return {
        userData,
        onLogin,
        onLogout
    }

}

export default useLoginController