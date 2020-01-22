import React from 'react';
import {
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import {TextField} from 'react-native-material-textfield';
import Colors from "../constants/Colors";


export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: '',
    password: '',
    error: false,
  };

  render() {
    return (
        <View style={{margin: 20}}>
          {this.state.error && <Text style={{textAlign: "center", color: Colors.red}}>Invalid credentials</Text>}
          <TextField
              label='Username'
              onChangeText={ (username) => this.setState({ username }) }
          />
          <PasswordInputText
              label='Password'
              value={this.state.password}
              onChangeText={ (password) => this.setState({ password }) }
          />
          <TouchableOpacity
              style={{alignItems: "center", margin: 10, backgroundColor: Colors.main, padding: 10, borderRadius: 5}}
              onPress={async () => {
                if(this.state.username) {
                  await AsyncStorage.setItem("token", "loggedIn");
                  await AsyncStorage.setItem("username", this.state.username);
                  this.props.navigation.navigate("Home");
                } else {
                  this.setState({error: true});
                }
              }}>
            <Text style={{color: Colors.white}}>Sign in</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
