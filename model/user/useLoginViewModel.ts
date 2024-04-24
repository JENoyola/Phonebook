import { StoreDataToDevice } from "../../InternalStorage/storage";
import { USER_KEY_STORAGE } from "../../constants/StorageKeys";
import { InitialUserState } from "../../interfaces/UserInterface";
import { setUser } from "../../redux/slices/UserSlice";
import { Store } from "../../redux/store";

export default function useLoginViewModel() {

    const LoginModel = async (name: string) => {
        let id = Math.random()
        let data = {
            ID : id,
            Name : name,
        }
        
        Store.dispatch(setUser(data))
        await StoreDataToDevice(USER_KEY_STORAGE,data)
    } 

    const LogoutModel = async () => {
        Store.dispatch(setUser(InitialUserState))
        await StoreDataToDevice(USER_KEY_STORAGE,InitialUserState)
    } 

    return {
        LoginModel,
        LogoutModel
    }

}