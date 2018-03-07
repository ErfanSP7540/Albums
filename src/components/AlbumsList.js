import React,{Component} from 'react'
import {ScrollView , Text} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component{
    state = { Albums:[]};

    componentWillMount(){

         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then( response => {   this.setState({ Albums : response.data })  })
        .catch(   e=>{console.log('catch');console.log(e);})
    }
    renderAlbums(){
        return this.state.Albums.map(   item=>(<AlbumDetail key={item.title}  album={item} />) )
    }
    render(){
           console.log(this.state)
        return (

        <ScrollView>  
            {this.renderAlbums()}
        </ScrollView>
    )}
}
    

export default AlbumList;