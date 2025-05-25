// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   // const multiply = (a,b)=>{
//   //   return a*b;

//   // }
//   // console.log(multiply(2,3));


//   // class Person {
//   //   constructor(name) {
//   //     this.name = name;
//   //   }
  
//   //   greet() {
//   //     return `Hi, I'm ${this.name}`;
//   //   }
//   // }
  
//   // const user = new Person("Mansoor");
//   // console.log(user.greet()); // Hi, I'm Mansoor
  

//   //PROMISES
//   // const fetchdata = new Promise((resolve,reject) => {
//   //   setTimeout(()=>{
//   //     resolve("Data Loaded Successfully");
//   //   },2000);
//   // })
//   // fetchdata.then((data)=>{
//   //   console.log(data);  })

//   //   async function getdata(){
//   //     const result = await fetchdata();
//   //     console.log(result);
//   //   }

//   async function getdata(){
//    try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const response = data.json();
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
    
//    }
//   }
//   return (
//     <View style={{top:20, alignItems:"center", justifyContent:"center"}}>
//       <Button  title="Submit" onPress={getdata} />
//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({})