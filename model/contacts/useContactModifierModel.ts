import { ContactInterface } from "../../interfaces/ContactInterface";
import { addContact, deleteContact, editContact } from "../../redux/slices/ContactSlice";
import { Store } from "../../redux/store";


export default function useContactModifierModel() {
    
    return {
        onCreate : (contact:ContactInterface) => Store.dispatch(addContact(contact)),
        onUpdate : (contact:ContactInterface) => Store.dispatch(editContact(contact)),
        onDelete : (contact:ContactInterface) => Store.dispatch(deleteContact(contact))
    }

}