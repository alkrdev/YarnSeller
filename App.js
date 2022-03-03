import { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from "./src/components/Products"
import Checkout from "./src/components/Checkout"
import Profile from "./src/components/Profile"

const Stack = createNativeStackNavigator();

export default function App() {
  const [isCompany, setIsCompany] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="Products"
          options={{ title: 'Produkter' }}
        >
          {(props) => <Products {...props} isCompany={isCompany} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Checkout"
          options={{ title: 'Kurv' }}
        >
          {(props) => <Checkout {...props} isCompany={isCompany} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Profile"
          options={{ title: 'Profil' }}
        >
          {(props) => <Profile {...props} setIsCompany={setIsCompany} isCompany={isCompany} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
