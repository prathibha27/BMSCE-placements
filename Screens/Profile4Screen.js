import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity ,View ,Image,TextInput} from "react-native";
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Profile4=props=>{

    const [branch,setBranch]=useState('');
    const onBranchChange = inputText =>{
        setBranch(inputText);
        //console.log(branch);
    };
    
    const [activeBacklogs,setActiveBacklogs]=useState('');
    const onActiveBacklogsChange = inputText =>{
        setActiveBacklogs(inputText);
        //console.log(activeBacklogs);
    };
    
    const [noofbacklogs,setNoofbacklogs]=useState('');
    const onNoofbacklogsChange = inputText =>{
        setNoofbacklogs(inputText);
        //console.log(noofbacklogs);
    };
    
    const [emailid,setEmailid]=useState('');
    const onEmailidChange = inputText =>{
        setEmailid(inputText);
        //console.log(emailid);
    };

    const [contactno,setContactno]=useState('');
    const onContactnoChange = inputText =>{
        setContactno(inputText);
        //console.log(contactno);
    };

    const [address,setAddress]=useState('');
    const onAddressChange = inputText =>{
        setAddress(inputText);
        //console.log(address);
    };
    
    const navigateHandler = () =>{
        const {firstname,
            lastname,
            usn,
            year,
            gender,
            tenth,
            twelth,
            becgpa,
            dob,
            diplomacgpa}=props.route.params;
        console.log(firstname,
            lastname,
            usn,
            year,
            gender,
            tenth,
            twelth,
            becgpa,
            dob,
            diplomacgpa);
        props.navigation.navigate('Profile5Screen',{
            firstname,
            lastname,
            usn,
            year,
            gender,
            tenth,
            twelth,
            becgpa,
            dob,
            diplomacgpa,
            activeBacklogs,
            noofbacklogs,
            branch,
            emailid,
            contactno,
            address
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
            placeholder="B.E(Branch)" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onBranchChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Active Backlogs" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onActiveBacklogsChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Number of backlogs" 
            keyboardType = 'number-pad'
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onNoofbacklogsChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Email ID" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onEmailidChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Contact number" 
            keyboardType = 'number-pad'
            maxLength={10}
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onContactnoChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Resedential Address" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            onChangeText={onAddressChange}
            />
        </View>
        <View style={styles.arrow_container}>
            <TouchableWithoutFeedback onPress={()=>{}}>
                <Ionicons name='md-arrow-back' size={30} color={Colors.gray} style={styles.arrow_left} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={navigateHandler}>
                <Ionicons name='md-arrow-forward' size={30} color={Colors.gray} style={styles.arrow_right} />
            </TouchableWithoutFeedback> 
        </View>
    </View>

);
}
const styles=StyleSheet.create({

    arrow_left:{
        marginRight:155
    },

    arrow_right:{
        marginLeft:155
    },

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
    arrow_container:{
        flexDirection:'row',
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

});
export default Profile4;