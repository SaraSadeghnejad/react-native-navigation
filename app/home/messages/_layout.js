import { Stack } from "expo-router";

export default () =>{
    return <Stack><Stack.Screen name='ïndex' 
      options={{title: 'Messages'}}  
    />
    <Stack.Screen name='[id]' 
      options={{title: 'Messages Room'}}  
    />
    </Stack>
}