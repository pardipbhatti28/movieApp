import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import navigationStrings from '../navigation/navigationStrings';
import {useNavigation} from '@react-navigation/native';

const Header = (props: any) => {
  return (
    <View
      style={{
        backgroundColor: '#0E0329',
        height: 50,
        borderColor: 'white',
        width: '100%',
        padding: 10,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
