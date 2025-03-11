
// Cosmic Flow Healing App - 2025 ULTRA PRO Edition
// A next-gen immersive healing experience blending AI-driven fog-dot motion, real-time biometric adaptation, and 4K cinematic visuals

import 'react-native-gesture-handler'; // Required for gesture handling
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import HomeScreen from "./src/screens/HomeScreen";
import HealingScreen from "./src/screens/HealingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Healing" component={HealingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
