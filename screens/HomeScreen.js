import React from 'react';
import {
  TouchableOpacity,
  Text,
  AsyncStorage,
  SafeAreaView,
} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import Colors from "../constants/Colors";
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
          {this.state.username && <Text style={{margin: 10, textAlign: "center"}}> Hello {this.state.username}</Text>}
          <TouchableOpacity
              style={{alignItems: "center", margin: 10, backgroundColor: Colors.main, padding: 10, borderRadius: 5}}
              onPress={() => this.props.navigation.navigate("Logout")}>
            <Text style={{color: Colors.white}}>Click here to sign out</Text>
          </TouchableOpacity>
        </SafeAreaView>
    );
  }
}
