import React from 'react'
import {Text , TouchableOpacity  } from 'react-native'

const Button = ()=>{

    const {ButtonStyle , TextStyle} = styles;

    return (
        <TouchableOpacity style={ButtonStyle} onPress={ ()=>{ return console.log(' clicked ') }}  >
            <Text style={TextStyle}> Click Me ... ! </Text>
        </TouchableOpacity>
    )
} 

const styles={
    TextStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
        },
    ButtonStyle:{
        flex:1,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#007aff',
        backgroundColor:'#fff',
        marginLeft:5,
        marginRight:5,
    },

}

export default Button