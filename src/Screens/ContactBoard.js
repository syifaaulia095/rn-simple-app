import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    ScrollView
} from 'react-native';
import styles from './ContactBoard.style';
import ContactList from '../Components/ContactList';


const dataMock = [
    {
      "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
      "firstName": "Bilbo",
      "lastName": "Baggins",
      "age": 111,
      "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    },
    {
      "id": "b3abd640-c92b-11e8-b02f-cbfa15db428b",
      "firstName": "Luke",
      "lastName": "Skywalker",
      "age": 20,
      "photo": "N/A"
    }
]
class ContactBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        }
    }
    _onRefresh = async() =>{
        // this.props.clearAllStatus();
        // this.setState({refreshing: true});
        // await this.props.getListStatus(data);
        // this.setState({refreshing: false});
    }
    render() {
      return (
        <ScrollView style={styles.mainContainer}>
            <ContactList 
                listData={dataMock}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
            />
        </ScrollView>
      )
    };
}

export default (ContactBoard)