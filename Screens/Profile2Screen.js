import React,{useState} from 'react';
import Images from '../Constants/Images';
import { StyleSheet, Text, View ,Image,TextInput ,TouchableWithoutFeedback} from "react-native";
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile3 from './Profile3Screen';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Profile2=props=>{

var db = firebase.firestore();
var uid="us4G93I1WiYAe2QTBKbgDe3kvG93";
var docRef = db.collection("UserDetails").doc(uid);
var present_data={};
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        present_data=doc.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


const [firstname,setFirstname]=useState(present_data.firstname);
const onFirstnameChange = inputText =>{
    setFirstname(inputText);
    //console.log("Firstname: ",firstname);
};

const [lastname,setLastname]=useState(present_data.lastname);
const onLastnameChange = inputText =>{
    setLastname(inputText);
    //console.log("Lastname: ",lastname);
};

const [usn,setUsn]=useState(present_data.usn);
const onUsnChange = inputText =>{
    setUsn(inputText);
    //console.log("Usn: ",usn);
};

const [year,setYear]=useState(present_data.year);
const onYearChange = inputText =>{
    setYear(inputText);
    //console.log("Year: ",year);
};

const navigateHandler = () =>{
    console.log(firstname,"  ",lastname,"  ",usn,"  ",year);
    props.navigation.navigate('Profile3Screen',
            {
                present_data:present_data,
                firstname:firstname,
                lastname:lastname,
                year:year,
                usn:usn
            });
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
            val
            onChangeText={onFirstnameChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Last Name" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onLastnameChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="USN" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onUsnChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Year of Study" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onYearChange}
            />

            <TouchableWithoutFeedback 
                //onPress={()=>{props.navigation.navigate('Profile3Screen');}}
                onPress={navigateHandler}
                >
                <Ionicons name='md-arrow-forward' size={30} color={Colors.gray} style={styles.arrow_right} /> 
            </TouchableWithoutFeedback>
             
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