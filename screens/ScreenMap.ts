import CreateContacts from "./app/CreateContacts";
import EditContacts from "./app/EditContacts";
import Home from "./app/Home";
import Landing from "./auth/Landing";
import Login from "./auth/Login";


export const ScreenMap = {
    AuthStack : {
        Screens : {
            Landing : {
                name : "Landing",
                component : Landing, 
            },
            Login : {
                name : "Login",
                component : Login,
            },
        }
    },
    MainStack : {
        Screens : {
            Home : {
                name : "Home",
                component : Home,
            },
            CreateNewContactScreen : {
                name : "CreateContact",
                component : CreateContacts
                ,
            },
            EditContactScreen: {
                name : "EditContact",
                component: EditContacts,
            }
        }
    },
}