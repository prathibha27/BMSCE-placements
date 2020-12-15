import React,{useState} from 'react';
import Images from '../Constants/Images';
import { Alert, FlatList, ScrollView, Image, StyleSheet, Text, View ,Modal,Button} from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Post from '../Components/Post';
import { FloatingAction } from "react-native-floating-action";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import PostDetail from './PostDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
import firebase from 'firebase/app';
import 'firebase/firestore';



const PDNotifications=props=>{

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



const [isModalOpen,setIsModalOpen]=useState(false);

console.log(props.route.params);

//console.log(initial_data);
const [DATA,setDATA]=useState(initial_data);



/*
  const [DATA,setDATA]=useState([

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
    
  ]);
  */
  


 const username="BMSCE PLO";
 const branch="";


 const [enteredText,setEnteredText] = useState('');
 const setEnteredTextHandler=(enteredVal) =>  {
     //console.log(enteredVal);
     setEnteredText(enteredVal);
   };

   const [enteredSub,setEnteredSub] = useState('');
   const setEnteredSubHandler=(enteredVal) =>  {
       //console.log(enteredVal);
       setEnteredSub(enteredVal);
     };
  const actions = [
  ];

  

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={()=>{
          props.navigation.navigate('PostDetailScreen',
            {
              item:item,
            });
        }}>
        <Post 
        image={Images.bmscelogo}
        name={item.subject}
        branch={""}
        subject={item.text}
        />
    </TouchableOpacity>
  );

return (
    <View style={styles.screen}>
        <Header/>

        <Modal visible={isModalOpen}>
          <View style={styles.modalscreen}>
              <View style={styles.inner_container}>
                    <View style={styles.header}>
                        <Image source={Images.bmscelogo} style={styles.profilepic}/>
                        <View style={styles.name_container}>
                            <Text style={styles.name}>{username}</Text>
                            
                        </View>
                    </View>
                    <TextInput
                        style={styles.subinput}
                        placeholder={'Subject'}
                        placeholderTextColor={Colors.blue}
                        onChangeText={setEnteredSubHandler}
                        value={enteredSub} 
                    />
                    <ScrollView style={styles.scrollview}>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Notifications Detials...'}
                            placeholderTextColor={Colors.gray}
                            placeholderFontSize={20}
                            onChangeText={setEnteredTextHandler}
                            value={enteredText} 
                        />
                    </ScrollView>
                </View>
                {/* <TouchableOpacity style={styles.post_button} onPress={()=>{
                  console.log("clicked");
                  setIsModalOpen(false)}}>
                    <Text style={styles.post}>POST</Text>
                </TouchableOpacity> */}

            <Button title="POST" style={styles.post_button} onPress={()=>{
              
              db.collection("Notifications").doc().set({
                id: (Math.floor(Math.random() * 1000)+1).toString()  ,
                name: username,
                subject:enteredSub,
                text:enteredText
              })
              .then(function() {
                console.log("Document successfully written!");
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });

              setDATA([...DATA, 
                {
                  id: (Math.floor(Math.random() * 1000)+1).toString()  ,
                  name: username,
                  image: Images.profilepic,
                  branch: branch,
                  title: enteredSub,
                  subject:enteredText,
                  text:enteredText
                } ]);
              setIsModalOpen(false)}} />
          </View>
        </Modal>

        <View style={styles.flatlistContainer}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
            <FloatingAction
              actions={actions}
              onPressItem={name => {
                console.log(`selected button: ${name}`);
              }}
              onPressMain={()=>{
                setIsModalOpen(true);
                // props.navigation.navigate('AddPostScreen',
                // {
                //   username:'Saakshi',
                //   branch:'Computer Science and Engineering'
                // });  
              
              }}
            />
          
        </View>
    </View>
);
}
const styles=StyleSheet.create({

    flatlistContainer:{
      marginBottom:50
    },
    screen:{
        flex:1,
        paddingTop:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000',
    },

    modalscreen:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor:'#000000',
  },

    fab_container:{
      marginBottom:25
    }
    ,subinput:{
      borderBottomColor:Colors.blue,
      borderBottomWidth:2,
      width:350,
      alignSelf:"center",
      padding:10,
      marginTop:20,
      color:Colors.blue
  },
  scrollview:{

    marginTop:50,
    width:370,
    height:370
    
  },

  profilepic:{
      width:60,
      height:60,
      borderRadius:30,
      marginRight:20
  },

  name:{
    color:"#fff",
    fontSize:18,
  },

  branch:{
      color:Colors.gray,
      fontSize:18
  },

  post_button:{
      width:100,
      height:40,
      borderRadius:25,
      backgroundColor:Colors.blue,
      alignItems:"center",
      justifyContent:'center',
      fontWeight:'bold'
  },

  // screen:{
  //     flex:1,
  //     alignItems:'center',
  //     justifyContent:'flex-start',
  //     backgroundColor:'#000000',
  // },

  inner_container:{
      width:370,
      height:450,
      borderRadius:20,
  },

  header:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:30
  },

  textinput:{
      fontSize:16,
      color:Colors.gray,
        
  }

});
export default PDNotifications;