import {View,Text,StyleSheet, Button,Image } from "react-native";

export default function Landing({navigation}:any) {

    return(
        <View style={style.container} >
            <View style={style.header} >
            <Text style={style.title} >Phone Book</Text>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBBwjtuXgR-vt4TyapJDIqyemmuxOKZ9HuA&s"}} style={style.image} />
            </View>
            <Button title="Iniciar Sesion" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fbfaf8",
        alignItems : 'center',
        justifyContent : 'space-around'
    }, 
    header : {
        width : "100%",
        height : '45%',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title : {
        fontSize : 45,
        fontWeight : '800',
    },
    image : {
        width : 245,
        height : 245,
    },
    button : {
        fontSize : 28,
    }

})