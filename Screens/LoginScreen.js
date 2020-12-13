import React,{useState} from 'react';
import {View,StyleSheet,Image, TextInput,Text,Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import * as firebase from 'firebase';
import GreyLine from '../Components/GreyLine';
import * as Google from 'expo-google-app-auth';

import {registration, signIn , loggingOut} from './LoginScreen_func';

const Login=props=>{
    const [email,setEmail]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [password,setPassword]=useState('');
    const [enteredPassword,setEnteredPassword]=useState('');
    
    const onEmailChange = inputText =>{
        setEnteredEmail(inputText);
        //console.log(enteredEmail);
    };
    
    const onPasswordChange =inputText =>{
        setEnteredPassword(inputText);
        //console.log(enteredPassword);
    };
    
    const Onlogin = () =>{
        console.log(enteredEmail);
        console.log(enteredPassword);
        
        try{
             if(password.length<=6)
             {
                Alert.alert("Password should be more than 6 letters");
                 return;
            }
             else{
                   signIn(enteredEmail,enteredPassword);
                 }
                
            }
        //}
        catch(error){
            console.log(error.message);
        }
        //props.navigation.navigate('StackExpNavigation');
        
    };

    signInWithGoogle = async() => 
    {
        try {
          await GoogleSignIn.askForPlayServicesAsync();
          const { type, user } = await GoogleSignIn.signInAsync();
          const data = await GoogleSignIn.GoogleAuthentication.prototype.toJSON();
          if (type === 'success') {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            const googleProfileData = await firebase.auth().signInWithCredential(credential);
            this.onLoginSuccess.bind(this);
          }
        } catch ({ message }) {
          alert('login: Error:' + message);
        }
      }

/*
export default function SignIn() {

    const Login=props=>{
        const [email,setEmail]=useState('');
        const [enteredEmail,setEnteredEmail]=useState('');
        const [password,setPassword]=useState('');
        const [enteredPassword,setEnteredPassword]=useState('');
        
        /*const onEmailChange = inputText =>{
            setEnteredEmail(inputText);
            //console.log(enteredEmail);
        };
        
        const onPasswordChange =inputText =>{
            setEnteredPassword(inputText);
            //console.log(enteredPassword);
        };
  
    const handlePress = () => {
      if (!email) {
        Alert.alert('Email field is required.');
      }
  
      if (!password) {
        Alert.alert('Password field is required.');
      }
  
      if(enteredPassword.length<=6)
            {
                Alert.alert("Password should be more than 6 letters");
                return;
            }
                else
                {
                    signIn(enteredEmail,enteredPassword);
                }
            
    };
  
    } */
/*
async signInWithEmail() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak Password!');
          } else {
              this.onLoginFailure.bind(this)(errorMessage);
          }
      });
  }
  
const Onlogin = () =>{
    console.log(enteredEmail);
    console.log(enteredPassword);
    setEmail(enteredEmail);
    setPassword(enteredPassword);
    try{
            if(enteredPassword.length<=6)
            {
                Alert.alert("Password should be more than 6 letters");
                return;
            }
           else{
           
            if()
            {
                firebase.auth().createUserWithEmailAndPassword(enteredEmail, enteredPassword)
                    .then((user) =>
                    dispatch({ type: USER_LOGIN_SUCCESS, payload: user }));

                    const dbRoot = firebase.firestore().collection('login_database');

                    const defaultDoc = {
                            email_id: enteredEmail,
                            user_password: enteredPassword
                        };

                    addData = async() =>
                    {
                        await  dbRoot.doc(user.user.uid).set(defaultDoc);
                        }

                        
                    }
            }
            else
            {
                firebase.auth().signInWithEmailAndPassword(enteredEmail, enteredPassword)
                .then((user) => {
                    // Signed in 
                    // ...

                    console.log("signed in");
                })
                .catch((error) => {
                    //var errorMessage = error.message;
                    console.log(error.message);
                });
            }
                    
    
    catch(error){
        console.log(error.message);
    }
    }
    //props.navigation.navigate('StackExpNavigation');
    /*
    if(password.length<6)
    {
        Alert.alert("Password should be greater than 6");
        return;
    }
    try
    {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) =>
        dispatch({ type: USER_LOGIN_SUCCESS, payload: user }));

        const dbRoot = firebase.firestore().collection('login_database');

        const defaultDoc = {
                email_id: email,
                user_password: password
            };

       addData = async() =>
       {
         await  dbRoot.doc(user.user.uid).set(defaultDoc);
        }
    }
    
    catch(error)
    {
        console.log(error);
    }
}
*/
/*
async signInWithGoogle() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      const data = await GoogleSignIn.GoogleAuthentication.prototype.toJSON();
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
        const googleProfileData = await firebase.auth().signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }*/
return (
    <View style={styles.screen}>

        <Image source={Images.bmscelogo} style={styles.logo}/>
        <TextInput 
            style={styles.textInput} 
            textAlign={'center'} 
            placeholder="Email ID"
            placeholderTextColor={Colors.bluegray}
            //onChangeText={onEmailChange}
        />
        <TextInput 
            style={styles.textInput} 
            textAlign={'center'} 
            placeholder="Password" 
            placeholderTextColor={Colors.bluegray}
            autoCorrect={false}
            secureTextEntry={true}    
            //onChangeText={onPasswordChange}
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

        <TouchableOpacity style={styles.buttonContainergoogle} onPress={() => this.signInWithGoogle()}>
            <Image source={Images.google} style={styles.googlelogo}/>
            <Text style={styles.google}>Sign In with Google</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>Dont have an acc?</Text>

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
