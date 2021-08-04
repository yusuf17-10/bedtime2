import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ToastAndroid, KeyboardAvoidibgView } from 'react-native';
import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = () => {
        db.collection("stories").add({
            title = this.state.title,
            storyText: this.state.storyText,
            author: this.state.author
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('Your Story has been submitted', ToastAndroid.SHORT)

    }

    render() {
        return (
            <KeyboardAvoidibgView style={StyleSheet.container} behavior="padding" enabled>
                <Header

                    backgroundColor={'pink'}
                    centerComponent={{
                        text: "Bed Time Stories",
                        style: { color: "white", fontSize: 20 }
                    }}

                />

                <TextInput
                    placeholder='Story Tile'
                    onChangeText={(text) => {
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                />

                <TextInput
                    placeholder='Author'
                    onChangeText={(text) => {
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author}
                />

                <TextInput
                    placeholder='Write Your Story'
                    onChangeText={(text) => {
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}
                />

                <TouchableOpacity
                    style={styles.submitStory}
                    onPress={this.submitStory}
                >
                    <Text style={styles.buttontext}>Submit</Text>
                </TouchableOpacity>


            </KeyboardAvoidibgView>
        )
    }
}


const styles = StyleSheet.create({

    title:{
        height:40,
        borderWidth:2,
        margin:10
    },
    author:{
        height:40,
        borderWidth:2,
        margin:10
    },
    storyText:{
        height:250,
        borderWidth:2,
        margin:10
    },
    submiButton:{
        justifyContent:"center",
        alignSelf:'center',
        backgroundColor:"pink",
        width:80,
        height:40
    },
    buttontext:{
        textAlign:'center',
        color:'center',
        fontWeight:'bold'
    }

})