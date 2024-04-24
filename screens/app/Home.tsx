import { View, Text, StyleSheet,  FlatList,  ActivityIndicator } from 'react-native'
import useUserDataController from '../../presenter/user/useUserData'
import { SafeAreaView } from 'react-native-safe-area-context'
import ContactItem from '../../components/contacts/ContactItem'
import useGetContactsController from '../../presenter/contacts/useGetContactsController'
import { useAppNavigate } from '../../presenter/contacts/useAppNavigate'
import RoundButton from '../../components/buttons/RoundButton'
import useLoginController from '../../presenter/user/useLogUserController'


export default function Home() {

  const { userData } = useUserDataController()
  const { onLogout } = useLoginController()
  const { contacts,isFetching } = useGetContactsController()
  const {Navigate} = useAppNavigate() 

  return (
    <View style={{ flex: 1 }} >

      <SafeAreaView style={{ flex: 1 }} >
        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 5, justifyContent: 'center' }} >
          <View style={{ width: '90%', justifyContent: 'center' }} >
            <Text onPress={() => onLogout()} style={style.TitleText} >Hola {userData.user.Name}!</Text>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }} >
          <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1.8, borderColor: 'rgba(0,0,0,0.25)' }} >
            <Text style={style.subHeaderText} >Contactos</Text>
            <RoundButton onPress={() => Navigate("CreateContact")} />
          </View>
        </View>

        <View style={{ flex: 12, alignItems: 'center' }} >
          <View style={{ width: '90%', height: '100%' }} >
            {contacts.length < 1 ? (
              <View style={{ flex: 1, alignItems: 'center' }} >
                {isFetching ? (
                  <ActivityIndicator size={85} color={'#4457ff'} />
                ): (
                  <>
                  <Text style={{ fontSize: 35, color: "rgba(0,0,0,0.65)", textAlign: 'center', marginTop: 80, fontWeight: "700" }} >Actualmente no tienes ningun contacto agregado </Text>
                <Text style={{ fontSize: 22, color: "rgba(0,0,0,0.65)", textAlign: 'center', marginTop: 80, fontWeight: "500" }} >¡Añade nuevos contactos a tu lista!</Text>
                  </>
                )}
              </View>
            ) : (
              <FlatList
                data={contacts}
                renderItem={(item) => <ContactItem onEdit={() => Navigate("EditContact",item)} item={item} />}
              />
            )}
          </View>
        </View>
      </SafeAreaView>

    </View>
  )
}

const style = StyleSheet.create({
  ContainerCenter: {
    flex: 1,
  },
  ContainerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 15,
    backgroundColor: 'red'
  },
  component: {
    width: '100%',
    alignItems: 'center'
  },

  TitleText: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: '700'
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.75)'
  },
  searchInput: {
    width: '90%',
    height: '90%',
    fontSize: 16,
    color: 'white'
  },
  searchWrapper: {
    backgroundColor: 'rgba(0,0,0,0.56)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1.5,
    fontSize: 16,
  },

  button: {
    width: '100%',
    paddingVertical: 10,
    borderWidth: 1.3,
  }
})