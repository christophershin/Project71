import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {Header} from 'react-native-elements';
import db from '../config.js'
import firebase from 'firebase'

export default class TransactionScreen extends React.Component {
    constructor(){
      super();
    
      <View style={styles.inputView}>
      <TextInput 
        style={styles.inputBox}
        placeholder="Title"
        onChangeText={text =>this.setState({writeTitle:text})}
        value={this.state.writeTitle}/>
      <TouchableOpacity 
        style={styles.scanButton}
        onPress={()=>{
          this.getCameraPermissions("Title")
        }}>
        <Text style={styles.buttonText}>title</Text>
      </TouchableOpacity>
      </View>

    <TouchableOpacity
        style={this.styles.submitButton}
        onPress={this.submitStory}
        >
        <Text style={this.styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    }

    const styles = StyleSheet.create({

    inputView:{
       flexDirection: 'row',
       margin: 20
          },
    inputBox:{
            width: 200,
            height: 40,
            borderWidth: 1.5,
            borderRightWidth: 0,
            fontSize: 20
          },
     submitButton:{
            backgroundColor: '#FBC02D',
            width: 100,
            height:50
         },
     submitButtonText:{
            padding: 10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight:"bold",
            color: 'white'
        }
    })