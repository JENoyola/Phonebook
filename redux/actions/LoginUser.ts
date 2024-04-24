import { useDispatch } from "react-redux";
import { UserInterface } from "../../interfaces/UserInterface";
import { StoreDataToDevice } from "../../InternalStorage/storage";
import { USER_KEY_STORAGE } from "../../constants/StorageKeys";
import { setUser } from "../slices/UserSlice";


export default async function LoginUser(NAME: string) {

    let user:UserInterface = {
        ID : Math.random(),
        Name : NAME
    }

    let dispatch = useDispatch()
    await StoreDataToDevice(USER_KEY_STORAGE,JSON.stringify(user))
    dispatch(setUser(user))

    
}