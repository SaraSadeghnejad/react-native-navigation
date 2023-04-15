import { Stack, useRouter } from "expo-router";
import {AntDesign} from "@expo/vector-icons"
import { Alert } from "react-native";
export default () =>{
    const router = useRouter();
    return <Stack
     screenOptions={{
        headerStyle:{backgroundColor:"#FFE030"},
        headerTintColor:"red",
        headerTitleStyle:{
            fontWeight:"bold"
            },
            headerRight:()=>(
                <AntDesign onPress={
                    ()=>{
                        // Alert.alert("More info")
                        router.push('/modal')
                        }
                    }
                 name="infocirlceo" size={24} color="black" />
            ),
        }} >
         <Stack.Screen name="index" options={{title:"Home"}} />   
       <Stack.Screen name="modal" options={{presentation:"modal",
       headerStyle:{
        backgroundColor:"white"
       },
       headerTintColor:"#1E2632"
       }} />
        </Stack>;
}