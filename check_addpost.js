import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import React,{useState} from 'react';
import Images from '../Constants/Images';
import {  StyleSheet, Text, View ,Image } from "react-native";
import  Header  from '../Components/Header';
import GreyLine from '../Components/GreyLine';
import Post from '../Components/Post';
import Colors from "../Constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { render } from "react-dom";
import AddingPost from './AddingPost_firebase';

//require("firebase/firestore"); 
//const firebase = require("firebase");
/*
AddPostScreen=props=>{

        const username=props.route.params.username;
        const branch=props.route.params.branch;
     }
     */
    /*
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
*/

export default class AddPost extends React.Component
{
   constructor()
   {
    state = {
        title:"",
        company_name:"",
        text:"",
        image: null 
    };
   }
    

    componentDidMount()
    {
        this.getPhotoPermission();
    }
    getPhotoPermission = async() =>{
        if(Constants.platform.android)
        {
            const {status} = await Permissions.askAsync(Permissions,CAMERA_ROLL);

            if(status != "granted")
            {
                alert("we need permission to access your camera roll")
            }
        }
    };

    handlePost = () => {
        AddingPost.shared.addpost({text:this.state.text.trim(),localUri:this.state.image}).then(ref =>{
            this.setState({text:"",image: null});
            this.props.navigation.goBack();
        }).catch(error => {
            alert(error);
        });
    };
    pickImage = async() => {
        let result = await Image.ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3]
        });

        if(!result.cancelled){
            this.setState({image:result.uri});
        }
    };

  render()
  {
            
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
                    onChangeText={company_name => this.setState({company_name})}
                        value={this.state.company_name} 
                />
                <TextInput
                    style={styles.subinput}
                    placeholder={'Title'}
                    placeholderTextColor={Colors.blue}
                    onChangeText={title => this.setState({title})}
                        value={this.state.title} 
                />


                <ScrollView style={styles.scrollview}>
                    <TextInput
                        style={styles.textinput}
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4} 
                        style={{flex:1}}
                        placeholder={'Add Post here...'}
                        placeholderTextColor={Colors.gray}
                        placeholderFontSize={20}
                        onChangeText={text => this.setState({text})}
                        value={this.state.text} 
                    />
                </ScrollView>
            </View>
            <TouchableOpacity styles={styles.photo} onPress={this.pickImage()} >
                    <Ionicons name="md-camera" size={32} color="#DBD9D8"></Ionicons>

                </TouchableOpacity>
                <View style={{marginHorizontal:32,marginTop:32,height:150}}>
                    <Image source={{uri:this.state.image}} 
                    style={{width:100,height:100}} ></Image>
                </View>

            <TouchableOpacity style={styles.post_button} onPress={()=>{
                props.navigation.navigate(
                    'ExperiencesScreen',{
                    id: Math.floor(Math.random() * 1000) + 1  ,
                    name: username,
                    image: Images.profilepic,
                    branch: branch,
                    title: enteredSub,
                    subject:enteredText,
                    text:enteredText

                });
                
            }
            }>
                <Text style={styles.post}>POST</Text>
            </TouchableOpacity>
      </View>
  )}}

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
            
      },
      photo:
    {
        alignItems: "flex-end",
        marginHorizontal: 32
    }


    

     
  
  });
  //export default AddPost;

/*

import React from "react";
import{View ,Text, StyleSheet ,SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native';
import{Ionicons} from "@expo/vector-icons";
import Constants from "expo-constants";
import * as permissions from "expo-permissions";
import PostScreen_firebase from "./PostScreen_firebase";
import { CAMERA_ROLL } from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';
//import * as firebase from 'firebase';

const firebase = require("firebase");
require("firebase/firestore"); 
export default class PostScreen extends React.Component
{
    state = {
        text:"",
        image: null 
    };
    componentDidMount(){
        this.getPhotoPermission();
    }
    getPhotoPermission = async() =>{
        if(Constants.platform.android)
        {
            const {status} = await Permissions.askAsync(Permissions,CAMERA_ROLL);

            if(status != "granted")
            {
                alert("we need permission to access your camera roll")
            }
        }
    };

    handlePost = () => {
        PostScreen_firebase.shared.addpost({text:this.state.text.trim(),localUri:this.state.image}).then(ref =>{
            this.setState({text:"",image: null});
            this.props.navigation.goBack();
        }).catch(error => {
            alert(error);
        });
    };
    pickImage = async() => {
        let result = await Image.ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3]
        });

        if(!result.cancelled){
            this.setState({image:result.uri});
        }
    };

    render()
    {
       return (
            <SafeAreaView style={StyleSheet.container}>
                <View>
                    <TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow=-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.handlePost()}>
                        <Text style={{fontWeight:500}}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={StyleSheet.inputContainer}>
                    <Image source={require("../assets/Images/profilepic.png")} style={styles.avatar}></Image>
                    <TextInput 
                    autoFocus={true} 
                    multiline={true}
                    numberOfLines={4} 
                    style={{flex:1}, 
                    placeholder="Want to say something?"}/>
                    onChangeText={text => this.setState({text})}
                    value={this.state.text}
                </View>

                <TouchableOpacity styles={styles.photo} onPress={this.pickImage()} >
                    <Ionicons name="md-camera" size={32} color="#DBD9D8"></Ionicons>

                </TouchableOpacity>
                <View style={{marginHorizontal:32,marginTop:32,height:150}}>
                    <Image source={{uri:this.state.image}} 
                    style={{width:100,height:100}} ></Image>
                </View>

                </SafeAreaView>
        
        );
    };
};
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:
    {
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer:{
        margin: 32,
        flexDirection:"row"
    },
    avatar:{
        width:48,
        height: 48,
        borderRadius: 24,
        marginRight: 16

    },
    photo:
    {
        alignItems: "flex-end",
        marginHorizontal: 32
    }

}
);*/
