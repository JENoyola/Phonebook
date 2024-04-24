import {UserInterface } from '../interfaces/UserInterface'
import { useSelector } from 'react-redux'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { NavigationContainer } from '@react-navigation/native'
import useUserStateController from '../presenter/user/useUserStateController'
import SplashScreen from '../screens/wait/SplashScreen'

export default function MainStack() {
    const User = useSelector((state:UserInterface) => state.user.user)
    const {ready} = useUserStateController()


    if (ready) {
        return (
            <NavigationContainer>
                {User.ID === 0 ? (
                    <AuthStack/>
                ): (
                    <AppStack/>
                )}
            </NavigationContainer>
        )
    } else {
        return(
            <SplashScreen/>
        )
    }
    
}