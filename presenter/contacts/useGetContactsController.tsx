import { useEffect, useState } from "react"
import useGetContactsModel from "../../model/contacts/useGetContactsModel"
import { InitialContactState} from "../../interfaces/ContactInterface"
import { GetStoredDataFromDevice, StoreDataToDevice } from "../../InternalStorage/storage"
import { CONTACT_KEY_STORAGE } from "../../constants/StorageKeys"
import { Store } from "../../redux/store"
import { setContactList } from "../../redux/slices/ContactSlice"

export default function useGetContactsController() {
    const { contacts } = useGetContactsModel()
    const [isFetching,setIsFetching] = useState(true);
    

    useEffect(() => {
        async function getContactsData() {
            await GetStoredDataFromDevice(CONTACT_KEY_STORAGE).then(res => {
                if (res === null) {
                    StoreDataToDevice(CONTACT_KEY_STORAGE, InitialContactState)
                    Store.dispatch(setContactList(InitialContactState))
                } else if (res === undefined) {
                    StoreDataToDevice(CONTACT_KEY_STORAGE, InitialContactState)
                    Store.dispatch(setContactList(InitialContactState))
                } else {
                    let data = JSON.parse(res)
                    Store.dispatch(setContactList(data))
                }
        
            }).finally(() => {
                setIsFetching(false)
            })
        }
        getContactsData()

    },[]) 

    return{
        contacts,
        isFetching
    }

}
