import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateText: 'Wed Aug 01 2018',
      titleText: "Bird's Nest",
      bodyText: 'This is not a bird nest This is not really a bird nest This is not really a bird nest This is not really a bird nest.'
    };
  }
  
  render() {
    const handlePress = () => {
      Alert.alert("You tapped the button!");
    }
    return <View style={styles.container}>
        <Text style={styles.dateText}> {this.state.dateText} </Text>
        <Text style={styles.titleText}> {this.state.titleText} </Text>

        <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, flexDirection: "row", padding: 10 }}>
          <Text style={{ flex: 7 }}>{this.state.bodyText}</Text>
          <Image style={{ width: 125, height: 130, alignItems: "flex-end", flex: 5 }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        </View>

        <Text style={styles.dateText}> {this.state.dateText} </Text>
        <Text style={styles.titleText}> {this.state.titleText} </Text>

        <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, flexDirection: "row", padding: 10 }}>
          <Text style={{ flex: 7 }}>{this.state.bodyText}</Text>
          <Image style={{ width: 125, height: 130, alignItems: "flex-end", flex: 5 }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        </View>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#1abc9c" title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 15,
    // justifyContent: 'center',
    alignItems: 'flex-start'
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  dateText:{
    alignSelf: 'flex-end',
    alignItems:'flex-end'
  }
});
