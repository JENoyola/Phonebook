import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScreenMap } from "../screens/ScreenMap";

const Navigation = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Navigation.Navigator screenOptions={{headerShown : false}} >
        <Navigation.Screen name={ScreenMap.AuthStack.Screens.Landing.name} component={ScreenMap.AuthStack.Screens.Landing.component}/>
        <Navigation.Screen name={ScreenMap.AuthStack.Screens.Login.name} component={ScreenMap.AuthStack.Screens.Login.component}/>
    </Navigation.Navigator>
  )
}