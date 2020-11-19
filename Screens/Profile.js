import React from 'react';
import Images from '../Constants/Images';
import { StyleSheet, Text, TouchableOpacity ,View } from "react-native";
  
  function Profile2() {
    const navigateHandler = () =>{
        props.navigation.navigate('Profile3');
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile2!</Text>
        <TouchableOpacity onPress={navigateHandler}><Text>Go to Profile3</Text></TouchableOpacity>
      </View>
    );
  }
  
  function Profile3() {
    const navigateHandler = () =>{
        props.navigation.navigate('Profile4');
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile3!</Text>
        <TouchableOpacity onPress={navigateHandler}><Text>Go to Profile4</Text></TouchableOpacity>
      </View>
    );
  }

  function Profile4() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile4!</Text>
      </View>
    );
  }

  const Profile=props=>{
    const navigateHandler = () =>{
        props.navigation.navigate('Profile2');
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile1!!</Text>
          <TouchableOpacity onPress={navigateHandler}><Text>Go to Profile2</Text></TouchableOpacity>
        </View>
      );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });

  export default Profile;




  