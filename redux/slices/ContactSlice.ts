import { createSlice } from "@reduxjs/toolkit";
import { InitialContactState } from "../../interfaces/ContactInterface";
import { StoreDataToDevice } from "../../InternalStorage/storage";
import { CONTACT_KEY_STORAGE } from "../../constants/StorageKeys";


const ContactReducer = createSlice({
    name : "contact",
    initialState  : {contacts : InitialContactState},
    reducers : {
        setContactList : (state,action) => {
            state.contacts = action.payload
        },
        addContact : (state,action) => {
            state.contacts = state.contacts.concat([{ID: action.payload.ID,Name : action.payload.Name,Phone : action.payload.Phone}])
            StoreDataToDevice(CONTACT_KEY_STORAGE,state.contacts)
        },
        editContact : (state,action) => {
            state.contacts = state.contacts.map((contact) => {
                if (contact.ID === action.payload.ID) {
                    contact.Name = action.payload.Name
                    contact.Phone = action.payload.Phone
                    return contact
                }
                return contact
            })
            state.contacts.concat([action.payload])
            StoreDataToDevice(CONTACT_KEY_STORAGE,state.contacts)

        },

        deleteContact : (state,action) => {
            state.contacts = state.contacts.filter((contact) => contact.ID !== action.payload.ID)
            StoreDataToDevice(CONTACT_KEY_STORAGE,state.contacts)
        }
    }
})

export const {addContact,editContact,deleteContact,setContactList} = ContactReducer.actions;

export default ContactReducer.reducer;