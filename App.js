import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Button, TextInput} from 'react-native';
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
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'darkblue'}}>
            RescueX
          </Text>
        </View>
        <View style={{flex: 3}}>
          <TextInput
            placeholder="Full Name as in ID proof"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              marginBottom: 50,
            }}></TextInput>
          <TextInput
            placeholder="No: of people"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              marginBottom: 50,
            }}></TextInput>
          <Button
            title="Send Location"
            color="darkblue"
            onPress={this.findCoordinates}
          />
          <Text
            style={{
              fontSize: 15,
              marginTop: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Latitude: {this.state.latitude}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Longitude: {this.state.longitude}
          </Text>
        </View>
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
  header: {
    flex: 1,
    marginTop: 10,
  },
});
