import React,{useState} from 'react';
import Images from '../Constants/Images';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity ,View } from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Notification from '../Components/Notification';
import firebase from 'firebase/app';
import 'firebase/firestore';
/*
const DATA = [
  {
    id: "1",
    name: "BMSCE Placement dept",
    image: Images.bmscelogo,
    branch: "",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "2",
    name: "Pratibha",
    branch: "Placement Coordinator ,5th sem, CSE",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "3",
    name: "Interview Reminder",
    image: Images.bmscelogo,
    branch: "",
    subject:"Nutanix interview is 7 days ahead.Prepare Well .All the best!!",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "4",
    name: "BMSCE Placement dept",
    image: Images.bmscelogo,
    branch: "",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "5",
    name: "Pratibha",
    branch: "Placement Coordinator ,5th sem, CSE",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "6",
    name: "BMSCE Placement dept",
    image: Images.bmscelogo,
    branch: "",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "7",
    name: "Pratibha",
    branch: "Placement Coordinator ,5th sem, CSE",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"BMSCE placement training is going to start from january from 5th sem. Attendance is compulsory for all. No excuses are entertained.",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },



  
];*/


const Notifications=props=>{

  var db = firebase.firestore();
  var initial_data=[];
  db.collection("Notifications").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        initial_data.push(doc.data());
        //console.log(doc.data());
    });
  });

  const [DATA,setDATA]=useState(initial_data);
  const renderItem = ({ item }) => (
    <Notification
    image={Images.bmscelogo}
    name={item.subject}
    branch={""}
    subject={item.text}
    />
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={DATA}
  //       renderItem={renderItem}
  //       keyExtractor={item => item.id}
  //     />
  //   </SafeAreaView>
  // );
return (
    <View style={styles.screen}>
        <Header/>
        <View style={styles.flatlistContainer}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
        </View>
    </View>
);
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        paddingTop:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000',
    },

});
export default Notifications;