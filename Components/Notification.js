import React from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import GreyLine from './GreyLine';
import Colors from '../Constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//creation,diamond,facebook-messenger,fan,fire,flash
const Post=props=>{
return (
<View style={styles.outercontainer}>
    <View style={styles.innercontainer}>
        <MaterialCommunityIcons name="flash" color={Colors.yellow} size={30} style={styles.flash}/>
        <View style={{...props.styles,//...styles.card
                ...styles.container}}>
            <View style={styles.heading}>
                <Image style={styles.image} source={props.image}/>
                <View style={styles.nameblock}>
                    <Text  style={styles.name}>{props.name}</Text>
                    <Text  style={styles.branch}>{props.branch}</Text>
                </View>
            </View>
            <Text style={styles.subject}>{props.subject}</Text>
        </View>
    </View>
    
    <GreyLine styles={styles.greyline}/>
</View>
);
}
const styles=StyleSheet.create({

    flash:{
        flex:1,
        paddingTop:35,
        paddingLeft:20,
    },
    innercontainer:{
        flexDirection:'row',
    },
    outercontainer:{
        padding:10,
        backgroundColor:Colors.black
    },
    container:{
        paddingHorizontal:30,
        paddingVertical:20,
        flex:7
    },

    card:{
    //   shadowColor:'rgba(0,0,0,0.5)',
    //   shadowOffset:{width:0,height:2},
    //   shadowRadius:6,
    //   shadowOpacity:0.26,
      backgroundColor:'#263238',
      elevation:5,
      borderColor:'#0277bd',
      padding:20,
      borderRadius:5,
      paddingTop:20,
      width:400,
    },
    nameblock:{
        marginLeft:20
    },
    image:{
        height:50,
        width:50,
        borderRadius:25,
    },
    heading:{
        flexDirection:'row',
    },
    name:{
        fontSize: 20,
        fontWeight:"bold",
        color:'#ffffff',
    },
    branch:{
        fontSize: 15,
        color:'white',
    },
    subject:{
        fontSize: 15,
        marginTop:20,
        color:Colors.gray
    },

    greyline:{
        width:390,
        borderWidth:0.5,
        marginLeft:10,
    }

});
export default Post;