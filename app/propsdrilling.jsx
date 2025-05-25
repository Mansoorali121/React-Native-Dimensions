// import { StyleSheet, Text, View } from 'react-native'
// import React, { Component, useState } from 'react'

// function  component11  ()  {

//     //// THIS IS CALLED PROPS DRILLING
//     const [user,setuser] = useState("Mansoor");

//   return (
//     <>
//     <Text>{`Hello ${user}`}</Text>
//     <Component2 user={user} />
//     </>
//   )
// }
// function Component2 ({user}){
//     return (
//         <>
//         <Text>Component 2</Text>
//         <Component3 user={user} />
//         </>
//     )
// }
// function Component3 ({user}){
//     return (
//         <>
//         <Text>Component 3</Text>
//         <Component4 user={user} />
//         </>
//     )
// }
// function Component4 ({user}){
//     return (
//         <>
//         <Text>Component 3</Text>
//         <Text>{user}</Text>
//         <Text>Hello 4 again call ho rha he </Text>
//         </>
//     )
// }

// export default component11;

// const styles = StyleSheet.create({})