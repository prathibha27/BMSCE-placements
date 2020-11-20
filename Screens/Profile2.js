import React from 'react';
import Images from '../Constants/Images';
import { StyleSheet, Text, TouchableOpacity ,View ,Image,TextInput} from "react-native";
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile3 from './Profile3';


const Profile2=props=>{
const navigateHandler = () =>{
    console.log
    props.navigation.navigate('Profile3');
}
return (
    <View style={styles.screen}>
        <Header />
        <View style={styles.container}> 
            <Image source={Images.profilepic} style={styles.profile_pic}/>
            <Text style={styles.name}>Saakshi Navale</Text>
            <Text style={styles.usn}>1BM18CS088</Text>
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="First Name" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Last Name" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="USN" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Year of Study" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />

            <TouchableOpacity onPress={navigateHandler}>
                <Ionicons name='md-arrow-forward' size={30} color={Colors.gray} style={styles.arrow_right} /> 
            </TouchableOpacity>
             
        </View>
    </View>

);
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        marginTop:0,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#000000',
    },

    arrow_right:{
        marginLeft:350
    },

    profile_pic:{
        width:100,
        height:100,
        borderRadius:50,
        alignSelf:"center",
        margin:20,
    },

    name:{
        color:Colors.blue,
        alignSelf:"center",
        fontSize:18,
        fontWeight:"bold"
    },

    usn:{
        color:Colors.gray,
        alignSelf:"center",
        marginBottom:20,
    },

    textInput:{
        borderBottomColor:Colors.blue,
        borderBottomWidth:2,
        color:Colors.gray,
        padding:10,
        width:350,
        marginVertical:10
    },

});
export default Profile2;