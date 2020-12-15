import React,{useState} from 'react';
import {View,StyleSheet,Image, TextInput,Text,Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import * as firebase from 'firebase';
import GreyLine from '../Components/GreyLine';

const Login=props=>{
const [email,setEmail]=useState('');
//const [enteredEmail,setEnteredEmail]=useState('');
const [password,setPassword]=useState('');
const [enteredPassword,setEnteredPassword]=useState('');



const onPasswordChange =inputText =>{
    setEnteredPassword(inputText);
    //console.log(enteredPassword);
};

const Onlogin = () =>{
    //console.log(enteredEmail);
    //console.log(enteredPassword);
    
    try{
        // if(password.length<=6)
        // {
        //     Alert.alert("Password should be more than 6 letters");
        //     return;
        // }
        // else{
            firebase.auth().signInWithEmailAndPassword("bms.plo@bmsce.ac.in", enteredPassword)
                .then((user) => {
                    // Signed in 
                    var uid=user.user.uid;
                    console.log(uid);
                    console.log("signed in");
                    props.navigation.navigate('PDtabs');
                })
                .catch((error) => {
                    //var errorMessage = error.message;
                    console.log(error.message);
                });
            
        }
    //}
    catch(error){
        console.log(error.message);
    }
    
    
}

return (
    <View style={styles.screen}>

        <Image source={Images.bmscelogo} style={styles.logo}/>
        <TextInput 
            style={styles.textInput} 
            textAlign={'center'} 
            placeholder="Password" 
            placeholderTextColor={Colors.bluegray}
            autoCorrect={false}
            secureTextEntry={true}    
            onChangeText={onPasswordChange}
        />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={Onlogin}
        >
            <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.seperator}>
            <GreyLine styles={styles.greyline}/>
            <Text style={{color:'#ffffff',fontSize:18,marginHorizontal:20}}>or</Text>
            <GreyLine styles={styles.greyline}/>
        </View>


    </View>
);
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        backgroundColor:Colors.black,
        alignItems:'center'
    },

    greyline:{
        width:150,
        borderWidth:1,
        alignSelf:"center"

    },

    seperator:{
        flexDirection:'row',
        marginBottom:15,
        marginTop:25,
        alignItems:"center"
    },

    googlelogo:{
        height:30,
        width:30,
    },

    google:{
        fontSize:18,
        paddingVertical:10,
        color:Colors.forgotPasswordBlue
    },

    buttonContainergoogle:{
        flexDirection:'row',
        borderRadius:15,
        marginTop:20,
        width:300,
        height:50,
        alignItems:'center',
        justifyContent:"space-around",
        backgroundColor:'rgba(32, 161, 238,0.12)',
        opacity:14,
    },

    continue:{
        color:'#000000',
        fontSize:18,
    },

    logo:{
        width:70,
        height:70,
        marginTop:100,
        marginBottom:20
    },

    buttonContainer:{
        borderRadius:30,
        marginTop:20,
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.lightblue
    },

    forgotPassword:{
        fontWeight:"bold",
        fontSize:14,
        color:Colors.forgotPasswordBlue,
    },

    textInput:{
        borderWidth:1,
        borderRadius:40,
        width:300,
        borderColor:Colors.bluegray,
        margin:10,
        padding:7,
        fontSize: 18,
        color:Colors.bluegray
    },
});
export default Login;