// import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import ScreenWrapper from "../components/ScreenWrapper";
// import { theme } from "../constants/theme";
// import { hp, wp } from "../helpers";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import EvilIcons from "@expo/vector-icons/EvilIcons";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Feather from "@expo/vector-icons/Feather";
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// const index = () => {
//   return (
//     <ScreenWrapper bg="#ffff">
//       <View style={styles.container}>
//         <View style={styles.userProfile}>
//           <Text style={styles.headingtext}>Profile </Text>
//           <Image
//             style={styles.image}
//             source={{
//               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s",
//             }}
//           />
//           <Text style={styles.username}> Albert Florest</Text>
//           <Text style={styles.role}>Buyer</Text>
//         </View>
//         {/* Profile Options */}
//         <View style={styles.optionContainer}>
//           <View style={styles.items}>
//             <View style={styles.iconstyle}>
//               <Feather name="edit-2" size={24} color="white" />
//             </View>
//             <Text style={styles.listitem}>Edit Profile</Text>

//             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
//           </View>
//           <View style={styles.items}>
//             <View style={styles.iconstyle}>
//               <EvilIcons name="bell" size={24} color="white" />
//             </View>
//             <Text style={styles.listitem}>Notification</Text>
//             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
//           </View>
//           <View style={styles.items}>
//             <View style={styles.iconstyle}>
//               <EvilIcons name="location" size={24} color="white" />
//             </View>
//             <Text style={styles.listitem}>Shipping Address</Text>
//             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
//           </View>
//           <View style={styles.items}>
//             <View style={styles.iconstyle}>
//               <AntDesign name="lock" size={24} color="white" />
//             </View>
//             <Text style={styles.listitem}>Changes Password</Text>
//             <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
//           </View>
//         </View>
//         {/* Button  */}
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>

//             <Text style={styles.buttontext}>
//             <MaterialCommunityIcons name="logout" size={24} color="white" />
//             Sign Out </Text>
//           </Pressable>
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default index;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   userProfile: {
//     alignItems: "center",
//     // marginBottom:20
//     gap: 10,
//   },
//   headingtext: {
//     fontSize: wp(5),
//     fontWeight: theme.fonts.semibold,
//   },
//   image: {
//     height: hp(20),
//     width: hp(20),
//   },
//   username: {
//     fontSize: wp(5.5),
//     fontWeight: theme.fonts.semibold,
//   },
//   role: {
//     fontSize: wp(4),
//     fontWeight: theme.fonts.medium,
//     color: theme.color.textLight,
//   },
//   items: { flexDirection: "row", justifyContent: "space-between" },
//   optionContainer: {
//     top: 40,
//     gap: 35,
//     marginHorizontal: 20,
//   },
//   listitem: { fontWeight: theme.fonts.bold, fontSize: wp(4) },
//   iconstyle: {
//     backgroundColor: "skyblue",
//     padding: 6,
//     borderRadius: 20,
//   },
//   buttonContainer:{
//     alignItems:"center",
//     marginTop:hp(12),
    
//   },
//   button:{
//     width:wp(80),
//     backgroundColor:"skyblue",
//     paddingVertical:20,
//     alignItems:"center",
//     borderRadius:30,
  
//   },
//   buttontext:{
//     fontSize:wp(5),
//     fontWeight:theme.fonts.bold,
//     color:"white"
//   }
// });


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, Feather, Entypo, MaterialIcons } from 'react-native-vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        {/* Profile Image with edit icon */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s"}} // <-- replace with your image path
            style={styles.profileImage}
          />
          <View style={styles.editIcon}>
            <Feather name="edit" size={16} color="#1E827F" />
          </View>
        </View>

        {/* User Info */}
        <Text style={styles.name}>Albert Florest</Text>
        <Text style={styles.role}>Buyer</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <Option icon={<FontAwesome name="user" size={20} color="#1E827F" />} label="Edit Profile" />
        <Option icon={<Feather name="bell" size={20} color="#1E827F" />} label="Notification" />
        <Option icon={<Entypo name="location-pin" size={20} color="#1E827F" />} label="Shipping Address" />
        <Option icon={<MaterialIcons name="lock-outline" size={20} color="#1E827F" />} label="Change Password" />
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Entypo name="log-out" size={20} color="white" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Option = ({ icon,label   }) => (
  <TouchableOpacity style={styles.optionRow}>
    <View style={styles.iconCircle}>{icon}</View>
    <Text style={styles.optionText}>{label}</Text>
    <Entypo name="chevron-right" size={20} color="gray" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  imageContainer: {
    // position: 'relative',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 5,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  role: {
    color: 'gray',
  },
  optionsContainer: {
    marginTop: 40,
    gap: 18,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#E0F1F0',
    padding: 10,
    borderRadius: 25,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  signOutButton: {
    marginTop: 50,
    backgroundColor: '#1E827F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
