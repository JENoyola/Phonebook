import { View} from 'react-native'
import React from 'react'
import BasicButton from '../../components/buttons/BasicButton'
import FormGroup from '../../components/forms/FormGroup'
import useCreateContactController from '../../presenter/contacts/useCreateContactController'

export default function EditContacts() {

  const { onNameChange,onPhoneChange,onHandleAlert,phone,name,onUpdateValues,onUpdateContact} = useCreateContactController()
  onUpdateValues()

  return (
    <View style={{ flex: 1}} >

      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
        <View style={{ marginRight: 15 }} >
          <BasicButton onPress={() => onUpdateContact()} title="Actualizar" />
        </View>
      </View>

      <View style={{ flex: 10,alignItems : 'center',justifyContent : 'space-between' }} >
        <View style={{ width: '90%', alignItems: 'center' }} >
          <FormGroup label="Nombre" value={name} onChangeText={onNameChange} />
          <FormGroup label="Numero de telefono" value={phone}  onChangeText={onPhoneChange} />
        </View>

        <View style={{width : '90%',alignItems : 'center',justifyContent : 'flex-start',marginBottom : 70}} >
            <View style={{width : '100%'}} >
            <BasicButton
              color={"#ff0000"}
              onPress={() => onHandleAlert()}
              title="Eliminar"
            />
              </View>
        </View>

      </View>

    </View>
  )
}