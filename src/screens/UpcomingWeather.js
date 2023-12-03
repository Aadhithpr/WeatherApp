import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import ListItem from "../components/ListItem";


const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container } = styles
  return (
    <SafeAreaView style={container}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E4D4",
  },
});
export default UpcomingWeather;
