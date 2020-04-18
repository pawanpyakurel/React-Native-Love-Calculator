import React from 'react';

//style 
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

//component
import Home from "./Components/home/home"



export default function App() {
 
  return (
    <View style={styles.container}>
      <Appbar.Header dark={true}>
        <Appbar.Content 
          title="Heart to Heart"
          style= {{alignItems: 'center'}}
        />
      </Appbar.Header>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
