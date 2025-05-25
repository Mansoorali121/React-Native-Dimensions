// import { Button, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import { Pressable } from "react-native";

// const index = () => {
//   /// HOOKS
// //   const [color, setColor] = useState("salmon");
// //   const [name, setName] = useState("Ford");
// //   const [year, setYear] = useState("1964");

//   // const [checkname,setcheckname] = useState("");
//   const [car,setCar] = useState({
//     name:"Ford",
//     year:"1964",
//     color:"red"
//   })
//   //   return (
//   //     <View style={{flex:1, alignItems:"center", gap:20}}>
//   //         <Pressable onPress={()=> setColor("salmon")} style={{ top:20 , backgroundColor:"salmon", width:"80%", padding:10, paddingVertical:20, borderRadius:20}}>
//   //             <Text style={{textAlign:"center", color:"#fff", fontSize:14, fontWeight:"bold"}}>Salmon </Text>
//   //         </Pressable>
//   //         <Pressable onPress={()=>setColor("red")} style={{ top:20 , backgroundColor:"red", width:"80%", padding:10, paddingVertical:20, borderRadius:20}}>
//   //             <Text style={{textAlign:"center", color:"#fff", fontSize:14, fontWeight:"bold"}}>Red </Text>
//   //         </Pressable>
//   //         <Pressable onPress={()=>setColor("blue")} style={{ top:20 , backgroundColor:"blue", width:"80%", padding:10, paddingVertical:20, borderRadius:20}}>
//   //             <Text style={{textAlign:"center", color:"#fff", fontSize:14, fontWeight:"bold"}}>Blue </Text>
//   //         </Pressable>
//   //       <Pressable style={{top:100, backgroundColor:color, width:"80%", paddingVertical:20, borderRadius:20}}>
//   //       <Text  style={{ fontSize:20, fontWeight:"bold", color:"#fff", textAlign:"center"}}> {color}</Text>
//   //       </Pressable>
//   //     </View>
//   //   )
// //   return (
// //     <View style={{ flex: 1, alignItems: "center", gap: 20 }}>
// //       <Text style={{marginHorizontal:30, fontSize:20, top:30}}>
// //         My Brand{name} is and it is {year} old its code color is {color}
// //       </Text>
// //     </View>
// //   );

// return (
//     <View style={{flex:1, alignItems:"center"}}>
//         <Text style={{marginHorizontal:35, fontSize:20,top:20 }}> My car Brand is {car.name} My car year is {car.year} My car Color is {car.color} </Text>
//     </View>
// )
// };

// export default index;

// const styles = StyleSheet.create({});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const index = () => {
  const [car, setCar] = useState({
    brand: "Forgo",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updater = () => {

    setCar(previousstate =>{
      return{...previousstate, color:"blue"}
    });

  };
 
  return (
    <View style={{ flex: 1, alignItems: "center", top: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        My Car Brand is {car.brand}
      </Text>
      <Pressable
        onPress={updater}
        style={{
          backgroundColor: "blue",
          width: "80%",
          padding: 20,
          paddingVertical: 20,
          borderRadius: 20,
          top: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Update
        </Text>
      </Pressable>
      <Text style={{ fontSize: 15, top: 40 }}>
        It is {car.color} {car.model} from {car.year}{" "}
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
