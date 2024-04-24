import { useNavigation } from "@react-navigation/native"


export function useAppNavigate() {

    const navigation = useNavigation()

    const Navigate = (screen:string,...params:any) => {
    navigation.navigate(screen,...params)        
    }

    return {
        Navigate
    }
}