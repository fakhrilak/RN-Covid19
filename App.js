import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Indonesia from "./components/Indonesia"
import World from "./components/World"
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const [render,setRender] = useState(false)
   const test=()=>{
     setRender(!render)
   }
   const arrowright = <Icon name="arrow-right" size={30} color="red" />
   const arrowleft = <Icon name="arrow-left" size={30} color="red" />
  return (
      <View style={styles.container}>
        <StatusBar style={styles.StatusBar}/>
        {!render&&<Text onPress={test}
        style={styles.title}
        >{arrowright}</Text>}
        {render && <Text onPress={test}
        style={styles.title}
        >{arrowleft}</Text>}
        {render && <Indonesia/>}
        {!render &&<World/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
    // justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    backgroundColor:"#fff",
    width:"100%",
    color:"#fff",
    fontWeight:"bold",
    textAlign:"right"
  }
});
