import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

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
        <Text style={styles.dateText} > {this.state.dateText} </Text>
        <Text style={styles.titleText} > {this.state.titleText} </Text>

        <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, flexDirection:'row' , padding:10}}>
            <Text style={{flex:7}}>
                {this.state.bodyText}
            </Text>
            <Image style={{ width: 125, height: 130, alignItems:'flex-end', flex:5 }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        </View>

        <Text style={styles.dateText} > {this.state.dateText} </Text>
        <Text style={styles.titleText} > {this.state.titleText} </Text>

       <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, flexDirection:'row' , padding:10}}>
            <Text style={{flex:7}}>
                {this.state.bodyText}
            </Text>
            <Image style={{ width: 125, height: 130, alignItems:'flex-end', flex:5 }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        </View>

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
