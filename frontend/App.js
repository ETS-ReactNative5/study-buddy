//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Chat from './components/Chat';

import Messages from './components/Messages';
import Welcome from './screens/Welcome';
import Login from './screens/Login';

import colors from './assets/colors/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStackNavigator from './navigation/Navigate'
import AppContextProvider from './context/App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.darkBlue,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('./assets/icons/home.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Navigation" component={Navigation} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('./assets/icons/map.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require('./assets/icons/chat.png')}
              style={{
                tintColor: focused ? colors.darkBlue : colors.gray,
              }}
            />
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
};

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Список чатов" component={Chat} />
    <Stack.Screen
      name="Messages"
      component={Messages}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const App = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
        <Stack.Screen name="Messages" component={Messages} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default App;
