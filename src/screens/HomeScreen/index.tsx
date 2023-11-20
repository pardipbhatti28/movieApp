import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import navigationStrings from '../../navigation/navigationStrings';
import axios from 'axios';
import Header from '../../components';
import {moviesData} from '../../components/movieData';

export const HomeScreen = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#13163C',
      }}>
      <Header />

      <View
        style={{
          justifyContent: 'center',
          height: '30%',
          width: '80%',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(navigationStrings.CREATE_LIST)
            }>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Create List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(navigationStrings.LIST_SCREEN)
            }>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              My List
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(navigationStrings.SELECT_MOVIES)
        }>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Select Movies
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
