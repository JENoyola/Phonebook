import AsyncStorage from "@react-native-async-storage/async-storage";


export async function StoreDataToDevice(key,data) {

    let encrypt = JSON.stringify(data)

    try {
        await AsyncStorage.setItem(key,encrypt)
    } catch(err) {
        console.log(err)
    }
}

export async function GetStoredDataFromDevice(key) {

    try {
        return await AsyncStorage.getItem(key)
    } catch (err) {
        console.log(err)
    }

}
