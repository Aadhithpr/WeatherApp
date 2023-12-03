import React from "react";
import { View, Text, StyleSheet} from  'react-native'
import { Feather } from '@expo/vector-icons'
import { WeatherType } from "../utilities/WeatherType";
import moment from "moment";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { temp, item, date, dateTextWrapper} = styles
    return (
      <View style={item}>
        <Feather name={WeatherType[condition].icon} size={50} color={"#555352"} />
        <View style={dateTextWrapper}> 
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss: a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}°/ ${Math.round(max)}°`}</Text>
      </View>
    );
  };



  const styles = StyleSheet.create({
    temp: {
        color: "#555352",
        fontSize: 20,
      },
    
      date: {
        color: "#555352",
        fontSize: 15,
      },

      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "#B0DDE4",
      },

      dateTextWrapper: {
        flexDirection: 'column'
      }
  })
  export default ListItem