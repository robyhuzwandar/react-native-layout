import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default class App extends React.Component {

  
  render() {
    const handlePress = () => {
      Alert.alert("You tapped the button!");
    }
    return <View style={styles.container}>
        {/* <Button
          containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white' }}
          title="Add"
          color="#841584"
          onPress={handlePress}
          accessibilityLabel="Learn more about this purple button"
        /> */}

        <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, padding:10}}>
            <Image style={{ width: 125, height: 130, alignItems:'flex-end' }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
        </View>
        
        <View style={{ height: 150, backgroundColor: "silver", marginBottom: 15, padding:10}}>
            <Image style={{ width: 125, height: 130, alignItems:'flex-end' }} source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
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
    paddingTop: 15
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
});
