import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import navigationStrings from './navigationStrings';
import {ListScreen} from '../screens/Lists';
import {CreateList} from '../screens/CreateListModal';
import {ViewMovies} from '../screens/View';
import {SelectMovies} from '../screens/Movies';

const StackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#252525'},
          headerTintColor: 'white',
        }}
        name={navigationStrings.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#252525'},
          headerTintColor: 'white',
        }}
        name={navigationStrings.LIST_SCREEN}
        component={ListScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#252525'},
          headerTintColor: 'white',
        }}
        name={navigationStrings.CREATE_LIST}
        component={CreateList}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#252525'},
          headerTintColor: 'white',
        }}
        name={navigationStrings.VIEW_MOVIES}
        component={ViewMovies}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#252525'},
          headerTintColor: 'white',
        }}
        name={navigationStrings.SELECT_MOVIES}
        component={SelectMovies}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
