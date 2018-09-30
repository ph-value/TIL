import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient }from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';
/*
export default class Weather extends Component{
    render(){
        return (
            <LinearGradient
            colors={['#00C6FB', '#005BEA']}
            style = {styles.container}
            >
            <StatusBar hidden="true"/>
                <View style={styles.upper}>
                    <Ionicons color="white" size={120} name="ios-rainy"></Ionicons>
                    <Text style={styles.temp}>35도</Text>
                </View>

                <View style={styles.lower}>
                    <Text style={styles.title}>Title Weather</Text>
                    <Text style={styles.subtitle}>More Info look outside</Text>
                </View>

            </LinearGradient>
        )
    }
}
*/

// https://expo.github.io/vector-icons/

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "get clothes, Go Outside and Start RUN!!!",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Keep in the House",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, boring",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B8B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like Rain, but It is NOT",
        icon: 'weather-rainy'
    }
}

function Weather({ temp, weatherName }){
    console.log(weatherName)
    return (
        <LinearGradient
        colors={weatherCases[weatherName].colors}
        style = {styles.container}
        >
        <StatusBar hidden="true"/>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={120} name={weatherCases[weatherName].icon}></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>

        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    upper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})