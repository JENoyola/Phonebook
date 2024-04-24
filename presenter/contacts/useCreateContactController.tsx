import { useEffect, useState } from "react"
import useContactModifierModel from "../../model/contacts/useContactModifierModel"
import { ContactInterface } from "../../interfaces/ContactInterface"
import { useAppNavigate } from "./useAppNavigate"
import { Alert } from "react-native"
import { useRoute } from "@react-navigation/native"


export default function useCreateContactController() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const { onCreate, onUpdate, onDelete } = useContactModifierModel()
    const { Navigate } = useAppNavigate()
    const {params} = useRoute()


    const onNameChange = (name: string) => {
        setName(name)
    }

    const onPhoneChange = (phone: string) => {
        setPhone(phone)
    }

    const onCreateContact = () => {

        let id = `${Math.random()}`
        let newContact: ContactInterface = {
            ID: id,
            Name: name,
            Phone: phone,
        }

        onCreate(newContact)
        Navigate("Home")
    }

    const onUpdateValues = () => {
        const na = params.item.Name
        const p = params.item.Phone

        useEffect(() => {
            setName(na)
            setPhone(p)
            
        }, [])
    }

    function onHandleAlert() {

        Alert.alert("Eliminar contacto", "Estas seguro que quiere eliminar este contacto", [
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            {
                text: 'Borrar',
                onPress: () => onDeleteContact(),
                style: "default"
            },
        ])
    }

    const onUpdateContact = () => {
        let contact: ContactInterface = {
            ID: `${params.item.ID}`,
            Name: name,
            Phone: phone,
        }
        onUpdate(contact)
        Navigate("Home")

    }

    const onDeleteContact = () => {
        let contact: ContactInterface = {
            ID: `${params.item.ID}`,
            Name: "",
            Phone: "",
        }
        onDelete(contact)
        Navigate("Home")

    }

    return {
        onNameChange,
        onPhoneChange,
        onCreateContact,
        onUpdateContact,
        onDeleteContact,
        onHandleAlert,
        onUpdateValues,
        name,
        phone
    }

}