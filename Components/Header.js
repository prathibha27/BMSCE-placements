import React,{ useState } from 'react';
import Colors from '../Constants/Colors';
import {TouchableWithoutFeedbackComponent,StyleSheet, Text, View ,Image, Modal,Button} from 'react-native';
import Images from '../Constants/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GreyLine from './GreyLine';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = props =>{
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [fuser,setFuser]=useState({});
  var user=firebase.auth().currentUser;
  console.log(user.uid);
  var db = firebase.firestore();
  const OnClick=()=>{
    var docRef = db.collection("UserDetails").doc(user.uid);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            setFuser(doc.data());
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    setIsModalOpen(true);
  }

  return (
    <View style={styles.container}>

        <Modal 
          style={styles.modalContent}
          visible={isModalOpen}
        >
          <View style={styles.outerModalView} opacity={1}>
          
            <View style={styles.modalscreen}>
            <View style={styles.innerContainer}> 
              <Image source={Images.profilepic} style={styles.logo}/>
              <Text style={styles.name}>Saakshi Navale</Text>
              <Text style={styles.usn}>1BM18CS088</Text>
            </View>

              <Button title="LOG OUT" style={styles.post_button} onPress={()=>{
                setIsModalOpen(false)}} />
            </View>
          </View>
          
        </Modal>

      <View style={styles.header}>
        <TouchableOpacity onPress={OnClick}>
          <Ionicons name='md-menu' size={40} color={Colors.blue} style={styles.item1} />
        </TouchableOpacity>
        
        <Image source={Images.bmscelogo} style={styles.bmscelogo}/>
      </View>
      <GreyLine styles={styles.greyline}/>
    </View>
    

  );

}
const styles=StyleSheet.create({

  modalContent:{
    width:300,
    marginLeft:0,
    backgroundColor:"#00ffff"
  },

  innerContainer:{
    
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center'
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
  outerModalView:{
    flex:1,
    backgroundColor:Colors.black,
  },
  modalscreen:{
      flex:2,
      flexDirection:'column',
      width:300,
      height:700,
      margin:0
  },
  greyline:{
    width:400,
    borderWidth:1,
  },

  container:{
    width:400,
    height: 95, 
    marginLeft:10   
  },
  header:{
    width:'100%',
    height:90,
    paddingTop:36,
    flexDirection:'row',
    backgroundColor:'#000000',
    alignItems:"center",
  },
  logo:{
    width:60,
    height:60,
    borderRadius:30,
    
},

  item1:{
    marginRight:130,
    paddingLeft:10
  },

  headerTitle:{
    color:'black',
    fontSize:18
  },

  bmscelogo:{
      width:40,
      height:40,
      marginLeft:180,
  },
  post_button:{
    marginBottom:400,
  }

});

export default Header;