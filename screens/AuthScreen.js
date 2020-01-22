import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

export default class AuthScreen extends React.Component {

  componentDidMount() {
    this._authAsync();
  }

  _authAsync = async () => {
    const token = await AsyncStorage.getItem('token');
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
    );
  }
}
