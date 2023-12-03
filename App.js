import React from "react";
import { ActivityIndicator, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
import GlobalStyles from "./src/components/GlobalStyles";

const App = () => {
  const [loading, error, weather] = useGetWeather();
  if (weather && weather.list && !loading) {
    return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}> 
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} accessibilityLabel="Loading"/>
      )}
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
