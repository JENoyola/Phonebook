import { View} from 'react-native'
import React from 'react'
import BasicButton from '../../components/buttons/BasicButton'
import FormGroup from '../../components/forms/FormGroup'
import useCreateContactController from '../../presenter/contacts/useCreateContactController'

export default function CreateContacts() {

  const { onNameChange,onPhoneChange,onCreateContact } = useCreateContactController()

  return (
    <View style={{ flex: 1 }} >
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} >
        <View style={{ marginRight: 15 }} >
          <BasicButton onPress={() => onCreateContact()} title="Guardar" />
        </View>
      </View>
      <View style={{ flex: 10 }} >

        <View style={{ width: '90%', alignItems: 'center' }} >
          <FormGroup label="Nombre" onChangeText={onNameChange}  />
          <FormGroup label="Numero de telefono" onChangeText={onPhoneChange}  />
        </View>

      </View>

    </View>
  )
}