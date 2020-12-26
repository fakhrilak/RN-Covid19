import React,{useState,useEffect} from 'react'
import { FlatList, StyleSheet, Text, View ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Indonesia () {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.kawalcorona.com/indonesia/provinsi')
        .then(response=>response.json())
        .then(json=>setData(json))
      },[])
    const render=(data)=>{
        let a = []
      for (let i =0 ;i<data.length;i++){
        a.push({
            "provinsi":data[i].attributes.Provinsi,
            "meninggal":data[i].attributes.Kasus_Meni,
            "sembuh":data[i].attributes.Kasus_Semb,
            "positiv":data[i].attributes.Kasus_Posi
        })
      }
      return a
    }
    

    return (
        <View style={{width:"100%"}}>
            
           <FlatList
            data={render(data)}
            renderItem={({item,index}) => 
            <ScrollView style={styles.container}>
            <View style={styles.containerIndo} key={index}>
                <Text
                style={{
                fontSize:30,
                color:"#ff3333",
                fontWeight:"bold",
                textAlign:"center",
                
                }}
                >{item.provinsi}</Text>

                <View style={{flexDirection:"row"}}>
                    <View style={styles.content1}> 
                        <Text style={{color:"#00a3cc",
                        textAlign:"center",
                        }}>Cases {"\n\n"} {item.positiv}</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={{color:"#ffd6cc",
                        textAlign:"center",
                    }}>Death {"\n\n"} {item.meninggal}</Text>
                    </View>
                    <View style={styles.content3}> 
                        <Text style={{color:"#006600",
                        textAlign:"center",
                    }}>Recovered {"\n\n"} {item.sembuh}</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            }/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        paddingBottom:20
    },
    containerIndo:{
        width:"80%",
        height:"100%",
        marginLeft:"10%",
        marginRight:"10%",
        backgroundColor:"#d9d9d9",
        borderRadius: 10,
        paddingTop:20,
        paddingBottom:20,
    },
      content1:{
          width: "30%",
          height:"60%",
          marginTop:"10%",
          margin:5,
          backgroundColor:"#b3ffff",
          borderRadius:10,
      },
      content2:{
          width: "30%",
          height: "60%",
          marginTop:"10%",
          margin:5,
          borderRadius:10,
          backgroundColor:"#ff3333"
      },
      content3:{
          width: "30%",
          height: "60%",
          marginTop:"10%",
          borderRadius:10,
          margin:5,
          backgroundColor:"#99ff33"
      }
  });

