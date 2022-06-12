import React from 'react';
import 'react-native-gesture-handler';

//  relacionado a navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// relacionado as telas
import SplashScreen from "./src/Screen/SplashScreen";
import LoginScreen from "./src/Screen/LoginScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import DrawerNavigationRoutes from "./src/Screen/DrawerNavigationRoutes";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Registrar-se",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return ( //mudei  de "const App = () =>" para "export default function App()" e removi do final o export default App(); vamos ver se da bom
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {} 
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false , statusBarHidden:true}} // esconde o status bar para a tela de splash
        />
        {} 
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {} 
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
