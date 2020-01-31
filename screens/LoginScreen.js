import React from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import {TextField} from 'react-native-material-textfield';
import Colors from "../constants/Colors";
import {Toolbar} from "react-native-material-ui";
import { showMessage } from "react-native-flash-message";

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: null,
    header: null
  };

  state = {
    username: '',
    password: ''
  };

  render() {
    return (
        <SafeAreaView>
          <Toolbar style={{
            container: {
              backgroundColor: Colors.main
            }
          }} centerElement={"Login"}/>
          <ScrollView style={{margin: 20}}>
            <KeyboardAvoidingView styles={{flex: 1}} behavior = 'padding'  enabled>
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
                      showMessage({
                        message: "Invalid credentials",
                        type: "danger",
                      });
                    }
                  }}>
                <Text style={{color: Colors.white}}>Sign in</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
    );
  }
}
