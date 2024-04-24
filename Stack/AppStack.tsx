import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScreenMap } from "../screens/ScreenMap";

const Navigation = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigation.Navigator>
        <Navigation.Screen 
        options={{headerShown : false}}
        name={ScreenMap.MainStack.Screens.Home.name} 
        component={ScreenMap.MainStack.Screens.Home.component}/>

        <Navigation.Screen 
        name={ScreenMap.MainStack.Screens.CreateNewContactScreen.name} 
        component={ScreenMap.MainStack.Screens.CreateNewContactScreen.component}/>

        <Navigation.Screen 
        name={ScreenMap.MainStack.Screens.EditContactScreen.name} 
        component={ScreenMap.MainStack.Screens.EditContactScreen.component}/>
    </Navigation.Navigator>
  )
}