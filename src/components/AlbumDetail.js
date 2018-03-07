import React from 'react'
import {Text,View,Image} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail =({album})=>{
    
    const {title,artist,thumbnail_image , image } = album
    const {imageStyle,thumbnailStyle,headerContentStyle,headerTextStyle,thumbnailContainerStyle} = styles

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{uri:thumbnail_image}} 
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
            <Image 
                style={imageStyle}
                source={{uri:image}}
            />
            </CardSection>
        </Card>
    )
}

const styles = {
    imageStyle:{
        height:300,
        flex:1,
        width:null,
    },
    thumbnailStyle:{
        borderColor:'blue',
        borderWidth:2,
        width:80,
        height:80
    },
    headerTextStyle:{
        fontSize:18,
    },
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
        height:60
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
}

export default AlbumDetail

