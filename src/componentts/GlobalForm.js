import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'
TextInput

const GlobalForm = (props) => {

  return (
    <View  style={styles.container}>
      <Text style={styles.label} >{props.title}</Text>
      <TextInput placeholder={props.placeholder} 
      style={{...styles.textField,width:(props.width) ? "100%" : "40%"}}
      value={fieldValue}
      onChangeText={setFieldVal}
      onEndEditing={callparent}
      /> 
    </View>
  )
}
export default GlobalForm

const styles = StyleSheet.create({

    container:{
        paddingBottom:12,
    },

    label:{
    },
    textField:{
        borderBottomColor:'pink',
        borderBottomWidth:1,
        // width:{props.width} ? '100%' : '50%'
    }


})