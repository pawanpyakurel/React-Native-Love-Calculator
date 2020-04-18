import React,{Component} from 'react';

//styles
import { View, Text} from 'react-native';
import { styles } from "./home.styles";

// component
import { TextInput, Button } from 'react-native-paper';

//custom Component
import DisplayLove  from "../Result/result";

//netinfo
import NetInfo from "@react-native-community/netinfo";

//keyboard
import {Keyboard} from 'react-native'

class Home extends Component {
    state= {
        inputOne: "",
        inputTwo: "",
        result: "initial",
        conectionStatus: false
    }

    componentDidMount(){
        NetInfo.addEventListener(state => {
            if(state.isConnected){
                this.setState({
                    conectionStatus: true
                })
            }
        });
    }
    render(){
       const functionCombine = () =>{
        calculate();
        DisbleKeyboard();

       }

       const DisbleKeyboard = () =>{
            Keyboard.dismiss()
       }
        const calculate = () =>{
            this.setState({
                result: "Loading"
            })
            fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.inputOne}&sname=${this.state.inputTwo}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                    "x-rapidapi-key": "0f7749bd8emsh843dc4b7a9fa424p1e92c7jsn8fa2f6e50f6a"
                }
            })
            .then(res => res.json())
            .then(data =>{
                this.setState({
                    result: data
                })
                console.log(data);
            })   
        }
        return (
            <>
               <TextInput
                    label='Name One'
                    value={this.state.inputOne}
                    onChangeText={text => this.setState({inputOne: text })}
                />
                <TextInput
                    label='Name Two'
                    value={this.state.inputTwo}
                    onChangeText={text => this.setState({ inputTwo: text })}
                />
                <Button  style ={styles.Button}mode="contained" onPress={()=>functionCombine()}>
                    Calculate
                </Button>
                {
                    this.state.conectionStatus ?  
                    <View>
                        <DisplayLove  result ={this.state.result} />
                    </View>
                    :
                    <Text style = {styles.notConnectedToInternet}> Not Connected to Internet  </Text>

                }
            
            </>
        );
    }
  
}

export default Home ;
