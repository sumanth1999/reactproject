import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal]= useState('');

    const goalInputHandler=(enteredText)=>
    {
      setEnteredGoal(enteredText);
    };
    const addGoalHandler=()=>
    {
      console.log(enteredGoal);

    };


  return (
    <View Style={Styles.Screen}>
      <View style=
      {{flexDirection : "row",justifyContent : "space-between",padding :40,alignContent: "center"}}>

      <TextInput 
      placeholder="course goal"
       style={Styles.input}
       onChangeText={goalInputHandler}
       value={enteredGoal}
       />
      <Button title= "ADD" onPress={addGoalHandler} />
       
      </View>
     
    </View>
  );

const Styles=StyleSheet.create({
  Screen :{
    padding :50
  },
  input :{

    borderColor:'black',
    borderWidth: 1 , a
    padding :10 ,
    width:"80%" 
  },
  input1 :{
    flexDirection : "row",
    justifyContent : "space-between",
    padding :40,
    alignContent: "center"
  },


  }



});
}

