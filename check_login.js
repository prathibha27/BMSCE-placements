import React,{useState} from 'react';
import {View,StyleSheet,Image, TextInput,Text,Button, TouchableOpacity, Alert} from 'react-native';
import Colors from '../Constants/Colors';
import Images from '../Constants/Images';
import * as firebase from 'firebase';
import GreyLine from '../Components/GreyLine';
import * as Google from 'expo-google-app-auth';
import ExperiencePage from '../Routes/StackExpNavigation';
import Expo from 'expo';

var passwordValidator = require('password-validator');

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
    //console.log(enteredEmail);
    //console.log(enteredPassword);
    
    try{
        // if(password.length<=6)
        // {
        //     Alert.alert("Password should be more than 6 letters");
        //     return;
        // }
        // else{
            firebase.auth().signInWithEmailAndPassword(enteredEmail, enteredPassword)
                .then((user) => {
                    // Signed in 

                    
                    var uid=user.user.uid;
                    console.log(uid);
                    console.log("signed in");
                    props.navigation.navigate('StackExpNavigation');
                    
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

onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.id_token,googleUser.accessToken);
            //googleUser.idToken,
            //googleUser.accessToken);
  
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(function(){
            console.log('user signed in')
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    },bind(this)
    );
  }
 isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

 signInWithGoogleAsync = async() => {
    try {
      const result = await Google.logInAsync({
          behavior:'web',
        //clientId: "91578633765-unpdpsbknd003j4ehnkp4if1pdq88hr9.apps.googleusercontent.com",
        androidClientId: "91578633765-t42bm6iovm8d5fq9rlu4c8ir5b65ggrv.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log(result.accessToken);
        console.log("signed in");
        this.onSignIn(result);
        return ExperiencePage;  
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const SignInWithGoogle = () => {
      signInWithGoogleAsync()
  }

  validate_password = (enteredPassword) =>
  {

    var schema = new passwordValidator();


    schema
    .is().min(8)                                    
    .is().max(100)                                  
    .has().uppercase()                              
    .has().lowercase()  
    
    if(schema.validate(enteredPassword))
    {
        console.log('Strong Password');
        return true
    }
    else
    {
        console.log('Your password should contain atleast one Captial letter, one small vcase letter and should be of 8 characters min ');
    }
  }

const ForgotPass = () => {
    //var auth = ;
    //var emailAddress = enteredEmail;
    
    firebase.auth().sendPasswordResetEmail(enteredEmail).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    }
    )
    
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
            onPress={ForgotPass}
        >
            <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.seperator}>
            <GreyLine styles={styles.greyline}/>
            <Text style={{color:'#ffffff',fontSize:18,marginHorizontal:20}}>or</Text>
            <GreyLine styles={styles.greyline}/>
        </View>

        <TouchableOpacity style={styles.buttonContainergoogle}
        onPress={() => SignInWithGoogle() }>
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
