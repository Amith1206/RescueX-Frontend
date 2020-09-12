import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Send Location" onPress={this.findCoordinates} />
        <Text style={{fontSize: 15, marginTop: 30, fontWeight: 'bold'}}>
          Latitude: {this.state.latitude}
        </Text>
        <Text style={{fontSize: 15, marginTop: 20, fontWeight: 'bold'}}>
          Longitude: {this.state.longitude}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
