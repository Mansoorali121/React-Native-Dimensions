// // // import { Button, StyleSheet, Text, View } from 'react-native'
// // // import React, { useState } from 'react'


// // // const index = () => {
// // //   const [count,setCount] = useState(0);
  
// // //   const increment = () => {
// // //     setCount(count+1);
    
// // //   }
// // //   const decrement = () => {
// // //     setCount(count-1);
    
// // //   }

// // //   return (
// // //     <View style={{flex:1, alignItems:"center", justifyContent:"center", gap:10}}>
// // //       <Button title='Increment '  onPress={increment}/>
      
// // //       <Button title="Decrement" onPress={decrement} />
// // //       <Text>{count}</Text>

// // //     </View>
// // //   )
// // // }

// // // export default index; 

// // // const styles = StyleSheet.create({})

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const index = () => {
// //   return (
// //     <View>
// //       {/* <Text>{name}</Text> */}
// //       <App name="Mansoor " />
// //     </View>
// //   )
// // }
// // const App = ({name}) => {
// //   return (
// //     <View>
// //       <Text>User Name is: {name}</Text>
      
// //     </View>
// //   )
// // }

// // export default index;

// // const styles = StyleSheet.create({})


// import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
// import React, { useState } from 'react'

// const index = () => {
//   const [name,setName]= useState("");
//   const showdata = () => {
//     console.log(name);
//     setName(name);
//   }
//   return (
//     <View style={{flex:1, alignItems:"center", justifyContent:"center", gap:20}}>
//       <TextInput placeholder='Enter Here Your Name: ' value={name} onChangeText={setName}/>
//       <Button title='Show Name'  onPress={showdata}/>
//       <Text>{name}</Text>
//     </View>
//   )
// }

// export default index;

// const styles = StyleSheet.create({})


import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'



const index = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);
        
      } catch (error) {
        console.error("Error Fetching Data", error);
        
        
      }
    }
    fetchdata();
  },[])

  const filterdata = data.filter((item ) => item.id == 1);
  return (
    <View>
    <FlatList data={filterdata} keyExtractor={(item) => item.id.toString()} 
      renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>
          {/* Flatlist ends here  */}
          </View>

      )}
      />
    </View>
  )
}

export default index;

const styles = StyleSheet.create({})