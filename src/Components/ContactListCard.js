import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './ContactListCard.style';

class ContactListCard extends PureComponent {
    render() {
        const {dataComponent} = this.props;
      return (
        <View>
          <TouchableOpacity
            onPress={this.props.onDetailList(dataComponent)}
          >
            <Text style={styles.boldText}>{`${dataComponent.firstName} ${dataComponent.lastName}`}</Text>
          </TouchableOpacity>
        </View>
      )
    };
}

export default (ContactListCard);