import { useDispatch } from "react-redux";
import setInitUserModel from "../../model/user/setInitUserModel";
import { useEffect, useState } from "react";
import { GetStoredDataFromDevice, StoreDataToDevice } from "../../InternalStorage/storage";
import { USER_KEY_STORAGE } from "../../constants/StorageKeys";
import { InitialUserState } from "../../interfaces/UserInterface";
import { setUser } from "../../redux/slices/UserSlice";


function useUserStateController() {

    const {UserData} = setInitUserModel()
    const [ready,setReady] = useState(false)

    const dispatch = useDispatch()
    

    useEffect(() => {
        async function getData() {
            await GetStoredDataFromDevice(USER_KEY_STORAGE).then(res => {
                if (res === null) {
                    StoreDataToDevice(USER_KEY_STORAGE, InitialUserState)
                    dispatch(setUser(InitialUserState))
                } else if (res === undefined) {
                    StoreDataToDevice(USER_KEY_STORAGE, InitialUserState)
                    dispatch(setUser(InitialUserState))
                } else {
                    let data = JSON.parse(res)
                    dispatch(setUser(data))
                }
        
            }).finally(() => {
                setReady(true)
            })
        }
        getData()

    },[]) 

    return {
        UserData,
        ready
    }

}

export default useUserStateController;