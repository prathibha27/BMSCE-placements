import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity ,View ,Image,TextInput,TouchableWithoutFeedback} from "react-native";
//import { CheckBox } from 'react-native-elements';
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile5=props=>{
    const navigateHandler = () =>{
            const{firstname,
                lastname,
                usn,
                year,
                gender,
                tenth,
                twelth,
                becgpa,
                dob,
                diplomacgpa,
                activeBacklogs,
                noofbacklogs,
                branch,
                emailid,
                contactno,
                address}=props.route.params;
            console.log(firstname,
                lastname,
                usn,
                year,
                gender,
                tenth,
                twelth,
                becgpa,
                dob,
                diplomacgpa,
                activeBacklogs,
                noofbacklogs,
                branch,
                emailid,
                contactno,
                address);
                var db = firebase.firestore();
                var user = firebase.auth().currentUser;
                var uid="us4G93I1WiYAe2QTBKbgDe3kvG93";
                db.collection("UserDetails").doc(uid).set({
                    firstname:firstname,
                    lastname:lastname,
                    usn:usn,
                    year:year,
                    gender:gender,
                    tenth:tenth,
                    twelth:twelth,
                    becgpa:becgpa,
                    dob:dob,
                    diplomacgpa:diplomacgpa,
                    activeBacklogs:activeBacklogs,
                    noofbacklogs:noofbacklogs,
                    branch:branch,
                    emailid:emailid,
                    contactno:contactno,
                    address:address
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
        
    }
return (
    <View style={styles.screen}>
        <Header />
        <View style={styles.container}> 
            <View style={styles.inner_container}>
                <Text style={styles.name}>Saakshi Navale</Text>
                <Text style={styles.usn}>1BM18CS088</Text>
            </View>

            <Text style={styles.uploadtext}>
                Upload your Resume
            </Text>

            <TouchableOpacity style={styles.upload_button}>
                <Ionicons name='md-add' size={30} color={Colors.blue} />
                <Text style={styles.upload_button_text}>UPLOAD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirm} onPress={navigateHandler}>
                <Text style={styles.confirm_text}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </View>

);
}
const styles=StyleSheet.create({

    inner_container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },

    confirm:{
        alignSelf:"center",
        width:120,
        borderRadius:20,
        height:40,
        borderColor:Colors.blue,
        borderWidth:2,
        marginTop:50
    },

    confirm_text:{
        alignSelf:"center",
        color:Colors.blue,
        fontSize:20,
        paddingTop:2
    },

    uploadtext:{
        color:Colors.blue,
        marginTop:40,
        fontSize:18,
    },

    upload_button:{
        borderRadius:20,
        width:130,
        backgroundColor:'rgba(32, 161, 238,0.12)', 
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:10,
        paddingTop:5,
        marginTop:20
    },

    upload_button_text:{
        fontSize:18,
        color:"#fff"
    },

    screen:{
        flex:1,
        marginTop:0,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#000000',
    },


    name:{
        color:Colors.blue,
        marginRight:80,
        fontSize:18
    },

    usn:{
        color:Colors.gray,
        marginLeft:80
    },


});
export default Profile5;