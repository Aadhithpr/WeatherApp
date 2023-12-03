import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";
const City = ( {weatherData}) => {
  const {
    container,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    riseWrapper,
    rowLayout,
  } = styles;

  const { name, country, population, sunrise, sunset} = weatherData
  return (
    <SafeAreaView style={container}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"#65635D"}
            bodyText={`population: ${ population }`}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={[riseWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"#65635D"}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"#65635D"}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E4D4",
    justifyContent: 'center',
    alignItems: 'center'
  },

  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#65635D",
  },

  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
    paddingBottom: 20
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "#65635D",
  },

  riseWrapper: {
    justifyContent: "space-around",
    marginTop: 20,
    gap: 20,
  },

  riseSetText: {
    fontSize: 20,
    color: "#65635D",
    fontWeight: "bold",
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
export default City;
