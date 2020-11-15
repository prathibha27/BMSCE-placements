import React,{ useState } from 'react';
import Colors from '../Constants/Colors';
import {TouchableWithoutFeedbackComponent,StyleSheet, Text, View ,Image} from 'react-native';
import Images from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GreyLine from './GreyLine';
const Header = props =>{

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='md-menu' size={40} color={'#0000ff'} style={styles.item1} />
        <Image source={Images.bmscelogo} style={styles.bmscelogo}/>
      </View>
      <GreyLine styles={styles.greyline}/>
    </View>
    

  );

}
const styles=StyleSheet.create({

  greyline:{
    width:355,
    borderWidth:0.5,
  },

  container:{
    width:'100%',
    height: 95,    
  },
  header:{
    width:'100%',
    height:90,
    paddingTop:36,
    flexDirection:'row',
    backgroundColor:'#000000',
    alignItems:"center",
  },

  item1:{
    marginRight:140,
  },

  headerTitle:{
    color:'black',
    fontSize:18
  },

  bmscelogo:{
      width:40,
      height:40,
      marginLeft:140,
  }

});

export default Header;