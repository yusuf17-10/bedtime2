import { QuerySnapshot$1 } from '@firebase/firestore/dist/node-cjs/database-c6191e99-950b52bc';
import React from 'react';
import { StyleSheet, View,Text,FlatList,ScrollView} from 'react-native';
import {searchBar,Header} from "react-native-elements"
import db from '../config'


export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            allStories:[],
            dataSource:[],
            search:''
        }
    }
    componentDidMount(){
        this.retriveStories()
    }

    updateSearch = search =>{
        this.setState({search});
    };

    retriveStories=()=>{
        try {
            var allStories=[]
            var stories = db.collection("stories")
            .get().then((querySnapshot)=>{
                querySnapshot.forEacch((doc)=>{
                    allStories.push(doc.data())
                    console.log('this are the stories',allStories)
                })
            }) 
        }
        catch(error){
            console.log(error)
        }
    }

    SearchFilterFunction(text){
        const newData = this.state.allStories.filter((item)=>{
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexof(textData) > -1;
        })
        this.setState({
            dataSource:newData,
            search:text,
        })
    }

    render(){
        return(
            <View style = {StyleSheet.container}>

            <Header
            backgroundColor={'pink'}
            centerComponent = {{
                text:'Bed Time Stories'
            }}
            
            />

            <View style = {{height:20,width:"100%"}}>
                <searchBar
                placeholder = "Type Here..."
                onchangeText = {text => this.SearchFilterFunction(text)}
                onClear={text => this.SearchFilterFunction('')}
                value={this.state.search}
                />

            </View>

            </View>
        )
    }

};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    item:{
        backgroundColor:'pink',
        paddinng:10,
        marginVertical:8,
        marginHorizontal:16
    },
    title:{
        fontSize:32
    },
    itemContainer:{
        height:80,
        widht:'100%',
        borderWidth:2,
        borderColor:'pink',
        justifyContent:'center',
        alignSelf:'center'
    }
})