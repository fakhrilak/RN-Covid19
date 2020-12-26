import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Card (data){
    
    return(
        <View>
            <FlatList
            data={data}
            renderItem={({data,index}) => 
            <View style={styles.containerIndo}>
                <Text>{data.attributes.Provinsi}</Text>
            </View>}/>     
        </View>
        
    )
}

const styles = StyleSheet.create({
    containerIndo:{
        width:"80%",
        height:"20%",
        backgroundColor:"#3385ff",
        borderRadius: 20
    }
  });