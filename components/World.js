import React,{useState,useEffect} from 'react'
import {StyleSheet,View ,Text,FlatList,ScrollView,TextInput} from 'react-native'

export default function World (){
    const [data,setData]=useState([])
    const [data2,setData2]=useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [triger,setTriger] = useState(false)
    useEffect(()=>{
        fetch('https://coronavirus-19-api.herokuapp.com/all')
        .then(response=>response.json())
        .then(json=>setData(json))

        fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response=>response.json())
        .then(json=>setData2(json))
     },[])

     useEffect(() => {
        if(searchTerm !== ""){
            
            const results = data2.filter(data =>
                data.country.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
        }else{
            setSearchResults(data2)
        }
    }, [searchTerm,data2]);

    return (
        <View>
            <TextInput
            style={{ height: 30, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    borderRadius:10,
                    paddingLeft:5,
                    marginTop:10,
                    width:200
                }}
                placeholder="Search Contries"
                onChangeText={text=>setSearchTerm(text)}
                value={searchTerm}
            />
            <View style={styles.container}>
                <View style={styles.content1}> 
                    <Text style={{color:"#00a3cc",
                    textAlign:"center",
                    }}>Cases {"\n\n"} {data.cases}</Text>
                </View>
                <View style={styles.content2}>
                    <Text style={{color:"#ffd6cc",
                    textAlign:"center",
                }}>Death {"\n\n"} {data.deaths}</Text>
                </View>
                <View style={styles.content3}> 
                    <Text style={{color:"#006600",
                    textAlign:"center",
                }}>Recovered {"\n\n"} {data.recovered}</Text>
                </View>
            </View>

            <FlatList
            data={searchResults}
            renderItem={({item,index}) => 
            <ScrollView style={styles.containerscroll}>
            <View style={styles.containerworld} key={index}>
                <Text
                style={{
                fontSize:30,
                color:"#ff3333",
                fontWeight:"bold",
                textAlign:"center",
                
                }}
                >{item.country}</Text>

                <View style={{flexDirection:"row"}}>
                    <View style={styles.content1}> 
                        <Text style={{color:"#00a3cc",
                        textAlign:"center",
                        }}>Cases {"\n\n"} {item.cases}</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={{color:"#ffd6cc",
                        textAlign:"center",
                    }}>Death {"\n\n"} {item.deaths}</Text>
                    </View>
                    <View style={styles.content3}> 
                        <Text style={{color:"#006600",
                        textAlign:"center",
                    }}>Recovered {"\n\n"} {item.recovered}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.content1}> 
                        <Text style={{color:"#00a3cc",
                        textAlign:"center",
                        }}>Today Cases {"\n\n"} {item.todayCases}</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={{color:"#ffd6cc",
                        textAlign:"center",
                    }}>Today Deaths {"\n\n"} {item.todayDeaths}</Text>
                    </View>
                    <View style={styles.content2}> 
                        <Text style={{color:"#ffd6cc",
                        textAlign:"center",
                    }}>Critical {"\n\n"} {item.critical}</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection:"row"
    },
    containerscroll:{
        width:"100%"
    },
    containerworld:{
        width:"80%",
        justifyContent:"center",
        backgroundColor:"#d9d9d9",
        marginLeft:"10%",
        marginTop:20,
        borderRadius:20
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
