// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {
//     const numbers = [1,2,3];
//     // numbers.push(40);
//     // // numbers.pop();
//     // // numbers.shift();
//     // numbers.unshift(10);
//     // console.log(numbers);
//     const doubled = numbers.map((num) => num*5)
//     const filtered = doubled.filter((num) => num > 4);
//     console.log(doubled);
//     console.log(filtered);


//     //// Object Destructuring
//     const user = {name:"Mansoor", age: "40"};
//     // console.log(user.name);
//     const {name,age} = user;
//     // console.log(name);

//     ///  Array Destructuring
//     const fruits = ["Apple","Banana","Mango"];
//     const [first,second] = fruits;
//     // console.log(first, second);



//     //// Array Spread Operator 
//     // const ar1= [1,2,3];
//     // const arr2 = [...ar1, 4,5,6];
//     // console.log(arr2);

//     // const usr = {name:"Mansoor"};
//     // const newusr = {...usr,namee:"ALi Bux"};
//     // console.log(newusr); 


//     const [userr,setuserr] = useState({name:"Mansoor",age:48});
//     setuserr((prev) => ({...userr,name:"Sajid"}));
//     console.log(userr);

//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({})