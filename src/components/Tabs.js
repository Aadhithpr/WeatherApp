import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#E3E4D4",
        tabBarInactiveTintColor: "#BFDEA6",
        tabBarStyle: {
          backgroundColor: "#65635D",
        },
        headerStyle: {
          backgroundColor: "#65635D",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "#E3E4D4",
          textAlign: "center"
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "#E3E4D4" : "#BFDEA6"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} name={weather.city.name} country={weather.city.country}/>}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "#E3E4D4" : "#BFDEA6"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "#E3E4D4" : "#BFDEA6"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
