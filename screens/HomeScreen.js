import React from 'react';
import {
  TouchableOpacity,
  Text,
  AsyncStorage,
  SafeAreaView,
} from 'react-native';
import Colors from "../constants/Colors";
import {Toolbar} from "react-native-material-ui";
export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  state = {
    username: null
  };

  componentDidMount() {
    this._loadUser();
  }

  async _loadUser() {
    let username = await AsyncStorage.getItem("username");
    this.setState({username});
  }

  render() {
    return (
        <SafeAreaView>
          <Toolbar
              style={{
                container: {
                  backgroundColor: Colors.main
                }
              }}
              centerElement={this.state.username ? "Hello " + this.state.username: false}
          />
          <TouchableOpacity
              style={{alignItems: "center", margin: 10, backgroundColor: Colors.main, padding: 10, borderRadius: 5}}
              onPress={() => this.props.navigation.navigate("Components")}>
            <Text style={{color: Colors.white}}>Click here research components</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{alignItems: "center", margin: 10, backgroundColor: Colors.red, padding: 10, borderRadius: 5}}
              onPress={() => this.props.navigation.navigate("Logout")}>
            <Text style={{color: Colors.white}}>Click here to sign out</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
  }
}
