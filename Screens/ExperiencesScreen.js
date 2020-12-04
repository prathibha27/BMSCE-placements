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