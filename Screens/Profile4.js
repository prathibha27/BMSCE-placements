import React from 'react';
import { StyleSheet, Text, TouchableOpacity ,View ,Image,TextInput} from "react-native";
import  Header  from '../Components/Header';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile4=props=>{

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
            //onChangeText={onPasswordChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Active Backlogs" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />
            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Number of backlogs" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Email ID" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Contact number" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />

            <TextInput 
            style={styles.textInput} 
            textAlign={'left'} 
            placeholder="Resedential Address" 
            placeholderTextColor={Colors.blue}
            autoCorrect={false} 
            //onChangeText={onPasswordChange}
            />
        </View>
        <View style={styles.arrow_container}>
            <Ionicons name='md-arrow-back' size={30} color={Colors.gray} style={styles.arrow_left} />
            <Ionicons name='md-arrow-forward' size={30} color={Colors.gray} style={styles.arrow_right} />
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