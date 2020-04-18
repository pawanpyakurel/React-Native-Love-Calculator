import React from 'react';

//style 
import { StyleSheet, View, Text} from 'react-native';
import { Appbar, Button} from 'react-native-paper';

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
      <View style={styles.footer}> 
        <Button style={styles.footerText} mode="contained"> Powered by: Pawan Pyakurel</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  footer:{
    backgroundColor :"#0352fc",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  footerText:{
    textAlign: "right",
    alignContent: "flex-end",
    backgroundColor : "#4f25a8",

  }
});
