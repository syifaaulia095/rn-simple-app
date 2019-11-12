import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
    RefreshControl
} from 'react-native';
import ContactListCard from './ContactListCard';

class ContactList extends PureComponent{
    constructor(props){
      super(props);
    }
    _keyExtractor = (item, index) => index;
    _renderItem = ({item, index}) =>{
      return(
        <ContactListCard 
          index={index}
          dataComponent = {item}

        />
      )
    }
    render() {
        const {listData} = this.props;
      return (
        <View>
          <FlatList 
            data= {listData}
            renderItem = {this._renderItem}
            keyExtractor={this._keyExtractor}
            refreshControl={
            <RefreshControl
                refreshing={this.props.refreshing}
                onRefresh={this.props.onRefresh}
            />
        }
          />
        </View>
      )
    };
}

export default (ContactList);