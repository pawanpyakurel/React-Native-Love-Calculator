import React from "react";

//style
import { Text, View} from "react-native"
import { styles } from "./result.styles"

import { ActivityIndicator, Colors } from 'react-native-paper';

const DisplayLove=(prop ) =>{
    console.log(prop, prop.isConnected)
    return(
        <View style = {styles.LoveResultWrapper}>
            
            {
                prop.result ==="initial" && (
                    <Text style = {styles.LovePercentageEnterValue}> Enter Value  </Text>
                )
            }
            {
                prop.result === "Loading" && (
                    <ActivityIndicator animating={true} size ={40} style = {styles.Rodel}/>
                )
            }
            {
                prop.result.percentage && (
                    <View> 
                        <Text style = {styles.LovePercentage}> {prop.result.percentage}% </Text>
                        <Text style = {styles.LoveResult}> {prop.result.result} </Text>
                    </View>
                )

            }
            {
                !prop.isConnected &&(
                    <Text style = {styles.LovePercentageEnterValue}> Connect To the internet  </Text>
                )
            }

        </View>
    )
}

export default DisplayLove; 