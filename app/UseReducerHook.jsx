// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {
//     const [count,setcount] = useState(20);
//     const increment = () => {
//          setcount(prev => prev+1)
//     }
//   const decrement = () => {
//     setcount(prev=> prev-1)
//   }
//   return (
//     <View style={{flex:1, alignItems:"center", justifyContent:"center", gap:20}}>
//       <Button  title='Increment' onPress={increment}/>
//       <Button title='Decrement' onPress={decrement} />
//       <Text style={{top:20, fontSize:25}}>{count}</Text>

//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({})

/// COUNTER APP WITH USEREDUCER HOOK

import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";

const index = () => {
 
    const reducer = (state,action) => {
        if(action.type === "INCREMENT"){
            return state +1;
        }
        if(action.type === "DECREMENT"){
            return state -1;
        }

    }

    const [count,dispatch] = useReducer(reducer,0);
  return (
    <View style={{ flex: 1, alignItems: "center", top: 40, gap: 20 }}>
      <Text>Hello This is UseReducer Hook </Text>
      <Button title="Increment" onPress={() => dispatch({type:"INCREMENT"})} />
      <Button title="Decrement"  onPress={() => dispatch({type:"DECREMENT"})}/>
      <Text>{count}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
