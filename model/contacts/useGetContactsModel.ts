import { useSelector } from "react-redux";


export default function useGetContactsModel() {

    const contacts = useSelector((state) => state.contacts.contacts)

    return {
        contacts
    }
}