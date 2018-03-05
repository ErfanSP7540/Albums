import React,{Component} from 'react'
import {View , Text} from 'react-native'
import axios from 'axios'

class AlbumList extends Component{
    state = { Albums:[]};

    componentWillMount(){
        console.log('componentWill Mount in AlbumsList.... ');     
        
         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then( response => {   this.setState({ Albums : response.data })  })
        .catch(   e=>{console.log('catch');console.log(e);})
    }
    renderAlbums(){
        return this.state.Albums.map(   item=>(<Text key={item.title} >{ item.title } </Text>) )
    }
    render(){
           console.log(this.state)
        return (

        <View>  
            {this.renderAlbums()}
        </View>
    )}
}
    

export default AlbumList;