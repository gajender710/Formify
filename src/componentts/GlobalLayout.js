import React from 'react'
//import '../App.css'
// import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button  } from 'react-native'
// import * as  SQLite from 'expo-sqlite';
// import { Dimensions ,StatusBar,SafeAreaView, ScrollView} from 'react-native';
// //import { useState, useEffect } from 'react/cjs/react.development'
// import 'react-native-gesture-handler';
// import HeadingBanner from './HeadingBanner'
// import { add, Layout } from 'react-native-reanimated';
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
// import { RadioGroup ,RadioButtonProps } from 'react-native-radio-buttons-group';
// import { RadioButton } from 'react-native-radio-buttons-group';
// import { radioButtonsData } from '../dataModel/radioButtonData';
// const db = SQLite.openDatabase('GnM.db');
const GlobalLayout = (props) => {

  return (
     
      <div className="backgroundImg">
        
        <div className="cardView">
        {/* <HeadingBanner text={props.heading}  /> */}
          {props.children}
           
        </div>
      </div>
     

  )
}



export default GlobalLayout

