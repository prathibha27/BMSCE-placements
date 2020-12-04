import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import React,{useState} from 'react';
import Images from '../Constants/Images';
import {  StyleSheet, Text, View ,Image } from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Post from '../Components/Post';
import Colors from "../Constants/Colors";

const AddPostScreen=props=>{

    const username=props.route.params.username;
    const branch=props.route.params.branch;

    const [enteredText,setEnteredText] = useState('');
    const setEnteredTextHandler=(enteredVal) =>  {
        console.log(enteredVal);
        setEnteredText(enteredVal);
      };

      const [enteredSub,setEnteredSub] = useState('');
      const setEnteredSubHandler=(enteredVal) =>  {
          console.log(enteredVal);
          setEnteredSub(enteredVal);
        };
  return (
      <View style={styles.screen}>
          <Header/>
            {/* <Text style={{color:"#fff"}}>I am here</Text>
            <TouchableOpacity 
                onPress={()=>
                    {props.route.params.onAddDataHandlerp();props.navigation.pop();}}
                >
                    <Text style={{color:"#fff"}}>Click to go back</Text>
            </TouchableOpacity> */}

            <View style={styles.inner_container}>
                <View style={styles.header}>
                    <Image source={Images.profilepic} style={styles.profilepic}/>
                    <View style={styles.name_container}>
                        <Text style={styles.name}>{username}</Text>
                        <Text style={styles.branch}>{branch}</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.subinput}
                    placeholder={'Company Name'}
                    placeholderTextColor={Colors.blue}
                    onChangeText={setEnteredSubHandler}
                    value={enteredSub} 
                />
                <ScrollView style={styles.scrollview}>
                    <TextInput
                        style={styles.textinput}
                        placeholder={'Add Post here...'}
                        placeholderTextColor={Colors.gray}
                        placeholderFontSize={20}
                        onChangeText={setEnteredTextHandler}
                        value={enteredText} 
                    />
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.post_button} onPress={()=>{
                props.route.params.onAddDataHandlerp({
                    id: Math.floor(Math.random() * 1000) + 1  ,
                    name: username,
                    image: Images.profilepic,
                    branch: branch,
                    title: enteredSub,
                    subject:enteredText,
                    text:enteredText

                });
                props.navigation.pop();
            }
            }>
                <Text style={styles.post}>POST</Text>
            </TouchableOpacity>
      </View>
  );
  }
  const styles=StyleSheet.create({

     
      subinput:{
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
  
      screen:{
          flex:1,
          alignItems:'center',
          justifyContent:'flex-start',
          backgroundColor:'#000000',
      },
  
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
  export default AddPostScreen;