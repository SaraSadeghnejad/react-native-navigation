import {StyleSheet, Text, View } from "react-native";
import {Link,Stack} from "expo-router"
const users =[
  {
    username:"vadim",
    name:"Vadim savin"
  },
  {
    username:"sara",
    name:"sophie"
  }
]
export default function Search() {
  return (
    <View style={styles.container}>
    <Stack.Screen options={{title:"Home"}} />
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      <Link
       href="/Alex"
        style={styles.link}>
        Open Alex`s profile
        </Link>
        {users.map(user =>(
          <Link href={`/${user.username}`} style={styles.link}>
         Open {user.name}s profile
         </Link>
        ))}
      <Link
        style={styles.link}
       href={{
        pathname:"/vidim",
        params:{name:"Vadim", surname:"Savin"}
      }}>
        open profile
      </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link:{
    fontSize:20,
    marginVertical:10,
    fontWeight: "bold",
    textDecorationStyle:'underline'
  }
});
