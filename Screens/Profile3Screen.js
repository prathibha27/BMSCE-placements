import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity ,View ,Image,TextInput} from "react-native";
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile4 from './Profile4Screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Profile3=props=>{

    const [gender,setGender]=useState('');
    const onGenderChange = inputText =>{
        setGender(inputText);
        //console.log(gender);
    };
    
    const [dob,setDob]=useState('');
    const onDobChange = inputText =>{
        setDob(inputText);
        //console.log(dob);
    };
    
    const [tenth,setTenth]=useState('');
    const onTenthChange = inputText =>{
        setTenth(inputText);
        //console.log(tenth);
    };
    
    const [diplomacgpa,setDiplomacgpa]=useState('');
    const onDiplomaChange = inputText =>{
        setDiplomacgpa(inputText);
        //console.log(diplomacgpa);
    };

    const [becgpa,setBecgpa]=useState('');
    const onBecgpaChange = inputText =>{
        setBecgpa(inputText);
        //console.log(becgpa);
    };

    const [twelth,setTwelth]=useState('');
    const onTwelthChange = inputText =>{
        setTwelth(inputText);
        //console.log(becgpa);
    };
    
    const navigateHandler = () =>{
        
        const {firstname,lastname,usn,year}=props.route.params;
        console.log(firstname,"  ",lastname,"  ",usn,"  ",year);
        console.log(gender,"  ",tenth,"  ",diplomacgpa,"  ",becgpa);
        props.navigation.navigate('Profile4Screen',{
            firstname:firstname,
            lastname:lastname,
            usn:usn,
            year:year,
            gender:gender,
            tenth:tenth,
            twelth:twelth,
            becgpa:becgpa,
            dob:dob,
            diplomacgpa:diplomacgpa
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
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Gender" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onGenderChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Date of birth" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onDobChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="10th Percentage" 
            keyboardType = 'number-pad'
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onTenthChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="12th Percentage" 
            keyboardType = 'number-pad'
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onTwelthChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Diploma Percentage" 
            keyboardType = 'number-pad'
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onDiplomaChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="B.E(CGPA)" 
            keyboardType = 'number-pad'
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onBecgpaChange}
            />

            <View style={styles.arrow_container}>
                <TouchableWithoutFeedback onPress={()=>{props.navigation.navigate('Profile2Screen');}}>
                    <Ionicons name='md-arrow-back' size={30} color={Colors.gray} style={styles.arrow_left} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback 
                onPress={navigateHandler}>
                    <Ionicons name='md-arrow-forward' size={30} color={Colors.gray} style={styles.arrow_right} />
                </TouchableWithoutFeedback>
                
            </View>
        </View>
    </View>

);
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        marginTop:0,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#000000',
    },

    inner_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },

    name:{
        color:Colors.blue,
        fontSize:18,
    },

    usn:{
        color:Colors.gray,
    },

    textInput:{
        borderBottomColor:Colors.blue,
        borderBottomWidth:2,
        color:Colors.gray,
        padding:12,
        width:350,
        marginVertical:10
    },

    arrow_left:{
        marginRight:155
    },

    arrow_right:{
        marginLeft:155
    },

    arrow_container:{
        flexDirection:'row',
        marginTop:10
    }

});
export default Profile3;