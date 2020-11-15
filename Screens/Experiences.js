import React from 'react';
import Images from '../Constants/Images';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity ,View } from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Post from '../Components/Post';

const DATA = [
  {
    id: "1",
    name: "Saakshi",
    image: Images.profilepic,
    branch: "Computer Science and Engineering",
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "2",
    name: "Pratibha",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "3",
    name: "Saakshi",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "4",
    name: "Pratibha",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "5",
    name: "Saakshi",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "6",
    name: "Pratibha",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  },

  {
    id: "7",
    name: "Saakshi",
    branch: "Computer Science and Engineering",
    image: Images.profilepic,
    title:"Nutanix Interview Experience",
    subject:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview",
    text:"My Interview Experience with Nutanix was like this. We had 3 rounds \n 1)Hackerrank Test \n 2)Technical interview\n"+
        "3)Project and Internship Interviews \n 4)HR Interview \n My Personal suggestion would be concentrate on Data structures"+
        "and algorithms. Practice questions on hackerrank . Go through geeks for geeks .Be thorough with your Projects."+
        "Have good knowledge about your internships. All the best, See you in Nutanix next year!!!"
  }
  
];


const Experiences=props=>{

  const renderItem = ({ item }) => (
    <Post 
    image={item.image}
    name={item.name}
    branch={item.branch}
    subject={item.subject}
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
export default Experiences;