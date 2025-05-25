// // import {
// //   Image,
// //   ImageBackground,
// //   Pressable,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   View,
// // } from "react-native";
// // import React, { useState } from "react";
// // import ScreenWrapper from "../components/ScreenWrapper";
// // import { theme } from "../constants/theme";
// // import { hp, wp } from "../helpers";

// // const index = () => {
// //   const [name, setName] = useState("");
// //   const [email, setemail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const Submitted = () => {
// //     setLoading(true);
// //     try {
// //       if (email && password) {
// //         alert("Registered Successfully");
// //         setLoading(false);
// //         setName("");
// //         setemail("");
// //         setPassword("");
// //       } else if (!email && !password) {
// //         alert("Please Enter Email and Password");
// //       } else if (password.length < 6) {
// //         alert("Passsword should be greater than 6 Character ");
// //       }
// //     } catch (error) {
// //       alert("Error ", error.message);
// //     }
// //   };

// //   return (
// //     <ScreenWrapper bg="white">
// //       <View style={styles.container}>
// //         <View style={styles.headingcontainer}>
// //           <Text style={styles.headingtext}>Login UI FORM WITH VALIDATION </Text>
// //         </View>
// //         {/* Logo Container */}
// //         <View style={styles.logocontainer}>
// //           <Image
// //             style={styles.image}
// //             source={{
// //               uri: "https://marketplace.canva.com/EAE8LvupUO0/1/0/1600w/canva-orange-minimalist-travel-app-business-logo-s44Xfx-Oh8s.jpg",
// //             }}
// //           />
// //         </View>
// //         {/* Form Container */}
// //         <View style={styles.formcontainer}>
// //           <TextInput
// //             placeholder="Enter Name"
// //             style={styles.input}
// //             value={name}
// //             onChangeText={setName}
// //           />
// //           <TextInput
// //             placeholder="Enter Email"
// //             style={styles.input}
// //             value={email}
// //             onChangeText={setemail}
// //           />
// //           <TextInput
// //             placeholder="Enter Password"
// //             style={styles.input}
// //             value={password}
// //             onChangeText={setPassword}
// //           />
// //         </View>
// //         {/* Submission Button  */}
// //         <View style={styles.buttoncontainer}>
// //           <Pressable style={styles.button} onPress={Submitted}>
// //             <Text style={styles.btntext}>Submit </Text>
// //           </Pressable>
// //         </View>
// //       </View>
// //     </ScreenWrapper>
// //   );
// // };

// // export default index;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     // marginBottom:20
// //   },
// //   headingcontainer: {
// //     alignItems: "center",
// //   },
// //   headingtext: {
// //     fontWeight: theme.fonts.bold,
// //     fontSize: hp(2.6),
// //   },
// //   logocontainer: { alignItems: "center" },

// //   image: {
// //     height: 150,
// //     width: 150,
// //   },
// //   formcontainer: {
// //     gap: hp(5),
// //     marginTop: hp(6),
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: theme.color.primary,
// //     borderRadius: theme.radius.md,
// //     paddingVertical: 20,
// //     paddingHorizontal: 20,
// //   },
// //   buttoncontainer: {
// //     marginTop: hp(2),
// //     alignItems: "center",
// //   },
// //   button: {
// //     borderColor: theme.color.primaryDark,
// //     borderWidth: 1,
// //     backgroundColor: theme.color.roseLight,
// //     paddingVertical: 20,
// //     paddingHorizontal: 20,
// //     width: wp(80),
// //     borderRadius: theme.radius.xl,
// //     marginTop: hp(4),
// //   },
// //   btntext: {
// //     color: "#fff",
// //     textAlign: "center",
// //     fontWeight: theme.fonts.semibold,
// //     fontSize: wp(4.2),
// //   },
// // });

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// // function downloadfile(callback){
// //   console.log("Download Start hogaya");
// //   setTimeout(() => {
// //     console.log("Download completed");
// //     callback();

// //   },3000)
// // }
// // function afterdownload (){
// //   console.log("File Open Krlo Bhai");
// // }
// // downloadfile(afterdownload);
// function opentext (open){
//   console.log("Clicked to open");
//   setTimeout(()=>{
//     console.log(("File is opened"));
//     open();

//   }, 3000)
// }
// function afteropen(){
//   console.log("File ko edit krlo");
// }
// opentext(afteropen);
// const index = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({})
