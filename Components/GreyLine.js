import React from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GreyLine=props=>{
return (
    <View style={{...styles.line, ...props.styles}}>
    </View>
    
);
}
const styles=StyleSheet.create({
    line:{
        borderBottomColor:'#9e9e9e',
        alignSelf:"stretch",
    }

});
export default GreyLine;