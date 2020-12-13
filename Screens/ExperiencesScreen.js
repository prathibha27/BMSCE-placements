import React,{useState} from 'react';
import Images from '../Constants/Images';
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Post from '../Components/Post';
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostDetail from './PostDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
import firebase from "firebase"
require("firebase/firestore");

const firebaseConfig = 
{ 
    apiKey: "AIzaSyByhSbCr0uCKEMf7SUe5EjiV170O2LGFIs",
  authDomain: "bmsce-placements-af860.firebaseapp.com",
  databaseURL: "https://bmsce-placements-af860.firebaseio.com",
  projectId: "bmsce-placements-af860",
  storageBucket: "bmsce-placements-af860.appspot.com",
  messagingSenderId: "128144094885",
  appId: "1:128144094885:web:55987fac34050c02213f4c",
  measurementId: "G-C7R3HV9G5R"
 } 
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
/*
  componentDidMount()
  {
    var db = firebase.firestore();
    var docRef = db.collection("senior_experience");
    const output = {};

    docRef.limit(50)
		.get()
		.then(querySnapshot => {
			querySnapshot.docs.map(function (documentSnapshot) {
				return (output[documentSnapshot.id] = documentSnapshot.data());
			});
      this.setState({dataSource: Object.entries(output)}) ;
      console.log("datasource:", this.state.dataSource );
		});
  }
/*
db.collection("senior_experience").document(FirebaseAuth.getInstance().getCurrentUser().getUid())
        .get().addOnCompleteListener(task -> {
    if(task.isSuccessful() && task.getResult() != null){
        String firstName = task.getResult().getString("First Name");
        String email = task.getResult().getString("Email");
        String phone = task.getResult().getString("Phone");
        //other stuff
    }else{
        //deal with error
    }
});*/


const Experiences=props=>{


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
  

  const onAddDataHandler = (enteredData) =>{
    console.log(enteredData);
    setDATA([...DATA, 
      {
        id:enteredData.id,
        name:enteredData.name,
        branch:enteredData.branch,
        image:enteredData.image,
        title:enteredData.title,
        subject:enteredData.subject,
        text:enteredData.text
      
      } ]);
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
        image={item.image}
        name={item.name}
        branch={item.branch}
        subject={item.subject}
        />
    </TouchableOpacity>
  );

return (
    <View style={styles.screen}>
        <Header/>
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
                props.navigation.navigate('AddPostScreen',
                {
                  username:'Saakshi',
                  branch:'Computer Science and Engineering',
                  onAddDataHandlerp:onAddDataHandler
                });  
              
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

    fab_container:{
      marginBottom:25
    }

});
export default Experiences;