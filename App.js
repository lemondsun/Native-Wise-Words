import 'react-native-gesture-handler';
import * as  React from "react";
import { Button, FlatList, StyleSheet, Text, View, SectionList, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from "react-navigation";




const image = { uri: "https://media.giphy.com/media/UoeNRHjpKOYmH6rf9Y/giphy.gif" }

function HomeScreen() {
  
  return (
    
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.searchArea}>
      <Text>
            ASK HERE
      </Text>
      </View>
      </ImageBackground>

    
  )
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  searchArea: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(128, 128, 128, .7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
