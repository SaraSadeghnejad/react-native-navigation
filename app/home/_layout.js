import { Tabs } from "expo-router";
import {FontAwsome} from "@expo/vector-icons"
export default () =>{
    return (<Tabs 
    screenOptions={{tabBarShowLabel:false}}>
        <Tabs.Screen name="feed" options={{
            tabBarIcon:({color})=>(<FontAwsome 
            name="home" size="24" color={color} />),
            title:'Feed',
        }}/>
          <Tabs.Screen name="search" options={{
            tabBarIcon:({color})=>(<FontAwsome 
            name="search" size="24" color={color} />),
            title:'Search'
        }}/>
          <Tabs.Screen name="messages" options={{
            tabBarIcon:({color})=>(<FontAwsome 
            name="envelope" size="24" color={color} />),
            titles:'Messages'
        }}/>
    </Tabs>);
}