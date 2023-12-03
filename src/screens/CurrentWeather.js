import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from '../utilities/WeatherType'
const CurrentWeather = ({ weatherData, name, country}) => {
  const { wrapper, conatainer, tempStyles, feels, highlowWrapper, highlow, bodyWrapper, description, message } = styles
  const { main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView style={[wrapper, { backgroundColor: WeatherType[weatherCondition].backgroundColor}]}>
      <View style={conatainer}>
      <Text style={tempStyles}>{name}</Text>
        <Text style={tempStyles}>{country}</Text>
        <Feather name={WeatherType[weatherCondition].icon} size={100} color="#65635D" />
        <Text style={tempStyles}>{ `${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highlowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={WeatherType[ weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  conatainer: {
    backgroundColor: "#E3E4D4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tempStyles: {
    color: "#65635D",
    fontSize: 48,
  },

  feels: {
    fontSize: 30,
    color: "#65635D",
  },

  highlow: {
    color: "#65635D",
    fontSize: 20,
  },

  highlowWrapper: {
    flexDirection: "row",
  },

  bodyWrapper: {
    backgroundColor: "#E3E4D4",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },

  description: {
    fontSize: 40,
    color: "#65635D",
  },

  message: {
    fontSize: 20,
    color: "#65635D",
  },
});
export default CurrentWeather;
