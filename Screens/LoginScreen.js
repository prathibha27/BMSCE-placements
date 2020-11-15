import React,{useState} from 'react';
import {View,StyleSheet,Image, TextInput,Text,Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import firebase from '../firebase';

const Login=props=>{
const [email,setEmail]=useState('');
const [entererdEmail,setEnteredEmail]=useState('');
const [password,setPassword]=useState('');
const [enteredPassword,setEnteredPassword]=useState('');

const onEmailChange = inputText =>{
    setEnteredEmail(inputText);
    //console.log(entererdEmail);
};

const onPasswordChange =inputText =>{
    setEnteredPassword(inputText);
    //console.log(enteredPassword);
};

const Onlogin = () =>{
    setEmail(entererdEmail);
    setPassword(enteredPassword);
    if(password.length<6)
    {
        Alert.alert("Password should be greater than 6");
        return;
    }
    try{
        firebase.auth().signInwithEmailAndPassword(email,password);
    }
    catch(error)
    {
        console.log(error);
    }
    
}

return (
    <View style={styles.screen}>

        <Image source={Images.bmscelogo} style={styles.logo}/>
        <TextInput 
            style={styles.textInput} 
            textAlign={'center'} 
            placeholder="Email ID"
            placeholderTextColor={Colors.bluegray}
            onChangeText={onEmailChange}
        />
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
            <View style={{borderBottomColor:'#ffffff',borderBottomWidth:1}}></View>
            <Text style={{color:'#ffffff',fontSize:18}}>or</Text>
            <View style={{borderBottomColor:'#ffffff',borderBottomWidth:1}}></View>
        </View>
        <TouchableOpacity style={styles.buttonContainergoogle}>
            <Image source={Images.google} style={styles.googlelogo}/>
            <Text style={styles.google}>Sign In with Google</Text>
        </TouchableOpacity>

        

    </View>
);
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        backgroundColor:Colors.black,
        alignItems:'center'
    },

    seperator:{
        flexDirection:'row',
        marginBottom:15,
        marginTop:25,
    },

    seperatorLine:{
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
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
        backgroundColor:Colors.blue,
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