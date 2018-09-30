import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Weather from "./Weather"

const API_KEY = "a48caac5f8b7e5672123ac264f0501d3"

export default class App extends React.Component {
  
  // 위치 정보 -> 날씨 정보 -> isLoaded = true
  // https://openweathermap.org/weather-conditions
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
          position => {
              this._getWeather(
                position.coords.latitude,
                position.coords.longitude)
          },
          error => {
            this.setState({
                error: error
            });
          }
      );
  }
  
  _getWeather = (lat, long) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(json => {
          this.setState({
            temperature: json.main.temp,
            name:json.weather[0].main,
            isLoaded: true
          })
        });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
        <Weather 
            temp={Math.floor(temperature)}
            weatherName={name}/>
        ) : ( 
        <View style = {styles.loading}>
          <Text style = {styles.loadingText}>Getting the weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null }
        </View>
        )}
      </View>  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 80
  }
});
