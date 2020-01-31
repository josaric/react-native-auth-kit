import React from 'react';
import {
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import * as Font from 'expo-font';
import Colors from "../constants/Colors";
import { Toolbar } from 'react-native-material-ui'
import { Drawer } from "react-native-material-drawer";
import {Ionicons} from "@expo/vector-icons";
import {white} from "react-native-material-ui/src/styles/colors";

const styles = {
  container: {
    width: '100%',
  },
  body: {
    backgroundColor: '#eee',
  },
};

export default class ComponentsScreen extends React.Component {

  static navigationOptions = {
    title: 'Components',
  };

  state = {
    isOpen: false,
  };

  render() {
    return(
        <Drawer
            open={this.state.isOpen}
            drawerContent={
              <ScrollView contentContainerStyle={{marginTop: 50}} style={{backgroundColor: Colors.white}}>
                <Text style={{color: Colors.main}}>Content</Text>
              </ScrollView>
            }
            onClose={() => this.setState({ isOpen: false })}
            animationTime={250}
        ><SafeAreaView/>
          <Toolbar
              style={{
                container: {
                  backgroundColor: Colors.main
                }
              }}
              onLeftElementPress={() => this.setState({isOpen: !this.state.isOpen})}
              leftElement="menu"
              centerElement="Material components"
              searchable={{
                autoFocus: true,
                placeholder: 'Search',
              }}
          />
        </Drawer>
    )
  }
}
