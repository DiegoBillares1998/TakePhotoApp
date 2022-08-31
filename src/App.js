import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Main from './screens/Main';
import Camera from './screens/Camera';
import Picture from './screens/Picture';
import { Provider } from 'react-redux';
import Store from './redux/store';

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0080ff'
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold'
              }
            }}
          >
            <RootStack.Screen
              name="Splash"
              component={Splash}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Main"
              component={Main}
            />
            <RootStack.Screen
              name="Camera"
              component={Camera}
            />
            <RootStack.Screen
              name="Picture"
              component={Picture}
            />
          </RootStack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}


export default App;
