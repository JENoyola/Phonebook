import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import useLoginController from "../../presenter/user/useLogUserController";

export default function Login() {

    const [name, setName] = useState("");
    const { onLogin } = useLoginController()

    return (
        <View style={style.container} >
            <View style={style.header} >
                <Text style={style.title} > Iniciar sesion</Text>
                <View style={style.inputContainer} >
                    <TextInput onChangeText={setName} style={style.input} keyboardType="default" returnKeyLabel="done" placeholder="nombre" />
                </View>
            </View>

            <View style={style.action} >
                <Button title="Entrar" onPress={() => onLogin(name)} />
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfaf8",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header: {
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    action: {
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputContainer: {
        width: "90%",
    },
    title: {
        fontSize: 45,
        fontWeight: '800',
    },
    input: {
        borderWidth: 1.5,
        borderColor: 'grey',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 2,
        marginTop: 20,
    },
    image: {
        width: 245,
        height: 245,
    },
    button: {
        fontSize: 28,
    }

})